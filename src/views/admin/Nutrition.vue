<template>
  <div class="nutrition-wrapper">
    <!-- Header -->
    <HeaderAdmin :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

    <div class="d-flex flex-column flex-md-row">
      <!-- Sidebar -->
      <NavbarAdmin :is-collapsed="isCollapsed" />

      <!-- Main Content -->
      <div class="flex-grow-1 d-flex flex-column">
        <!-- Gradient Banner -->
        <div
          class="nutrition-banner text-white p-5 d-flex flex-column flex-md-row justify-content-between align-items-center"
        >
          <div>
            <h2 class="fw-bold">Data Anak</h2>
            <p class="mb-0">
              List daftar anak yang terdaftar di dalam posyandu dengan usia maksimal 5 tahun (60
              bulan)
            </p>
          </div>
        </div>

        <!-- Cards Section -->
        <div class="container-fluid my-4">
          <div class="row g-4">
            <!-- Welcome -->
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <div class="card-body d-flex flex-column justify-content-center text-center">
                  <h5 class="text-primary fw-bold">Welcome to Nutrition Pro!</h5>
                  <p class="text-muted small">
                    Manage your meals, track calories, and monitor your progress with our tools.
                  </p>
                  <img
                    src="/src/assets/cover2.png"
                    class="img-fluid mt-2"
                    style="max-height: 120px"
                  />
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <div class="card-header bg-primary text-white fw-bold">Recent Activity</div>
                <div class="card-body">
                  <ul class="timeline list-unstyled mb-0">
                    <li><span class="dot bg-success"></span> Breakfast logged: Oatmeal & Fruits</li>
                    <li><span class="dot bg-info"></span> Lunch logged: Grilled Chicken Salad</li>
                    <li><span class="dot bg-warning"></span> Snack logged: Protein Bar</li>
                    <li><span class="dot bg-secondary"></span> Dinner planned: Salmon & Veggies</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Progress Tracker -->
            <div class="col-md-4">
              <div class="card shadow-sm h-100">
                <div class="card-header bg-secondary text-white fw-bold">Progress Tracker</div>
                <div class="card-body">
                  <p class="mb-1">Calories</p>
                  <div class="progress mb-2">
                    <div class="progress-bar bg-primary" style="width: 70%">70%</div>
                  </div>
                  <p class="mb-1">Protein</p>
                  <div class="progress mb-2">
                    <div class="progress-bar bg-success" style="width: 60%">60%</div>
                  </div>
                  <p class="mb-1">Carbs</p>
                  <div class="progress mb-2">
                    <div class="progress-bar bg-warning" style="width: 50%">50%</div>
                  </div>
                  <p class="mb-1">Fat</p>
                  <div class="progress mb-2">
                    <div class="progress-bar bg-danger" style="width: 40%">40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <CopyRight class="mt-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.nutrition-wrapper {
  padding-top: 60px; /* tinggi navbar bootstrap default */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f9f9fb;
  min-height: 100vh;
}

/* Gradient Banner */
.nutrition-banner {
  background: linear-gradient(90deg, var(--bs-primary), var(--bs-secondary));
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Timeline Style */
.timeline li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 0.9rem;
}
.timeline .dot {
  position: absolute;
  left: 0;
  top: 4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
/* Hilangkan garis pemisah antara sidebar dan content */
.flex-grow-1 {
  border-left: none !important;
  background-color: #f9f9fb; /* biar tetap clean */
}
</style>

<script>
import CopyRight from '@/components/CopyRight.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nutrition',
  components: { NavbarAdmin, CopyRight, HeaderAdmin },
  data() {
    return {
      isCollapsed: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
  },
}
</script>
