<template>
  <div class="d-flex flex-column flex-md-row">
    <NavbarAdmin />
    <div class="flex-grow-1 d-flex flex-column">
      <div class="flex-grow-1 p-4 bg-light">
        <h1 class="fw-bold mb-4">Schedule Page</h1>
        <div class="card border-0 rounded-4">
          <div class="card-body p-4">
            <button class="btn btn-success px-4 rounded-pill">
              <i class="bi bi-file-earmark-arrow-up"></i> Import
            </button>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  </div>
</template>
<script>
import CopyRight from '@/components/CopyRight.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'schedule',
  components: { CopyRight, NavbarAdmin },
}
</script>
