<template>
  <div class="container-fluid">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-dark fixed-top transition-all"
      :class="{ 'scrolled-navbar': isScrolled }"
    >
      <div class="container-fluid">
        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="@/assets/tf_box_outlined.png" alt="POPS Logo" height="40" class="me-2" />
        </a>

        <!-- Toggle -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Right side -->
        <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
          <router-link to="/admin/login" class="btn btn-primary border"
            ><i class="bi bi-box-arrow-in-right"></i>&nbsp; Login</router-link
          >
        </div>
      </div>
    </nav>

    <!-- Back to Top Button -->
    <button v-show="showBackToTop" class="btn btn-primary back-to-top shadow" @click="scrollToTop">
      ↑
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      showBackToTop: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY
      this.isScrolled = scrollTop > 50
      this.showBackToTop = scrollTop > 300
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.transition-all {
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.scrolled-navbar {
  background-color: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 20px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 18px;
  line-height: 1;
}
</style>
