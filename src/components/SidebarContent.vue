<template>
  <div :class="['sidebar-container shadow-sm', isCollapsed ? 'sidebar-collapsed' : '']">
    <!-- Menu List -->
    <ul class="nav flex-column mt-3 px-2">
      <li>
        <router-link to="/admin/" class="nav-link" :class="{ active: isActive('/admin/') }">
          <i class="bi bi-speedometer2 me-2"></i>
          <span v-if="!isCollapsed">Dashboard</span>
        </router-link>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Menu</li>
      <li>
        <router-link to="/admin/gizi" class="nav-link" :class="{ active: isActive('/admin/gizi') }">
          <i class="bi bi-people me-2"></i>
          <span v-if="!isCollapsed">Gizi Anak</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/hamil" class="nav-link" :class="{ active: isActive('/admin/hamil') }">
          <i class="bi bi-folder me-2"></i>
          <span v-if="!isCollapsed">Ibu Hamil</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/catin" class="nav-link" :class="{ active: isActive('/admin/catin') }">
          <i class="bi bi-postcard-heart me-2"></i>
          <span v-if="!isCollapsed">Calon Pengantin</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/jadwal" class="nav-link" :class="{ active: isActive('/admin/jadwal') }">
          <i class="bi bi-calendar me-2"></i>
          <span v-if="!isCollapsed">Jadwal Intervensi</span>
        </router-link>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Master Data</li>
      <li>
        <router-link to="/admin/keluarga" class="nav-link" :class="{ active: isActive('/admin/keluarga') }">
          <i class="bi bi-house-check me-2"></i>
          <span v-if="!isCollapsed">Keluarga</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/kader" class="nav-link" :class="{ active: isActive('/admin/kader') }">
          <i class="bi bi-file-person me-2"></i>
          <span v-if="!isCollapsed">Admin / Kader</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/tpk" class="nav-link" :class="{ active: isActive('/admin/tpk') }">
          <i class="bi bi-person-vcard me-2"></i>
          <span v-if="!isCollapsed">Keanggotaan TPK</span>
        </router-link>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Setting</li>
      <li>
        <router-link to="/admin/config" class="nav-link" :class="{ active: isActive('/admin/config') }">
          <i class="bi bi-gear me-2"></i>
          <span v-if="!isCollapsed">Konfigurasi</span>
        </router-link>
      </li>
    </ul>

    <!-- Footer -->
    <!-- <div class="sidebar-footer p-3 mt-auto">
      <a href="#" class="d-flex align-items-center nav-link logout-link text-danger rounded-3 px-2 py-2">
        <i class="bi bi-box-arrow-right me-2"></i>
        <span v-if="!isCollapsed">Logout</span>
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SidebarContent",
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
.sidebar-container {
  border-right: 1px solid #eaeaea;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  width: 250px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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
  transition: all 0.25s ease-in-out;
  font-weight: 500;
}

.nav-link:hover {
  background-color: #f5f5f7;
  color: #006341;
  transform: translateX(4px);
}

.nav-link.active {
  background-color: #eaf3ff;
  color: #006341;
  font-weight: 600;
}

.nav-link i {
  font-size: 1.2rem;
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
