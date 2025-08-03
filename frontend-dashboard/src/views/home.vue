<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-success border-5 fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center justify-content-center fw-bold" href="#">
          <img src="https://img2.beritasatu.com/cache/investor/960x620-3/1613460579.png" class="img-fluid" style="max-height: 50px;" alt="Logo">
        </a>
        <button class="btn btn-success ms-auto p-3">Login</button>
      </div>
    </nav>

    <!-- Cover Section -->
    <section class="vh-100 d-flex align-items-center bg-light">
      <div class="container-fluid px-4 h-100">
        <div class="row h-100">
          <!-- Kolom kiri: Teks dan CTA -->
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-start text-center text-md-start p-5">
            <h1 class="display-5 fw-bold">Selamat Datang</h1>
            <p class="lead">Pantau status kesehatan masyarakat dengan mudah</p>
            <div class="d-grid gap-2 d-md-block">
              <a href="#section1" class="btn btn-primary me-2">Tentang Kami</a>
              <a href="#section2" class="btn btn-outline-primary me-2">Data Grafik</a>
              <a href="#section3" class="btn btn-outline-secondary">KMS</a>
            </div>
          </div>

          <!-- Kolom kanan: Background Image -->
          <div class="col-md-6 d-none d-md-block p-0">
            <div class="h-100 w-100 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1607746882042-944635dfe10e');">
              <!-- Kosong, hanya untuk latar -->
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Section 1: About Us -->
    <section id="section1" class="py-5 bg-white">
      <div class="container-fluid px-4">
        <h2 class="text-center mb-4">Tentang Kami</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm text-center">
              <div class="card-body">
                <h5 class="card-title">Calon Pengantin</h5>
                <p class="display-6 fw-bold text-primary">123</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm text-center">
              <div class="card-body">
                <h5 class="card-title">Ibu Hamil</h5>
                <p class="display-6 fw-bold text-success">78</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-sm text-center">
              <div class="card-body">
                <h5 class="card-title">Gizi Anak</h5>
                <p class="display-6 fw-bold text-danger">56</p>
              </div>
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
            <button class="nav-link active" id="catin-tab" data-bs-toggle="tab" data-bs-target="#catin" type="button">Calon Pengantin</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="hamil-tab" data-bs-toggle="tab" data-bs-target="#hamil" type="button">Ibu Hamil</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="gizi-tab" data-bs-toggle="tab" data-bs-target="#gizi" type="button">Gizi Anak</button>
          </li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="catin">
            <div class="text-center">
              <p>Chart Calon Pengantin</p>
              <!-- Gantikan dengan chart component -->
              <div class="bg-white p-5 border rounded">[Chart CATIN]</div>
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
