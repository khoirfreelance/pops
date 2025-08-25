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
        <!-- Gradient Banner -->
        <div class="configuration-banner text-white p-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
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
        <div class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container"
             :class="{ 'expanded-overlay': isFilterOpen }">
          <form class="row g-2 align-items-center" @submit.prevent>
            <div class="col-md-2"><label class="form-label mb-0">NIK:</label></div>
            <div class="col-md-8"><input type="text" v-model="filter.nik" class="form-control" /></div>
            <div class="col-md-2"><button type="button" class="btn btn-primary w-100"><i class="bi bi-search"></i> Cari</button></div>
          </form>

          <div class="text-end mt-2">
            <button class="btn btn-outline-secondary btn-sm" type="button" @click="toggleFilter">
              <i class="bi bi-funnel"></i> {{ isFilterOpen ? 'Tutup Filter' : 'Filter Lanjutan' }}
            </button>
          </div>

          <!-- Advanced filter -->
          <div v-show="isFilterOpen" class="mt-3">
            <form class="row g-3" @submit.prevent="applyFilter">
              <div class="col-md-3">
                <label class="form-label">Usia (bulan)</label>
                <input type="number" class="form-control" v-model="filter.usia" />
              </div>
              <div class="col-md-3">
                <label class="form-label">Status BB</label>
                <select class="form-select" v-model="filter.status_bb">
                  <option value="">-- semua --</option>
                  <option>Sangat Kurang</option><option>Kurang</option>
                  <option>Normal</option><option>Resiko Lebih</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Status TB</label>
                <select class="form-select" v-model="filter.status_tb">
                  <option value="">-- semua --</option>
                  <option>Sangat Pendek</option><option>Pendek</option>
                  <option>Normal</option><option>Tinggi</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Status Gizi</label>
                <select class="form-select" v-model="filter.status_bb_tb">
                  <option value="">-- semua --</option>
                  <option>Gizi Buruk</option><option>Gizi Kurang</option>
                  <option>Gizi Baik</option><option>Berisiko Gizi Lebih</option>
                  <option>Gizi Lebih</option><option>Obesitas</option>
                </select>
              </div>
              <div class="col-md-3">
                <label class="form-label">Tanggal Kunjungan</label>
                <input type="date" class="form-control" v-model="filter.kunjungan" />
              </div>
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
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalTambah">
            <i class="bi bi-plus-square"></i> Tambah Data
          </button>
          <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
              <i class="bi bi-file-earmark-arrow-up"></i> Import
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click.prevent="openImport('Import Kunjungan')"><i class="bi bi-filetype-csv"></i> Kunjungan</a></li>
              <li><a class="dropdown-item" href="#" @click.prevent="openImport('Import Intervensi')"><i class="bi bi-filetype-csv"></i> Intervensi</a></li>
              <li><a class="dropdown-item" href="#" @click.prevent="openImport('Import Pendampingan')"><i class="bi bi-filetype-csv"></i> Pendampingan</a></li>
            </ul>
          </div>
          <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modalGrafik">
            <i class="bi bi-graph-up"></i> Grafik Gizi
          </button>
        </div>

        <!-- Alert -->
        <div class="container-fluid mt-4" v-if="showAlert">
          <div class="alert alert-success shadow-sm">✅ Data anak berhasil disimpan!</div>
        </div>

        <!-- TODO: Cards Section -->
        <div class="container-fluid"></div>

        <CopyRight class="mt-auto" />
      </div>
    </div>
  </div>

  <!-- Modal Import -->
  <div class="modal fade" id="modalImport" ref="modalImport" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title">{{ importTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
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

  <!-- Modal Grafik -->
  <div class="modal fade" id="modalGrafik" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title fw-bold">Grafik Status Gizi Anak</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body row g-4 text-center">
          <div class="col-md-4"><h6 class="fw-bold mb-3">Status BB</h6><canvas id="chartBB"></canvas></div>
          <div class="col-md-4"><h6 class="fw-bold mb-3">Status TB</h6><canvas id="chartTB"></canvas></div>
          <div class="col-md-4"><h6 class="fw-bold mb-3">Status BB/TB</h6><canvas id="chartBBTB"></canvas></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import { Chart } from 'chart.js/auto'
import { Modal } from 'bootstrap'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Pregnancy',
  components: { CopyRight, NavbarAdmin, HeaderAdmin },
  data() {
    return {
      isCollapsed: false,
      isFilterOpen: false,
      importTitle: 'Import File',
      showAlert: false,
      chartBB: null, chartTB: null, chartBBTB: null,
      anak: [], // FIX: ditambahkan supaya tidak error
      filter: { nik: '', usia: '', status_bb: '', status_tb: '', status_bb_tb: '', kunjungan: '' },
    }
  },
  computed: {
    background() {
      try {
        const config = JSON.parse(localStorage.getItem('siteConfig'))
        return config?.background || null
      } catch { return null }
    },
    filteredAnak() {
      return this.anak.filter((item) => {
        return (
          (this.filter.nik === '' || item.nik.includes(this.filter.nik)) &&
          (this.filter.usia === '' || item.usia.toString().includes(this.filter.usia)) &&
          (this.filter.status_bb === '' || item.status_bb === this.filter.status_bb) &&
          (this.filter.status_tb === '' || item.status_tb === this.filter.status_tb) &&
          (this.filter.status_bb_tb === '' || item.status_bb_tb === this.filter.status_bb_tb) &&
          (this.filter.kunjungan === '' || item.kunjungan === this.filter.kunjungan)
        )
      })
    },
  },
  watch: {
    anak: { handler() { this.refreshCharts() }, deep: true }
  },
  methods: {
    toggleSidebar() { this.isCollapsed = !this.isCollapsed },
    toggleFilter() { this.isFilterOpen = !this.isFilterOpen },
    applyFilter() { /* nanti dipakai untuk API query */ },
    openImport(title) {
      this.importTitle = title
      const el = this.$refs.modalImport
      Modal.getOrCreateInstance(el).show()
    },
    closeModal(id) {
      const el = document.getElementById(id)
      if (el) Modal.getOrCreateInstance(el).hide()
    },
    getChartData(statusKey) {
      const counts = {}
      this.anak.forEach((a) => counts[a[statusKey]] = (counts[a[statusKey]] || 0) + 1)
      return { labels: Object.keys(counts), datasets: [{ data: Object.values(counts) }] }
    },
    initCharts() {
      this.chartBB = new Chart(document.getElementById('chartBB'), { type: 'pie', data: this.getChartData('status_bb') })
      this.chartTB = new Chart(document.getElementById('chartTB'), { type: 'pie', data: this.getChartData('status_tb') })
      this.chartBBTB = new Chart(document.getElementById('chartBBTB'), { type: 'pie', data: this.getChartData('status_bb_tb') })
    },
    refreshCharts() {
      if (this.chartBB) { this.chartBB.data = this.getChartData('status_bb'); this.chartBB.update() }
      if (this.chartTB) { this.chartTB.data = this.getChartData('status_tb'); this.chartTB.update() }
      if (this.chartBBTB) { this.chartBBTB.data = this.getChartData('status_bb_tb'); this.chartBBTB.update() }
    },
    handleImport() {
      const file = this.$refs.csvFile?.files[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (e) => {
        const [headerLine, ...lines] = e.target.result.split('\n').map(r => r.trim()).filter(Boolean)
        const headers = headerLine.split(',').map(h => h.trim())
        lines.forEach(line => {
          const values = line.split(',').map(v => v.trim())
          const obj = {}; headers.forEach((h, i) => obj[h] = values[i] || '')
          this.anak.push(obj)
        })
        this.closeModal('modalImport')
        this.showAlert = true; setTimeout(() => (this.showAlert = false), 3000)
      }
      reader.readAsText(file)
    }
  },
  mounted() { this.initCharts() }
}
</script>

<style>
#chartBB, #chartTB, #chartBBTB {
  width: 100% !important;
  max-width: 300px;
  margin: auto;
}
.pregnancy-wrapper {
  padding-top: 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f9f9fb;
  min-height: 100vh;
}
.configuration-banner {
  background: linear-gradient(90deg, var(--bs-primary), var(--bs-secondary));
  border-radius: 0 0 1.5rem 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>
