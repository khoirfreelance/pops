<template>
  <div class="dashboard-wrapper">
    <!-- Header -->
    <HeaderAdmin :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />
    <div class="d-flex flex-column flex-md-row">
      <!-- Sidebar -->
      <NavbarAdmin :is-collapsed="isCollapsed" />
      <div class="flex-grow-1 d-flex flex-column">
        <!-- Main Content -->
        <div
          class="flex-grow-1 p-4 bg-light"
          :style="{
            backgroundImage: background ? `url(${background})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }"
        >
          <!-- Welcome Card -->
          <div class="card welcome-card shadow-sm mb-4 border-0">
            <div
              class="card-body d-flex flex-column flex-md-row align-items-start py-0 justify-content-between"
            >
              <!-- Kiri: Teks Welcome -->
              <div class="text-start">
                <h1 class="text-light mb-5">
                  <span class="text-light fw-normal fs-6">Selamat datang,</span> <br />
                  {{ username }}
                </h1>
                <p class="text-light" style="font-size: 14px">
                  <span class="bg-light rounded-circle p-2"
                    ><i class="bi bi-calendar text-primary"></i
                  ></span>
                  &nbsp; Anda memiliki
                  <router-link to="/admin/jadwal" class="fw-bold text-light text-decoration-none">
                    1 jadwal intervensi
                  </router-link>
                  hari ini.
                </p>
              </div>

              <!-- Kanan: Gambar -->
              <div class="mt-3 mt-md-0">
                <img src="/src/assets/admin.png" alt="Welcome" class="img-fluid welcome-img" />
              </div>
            </div>
          </div>

          <!-- Statistic Cards -->
          <div class="row justify-content-center mt-4">
            <div
              v-for="(stat, index) in stats"
              :key="index"
              class="col-6 col-md-4 col-lg-3 col-xl stat-col p-2"
            >
              <div class="card stat-card h-100 border border-1 border-primary shadow-sm">
                <div
                  class="card-body p-3 d-flex flex-column align-items-center justify-content-center"
                >
                  <!-- Icon wrapper -->
                  <div class="icon-wrapper mb-2">
                    <i :class="stat.icon + ' fs-4'"></i>
                  </div>

                  <!-- Title -->
                  <h6 class="card-title text-muted text-uppercase small mb-1">
                    {{ stat.title }}
                  </h6>

                  <!-- Value -->
                  <p class="fw-bold fs-5 mb-0 text-dark">
                    {{ stat.value }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Filter Form -->
          <div class="mt-5">
            <div class="card border-0 shadow-sm p-3 bg-light">
              <h3 class="text-primary fw-bold py-2">Filter:</h3>
              <form class="row g-3 align-items-end">
                <div class="col-3">
                  <label for="kecamatan">Kecamatan</label>
                  <select name="kecamatan" id="kecamatan" class="form-select">
                    <option value="1">Januari</option>
                    <option value="2">Februari</option>
                    <option value="3">Maret</option>
                  </select>
                </div>
                <div class="col-3">
                  <label for="kelurahan">Kelurahan</label>
                  <select name="kelurahan" id="kelurahan" class="form-select">
                    <option value="1">Januari</option>
                    <option value="2">Februari</option>
                    <option value="3">Maret</option>
                  </select>
                </div>
                <div class="col-4">
                  <label for="periode"> Periode</label>
                  <input
                    type="text"
                    id="daterange"
                    class="form-control"
                    placeholder="Pilih rentang tanggal"
                    readonly
                  />
                </div>
                <div class="col-2">
                  <button type="submit" class="btn btn-primary">
                    <i class="bi bi-search me-1"></i> Cari
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Tabs -->
          <div class="mt-5">
            <div class="d-flex justify-content-center">
              <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Status Gizi Anak
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Status Kesehatan Ibu Hamil
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="contact-tab-pane"
                    aria-selected="false"
                  >
                    Calon Pengantin Berisiko
                  </button>
                </li>
              </ul>
            </div>
            <div class="tab-content" id="myTabContent">
              <!-- Tab 1 -->
              <div
                class="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                tabindex="0"
              >
                <!-- Title -->
                <div class="d-flex justify-content-between align-items-center my-3 mt-5">
                  <h2 class="fw-bold">Status Gizi Anak</h2>
                  <a href="/admin/grafik" class="text-decoration-none">Selengkapnya...</a>
                </div>

                <div class="row">
                  <div class="col-12 col-md-6">
                    <!-- Berat Badan / Usia -->
                    <div class="card border border-primary shadow p-3 my-3">
                      <h4 class="fw-bold text-primary">Berat Badan / Usia</h4>
                      <div class="row">
                        <!-- Table -->
                        <div class="col-12 col-md-8">
                          <table class="table table-borderless align-middle">
                            <tbody>
                              <tr>
                                <td class="text-additional fw-bold">Status</td>
                                <td class="text-muted fw-bold">Jumlah</td>
                                <td class="text-muted fw-bold">Persen</td>
                                <td class="text-muted fw-bold">Tren</td>
                              </tr>
                              <tr v-for="(row, index) in dataTable_bb" :key="index">
                                <td>{{ row.status }}</td>
                                <td>{{ row.jumlah }}</td>
                                <td>{{ row.persen }} %</td>
                                <td :class="row.trenClass">
                                  <span v-if="row.tren !== '-'">
                                    <i :class="row.trenIcon"></i> {{ row.tren }}
                                  </span>
                                  <span v-else>-</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <!-- Chart -->
                        <div class="col-12 col-md-4">
                          <canvas ref="pieChart"></canvas>
                        </div>
                      </div>
                    </div>

                    <!-- Tinggi Badan / Usia -->
                    <div class="card border border-primary shadow p-3 my-3">
                      <h4 class="fw-bold text-primary">Tinggi Badan / Usia</h4>
                      <table class="table table-borderless align-middle">
                        <tbody>
                          <tr>
                            <td class="text-additional fw-bold">Status</td>
                            <td class="text-muted fw-bold">Jumlah</td>
                            <td class="text-muted fw-bold">Persen</td>
                            <td class="text-muted fw-bold">Tren</td>
                          </tr>
                          <tr>
                            <td>Sangat Pendek</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Pendek</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Normal</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td class="text-success">
                              <i class="bi bi-caret-down-fill"></i> 100 %
                            </td>
                          </tr>
                          <tr>
                            <td>Tinggi</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <!-- Berat Badan / Tinggi Badan -->
                    <div class="card border border-primary shadow p-3 my-3">
                      <h4 class="fw-bold text-primary">Berat Badan / Tinggi Badan</h4>
                      <table class="table table-borderless align-middle">
                        <tbody>
                          <tr>
                            <td class="text-additional fw-bold">Status</td>
                            <td class="text-muted fw-bold">Jumlah</td>
                            <td class="text-muted fw-bold">Persen</td>
                            <td class="text-muted fw-bold">Tren</td>
                          </tr>
                          <tr>
                            <td>Gizi Buruk</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Gizi Kurang</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Gizi Baik</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td class="text-success">
                              <i class="bi bi-caret-down-fill"></i> 91.63 %
                            </td>
                          </tr>
                          <tr>
                            <td>Resiko Gizi Lebih</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td class="text-success">
                              <i class="bi bi-caret-down-fill"></i> 8.37 %
                            </td>
                          </tr>
                          <tr>
                            <td>Gizi Lebih</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>Obesitas</td>
                            <td>0</td>
                            <td>0 %</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab 2 -->
              <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" tabindex="0">
                <!-- Title -->
                <div class="d-flex justify-content-between align-items-center my-3 mt-5">
                  <h2 class="fw-bold">Status Kesehatan Ibu Hamil</h2>
                </div>

                <div class="card border-0 shadow-sm p-3 mb-3">No Data Available</div>

                <div class="card border-0 shadow-sm p-3">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Indikator</th>
                          <th v-for="(bulan, i) in months" :key="i">{{ bulan }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(indikator, idx) in data" :key="idx">
                          <td>{{ indikator.nama }}</td>
                          <td v-for="(value, i) in indikator.values" :key="i">{{ value }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Tab 3 -->
              <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" tabindex="0">
                <!-- Title -->
                <div class="d-flex justify-content-between align-items-center my-3 mt-5">
                  <h2 class="fw-bold">Status Kesehatan Calon Pengantin</h2>
                </div>

                <div class="card border-0 shadow-sm p-3">
                  <p class="text-warning mb-3">
                    *Data perhitungan berdasarkan tanggal terdaftar > filter bulan > tanggal
                    menikah.
                  </p>
                  <table class="table table-borderless align-middle">
                    <tbody>
                      <tr>
                        <td class="text-muted fw-bold">Status</td>
                        <td class="text-muted fw-bold">Jumlah</td>
                        <td class="text-muted fw-bold">Persen</td>
                        <td class="text-muted fw-bold">Tren</td>
                      </tr>
                      <tr>
                        <td>Calon Pengantin Beresiko</td>
                        <td>0</td>
                        <td>0 %</td>
                        <td>0 %</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CopyRight />
      </div>
    </div>
  </div>
</template>

<script>
import CopyRight from '@/components/CopyRight.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(PieController, ArcElement, Tooltip, Legend)

document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-undef
  new Litepicker({
    element: document.getElementById('daterange'),
    singleMode: false, // biar bisa pilih range (awal - akhir)
    format: 'DD MMM YYYY',
    numberOfMonths: 2, // tampil 2 bulan
    numberOfColumns: 2,
    lang: 'id-ID', // bahasa Indonesia
  })
})

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dashboard',
  components: { NavbarAdmin, CopyRight, HeaderAdmin },
  data() {
    return {
      username: '',
      stats: [
        { title: 'Total RW', value: '1,000', icon: 'fa-solid fa-house-chimney-window' },
        { title: 'Total RT', value: '100,000', icon: 'bi bi-house-fill' },
        { title: 'Penduduk', value: '278 M', icon: 'bi bi-people-fill' },
        { title: 'Keluarga', value: '100 M', icon: 'fa-solid fa-people-roof' },
        { title: 'Balita', value: '1,234', icon: 'fa-solid fa-baby' },
        { title: 'Ibu Hamil', value: '56 K', icon: 'fa-solid fa-person-pregnant' },
        { title: 'Calon Pengantin', value: '12 K', icon: 'fa-solid fa-people-arrows' },
        { title: 'Posyandu', value: '8 K', icon: 'fa-solid fa-stethoscope' },
        { title: 'Bidan', value: '1,234', icon: 'fa-solid fa-user-nurse' },
        { title: 'Anggota TPK', value: '56', icon: 'bi bi-person-vcard-fill' },
      ],
      activities: [
        { user: 'Alice', action: 'Created new project', date: '2025-08-13' },
        { user: 'Bob', action: 'Updated profile', date: '2025-08-12' },
        { user: 'Charlie', action: 'Added new user', date: '2025-08-11' },
      ],
      months: [
        'Juli 2025',
        'Juni 2025',
        'Mei 2025',
        'April 2025',
        'Maret 2025',
        'Februari 2025',
        'Januari 2025',
        'Desember 2024',
        'November 2024',
        'Oktober 2024',
        'September 2024',
        'Agustus 2024',
      ],
      data: [
        { nama: 'KEK', values: Array(12).fill(0) },
        { nama: 'Anemia', values: Array(12).fill(0) },
        { nama: 'Resiko', values: Array(12).fill(0) },
        { nama: 'Tinggi', values: Array(12).fill(0) },
      ],
      dataTable_bb: [
        { status: 'Sangat Kurang', jumlah: 0, persen: 0, tren: '-', trenClass: '', trenIcon: '' },
        { status: 'Kurang', jumlah: 0, persen: 0, tren: '-', trenClass: '', trenIcon: '' },
        {
          status: 'Normal',
          jumlah: 0,
          persen: 100,
          tren: '100 %',
          trenClass: 'text-success',
          trenIcon: 'bi bi-caret-down-fill',
        },
        { status: 'Tinggi', jumlah: 0, persen: 0, tren: '-', trenClass: '', trenIcon: '' },
      ],
      isCollapsed: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    renderChart() {
      console.log(this.$refs.pieChart) // harusnya <canvas> element
      const ctx = this.$refs.pieChart?.getContext('2d')
      if (!ctx) return // biar aman kalau null

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.dataTable_bb.map((row) => row.status),
          datasets: [
            {
              data: this.dataTable_bb.map((row) => row.persen),
              backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71', '#3498db'],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'bottom' },
          },
        },
      })
    },
  },
  computed: {
    background() {
      const config = JSON.parse(localStorage.getItem('siteConfig'))
      return config && config.background ? config.background : null
    },
  },
  created() {
    const storedEmail = localStorage.getItem('userEmail')
    if (storedEmail) {
      // Ambil bagian sebelum @
      let namePart = storedEmail.split('@')[0]

      // Ganti titik/underscore jadi spasi
      namePart = namePart.replace(/[._]/g, ' ')

      // Ubah huruf pertama tiap kata jadi kapital
      this.username = namePart
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    } else {
      this.username = 'User'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.renderChart()
    })
  },
}
</script>
<style scoped>
@media (min-width: 1200px) {
  .stat-col {
    flex: 0 0 10%;
    max-width: 10%;
  }
}

.dashboard-wrapper {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f9f9fb;
  color: #333;
}

/* Card Statistik */
.stat-card {
  border-radius: 1rem;
  transition: all 0.3s ease;
  /* background: #fff; */
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 123, 255, 0.08); /* soft primary */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a7f37;
}

/* Form & Select */
.form-select,
.btn {
  /* border-radius: 0.75rem; */
  transition: all 0.2s ease-in-out;
}
.form-select:focus,
.btn:focus {
  box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.2);
}

/* Card konten */
.card {
  border-radius: 1rem !important;
  border: none;
  background: #fff;
  transition: box-shadow 0.2s ease;
}
.card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
}

/* Table */
.table {
  font-size: 0.95rem;
}
.table th {
  color: #6c757d;
  font-weight: 600;
}
.table td {
  color: #333;
}
</style>
