<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-success border-5 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center justify-content-center fw-bold" href="#">
          <img src="https://img2.beritasatu.com/cache/investor/960x620-3/1613460579.png" class="img-fluid" style="max-height: 50px;" alt="Logo">
        </a>
        <router-link to="/login" class="btn btn-success ms-auto p-3">Login</router-link>
      </div>
    </nav>

    <!-- Cover Section -->
    <section class="vh-100 d-flex align-items-center bg-light">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="d-flex flex-column justify-content-center align-items-start text-center text-md-start p-5" style="background-image: url('src/assets/cover2.png');background-repeat: no-repeat;background-size: cover;background-position: right;">
            <h5 class="fw-bold">Selamat Datang di</h5>
            <h3 class="fw-bold">PUSAT OPERASI PENURUNAN</h3>
            <h1 class="fw-bold">STUNTING (POPS)</h1>
            <div class="d-flex gap-2 d-md-block mt-3">
              <a href="#section1" class="btn btn-success me-2">Tentang POPS</a>
              <a href="#section2" class="btn btn-outline-success btn-light me-2">Data Gizi Anak</a>
              <a href="#section3" class="btn btn-outline-success btn-light">KMS Digital</a>
            </div>
            <div id="bottom-card" class="container position-absolute bottom-0 start-50 translate-middle-x mb-4">
              <div class="row justify-content-center g-2">
                <!-- Card 1 -->
                <div class="col-6 col-sm-3 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">70</p>
                    <p class="text-start m-0">RT</p>
                  </div>
                </div>
                <!-- Card 2 -->
                <div class="col-6 col-sm-3 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">16</p>
                    <p class="text-start m-0">RW</p>
                  </div>
                </div>
                <!-- Card 3 -->
                <div class="col-6 col-sm-4 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">11.874</p>
                    <p class="text-start m-0">Keluarga Terdaftar</p>
                  </div>
                </div>
                <!-- Card 4 -->
                <div class="col-6 col-sm-3 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">18</p>
                    <p class="text-start m-0">TPK</p>
                  </div>
                </div>
                <!-- Card 5 -->
                <div class="col-6 col-sm-3 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">155</p>
                    <p class="text-start m-0">Ibu Hamil</p>
                  </div>
                </div>
                <!-- Card 6 -->
                <div class="col-6 col-sm-3 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">211</p>
                    <p class="text-start m-0">Posyandu</p>
                  </div>
                </div>
                <!-- Card 7 -->
                <div class="col-6 col-sm-3 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">155</p>
                    <p class="text-start m-0">Bidan</p>
                  </div>
                </div>
                <!-- Card 8 -->
                <div class="col-6 col-sm-4 col-md-2">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">155</p>
                    <p class="text-start m-0">Calon Pengantin</p>
                  </div>
                </div>
                <!-- Card 9 -->
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="card px-2 py-1 text-center text-white bg-success">
                    <p class="text-end m-0">1.055</p>
                    <p class="text-start m-0">Anak &le; 5 Tahun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    <!-- Section 1: About Us -->
    <section id="section1" class="py-5 bg-white">
      <div class="container-fluid px-4">
        <div class="row">
          <div class="card p-5">
            <h5 class="d-flex justify-content-between align-items-center mb-4">
              Tentang POPS
              <div>
                <img src="/src/assets/bogor.png" alt="logo" style="height: 30px;margin-right:10px;">
                <img src="https://img2.beritasatu.com/cache/investor/960x620-3/1613460579.png" alt="logo" style="height: 30px;">
              </div>              
            </h5>
            <p style="text-align: justify;">
              Tanoto Foundation bersama BKKBN dan pemerintah daerah bekerja sama dalam mengembangkan program percepatan penurunan stunting di empat kabupaten/kota di Provinsi Jawa Barat, Kabupaten Bogor. Strategi pengembangan program tidak saja fokus kepada dukungan teknis konvergensi dan koordinasi dalam penyusunan kebijakan strategi percepatan penurunan stunting, namun juga mewujudkan layanan pencegahan stunting yang lebih berkualitas di tingkat masyarakat.
            </p>
            <p style="text-align: justify;">
              Agar program pendampingan percepatan penurunan stunting tersebut dilakukan secara tepat sasaran sesuai dengan ketersediaan sumber daya hingga di tingkat desa, Tanoto Foundation berupaya menginisiasi pengelolaan program stunting berbasis data penerima sasaran di tingkat desa melalui program POPS (Pusat Operasi Penurunan Stunting). Inisiatif ini akan diujicobakan (pilot) di Desa Kluwut, Kabupaten Brebes. Dalam mempersiapkan program tersebut, beberapa tahapan akan dilakukan diantaranya ; Pertemuan assesmen kebutuhan (needs assessment) untuk menggali kebutuhan dan situasi di desa secara komprehensif sehingga kerangka program POPS yang dikembangkan tepat untuk membantu TPPS desa melakukan pengambilan keputusan intervensi stunting yang efektif, Menyepakati alur proses pengumpulan data dan informasi yang dibutuhkan, dan pengembangan website – applikasi POPS sebagai media yang akan ditampilkan dalam penyajian data.
            </p>
            <p style="text-align: justify;">
              Dalam pelaksanaan Program POPS ini, Tanoto Foundation bekerjasama dengan Yayasan Satu Karsa Karya (YSKK) sebagai mitra implementasi di Lapangan, dan juga mengajak Pemerintah dan Kader Desa Kluwut untuk membantu dalam penggalian/pengumpulan data dan informasi. Pelibatan Desa Kluwut sejak awal program POPS perlu dilakukan untuk memastikan adanya jaminan keberlanjutan Program POPS ini. Terkait dengan hal tersebut untuk mempermudah memahami alur porses program POPS berikut kami susun acuan program untuk bisa dibaca dan dipahami oleh para pihak yang akan terlibat dalam implementasi program ini.
            </p>
          </div>
        </div>
        <div class="row m-3">
          <h5 class="text-center">Tujuan Pelaksanaan POPS</h5>
          <div class="row justify-content-center">
            <div class="card col-md-4 m-2 p-4 d-flex align-items-center justify-content-between" style="text-align: justify; flex-direction: row;">
              <img src="/src/assets/about1.png" alt="report" style="max-width: 100px; height: auto;margin-right: 10px;">
              <p class="mb-0 me-3">
                Mengkoordinasikan data dan informasi sasaran program stunting yang ada di desa Kluwut agar selalu update dan mudah diakses banyak pihak, melalui pengembangan website berbasis data.
              </p>
            </div>
            <div class="card col-md-4 m-2 p-4 d-flex align-items-center justify-content-between" style="text-align: justify; flex-direction: row;">
              <img src="/src/assets/about2.png" alt="report" style="max-width: 100px; height: auto;margin-right: 10px;">
              <p class="mb-0 me-3">
                Mengembangkan Dashboard (website) berbasis data di Desa Kluwut
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Chart Panels -->
    <section id="section2" class="py-5 bg-light">
      <div class="container-fluid px-4">
        <h2 class="text-center mb-4">Data Grafik</h2>
        <ul class="nav nav-tabs mb-3 justify-content-center" id="chartTabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="catin-tab" data-bs-toggle="tab" data-bs-target="#catin" type="button">Gizi Anak</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="hamil-tab" data-bs-toggle="tab" data-bs-target="#hamil" type="button">Ibu Hamil</button>
          </li>
          
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="catin">
            <div class="text-center">
              <p>Chart Calon Pengantin</p>
              <!-- Gantikan dengan chart component -->
              <div class="bg-white p-5 border rounded">
                <Bar :data="chartData" :options="chartOptions" />
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="hamil">
            <div class="text-center">
              <p>Chart Ibu Hamil</p>
              <div class="bg-white p-5 border rounded">[Chart IBU HAMIL]</div>
            </div>
          </div>
          <div class="tab-pane fade" id="gizi">
            <div class="text-center">
              <p>Chart Gizi Anak</p>
              <div class="bg-white p-5 border rounded">[Chart GIZI ANAK]</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: KMS -->
    <section id="section3" class="py-5 bg-white">
      <div class="container-fluid px-4">
        <h2 class="text-center mb-4">Kartu Menuju Sehat (KMS)</h2>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm">
              <div class="card-body text-center">
                <h5 class="card-title">KMS Anak Laki-laki</h5>
                <img src="https://via.placeholder.com/300x200" class="img-fluid" alt="KMS Laki-laki">
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card shadow-sm">
              <div class="card-body text-center">
                <h5 class="card-title">KMS Anak Perempuan</h5>
                <img src="https://via.placeholder.com/300x200" class="img-fluid" alt="KMS Perempuan">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white py-4">
      <div class="container-fluid px-4">
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5>LOGO</h5>
            <p>Deskripsi singkat platform</p>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Menu</h5>
            <ul class="list-unstyled">
              <li><a href="#section1" class="text-white text-decoration-none">Tentang Kami</a></li>
              <li><a href="#section2" class="text-white text-decoration-none">Data Grafik</a></li>
              <li><a href="#section3" class="text-white text-decoration-none">KMS</a></li>
            </ul>
          </div>
          <div class="col-md-4 mb-3">
            <h5>Kontak</h5>
            <p>Email: info@example.com</p>
            <p>Telp: 0812-3456-7890</p>
          </div>
        </div>
        <hr class="border-light">
        <p class="text-center mb-0">&copy; 2025 Pusat Operasi Penurunan Stunting</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Registrasi komponen Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['0-5', '6-11', '12-17', '18-23', '24-29', '30-35', '36-47', '48-59'],
  datasets: [
    {
      label: 'Sangat Kurang',
      data: [5, 3, 2, 1, 0, 1, 0, 2],
      backgroundColor: 'red',
    },
    {
      label: 'Kurang',
      data: [4, 5, 3, 2, 2, 1, 1, 1],
      backgroundColor: 'yellow',
    },
    {
      label: 'Normal',
      data: [15, 18, 20, 17, 16, 14, 13, 12],
      backgroundColor: 'green',
    },
    {
      label: 'Resiko Lebih',
      data: [1, 2, 1, 3, 4, 3, 4, 5],
      backgroundColor: 'darkblue',
    },
  ],
}

const chartOptions = {
  indexAxis: 'y', // ⬅️ Ini penting untuk membuat bar chart VERTIKAL (horizontal bars)
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Jumlah Individu',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Rentang Umur (bulan)',
      },
    },
  },
}

</script>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
