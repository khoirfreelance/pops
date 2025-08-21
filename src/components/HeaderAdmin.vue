<template>
  <nav class="navbar navbar-light bg-light fixed-top shadow-sm">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- Tombol collapse sidebar (desktop) -->
      <button
        class="btn btn-sm btn-outline-primary d-none d-md-inline-block"
        @click="$emit('toggle-sidebar')"
      >
        <i :class="isCollapsed ? 'bi bi-arrow-right-square' : 'bi bi-arrow-left-square'"></i>
      </button>
      <a class="navbar-brand fw-bold" href="#">Admin Dashboard</a>
      <button class="bg-transparent border-0 text-primary">
        <i class="bi bi-bell-fill"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderAdmin',
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
