<template>
  <footer class="bg-secondary text-white pt-5 pb-3">
    <div class="container">
      <div class="row align-items-start">
        
        <!-- Logo & Deskripsi -->
        <div class="col-md-4 mb-4 text-center text-md-start">
          <img 
            src="/src/assets/tf_box.png" 
            alt="Logo" 
            class="img-fluid mb-3" 
            style="max-width: 150px;" 
          />
          <p class="small mb-0">
            Deskripsi singkat platform yang memberikan gambaran umum
            tentang tujuan dan fungsi POPS.
          </p>
        </div>

        <!-- Menu -->
        <div class="col-md-4 mb-4 text-center text-md-start">
          <h5 class="fw-bold mb-3">Menu</h5>
          <ul class="list-unstyled mb-0">
            <li class="mb-2">
              <a href="#section1" class="text-white text-decoration-none">Tentang Kami</a>
            </li>
            <li class="mb-2">
              <a href="#section2" class="text-white text-decoration-none">Data Grafik</a>
            </li>
            <li>
              <a href="#section3" class="text-white text-decoration-none">KMS</a>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div class="col-md-4 mb-4 text-center text-md-start">
          <h5 class="fw-bold mb-3">Kontak</h5>
          <p class="mb-1 small">📧 info@example.com</p>
          <p class="mb-0 small">📞 0812-3456-7890</p>
        </div>
        <hr>
         <CopyRight />
      </div>
    </div>
  </footer>
</template>
<script>
import CopyRight from './CopyRight.vue';
export default{
  components:{
    CopyRight
  }
}
</script>