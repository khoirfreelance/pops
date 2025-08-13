<template>
  <footer class="bg-secondary text-white py-4 mt-5">
    <div class="container-fluid px-4">
      <div class="row">
        <div class="col-md-4 mb-3">
          <img src="/src/assets/tf_box.png" alt="Logo" width="60%" />
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
    </div>
    <hr class="border-light" />
    <div class="container text-center">
      <p class="mb-0">&copy; {{ new Date().getFullYear() }} POPS. All rights reserved.</p>
    </div>
  </footer>
</template>
