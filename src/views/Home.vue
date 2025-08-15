<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- Navbar -->
    <NavbarUser />

    <!-- Section Cover -->
    <section class="py-5 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center">

        <!-- Text -->
        <div class="col-lg-7 order-2 order-lg-1 text-center text-lg-start">
          <h5 class="fw-bold">Selamat Datang di</h5>
          <h3 class="fw-bold">PUSAT OPERASI PENURUNAN</h3>
          <h1 class="fw-bold">STUNTING (POPS)</h1>
          <div class="mt-3 d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
            <a href="#section1" class="btn btn-light text-primary fw-semibold">Tentang POPS</a>
            <a href="#section2" class="btn btn-outline-light">Data Gizi Anak</a>
            <a href="#section3" class="btn btn-outline-light">KMS Digital</a>
          </div>
        </div>

        <!-- Image -->
        <div class="col-lg-5 order-1 order-lg-2 text-center mb-4 mb-lg-0">
          <div class="big-circle mx-auto"></div>
        </div>
    </div>

    <!-- Statistic Cards -->
    <div class="row justify-content-center mt-5">
      <div v-for="item in stats" :key="item.title" class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
        <div class="card text-center shadow-sm h-100 border-0">
          <div class="card-body p-3">
            <h4 class="fw-bold text-primary">{{ item.value }}</h4>
            <p class="mb-0 small">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Section Gizi -->
    <section class="py-5" id="section2">
      <div class="container-fluid">
        <ul class="nav nav-pills justify-content-center mb-4" id="chartTabs" role="tablist">
          <li class="nav-item">
            <button
              class="nav-link active"
              id="gizi-tab"
              data-bs-toggle="pill"
              data-bs-target="#gizi"
              type="button"
              role="tab"
            >
              Status Gizi Anak
            </button>
          </li>
          <li class="nav-item">
            <button
              class="nav-link"
              id="hamil-tab"
              data-bs-toggle="pill"
              data-bs-target="#hamil"
              type="button"
              role="tab"
            >
              Status Ibu Hamil
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="gizi" role="tabpanel">
            
            <!-- Alert -->
            <div class="alert alert-info">
              <i></i>
               Total Data <strong>Gizi Anak</strong> Per Bulan {{ currentMonthYear }}: <strong>0</strong>
            </div>

            <!-- Filter Form -->
            <div class="my-3">
              <div class="card border-0 shadow-sm p-3">
                <h5 class="mb-3">Filter Data</h5>
                <form class="row g-3 align-items-center">
                  <div class="col-auto">
                    <select name="month" id="month" class="form-select">
                      <option value="1">Januari</option>
                      <option value="2">Februari</option>
                      <option value="3">Maret</option>
                    </select>
                  </div>
                  <div class="col-auto">
                    <select name="year" id="year" class="form-select">
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary">
                      <i class="bi bi-search me-1"></i> Cari
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div class="mt-5">
              <h5 class="mb-0 fw-bold">Status Gizi Anak</h5>
              <h1 class="text-primary fw-bold">Berdasarkan Kategori Usia</h1>
            </div>

            <!-- content -->
            <div class="bg-light p-4 rounded shadow-sm text-center">
              <!-- Nav Pills -->
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-bb-usia-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-bb-usia"
                    type="button"
                    role="tab"
                  >
                    Berat Badan / Usia
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-tb-usia-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-tb-usia"
                    type="button"
                    role="tab"
                  >
                    Tinggi Badan / Usia
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-bb-tb-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-bb-tb"
                    type="button"
                    role="tab"
                  >
                    Berat Badan / Tinggi Badan
                  </button>
                </li>
              </ul>

              <!-- Tab Content -->
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-bb-usia"
                  role="tabpanel"
                  tabindex="0"
                >
                  <h5>Berat Badan / Usia</h5>
                  <p>Konten perhitungan dan grafik BB/U di sini...</p>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-tb-usia"
                  role="tabpanel"
                  tabindex="0"
                >
                  <h5>Tinggi Badan / Usia</h5>
                  <p>Konten perhitungan dan grafik TB/U di sini...</p>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-bb-tb"
                  role="tabpanel"
                  tabindex="0"
                >
                  <h5>Berat Badan / Tinggi Badan</h5>
                  <p>Konten perhitungan dan grafik BB/TB di sini...</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="hamil" role="tabpanel">
            <div class="bg-light p-4 rounded shadow-sm text-center">
              <p>📊 Chart Status Ibu Hamil (placeholder)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section About POPS -->
    <section class="py-5 bg-additional text-white" id="section1">
      <div class="container">
        <h2 class="fw-bold text-center mb-4">Tentang POPS</h2>
        <p style="text-align: justify">
          Tanoto Foundation bersama BKKBN dan pemerintah daerah bekerja sama dalam mengembangkan
          program percepatan penurunan stunting di empat kabupaten/kota di Provinsi Jawa Barat,
          Kabupaten Bogor. Strategi pengembangan program tidak saja fokus kepada dukungan teknis
          konvergensi dan koordinasi dalam penyusunan kebijakan strategi percepatan penurunan
          stunting, namun juga mewujudkan layanan pencegahan stunting yang lebih berkualitas di
          tingkat masyarakat.
        </p>
        <p style="text-align: justify">
          Agar program pendampingan percepatan penurunan stunting tersebut dilakukan secara tepat
          sasaran sesuai dengan ketersediaan sumber daya hingga di tingkat desa, Tanoto Foundation
          berupaya menginisiasi pengelolaan program stunting berbasis data penerima sasaran di
          tingkat desa melalui program POPS (Pusat Operasi Penurunan Stunting). Inisiatif ini akan
          diujicobakan (pilot) di Desa Kluwut, Kabupaten Brebes. Dalam mempersiapkan program
          tersebut, beberapa tahapan akan dilakukan diantaranya ; Pertemuan assesmen kebutuhan
          (needs assessment) untuk menggali kebutuhan dan situasi di desa secara komprehensif
          sehingga kerangka program POPS yang dikembangkan tepat untuk membantu TPPS desa melakukan
          pengambilan keputusan intervensi stunting yang efektif, Menyepakati alur proses
          pengumpulan data dan informasi yang dibutuhkan, dan pengembangan website – applikasi POPS
          sebagai media yang akan ditampilkan dalam penyajian data.
        </p>
        <p style="text-align: justify">
          Dalam pelaksanaan Program POPS ini, Tanoto Foundation bekerjasama dengan Yayasan Satu
          Karsa Karya (YSKK) sebagai mitra implementasi di Lapangan, dan juga mengajak Pemerintah
          dan Kader Desa Kluwut untuk membantu dalam penggalian/pengumpulan data dan informasi.
          Pelibatan Desa Kluwut sejak awal program POPS perlu dilakukan untuk memastikan adanya
          jaminan keberlanjutan Program POPS ini. Terkait dengan hal tersebut untuk mempermudah
          memahami alur porses program POPS berikut kami susun acuan program untuk bisa dibaca dan
          dipahami oleh para pihak yang akan terlibat dalam implementasi program ini.
        </p>

        <!-- 2 cards -->
        <div class="row">
          <div class="col-md-12 mb-4 mt-3 text-center border-top pt-5">
            <h2 class="card-title fw-bold">Tujuan Pelaksanaan POPS</h2>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text">
                  Mengkoordinasikan data dan informasi sasaran program stunting yang ada di desa
                  Kluwut agar selalu update dan mudah diakses banyak pihak, melalui pengembangan
                  website berbasis data.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <p class="card-text">
                  Mengembangkan Dashboard (website) berbasis data di Desa Kluwut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section KMS -->
    <section id="section3" class="py-5 bg-light position-relative">
      <div class="container px-4">
        <h2 class="text-center mb-2 fw-bold text-primary">Kartu Menuju Sehat (KMS)</h2>
        <p class="text-center text-muted mb-4">Pantau pertumbuhan anak dengan mudah dan cepat</p>
        <hr class="my-3 w-50 mx-auto" />

        <!-- Button -->
        <div class="d-flex justify-content-end mb-4">
          <button
            class="btn btn-gradient px-4 py-2 shadow"
            data-bs-toggle="modal"
            data-bs-target="#kmsModal"
          >
            <i class="bi bi-search-heart me-2"></i> Cek Mandiri
          </button>
        </div>

        <!-- Modal -->
        <div
          class="modal fade"
          id="kmsModal"
          tabindex="-1"
          aria-labelledby="kmsModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 rounded-4 shadow-lg">
              <div class="modal-header bg-primary text-white rounded-top-4">
                <h5 class="modal-title fw-bold" id="kmsModalLabel">
                  Form Cek Indeks Berat dan Tinggi Badan
                </h5>
                <button
                  type="button"
                  class="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div class="modal-body p-4">
                <KMSChecker />
              </div>
            </div>
          </div>
        </div>

        <!-- KMS Cards -->
        <div class="row g-4 mt-4">
          <div class="col-md-6">
            <div class="card shadow-lg border-0 h-100 hover-scale">
              <div class="card-body text-center p-4">
                <h5 class="card-title fw-bold text-primary">KMS Anak Laki-laki</h5>
                <div class="d-flex justify-content-center mt-3 gap-3">
                  <img
                    src="/src/assets/KMS_Pria.png1_18.jpg"
                    class="img-fluid rounded-3 shadow-sm"
                    style="max-height: 200px"
                    alt="KMS Laki-laki 1-18"
                  />
                  <img
                    src="/src/assets/KMS_Pria.png18_36.jpg"
                    class="img-fluid rounded-3 shadow-sm"
                    style="max-height: 200px"
                    alt="KMS Laki-laki 18-36"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card shadow-lg border-0 h-100 hover-scale">
              <div class="card-body text-center p-4">
                <h5 class="card-title fw-bold text-danger">KMS Anak Perempuan</h5>
                <div class="d-flex justify-content-center mt-3 gap-3">
                  <img
                    src="/src/assets/KMS_perempuan1_18.jpg"
                    class="img-fluid rounded-3 shadow-sm"
                    style="max-height: 200px"
                    alt="KMS Perempuan 1-18"
                  />
                  <img
                    src="/src/assets/KMS_perempuan18_36.jpg"
                    class="img-fluid rounded-3 shadow-sm"
                    style="max-height: 200px"
                    alt="KMS Perempuan 18-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterUser />
  </div>
</template>

<script>
import NavbarUser from '../components/NavbarUser.vue'
import FooterUser from '../components/FooterUser.vue'
import KMSChecker from '@/components/KMSChecker.vue'
import { computed } from 'vue'

export default {
  computed:{
    currentMonthYear() {
      const date = new Date()
      const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember'
      ]
      return `${months[date.getMonth()]} ${date.getFullYear()}`
    }
  },
  components: {
    NavbarUser,
    FooterUser,
    KMSChecker,
  },
  data() {
    return {
      stats: [
        { title: 'RT', value: 12 },
        { title: 'RW', value: 5 },
        { title: 'Keluarga', value: 250 },
        { title: 'Balita', value: 80 },
        { title: 'Catin', value: 20 },
        { title: 'Ibu Hamil', value: 15 },
        { title: 'Posyandu', value: 4 },
        { title: 'TPK', value: 2 },
      ],
    }
  },
}
</script>
<style scoped>
.big-circle {
  width: 400px; /* Biar nggak kebesaran di HP */
  height: 400px;
  background-image: url('/src/assets/cover2.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}
.btn-gradient {
  background: linear-gradient(135deg, #006341, #b3a369);
  color: #fff;
  border: none;
}
.btn-gradient:hover {
  background: linear-gradient(135deg, #004d33, #9d8a55);
  opacity: 0.9;
}

.hover-scale {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.hover-scale:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
</style>
