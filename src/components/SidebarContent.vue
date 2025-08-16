<template>
  <div :class="['sidebar-container', isCollapsed ? 'sidebar-collapsed' : '']">
    <!-- Logo -->
    <div class="sidebar-logo-container mx-auto mb-3" v-if="!isCollapsed">
      <img src="/src/assets/tf_primary.png" alt="logo" class="sidebar-logo" />
    </div>

    <!-- Menu List -->
    <ul class="nav flex-column mt-3">
      <li class="nav-item">
        <a href="#" class="nav-link active">
          <i class="bi bi-speedometer2 me-2"></i>
          <span v-if="!isCollapsed">Dashboard</span>
        </a>
      </li>

      <li class="menu-section mt-4" v-if="!isCollapsed">Menu</li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-people me-2"></i>
          <span v-if="!isCollapsed">Gizi Anak</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-folder me-2"></i>
          <span v-if="!isCollapsed">Ibu Hamil</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-postcard-heart me-2"></i>
          <span v-if="!isCollapsed">Calon Pengantin</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-calendar me-2"></i>
          <span v-if="!isCollapsed">Jadwal Intervensi </span>
        </a>
      </li>
      <!-- Master Data -->
      <li class="menu-section mt-4" v-if="!isCollapsed">Master Data</li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-house-check me-2"></i>
          <span v-if="!isCollapsed">Keluarga </span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-file-person me-2"></i>
          <span v-if="!isCollapsed">Admin / Kader </span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-person-vcard me-2"></i>
          <span v-if="!isCollapsed">Keanggotaan TPK</span>
        </a>
      </li>

      <!-- Setting -->
      <li class="menu-section mt-4" v-if="!isCollapsed">Setting</li>
      <li>
        <a href="#" class="nav-link">
          <i class="bi bi-gear me-2"></i>
          <span v-if="!isCollapsed">Konfigurasi </span>
        </a>
      </li>
    </ul>
    <!-- Footer -->
    <div class="p-3 border-top border-2">
      <a href="#" class="d-flex align-items-center nav-link logout-link text-danger">
        <i class="bi bi-box-arrow-right me-2"></i>
        <span v-if="!isCollapsed">Logout</span>
      </a>
    </div>
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
}
</script>

<style scoped>
.sidebar-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.sidebar-container.sidebar-collapsed {
  width: 80px;
}

.sidebar-logo {
  max-width: 100px;
  transition:
    transform 0.3s ease,
    width 0.3s;
}

.sidebar-container.sidebar-collapsed .sidebar-logo {
  max-width: 50px;
}

.nav-link {
  transition: all 0.3s;
}

.nav-link i {
  font-size: 1.2rem;
}

.sidebar-collapsed .nav-link span {
  display: none;
}
</style>
