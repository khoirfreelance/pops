<template>
  <div class="nutrition-wrapper">
    <!-- Header -->
    <HeaderAdmin :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

    <div class="d-flex flex-column flex-md-row">
      <!-- Sidebar -->
      <NavbarAdmin :is-collapsed="isCollapsed" />

      <!-- Main Content -->
      <div class="flex-grow-1 d-flex flex-column">
        <!-- Gradient Banner -->
        <div class="position-relative">
          <div
            class="nutrition-banner text-white p-5 d-flex flex-column flex-md-row justify-content-between align-items-center"
          >
            <!-- Left Content -->
            <div>
              <h2 class="fw-bold">Data Anak</h2>
              <p class="mb-0">
                List daftar anak yang terdaftar di dalam posyandu dengan usia maksimal 5 tahun (60 bulan)
              </p>
            </div>

            <!-- Right Content: Breadcrumb -->
            <nav aria-label="breadcrumb" class="mt-3 mt-md-0">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <router-link to="/admin" class="text-decoration-none text-white">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active text-primary" aria-current="page">
                  Data Anak
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <!-- Filter -->
        <div
          class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container"
          :class="{ 'expanded-overlay': isFilterOpen }"
        >
          <form class="row g-2 align-items-center">
            <!-- NIK -->
            <div class="col-md-2">
              <label for="nik" class="form-label mb-0">NIK Orang Tua:</label>
            </div>
            <div class="col-md-8">
              <input type="text" v-model="filter.nik" class="form-control" />
            </div>
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary w-100">
                <i class="bi bi-search"></i> Cari
              </button>
            </div>
          </form>

          <!-- Tombol expand filter -->
          <div class="text-end mt-2">
            <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              @click="toggleFilter"
            >
              <i class="bi bi-funnel"></i>
              {{ isFilterOpen ? 'Tutup Filter' : 'Filter Lanjutan' }}
            </button>
          </div>

          <!-- Collapse filter -->
          <div v-show="isFilterOpen" class="mt-3">
            <form class="row g-3">
              <!-- Usia -->
              <div class="col-md-3">
                <label for="usia" class="form-label">Usia</label>
                <input
                  type="number"
                  class="form-control"
                  id="usia"
                  name="usia"
                  placeholder="Tahun"
                />
              </div>

              <!-- Status BB -->
              <div class="col-md-3">
                <label for="status_bb2" class="form-label">Status BB</label>
                <select class="form-select" id="status_bb2" name="status_bb2">
                  <option value="">-- semua --</option>
                  <option value="kurang">Kurang</option>
                  <option value="normal">Normal</option>
                  <option value="resiko">Resiko</option>
                </select>
              </div>

              <!-- Status TB -->
              <div class="col-md-3">
                <label for="status_tb" class="form-label">Status TB</label>
                <select class="form-select" id="status_tb" name="status_tb">
                  <option value="">-- semua --</option>
                  <option value="pendek">Pendek</option>
                  <option value="normal">Normal</option>
                </select>
              </div>

              <!-- Status Gizi -->
              <div class="col-md-3">
                <label for="status_gizi" class="form-label">Status Gizi</label>
                <select class="form-select" id="status_gizi" name="status_gizi">
                  <option value="">-- semua --</option>
                  <option value="kurang">Kurang</option>
                  <option value="normal">Normal</option>
                  <option value="lebih">Lebih</option>
                </select>
              </div>

              <!-- Tanggal Kunjungan -->
              <div class="col-md-3">
                <label for="tgl_kunjungan" class="form-label">Tanggal Kunjungan</label>
                <input
                  type="date"
                  class="form-control"
                  id="tgl_kunjungan"
                  name="tgl_kunjungan"
                />
              </div>

              <!-- Tombol filter -->
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-success">
                  <i class="bi bi-funnel-fill"></i> Terapkan Filter
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Button Group -->
        <div class="container-fluid mt-4 d-flex flex-wrap gap-2 justify-content-end">

          <!-- Tambah Data -->
          <button class="btn btn-primary">
            <i class="bi bi-plus-square"></i> Tambah Data
          </button>

          <!-- Import Group -->
          <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-file-earmark-arrow-up"></i> Import
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-filetype-csv"></i> Kunjungan
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-filetype-csv"></i> Intervensi
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  <i class="bi bi-filetype-csv"></i> Pendampingan
                </a>
              </li>
            </ul>
          </div>

          <!-- Grafik Gizi -->
          <button class="btn btn-secondary">
            <i class="bi bi-graph-up"></i> Grafik Gizi
          </button>

        </div>

        <!-- Alert -->
        <div class="container-fluid mt-4">
          <div class="alert alert-success shadow-sm">
            ✅ Data anak berhasil diperbarui!
          </div>
        </div>

        <!-- Cards Section -->
        <div class="container-fluid">
          <!-- Data Table -->
          <div class="card border-0 shadow-sm mt-4">
            <div class="card-body">
              <div class="table-responsive">
                <EasyDataTable
                  :headers="headers"
                  :items="filteredAnak"
                  :search-value="filter.nik"
                  table-class="table-bordered"
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
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Tambah Data Anak</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form class="row g-3">
            <div class="col-md-6">
              <label class="form-label">NIK Ortu</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-6">
              <label class="form-label">Nama Anak</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-6">
              <label class="form-label">Jenis Kelamin</label>
              <select class="form-select">
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label">Alamat</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-6">
              <label class="form-label">Tanggal Lahir</label>
              <input type="date" id="tanggalLahir" class="form-control">
            </div>
            <div class="col-md-6">
              <label class="form-label">Usia (bulan)</label>
              <input type="text" id="usiaBulan" class="form-control" readonly>
            </div>
            <div class="col-md-4">
              <label class="form-label">Status BB</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-4">
              <label class="form-label">Status TB</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-4">
              <label class="form-label">Status BB/TB</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-3">
              <label class="form-label">RT</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-3">
              <label class="form-label">RW</label>
              <input type="text" class="form-control">
            </div>
            <div class="col-md-6">
              <label class="form-label">Kunjungan Terakhir</label>
              <input type="date" class="form-control">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
          <button class="btn btn-primary">Simpan</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Import -->
  <div class="modal fade" id="modalImport" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalImportTitle">Import File</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <form>
            <input type="file" class="form-control">
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
          <button class="btn btn-primary">Upload</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Grafik -->
  <div class="modal fade" id="modalGrafik" tabindex="-1">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Grafik Status Gizi</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label class="form-label">Pilih Status</label>
          <select id="selectStatus" class="form-select">
            <option value="bb">Status BB</option>
            <option value="tb">Status TB</option>
            <option value="bbtb">Status BB/TB</option>
          </select>
        </div>
        <canvas id="chartGizi" height="200"></canvas>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
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
.filter-wrapper{
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
</style>
<script>
import CopyRight from '@/components/CopyRight.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
import { Chart } from 'chart.js/auto'   // ini ganti <script src=...>

// Ubah title modal import sesuai pilihan
document.addEventListener('DOMContentLoaded', () => {
  const modalImport = document.getElementById('modalImport')
  if (modalImport) {
    modalImport.addEventListener('show.bs.modal', function(event) {
      const button = event.relatedTarget
      const title = button.getAttribute('data-title')
      modalImport.querySelector('#modalImportTitle').textContent = title
    })
  }
})

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Children',
  components: { NavbarAdmin, CopyRight, HeaderAdmin, EasyDataTable },
  data() {
    return {
      isCollapsed: false,
      isFilterOpen: false,
      chartGizi: null,

      // data dummy anak
      anak: [
        {
          nik: '3276012309870001',
          nama: 'Ahmad Fauzi',
          bb: 'Normal',
          tb: 'Pendek',
          bb_tb: 'Normal',
          rt: '05',
          rw: '02',
          gender: 'L',
          tgl_lahir: '2019-03-14',
          usia: '6 th',
          kunjungan: '2025-08-10'
        },
        {
          nik: '3276012309870002',
          nama: 'Siti Aminah',
          bb: 'Kurang',
          tb: 'Normal',
          bb_tb: 'Resiko',
          rt: '03',
          rw: '01',
          gender: 'P',
          tgl_lahir: '2020-07-22',
          usia: '5 th',
          kunjungan: '2025-08-14'
        }
      ],

      // header table
      headers: [
        { text: 'NIK', value: 'nik' },
        { text: 'Nama', value: 'nama' },
        { text: 'BB', value: 'bb' },
        { text: 'TB', value: 'tb' },
        { text: 'BB/TB', value: 'bb_tb' },
        { text: 'RT', value: 'rt' },
        { text: 'RW', value: 'rw' },
        { text: 'L/P', value: 'gender' },
        { text: 'Tanggal Lahir', value: 'tgl_lahir' },
        { text: 'Usia', value: 'usia' },
        { text: 'Kunjungan Terakhir', value: 'kunjungan' }
      ],

      // filter
      filter: {
        nik: '',
        usia: '',
        bb: '',
        tb: '',
        bb_tb: '',
        tgl_kunjungan: ''
      }
    }
  },
  computed: {
    filteredAnak() {
      return this.anak.filter(item => {
        return (
          (this.filter.nik === '' || item.nik.includes(this.filter.nik)) &&
          (this.filter.usia === '' || item.usia.includes(this.filter.usia)) &&
          (this.filter.bb === '' || item.bb === this.filter.bb) &&
          (this.filter.tb === '' || item.tb === this.filter.tb) &&
          (this.filter.bb_tb === '' || item.bb_tb === this.filter.bb_tb) &&
          (this.filter.tgl_kunjungan === '' || item.kunjungan === this.filter.tgl_kunjungan)
        )
      })
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleFilter() {
      this.isFilterOpen = !this.isFilterOpen
    },
    applyFilter(e) {
      e.preventDefault()
    },
    hitungUsia(e) {
      const lahir = new Date(e.target.value)
      const today = new Date()
      let usia = (today.getFullYear() - lahir.getFullYear()) * 12
      usia += today.getMonth() - lahir.getMonth()
      const input = document.getElementById('usiaBulan')
      if (input) input.value = usia >= 0 ? usia : 0
    },
    renderChart() {
      const ctx = document.getElementById('chartGizi')
      if (ctx) {
        if (this.chartGizi) this.chartGizi.destroy() // biar nggak dobel render
        this.chartGizi = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Kurang', 'Normal', 'Resiko'],
            datasets: [
              {
                data: [10, 25, 5]
              }
            ]
          }
        })
      }
    }
  },
  mounted() {
    this.renderChart()
  }
}
</script>



