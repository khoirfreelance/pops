<template>
  <div class="pregnancy-wrapper">
    <!-- Header -->
    <HeaderAdmin :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

    <div class="d-flex flex-column flex-md-row">
      <!-- Sidebar -->
      <NavbarAdmin :is-collapsed="isCollapsed" />

      <!-- Main Content -->
      <div
        class="flex-grow-1 d-flex flex-column"
        :style="{
          backgroundImage: background ? `url(${background})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }"
      >
        <!-- Banner -->
        <div
          class="configuration-banner text-white p-5 d-flex flex-column flex-md-row justify-content-between align-items-center"
        >
          <div>
            <h2 class="fw-bold mb-2">Data Ibu Hamil</h2>
            <p class="mb-0">List daftar bumil yang terdaftar di dalam posyandu</p>
          </div>
          <nav aria-label="breadcrumb" class="mt-3 mt-md-0">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin" class="text-decoration-none text-white-50">
                  Dashboard
                </router-link>
              </li>
              <li class="breadcrumb-item active text-white" aria-current="page">Ibu Hamil</li>
            </ol>
          </nav>
        </div>

        <!-- Filter -->
        <div class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container-fluid">
          <form class="row g-3 align-items-end" @submit.prevent="applyFilter">
            <!-- NIK (selalu tampil, realtime filter) -->
            <div class="col-md-12">
              <label for="nik" class="form-label">NIK</label>
              <input
                type="text"
                v-model="filter.nik"
                id="nik"
                class="form-control"
                placeholder="Cari berdasarkan NIK"
              />
            </div>

            <!-- Expandable section -->
            <div v-if="isFilterOpen" class="row g-3 align-items-end mt-2">
              <!-- Nama -->
              <div class="col-md-2">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" v-model="advancedFilter.nama" id="nama" class="form-control" />
              </div>

              <!-- L/P -->
              <div class="col-md-2">
                <label for="gender" class="form-label">L/P</label>
                <select v-model="advancedFilter.gender" id="gender" class="form-select">
                  <option value="">--</option>
                  <option value="L">L</option>
                  <option value="P">P</option>
                </select>
              </div>

              <!-- RT -->
              <div class="col-md-2">
                <label for="rt" class="form-label">RT</label>
                <input type="number" v-model="advancedFilter.rt" id="rt" class="form-control" />
              </div>

              <!-- RW -->
              <div class="col-md-2">
                <label for="rw" class="form-label">RW</label>
                <input type="number" v-model="advancedFilter.rw" id="rw" class="form-control" />
              </div>

              <!-- Kunjungan -->
              <div class="col-md-4">
                <label for="kunjungan" class="form-label">Kunjungan</label>
                <input
                  type="date"
                  v-model="advancedFilter.kunjungan"
                  id="kunjungan"
                  class="form-control"
                />
              </div>

              <!-- Tombol -->
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary float-start" @click="applyFilter">
                  <i class="bi bi-search"></i> Cari
                </button>
                <button type="button" class="btn btn-secondary float-end" @click="resetFilter">
                  <i class="bi bi-arrow-clockwise"></i> Reset
                </button>
              </div>
            </div>
          </form>

          <!-- Expand/Collapse Button -->
          <div class="text-end mt-2">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="toggleExpand">
              <i :class="isFilterOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
              {{ isFilterOpen ? 'Tutup Filter Lain' : 'Filter Lain' }}
            </button>
          </div>
        </div>

        <!-- Button Group -->
        <div class="container-fluid mt-4 d-flex flex-wrap gap-2 justify-content-end">
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTambah">
            <i class="bi bi-plus-square"></i> Tambah Data
          </button>
          <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalImport">
            <i class="bi bi-filetype-csv"></i> Import Pendampingan TPK (bumil)
          </button>
        </div>

        <!-- Alert -->
        <div class="container-fluid mt-4" v-if="showAlert">
          <div class="alert alert-success shadow-sm">✅ Data berhasil disimpan!</div>
        </div>

        <!-- Table -->
        <div class="container-fluid">
          <div class="card modern-card mt-4">
            <div class="card-body">
              <div class="table-responsive">
                <EasyDataTable
                  :headers="headers"
                  :items="filteredBumil"
                  buttons-pagination
                  :rows-per-page="5"
                  table-class="table-modern"
                  theme-color="#0d6efd"
                />
              </div>
            </div>
          </div>
        </div>

        <CopyRight class="mt-auto" />
      </div>
    </div>
  </div>

  <!-- Modal Tambah -->
  <div class="modal fade" id="modalTambah" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title fw-bold text-primary">Tambah Data Ibu Hamil</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          <form class="row g-4" @submit.prevent="saveData">
            <!-- NIK -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">NIK</label>
              <input
                type="text"
                class="form-control shadow-sm"
                v-model="form.nik"
                maxlength="16"
                @input="form.nik = form.nik.replace(/\D/g, '')"
                required
              />
            </div>

            <!-- Nama -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Nama</label>
              <input type="text" class="form-control shadow-sm" v-model="form.nama" required />
            </div>

            <!-- Gender -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Jenis Kelamin</label>
              <select class="form-select shadow-sm" v-model="form.gender" required>
                <option disabled value="">-- Pilih --</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>

            <!-- Tanggal Lahir -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Tanggal Lahir</label>
              <input
                type="date"
                class="form-control shadow-sm"
                v-model="form.tgl_lahir"
                @change="hitungUsia"
                required
              />
            </div>

            <!-- Usia -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Usia (bulan)</label>
              <input
                type="text"
                class="form-control bg-light shadow-sm"
                v-model="form.usia"
                readonly
              />
            </div>

            <!-- Anemia -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Anemia</label>
              <select class="form-select shadow-sm" v-model="form.anemia">
                <option value="-">Tidak</option>
                <option value="Ya">Ya</option>
              </select>
            </div>

            <!-- Kehamilan -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Kehamilan Beresiko</label>
              <select class="form-select shadow-sm" v-model="form.kehamilan">
                <option value="-">Tidak</option>
                <option value="Ya">Ya</option>
              </select>
            </div>

            <!-- KEK -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">KEK</label>
              <select class="form-select shadow-sm" v-model="form.kek">
                <option value="-">Tidak</option>
                <option value="Ya">Ya</option>
              </select>
            </div>

            <!-- Alamat -->
            <div class="col-md-12">
              <label class="form-label small fw-semibold text-secondary">Alamat</label>
              <textarea class="form-control shadow-sm" v-model="form.alamat" rows="2"></textarea>
            </div>

            <!-- RT -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">RT</label>
              <input type="number" class="form-control shadow-sm" v-model="form.rt" />
            </div>

            <!-- RW -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">RW</label>
              <input type="number" class="form-control shadow-sm" v-model="form.rw" />
            </div>

            <!-- Kunjungan -->
            <div class="col-md-12">
              <label class="form-label small fw-semibold text-secondary">Tanggal Kunjungan</label>
              <input type="date" class="form-control shadow-sm" v-model="form.kunjungan" />
            </div>
          </form>
        </div>

        <div class="modal-footer border-0 d-flex justify-content-between">
          <button class="btn btn-light border rounded-pill px-4" data-bs-dismiss="modal">
            <i class="bi bi-x-circle me-2"></i> Batal
          </button>
          <button class="btn btn-success rounded-pill px-4" @click="saveData">
            <i class="bi bi-save me-2"></i> Simpan
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Import -->
  <div class="modal fade" id="modalImport" ref="modalImport" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title">Import File Ibu Hamil</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="alert alert-success p-3">
            <ul>
              <li>Import data untuk kunjungan kehamilan oleh pendampingan TPK</li>
              <li>Pastikan data yang diimport, berformat xlxs</li>
              <li>Pastikan data sudah lengkap sebelum di import</li>
            </ul>
          </div>
          <input type="file" class="form-control" ref="csvFile" accept=".csv" />
        </div>
        <div class="modal-footer border-0 d-flex justify-content-between">
          <button class="btn btn-light border rounded-pill px-4" data-bs-dismiss="modal">
            <i class="bi bi-x-circle me-2"></i> Batal
          </button>
          <button class="btn btn-success rounded-pill px-4" @click="handleImport">
            <i class="bi bi-upload me-2"></i> Unggah
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import { Modal } from 'bootstrap'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pregnancy',
  components: { CopyRight, NavbarAdmin, HeaderAdmin, EasyDataTable },
  data() {
    return {
      isCollapsed: false,
      isFilterOpen: false,
      importTitle: 'Import File',
      showAlert: false,
      form: {
        nik: '',
        nama: '',
        gender: '',
        anemia: '',
        kehamilan: '',
        kek: '',
        alamat: '',
        rt: '',
        rw: '',
        usia: '',
        kunjungan: '',
      },
      bumil: [
        {
          nik: '3276012309870001',
          nama: 'Ahmad Fauzi',
          gender: 'L',
          anemia: '-',
          kehamilan: '-',
          kek: '-',
          alamat: 'Jl. Damai 3 No. 36',
          rt: '05',
          rw: '02',
          usia: '28',
          kunjungan: '2025-08-10',
        },
        {
          nik: '1266792309870001',
          nama: 'Dina K',
          gender: 'P',
          anemia: '-',
          kehamilan: '-',
          kek: '-',
          alamat: 'Jl. Damai 3 No. 42',
          rt: '05',
          rw: '02',
          usia: '21',
          kunjungan: '2025-08-10',
        },
      ],
      headers: [
        { text: 'NIK', value: 'nik' },
        { text: 'Nama', value: 'nama' },
        { text: 'L/P', value: 'gender' },
        { text: 'Anemia', value: 'anemia' },
        { text: 'Kehamilan Beresiko', value: 'kehamilan' },
        { text: 'KEK', value: 'kek' },
        { text: 'Usia (Bulan)', value: 'usia' },
        { text: 'Alamat', value: 'alamat' },
        { text: 'RT', value: 'rt' },
        { text: 'RW', value: 'rw' },
        { text: 'Kunjungan Terakhir', value: 'kunjungan' },
      ],
      // filter
      filter: {
        nik: '',
      },
      advancedFilter: {
        nama: '',
        gender: '',
        rt: '',
        rw: '',
        kunjungan: '',
      },
      appliedFilter: {}, // hasil filter simpan di sini
    }
  },
  computed: {
    background() {
      try {
        const config = JSON.parse(localStorage.getItem('siteConfig'))
        return config?.background || null
      } catch {
        return null
      }
    },
    filteredBumil() {
      return this.bumil.filter((item) => {
        return (
          // NIK realtime
          (!this.filter.nik || item.nik.includes(this.filter.nik)) &&
          // Advanced filter hanya aktif setelah "Cari"
          (!this.appliedFilter.nama ||
            item.nama.toLowerCase().includes(this.appliedFilter.nama.toLowerCase())) &&
          (!this.appliedFilter.gender || item.gender === this.appliedFilter.gender) &&
          (!this.appliedFilter.rt || item.rt === this.appliedFilter.rt) &&
          (!this.appliedFilter.rw || item.rw === this.appliedFilter.rw) &&
          (!this.appliedFilter.kunjungan || item.kunjungan === this.appliedFilter.kunjungan)
        )
      })
    },
  },
  methods: {
    toggleExpand() {
      this.isFilterOpen = !this.isFilterOpen
    },
    applyFilter() {
      // copy isi advancedFilter ke appliedFilter saat tombol Cari ditekan
      this.appliedFilter = { ...this.advancedFilter }
    },
    resetFilter() {
      this.filter.nik = ''
      this.advancedFilter = {
        nama: '',
        gender: '',
        rt: '',
        rw: '',
        kunjungan: '',
      }
      this.appliedFilter = {}
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    hitungUsia() {
      if (!this.form.tgl_lahir) return
      const lahir = new Date(this.form.tgl_lahir)
      const now = new Date()
      const months =
        (now.getFullYear() - lahir.getFullYear()) * 12 + (now.getMonth() - lahir.getMonth())
      this.form.usia = months
    },
    saveData() {
      this.bumil.push({ ...this.form })
      this.showAlert = true
      setTimeout(() => (this.showAlert = false), 3000)
      this.form = {
        nik: '',
        nama: '',
        gender: '',
        alamat: '',
        tgl_lahir: '',
        usia: 0,
        anemia: '',
        kehamilan: '',
        kek: '',
        rt: '',
        rw: '',
        kunjungan: '',
      }
      this.closeModal('modalTambah')
    },
    openImport(title) {
      this.importTitle = title
      const el = this.$refs.modalImport
      Modal.getOrCreateInstance(el).show()
    },
    closeModal(id) {
      const el = document.getElementById(id)
      if (el) Modal.getOrCreateInstance(el).hide()
    },
    handleImport() {
      const file = this.$refs.csvFile?.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (e) => {
        const [headerLine, ...lines] = e.target.result
          .split('\n')
          .map((r) => r.trim())
          .filter(Boolean)
        const headers = headerLine.split(',').map((h) => h.trim())
        lines.forEach((line) => {
          const values = line.split(',').map((v) => v.trim())
          const obj = {}
          headers.forEach((h, i) => (obj[h] = values[i] || ''))
          this.bumil.push(obj)
        })
        this.closeModal('modalImport')
        this.showAlert = true
        setTimeout(() => (this.showAlert = false), 3000)
      }
      reader.readAsText(file)
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen
    },
  },
}
</script>

<style scoped>
.pregnancy-wrapper {
  padding-top: 60px; /* tinggi navbar bootstrap default */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f9f9fb;
  min-height: 100vh;
}
/* Gradient Banner */
.pregnancy-banner {
  background: linear-gradient(90deg, var(--bs-primary), var(--bs-secondary));
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.filter-wrapper {
  position: relative;
  z-index: 1050;
  margin-top: -30px !important;
  width: 97%;
}
/* Hilangkan garis pemisah antara sidebar dan content */
.flex-grow-1 {
  border-left: none !important;
  background-color: #f9f9fb;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.7);
}
/* Smooth Apple-like Modal */
.modern-modal {
  border-radius: 1.5rem;
  border: 1px solid #eaeaea;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  background: #fff;
  transition: all 0.3s ease-in-out;
}

/* Form lebih clean */
.form-control-modern,
.form-select.form-control-modern {
  border-radius: 0.75rem;
  border: 1px solid #ddd;
  padding: 0.6rem 1rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.form-control-modern:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
}

/* Animasi modal lebih halus */
.modal.fade .modal-dialog {
  transform: translateY(20px);
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.modal.fade.show .modal-dialog {
  transform: translateY(0);
  opacity: 1;
}
.modern-card {
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: none;
}
</style>
