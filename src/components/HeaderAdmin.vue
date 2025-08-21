<template>
  <nav class="navbar fixed-top apple-navbar px-3 py-2">
    <div class="container-fluid d-flex justify-content-between align-items-center">

      <!-- Kiri: Logo + Toggle Sidebar -->
      <div class="d-flex align-items-center gap-3">
        <a class="navbar-brand mb-0" href="#">
          <img src="/src/assets/tf_primary.png" alt="Logo" height="30" />
        </a>
        <button
          class="btn btn-icon d-none d-md-inline-flex align-items-center"
          @click="$emit('toggle-sidebar')"
        >
          <i class="bi bi-list fs-4"></i>
        </button>
      </div>

      <!-- Kanan: Notifikasi + User -->
      <div class="d-flex align-items-center gap-3">
        <!-- Dropdown Notifikasi -->
        <div class="dropdown">
          <button
            class="btn btn-icon position-relative"
            type="button"
            id="dropdownNotif"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-bell fs-5"></i>
            <span class="badge-dot bg-danger"></span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-4 animate-dropdown" aria-labelledby="dropdownNotif">
            <li><h6 class="dropdown-header fw-semibold">Notifikasi</h6></li>
            <li><a class="dropdown-item small" href="#">Update Sistem</a></li>
            <li><a class="dropdown-item small" href="#">Pesan Baru</a></li>
            <li><a class="dropdown-item small" href="#">Tugas Selesai</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item text-center text-primary fw-semibold" href="#">Lihat Semua</a></li>
          </ul>
        </div>

        <!-- Dropdown User -->
        <div class="dropdown">
          <button
            class="btn btn-icon dropdown-toggle d-flex align-items-center"
            type="button"
            id="dropdownUser"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=dddddd&color=000&size=32"
              alt="User"
              class="rounded-circle"
              width="32"
              height="32"
            />
          </button>
          <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-4 animate-dropdown" aria-labelledby="dropdownUser">
            <li><a class="dropdown-item small" href="#">Profile</a></li>
            <li><a class="dropdown-item small" href="#">Settings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item text-danger small" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Dropdown } from "bootstrap";

export default {
  name: "HeaderAdmin",
  props: {
    isCollapsed: { type: Boolean, default: false },
  },
  mounted() {
    document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((el) => {
      new Dropdown(el);
    });
  },
};
</script>

<style scoped>
/* Navbar gaya Apple: blur + transparan */
.apple-navbar {
  backdrop-filter: saturate(180%) blur(20px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

/* Icon button minimalis */
.btn-icon {
  border: none;
  background: transparent;
  padding: 6px;
  border-radius: 50%;
  transition: background 0.3s ease, color 0.3s ease;
  color: #444;
}
.btn-icon:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #000;
}

/* Badge titik kecil elegan */
.badge-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

/* Dropdown animasi smooth */
.animate-dropdown {
  animation: fadeDown 0.2s ease;
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
