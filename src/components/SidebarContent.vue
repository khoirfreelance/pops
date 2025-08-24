<template>
  <div :class="['sidebar-container', isCollapsed ? 'sidebar-collapsed' : '']">
    <!-- Menu List -->
    <ul class="nav flex-column mt-3 px-2">
      <li>
        <router-link to="/admin" class="nav-link" :class="{ active: isActive('/admin/') }">
          <i class="bi bi-speedometer2"></i>
          <span v-if="!isCollapsed">Dashboard</span>
        </router-link>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Menu</li>
      <li>
        <router-link to="/admin/anak" class="nav-link" :class="{ active: isActive('/admin/anak') }">
          <i class="fa-solid fa-baby"></i>
          <span v-if="!isCollapsed">Gizi Anak</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/admin/hamil"
          class="nav-link"
          :class="{ active: isActive('/admin/hamil') }"
        >
          <i class="fa-solid fa-person-pregnant"></i>
          <span v-if="!isCollapsed">Ibu Hamil</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/admin/catin"
          class="nav-link"
          :class="{ active: isActive('/admin/catin') }"
        >
          <i class="fa-solid fa-people-arrows"></i>
          <span v-if="!isCollapsed">Calon Pengantin</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/admin/jadwal"
          class="nav-link"
          :class="{ active: isActive('/admin/jadwal') }"
        >
          <i class="bi bi-calendar"></i>
          <span v-if="!isCollapsed">Jadwal Intervensi</span>
        </router-link>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Master Data</li>
      <li>
        <router-link
          to="/admin/keluarga"
          class="nav-link"
          :class="{ active: isActive('/admin/keluarga') }"
        >
          <i class="fa-solid fa-people-roof"></i>
          <span v-if="!isCollapsed">Keluarga</span>
        </router-link>
      </li>
      <li>
        <router-link
          to="/admin/kader"
          class="nav-link"
          :class="{ active: isActive('/admin/kader') }"
        >
          <i class="bi bi-file-person"></i>
          <span v-if="!isCollapsed">Admin / Kader</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/tpk" class="nav-link" :class="{ active: isActive('/admin/tpk') }">
          <i class="bi bi-person-vcard"></i>
          <span v-if="!isCollapsed">Keanggotaan TPK</span>
        </router-link>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Setting</li>
      <li>
        <router-link
          to="/admin/config"
          class="nav-link"
          :class="{ active: isActive('/admin/config') }"
        >
          <i class="bi bi-gear"></i>
          <span v-if="!isCollapsed">Konfigurasi</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarContent',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
  },
}
</script>

<style scoped>
.sidebar-container {
  border-right: 1px solid #eaeaea;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  width: 250px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.sidebar-container.sidebar-collapsed {
  width: 80px;
}

.nav-link {
  color: #333;
  border-radius: 12px;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* default normal */
  gap: 10px;
  transition: all 0.25s ease-in-out;
  font-weight: 500;
}

.nav-link i {
  color: var(--bs-primary);
  font-size: 1.1rem;
  flex-shrink: 0;
  width: 36px;         /* ukuran lingkaran */
  height: 36px;
  border-radius: 50%;
  background-color: var(--bs-additional2); /* warna lingkaran */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-link:hover i {
  background-color: #e0f0e8; /* warna lingkaran saat hover */
  color: var(--bs-primary);
}

.nav-link.active i {
  background-color: var(--bs-primary);
  color: #fff;
}

.nav-link:hover {
  color: var(--bs-primary);
  transform: translateX(4px);
}

.nav-link.active {
  background-color: #eaf3ff;
  color: var(--bs-primary);
  font-weight: 600;
  width: 85% !important;
}

.menu-section {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;
  margin-left: 10px;
  margin-bottom: 8px;
}

.sidebar-footer {
  border-top: 1px solid #eee;
}


/* .logout-link:hover {
  background: #ffecec;
  color: #ff3b30 !important;
} */
</style>
