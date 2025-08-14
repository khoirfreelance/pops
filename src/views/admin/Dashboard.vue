<template>
  <div class="d-flex flex-column flex-md-row">
    <!-- Sidebar -->
    <NavbarAdmin />

    <!-- Main Content -->
    <div class="flex-grow-1 p-4 bg-light">
      <h1 class="mb-4 fw-bold">Admin Dashboard</h1>

      <!-- Last Update Alert -->
      <div class="alert alert-success shadow-sm border-0 rounded-3 mb-4">
        <i class="bi bi-info-circle-fill me-2"></i>
        Data Total RW, Total RT, Penduduk, Keluarga, Balita diupdate terakhir pada
        <strong>2024-05-16 09:32:58</strong>
      </div>

      <!-- Statistic Cards -->
      <div class="row g-4">
        <div v-for="(stat, index) in stats" :key="index" class="col-lg-3 col-md-4 col-sm-6">
          <div :class="`card text-white h-100 shadow-sm stat-card ${stat.bg}`">
            <div class="card-body d-flex flex-column justify-content-center text-center">
              <h6 class="card-title text-uppercase fw-semibold">{{ stat.title }}</h6>
              <p class="display-6 fw-bold mb-0">{{ stat.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Form -->
      <div class="mt-5">
        <div class="card border-0 shadow-sm p-3">
          <h5 class="mb-3">Filter Data</h5>
          <form class="row g-3 align-items-center">
            <div class="col-auto">
              <select name="month" id="month" class="form-select">
                <option value="1">Januari</option>
                <option value="2">Februari</option>
                <option value="3">Maret</option>
              </select>
            </div>
            <div class="col-auto">
              <select name="year" id="year" class="form-select">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-search me-1"></i> Cari
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Tabs -->
      <div class="mt-5">
        <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
            >
              Status Gizi Anak
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Status Kesehatan Ibu Hamil
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
            >
              Calon Pengantin Berisiko
            </button>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <!-- Tab 1 -->
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" tabindex="0">
            <div class="card border-0 shadow-sm p-3">
              <h5 class="mb-3">Recent Activity</h5>
              <table class="table table-striped table-hover align-middle">
                <thead class="table-light">
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Activity</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(activity, i) in activities" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ activity.user }}</td>
                    <td>{{ activity.action }}</td>
                    <td>{{ activity.date }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Tab 2 -->
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" tabindex="0">
            <div class="card border-0 shadow-sm p-3">
              <p>Data kesehatan ibu hamil akan ditampilkan di sini.</p>
            </div>
          </div>

          <!-- Tab 3 -->
          <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" tabindex="0">
            <div class="card border-0 shadow-sm p-3">
              <p>Data calon pengantin berisiko akan ditampilkan di sini.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from '@/components/NavbarAdmin.vue'

export default {
  name: 'Dashboard',
  components: { NavbarAdmin },
  data() {
    return {
      stats: [
        { title: 'Total RW', value: '1,000', bg: 'bg-primary' },
        { title: 'Total RT', value: '100,000', bg: 'bg-success' },
        { title: 'Penduduk', value: '278 M', bg: 'bg-warning' },
        { title: 'Keluarga', value: '100 M', bg: 'bg-danger' },
        { title: 'Balita', value: '1,234', bg: 'bg-primary' },
        { title: 'Ibu Hamil', value: '56 K', bg: 'bg-success' },
        { title: 'Calon Pengantin', value: '12 K', bg: 'bg-warning' },
        { title: 'Posyandu', value: '8 K', bg: 'bg-danger' },
        { title: 'Bidan', value: '1,234', bg: 'bg-primary' },
        { title: 'Anggota TPK', value: '56', bg: 'bg-success' },
      ],
      activities: [
        { user: 'Alice', action: 'Created new project', date: '2025-08-13' },
        { user: 'Bob', action: 'Updated profile', date: '2025-08-12' },
        { user: 'Charlie', action: 'Added new user', date: '2025-08-11' },
      ],
    }
  },
}
</script>

<style scoped>
.stat-card {
  border: none;
  border-radius: 0.75rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}
</style>
