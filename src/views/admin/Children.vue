<template>
  <div class="nutrition-wrapper">
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
          class="nutrition-banner text-white p-5 d-flex flex-column flex-md-row justify-content-between align-items-center"
        >
          <div>
            <h2 class="fw-bold mb-2">Data Anak</h2>
            <p class="mb-0">
              List daftar anak yang terdaftar di dalam posyandu dengan usia maksimal 5 tahun (60
              bulan)
            </p>
          </div>
          <nav aria-label="breadcrumb" class="mt-3 mt-md-0">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <router-link to="/admin" class="text-decoration-none text-white-50">
                  Dashboard
                </router-link>
              </li>
              <li class="breadcrumb-item active text-white" aria-current="page">Data Anak</li>
            </ol>
          </nav>
        </div>

        <!-- Filter -->
        <div class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container-fluid">
          <form class="row g-3 align-items-end" @submit.prevent="applyFilter">
            <!-- NIK (selalu tampil, realtime filter) -->
            <div class="col-md-12">
              <label for="nik" class="form-label">NIK Orang Tua</label>
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
              <!-- Usia -->
              <div class="col-md-3">
                <label for="usia" class="form-label">Usia</label>
                <input
                  type="number"
                  class="form-control"
                  id="usia"
                  v-model="advancedFilter.usia"
                  placeholder="Tahun"
                />
              </div>

              <!-- Status BB -->
              <div class="col-md-3">
                <label for="status_bb2" class="form-label">Status BB</label>
                <select class="form-select" id="status_bb2" v-model="advancedFilter.status_bb">
                  <option value="">-- semua --</option>
                  <option value="Sangat Kurang">Sangat Kurang</option>
                  <option value="Kurang">Kurang</option>
                  <option value="Normal">Normal</option>
                  <option value="Resiko Lebih">Resiko Lebih</option>
                </select>
              </div>

              <!-- Status TB -->
              <div class="col-md-3">
                <label for="status_tb" class="form-label">Status TB</label>
                <select class="form-select" id="status_tb" v-model="advancedFilter.status_tb">
                  <option value="">-- semua --</option>
                  <option value="Sangat Pendek">Sangat Pendek</option>
                  <option value="Pendek">Pendek</option>
                  <option value="Normal">Normal</option>
                  <option value="Tinggi">Tinggi</option>
                </select>
              </div>

              <!-- Status Gizi -->
              <div class="col-md-3">
                <label for="status_gizi" class="form-label">Status Gizi</label>
                <select class="form-select" id="status_gizi" v-model="advancedFilter.status_bb_tb">
                  <option value="">-- semua --</option>
                  <option value="Gizi Buruk">Gizi Buruk</option>
                  <option value="Gizi Kurang">Gizi Kurang</option>
                  <option value="Gizi Baik">Gizi Baik</option>
                  <option value="Berisiko Gizi Lebih">Berisiko Gizi Lebih</option>
                  <option value="Gizi Lebih">Gizi Lebih</option>
                  <option value="Obesitas">Obesitas</option>
                </select>
              </div>

              <!-- Tanggal Kunjungan -->
              <div class="col-md-3">
                <label for="tgl_kunjungan" class="form-label">Tanggal Kunjungan</label>
                <input
                  type="date"
                  class="form-control"
                  id="tgl_kunjungan"
                  v-model="advancedFilter.kunjungan"
                />
              </div>

              <!-- Tombol -->
              <div class="col-md-12">
                <button
                  type="submit"
                  class="btn btn-primary float-start"
                  @click="applyAdvancedFilter"
                >
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
          <!-- Tambah Data -->
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTambah">
            <i class="bi bi-plus-square"></i> Tambah Data
          </button>

          <!-- Import Group -->
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-file-earmark-arrow-up"></i> Import
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#" @click.prevent="openImport('Import Kunjungan')">
                  <i class="bi bi-filetype-csv"></i> Kunjungan
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click.prevent="openImport('Import Intervensi')">
                  <i class="bi bi-filetype-csv"></i> Intervensi
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  @click.prevent="openImport('Import Pendampingan')"
                >
                  <i class="bi bi-filetype-csv"></i> Pendampingan
                </a>
              </li>
            </ul>
          </div>

          <!-- Grafik Gizi -->
          <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalGrafik">
            <i class="bi bi-graph-up"></i> Grafik Gizi
          </button>
        </div>

        <!-- Alert -->
        <div class="container-fluid mt-4" v-if="showAlert">
          <div class="alert alert-success shadow-sm">✅ Data anak berhasil disimpan!</div>
        </div>

        <!-- Cards Section -->
        <div class="container-fluid">
          <!-- Data Table -->
          <div class="card modern-card mt-4">
            <div class="card-body">
              <div class="table-responsive">
                <EasyDataTable
                  :headers="headers"
                  :items="filteredAnak"
                  :search-value="filter.nik"
                  buttons-pagination
                  :rows-per-page="5"
                  table-class="table-modern"
                  theme-color="#0d6efd"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <CopyRight class="mt-auto" />
      </div>
    </div>
  </div>

  <!-- Modal Tambah -->
  <div class="modal fade" id="modalTambah" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content shadow-lg border-0 rounded-4">
        <!-- Header -->
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title fw-bold text-primary">Tambah Data Anak</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form class="row g-4">
            <!-- NIK Ortu -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">NIK Ortu</label>
              <input
                type="text"
                class="form-control shadow-sm"
                v-model="form.nik"
                @input="form.nik = form.nik.replace(/\D/g, '')"
                maxlength="16"
              />
            </div>

            <!-- Nama Anak -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Nama Anak</label>
              <input type="text" class="form-control shadow-sm" v-model="form.nama" />
            </div>

            <!-- Jenis Kelamin -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Jenis Kelamin</label>
              <select class="form-select shadow-sm" v-model="form.gender">
                <option value="">L/P</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>

            <!-- Alamat -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Alamat</label>
              <textarea class="form-control shadow-sm" rows="2" v-model="form.alamat"></textarea>
            </div>

            <!-- Tanggal lahir & Usia -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Tanggal Lahir</label>
              <input
                type="date"
                class="form-control shadow-sm"
                v-model="form.tgl_lahir"
                @change="hitungUsia"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Usia (bulan)</label>
              <input
                type="text"
                class="form-control shadow-sm bg-light"
                v-model="form.usia"
                readonly
              />
            </div>

            <!-- Status BB, TB, BB/TB -->
            <div class="col-md-4">
              <label class="form-label small fw-semibold text-secondary">Status BB</label>
              <select class="form-select shadow-sm" v-model="form.status_bb">
                <option value="">Pilih status</option>
                <option value="Sangat Kurang">Sangat Kurang</option>
                <option value="Kurang">Kurang</option>
                <option value="Normal">Normal</option>
                <option value="Resiko Lebih">Resiko Lebih</option>
              </select>
            </div>

            <div class="col-md-4">
              <label class="form-label small fw-semibold text-secondary">Status TB</label>
              <select class="form-select shadow-sm" v-model="form.status_tb">
                <option value="">Pilih status</option>
                <option value="Sangat Pendek">Sangat Pendek</option>
                <option value="Pendek">Pendek</option>
                <option value="Normal">Normal</option>
                <option value="Tinggi">Tinggi</option>
              </select>
            </div>

            <div class="col-md-4">
              <label class="form-label small fw-semibold text-secondary">Status BB/TB</label>
              <select class="form-select shadow-sm" v-model="form.status_bb_tb">
                <option value="">Pilih status</option>
                <option value="Gizi Buruk">Gizi Buruk</option>
                <option value="Gizi Kurang">Gizi Kurang</option>
                <option value="Gizi Baik">Gizi Baik</option>
                <option value="Berisiko Gizi Lebih">Berisiko Gizi Lebih</option>
                <option value="Gizi Lebih">Gizi Lebih</option>
                <option value="Obesitas">Obesitas</option>
              </select>
            </div>

            <!-- RT, RW -->
            <div class="col-md-3">
              <label class="form-label small fw-semibold text-secondary">RT</label>
              <input type="number" min="0" class="form-control shadow-sm" v-model="form.rt" />
            </div>
            <div class="col-md-3">
              <label class="form-label small fw-semibold text-secondary">RW</label>
              <input type="number" min="0" class="form-control shadow-sm" v-model="form.rw" />
            </div>

            <!-- Kunjungan Terakhir -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Kunjungan Terakhir</label>
              <input type="date" class="form-control shadow-sm" v-model="form.kunjungan" />
            </div>
          </form>
        </div>

        <!-- Footer -->
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
        <!-- Header -->
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title">{{ importTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form @submit.prevent="handleImport">
            <input type="file" class="form-control" ref="csvFile" accept=".csv" />
          </form>
        </div>

        <!-- Footer -->
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

  <!-- Modal Grafik -->
  <div
    class="modal fade"
    id="modalGrafik"
    tabindex="-1"
    aria-labelledby="modalGrafikLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title fw-bold" id="modalGrafikLabel">Grafik Status Gizi Anak</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body row g-4 text-center">
          <!-- Grafik BB -->
          <div class="col-md-4">
            <h6 class="fw-bold mb-3">Status BB</h6>
            <canvas id="chartBB"></canvas>
          </div>

          <!-- Grafik TB -->
          <div class="col-md-4">
            <h6 class="fw-bold mb-3">Status TB</h6>
            <canvas id="chartTB"></canvas>
          </div>

          <!-- Grafik BB/TB -->
          <div class="col-md-4">
            <h6 class="fw-bold mb-3">Status BB/TB</h6>
            <canvas id="chartBBTB"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Success -->
  <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-4">
        <div class="modal-header bg-success text-white rounded-top-4">
          <h5 class="modal-title">✅ Berhasil</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <p class="mb-0">Data Anak berhasil disimpan ke <strong>localStorage</strong>.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-success rounded-pill px-4" data-bs-dismiss="modal">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Loader Overlay with Animated Progress -->
  <div
    v-if="isLoadingImport"
    class="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-dark bg-opacity-50"
    style="z-index: 2000"
  >
    <div class="w-50">
      <div class="progress" style="height: 1.8rem; border-radius: 1rem; overflow: hidden">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          :style="{ width: importProgress + '%' }"
          :data-progress="progressLevel"
        >
          <span class="fw-bold">{{ animatedProgress }}%</span>
        </div>
      </div>
    </div>
    <p class="text-white mt-3">Mengimpor data... {{ currentRow }}/{{ totalRows }} baris</p>
  </div>
</template>

<style scoped>
#chartBB,
#chartTB,
#chartBBTB {
  width: 100% !important;
  max-width: 300px;
  /* height: 250px !important; */
  margin: auto;
}

.nutrition-wrapper {
  padding-top: 60px; /* tinggi navbar bootstrap default */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f9f9fb;
  min-height: 100vh;
}
/* Gradient Banner */
.nutrition-banner {
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
/* Timeline Style */
.timeline li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 0.9rem;
}
.timeline .dot {
  position: absolute;
  left: 0;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
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

.table-modern {
  border: none !important;
  border-radius: 0.75rem;
  overflow: hidden;
}

.table-modern th {
  background-color: #f8f9fa !important;
  font-weight: 600;
  color: #495057;
}

.table-modern td {
  vertical-align: middle;
}

.table-modern tr:hover {
  background-color: #f1f5ff !important;
  transition: background 0.2s ease-in-out;
}

.progress-bar {
  transition: width 0.4s ease-in-out;
}
.progress-bar[data-progress='low'] {
  background-color: #0d6efd; /* biru awal */
}
.progress-bar[data-progress='mid'] {
  background-color: #ffc107; /* kuning tengah */
}
.progress-bar[data-progress='high'] {
  background-color: #198754; /* hijau akhir */
}
</style>

<script>
import CopyRight from '@/components/CopyRight.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import { Chart } from 'chart.js/auto' // ini ganti <script src=...>
import { Modal } from 'bootstrap' // <-- butuh ini untuk kontrol modal

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Children',
  components: { NavbarAdmin, CopyRight, HeaderAdmin, EasyDataTable },
  data() {
    return {
      isCollapsed: false,
      isFilterOpen: false,
      chartGizi: null,
      importTitle: 'Import File', // <-- judul modal dinamis
      chartBB: null,
      chartTB: null,
      chartBBTB: null,
      showAlert: false,
      showSuccessModal: false, // kontrol popup sukses
      isLoadingImport: false,
      importProgress: 0,
      animatedProgress: 0,
      currentRow: 0,
      totalRows: 0,
      form: {
        nik: '',
        nama: '',
        gender: '',
        alamat: '',
        tgl_lahir: '',
        usia: 0,
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        rt: '',
        rw: '',
        kunjungan: '',
      },

      // data dummy anak
      anak: [
        {
          nik: '3276012309870001',
          nama: 'Ahmad Fauzi',
          status_bb: 'Normal',
          status_tb: 'Pendek',
          status_bb_tb: 'Gizi Baik',
          alamat: 'Jl. Damai 3 No. 36,',
          rt: '05',
          rw: '02',
          gender: 'L',
          tgl_lahir: '2022-03-14',
          usia: '41',
          kunjungan: '2025-08-10',
        },
        {
          nik: '3276012309870002',
          nama: 'Siti Aminah',
          status_bb: 'Kurang',
          status_tb: 'Normal',
          status_bb_tb: 'Resiko',
          alamat: 'Jl. Damai 3 No. 6,',
          rt: '03',
          rw: '01',
          gender: 'P',
          tgl_lahir: '2021-07-22',
          usia: '49',
          kunjungan: '2025-08-14',
        },
      ],

      // header table
      headers: [
        { text: 'NIK', value: 'nik' },
        { text: 'Nama', value: 'nama' },
        { text: 'L/P', value: 'gender' },
        { text: 'Tanggal Lahir', value: 'tgl_lahir' },
        { text: 'Usia (Bulan)', value: 'usia' },
        { text: 'Status BB', value: 'status_bb' },
        { text: 'Status TB', value: 'status_tb' },
        { text: 'Status Gizi', value: 'status_bb_tb' },
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
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        kunjungan: '',
      },
      appliedAdvancedFilter: {
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        kunjungan: '',
      },
    }
  },
  computed: {
    background() {
      const config = JSON.parse(localStorage.getItem('siteConfig'))
      return config && config.background ? config.background : null
    },
    filteredAnak() {
      return this.anak.filter((item) => {
        const af = this.appliedAdvancedFilter

        const usiaFilter = af.usia ? Number(item.usia) === Number(af.usia) : true

        return (
          (this.filter.nik === '' || item.nik.includes(this.filter.nik)) &&
          usiaFilter &&
          (af.status_bb === '' || item.status_bb === af.status_bb) &&
          (af.status_tb === '' || item.status_tb === af.status_tb) &&
          (af.status_bb_tb === '' || item.status_bb_tb === af.status_bb_tb) &&
          (af.kunjungan === '' || item.kunjungan === af.kunjungan)
        )
      })
    },
    progressLevel() {
      if (this.importProgress < 40) return 'low'
      if (this.importProgress < 80) return 'mid'
      return 'high'
    },
  },
  methods: {
    // helper close modal
    closeModal(id) {
      const el = document.getElementById(id)
      if (el) {
        const instance = Modal.getOrCreateInstance(el)
        instance.hide()
      }

      // jaga-jaga kalau backdrop masih nyangkut
      setTimeout(() => {
        document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove())
        document.body.classList.remove('modal-open')
        document.body.style.removeProperty('overflow')
        document.body.style.removeProperty('padding-right')
      }, 300) // delay biar nunggu animasi fade
    },
    refreshCharts() {
      if (this.chartBB) {
        const newData = this.getChartData('status_bb')
        this.chartBB.data.labels = newData.labels
        this.chartBB.data.datasets[0].data = newData.datasets[0].data
        this.chartBB.update()
      }
      if (this.chartTB) {
        const newData = this.getChartData('status_tb')
        this.chartTB.data.labels = newData.labels
        this.chartTB.data.datasets[0].data = newData.datasets[0].data
        this.chartTB.update()
      }
      if (this.chartBBTB) {
        const newData = this.getChartData('status_bb_tb')
        this.chartBBTB.data.labels = newData.labels
        this.chartBBTB.data.datasets[0].data = newData.datasets[0].data
        this.chartBBTB.update()
      }
    },
    saveData() {
      this.closeModal('modalTambah')

      this.isLoadingImport = true
      this.importProgress = 0
      this.animatedProgress = 0

      let start = null
      const duration = 2000
      let frameId = null

      const animate = (timestamp) => {
        if (!start) start = timestamp
        const elapsed = timestamp - start
        const progress = Math.min((elapsed / duration) * 100, 100)

        this.importProgress = progress
        this.animatedProgress = Math.floor(progress)

        if (progress < 100) {
          frameId = requestAnimationFrame(animate)
        } else {
          cancelAnimationFrame(frameId)

          // ✅ push salinan data
          const newData = { ...this.form }
          this.anak.push(newData)

          // refresh chart kalau ada
          if (this.refreshCharts) this.refreshCharts()

          // reset form
          this.form = {
            nik: '',
            nama: '',
            gender: 'L', // default isi biar gak kosong
            alamat: '',
            tgl_lahir: '',
            usia: '',
            status_bb: '',
            status_tb: '',
            status_bb_tb: '',
            rt: '',
            rw: '',
            kunjungan: '',
          }

          this.isLoadingImport = false

          // ✅ kasih jeda supaya Vue render tabel dulu, baru show modal
          this.$nextTick(() => {
            const el = document.getElementById('successModal')
            if (el) {
              const instance = Modal.getOrCreateInstance(el)
              instance.show()
            }
          })
        }
      }

      frameId = requestAnimationFrame(animate)
    },
    /* saveData() {
      // clone object biar gak kepengaruh reactive ref
      const newAnak = { ...this.form }
      this.anak.push(newAnak)

      // reset form biar kosong lagi
      this.form = {
        nik: '',
        nama: '',
        gender: 'L',
        alamat: '',
        tgl_lahir: '',
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        rt: '',
        rw: '',
        kunjungan: '',
      }

      // setelah sukses simpan → tutup modal
      this.closeModal('modalTambah')

      // alert success
      this.showAlert = true
      setTimeout(() => (this.showAlert = false), 3000)

      // refresh chart
      this.refreshCharts()
    }, */
    openImport(title) {
      this.importTitle = title
      const el = this.$refs.modalImport
      const instance = Modal.getOrCreateInstance(el)
      instance.show()
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleExpand() {
      this.isFilterOpen = !this.isFilterOpen
    },
    /* applyFilter(e) {
      e.preventDefault()
    }, */
    hitungUsia() {
      if (!this.form.tgl_lahir) {
        this.form.usia = 0
        return
      }
      const lahir = new Date(this.form.tgl_lahir)
      const today = new Date()

      let usia = (today.getFullYear() - lahir.getFullYear()) * 12
      usia += today.getMonth() - lahir.getMonth()

      // kalau tanggal hari ini < tanggal lahir, kurangi 1 bulan
      if (today.getDate() < lahir.getDate()) {
        usia -= 1
      }
      this.form.usia = usia >= 0 ? usia : 0
    },
    getChartData(statusKey) {
      const counts = {}
      this.anak.forEach((item) => {
        const val = item[statusKey]
        counts[val] = (counts[val] || 0) + 1
      })

      return {
        labels: Object.keys(counts),
        datasets: [
          {
            data: Object.values(counts),
            backgroundColor: [
              getComputedStyle(document.documentElement).getPropertyValue('--bs-primary').trim(),
              getComputedStyle(document.documentElement).getPropertyValue('--bs-secondary').trim(),
              getComputedStyle(document.documentElement).getPropertyValue('--bs-warning').trim(),
              getComputedStyle(document.documentElement).getPropertyValue('--bs-danger').trim(),
              getComputedStyle(document.documentElement).getPropertyValue('--bs-info').trim(),
            ],
          },
        ],
      }
    },
    initCharts() {
      const ctxBB = document.getElementById('chartBB')
      const ctxTB = document.getElementById('chartTB')
      const ctxBBTB = document.getElementById('chartBBTB')

      this.chartBB = new Chart(ctxBB, {
        type: 'pie',
        data: this.getChartData('status_bb'),
        options: { responsive: true, maintainAspectRatio: true },
      })

      this.chartTB = new Chart(ctxTB, {
        type: 'pie',
        data: this.getChartData('status_tb'),
        options: { responsive: true, maintainAspectRatio: true },
      })

      this.chartBBTB = new Chart(ctxBBTB, {
        type: 'pie',
        data: this.getChartData('status_bb_tb'),
        options: { responsive: true, maintainAspectRatio: true },
      })
    },
    handleImport() {
      this.closeModal('modalImport')

      const fileInput = this.$refs.csvFile
      if (!fileInput || !fileInput.files.length) return

      this.isLoadingImport = true
      this.importProgress = 0
      this.animatedProgress = 0

      const file = fileInput.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        const text = e.target.result
        const rows = text
          .split('\n')
          .map((r) => r.trim())
          .filter((r) => r)
        const headers = rows[0].split(',').map((h) => h.trim())
        const total = rows.length - 1
        this.totalRows = total

        rows.slice(1).forEach((row, idx) => {
          const values = row.split(',').map((v) => v.trim())
          const obj = {}
          headers.forEach((h, i) => {
            obj[h] = values[i] || ''
          })

          this.anak.push({
            nik: obj.nik || '',
            nama: obj.nama || '',
            gender: obj.gender || '',
            alamat: obj.alamat || '',
            tgl_lahir: obj.tgl_lahir || '',
            usia: obj.usia || '',
            status_bb: obj.status_bb || '',
            status_tb: obj.status_tb || '',
            status_bb_tb: obj.status_bb_tb || '',
            rt: obj.rt || '',
            rw: obj.rw || '',
            kunjungan: obj.kunjungan || '',
          })

          const percent = Math.round(((idx + 1) / total) * 100)
          this.updateProgressBar(percent, idx + 1, total)
        })

        setTimeout(() => {
          this.isLoadingImport = false
          const el = document.getElementById('successModal')
          const instance = Modal.getOrCreateInstance(el)
          instance.show()
        }, 500)
      }

      reader.readAsText(file)
    },
    applyAdvancedFilter() {
      // Salin isi input advancedFilter ke appliedAdvancedFilter
      this.appliedAdvancedFilter = { ...this.advancedFilter }
    },
    resetFilter() {
      this.advancedFilter = {
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        kunjungan: '',
      }
      this.appliedAdvancedFilter = { ...this.advancedFilter }
    },
    updateProgressBar(percent, row, total) {
      this.importProgress = percent
      this.currentRow = row
      this.totalRows = total

      const start = this.animatedProgress
      const end = percent
      const step = (end - start) / 10
      let i = 0
      const interval = setInterval(() => {
        this.animatedProgress = Math.min(end, Math.round(start + step * i))
        i++
        if (this.animatedProgress >= end) clearInterval(interval)
      }, 30)
    },
  },
  watch: {
    anak: {
      handler() {
        this.refreshCharts()
      },
      deep: true,
    },
  },
  mounted() {
    this.initCharts()
  },
}
</script>
