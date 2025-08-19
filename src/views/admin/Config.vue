<template>
  <div class="d-flex flex-column flex-md-row">
    <NavbarAdmin />
    <div class="flex-grow-1 d-flex flex-column">
      <div class="flex-grow-1 p-4 bg-light">
        <h1 class="fw-bold mb-4">Configuration Page</h1>
        <!-- <div class="container my-4"> -->
        <div class="card border-0 rounded-4">
          <div class="card-body p-4">
            <form @submit.prevent="handleSubmit" class="row g-4">
              <!-- Drag & Drop Upload Logo -->
              <div class="col-md-6">
                <label class="form-label fw-bold">Upload Logo</label>
                <div
                  class="dropzone p-4 border border-2 rounded-3 text-center"
                  :class="{ 'border-primary bg-light': isLogoDrag }"
                  @dragover.prevent="isLogoDrag = true"
                  @dragleave.prevent="isLogoDrag = false"
                  @drop.prevent="handleDrop($event, 'logo')"
                >
                  <i class="bi bi-cloud-upload fs-2"></i>
                  <p class="mb-1">Drag & drop logo here</p>
                  <small class="text-muted">or click to browse</small>
                  <input
                    type="file"
                    accept="image/*"
                    class="position-absolute w-100 h-100 top-0 start-0 opacity-0"
                    @change="handleFileChange($event, 'logo')"
                  />
                </div>
                <div v-if="previewLogo" class="mt-2 text-center">
                  <img
                    :src="previewLogo"
                    alt="Logo Preview"
                    class="img-fluid rounded"
                    style="max-height: 100px"
                  />
                </div>
              </div>

              <!-- Logo Width -->
              <div class="col-md-6">
                <label class="form-label fw-bold">Logo Width (px)</label>
                <input
                  type="number"
                  v-model="form.logoWidth"
                  class="form-control"
                  placeholder="e.g. 120"
                />
              </div>

              <!-- Drag & Drop Upload Background -->
              <div class="col-md-6">
                <label class="form-label fw-bold">Upload Background</label>
                <div
                  class="dropzone p-4 border border-2 rounded-3 text-center"
                  :class="{ 'border-primary bg-light': isBgDrag }"
                  @dragover.prevent="isBgDrag = true"
                  @dragleave.prevent="isBgDrag = false"
                  @drop.prevent="handleDrop($event, 'background')"
                >
                  <i class="bi bi-cloud-upload fs-2"></i>
                  <p class="mb-1">Drag & drop background here</p>
                  <small class="text-muted">or click to browse</small>
                  <input
                    type="file"
                    accept="image/*"
                    class="position-absolute w-100 h-100 top-0 start-0 opacity-0"
                    @change="handleFileChange($event, 'background')"
                  />
                </div>
                <div v-if="previewBackground" class="mt-2 text-center">
                  <img
                    :src="previewBackground"
                    alt="Background Preview"
                    class="img-fluid rounded"
                    style="max-height: 150px"
                  />
                </div>
              </div>

              <!-- Color Theme -->
              <div class="col-md-6">
                <label class="form-label fw-bold">Color Theme</label>
                <input
                  type="color"
                  v-model="form.colorTheme"
                  class="form-control form-control-color"
                />
              </div>

              <!-- Footer Column -->
              <div class="col-md-6">
                <label class="form-label fw-bold">Footer Column</label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  v-model="form.footerColumn"
                  class="form-control"
                />
              </div>

              <!-- Maintenance Mode -->
              <div class="col-md-6 d-flex align-items-center justify-content-between">
                <label class="form-label fw-bold mb-0">Maintenance Mode</label>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    v-model="form.maintenance"
                  />
                  <label class="form-check-label">{{ form.maintenance ? 'On' : 'Off' }}</label>
                </div>
              </div>

              <!-- Save Button -->
              <div class="col-12 text-end">
                <button type="submit" class="btn btn-success px-4 rounded-pill">
                  <i class="bi bi-save me-2"></i> Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- </div> -->
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
  name: 'Config',
  components: { NavbarAdmin, CopyRight },
  data() {
    return {
      form: {
        logo: null,
        logoWidth: 120,
        background: null,
        colorTheme: '#0d6efd',
        footerColumn: 3,
        maintenance: false,
      },
      previewLogo: null,
      previewBackground: null,
      isLogoDrag: false,
      isBgDrag: false,
    }
  },
  methods: {
    handleFileChange(e, type) {
      const file = e.target.files[0]
      if (!file) return
      this.setFile(file, type)
    },
    handleDrop(e, type) {
      const file = e.dataTransfer.files[0]
      if (!file) return
      this.setFile(file, type)
      if (type === 'logo') this.isLogoDrag = false
      if (type === 'background') this.isBgDrag = false
    },
    setFile(file, type) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        if (type === 'logo') {
          this.form.logo = file
          this.previewLogo = ev.target.result
        } else if (type === 'background') {
          this.form.background = file
          this.previewBackground = ev.target.result
        }
      }
      reader.readAsDataURL(file)
    },
    handleSubmit() {
      console.log('Form submitted:', this.form)
      alert('Settings saved successfully!')
    },
  },
}
</script>
<style scoped>
.dropzone {
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.dropzone:hover {
  border-color: #0d6efd;
  background: #f8f9fa;
}
</style>
