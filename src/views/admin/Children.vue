<template>
  <div class="nutrition-wrapper">
    <!-- Header -->
    <HeaderAdmin :is-collapsed="isCollapsed" @toggle-sidebar="toggleSidebar" />

    <div class="d-flex flex-column flex-md-row">
      <!-- Sidebar -->
      <NavbarAdmin :is-collapsed="isCollapsed" />

      <!-- Main Content -->
      <div class="flex-grow-1 d-flex flex-column overflow-hidden">
        <div
          class="flex-grow-1 p-4 bg-light container-fluid"
          :style="{
            backgroundImage: background ? `url(${background})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }"
        >
          <!-- Welcome Card -->
          <div class="card welcome-card shadow-sm mb-4 border-0">
            <div
              class="card-body d-flex flex-column flex-md-row align-items-start py-0 justify-content-between"
            >
              <!-- Kiri: Teks Welcome -->
              <div class="text-start">
                <div class="my-3">
                  <h2 class="fw-bold mt-3 mb-0 text-white">Data Anak</h2>
                  <small class="text-white">
                    List daftar anak yang terdaftar di dalam posyandu
                  </small>
                </div>
                <nav aria-label="breadcrumb" class="mt-auto mb-2">
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/admin" class="text-decoration-none text-white-50">
                        Beranda
                      </router-link>
                    </li>
                    <li class="breadcrumb-item active text-white" aria-current="page">Data Anak</li>
                  </ol>
                </nav>
              </div>

              <!-- Kanan: Gambar -->
              <div class="mt-3 mt-md-0">
                <img src="/src/assets/admin.png" alt="Welcome" class="img-fluid welcome-img" />
              </div>
            </div>
          </div>

          <!-- Tab Sub Menu-->
          <div class="mt-5">
            <div class="d-flex justify-content-center">
              <ul class="nav nav-pills mb-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="kelahiran-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#kelahiran-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="kelahiran-tab-pane"
                    aria-selected="true"
                  >
                    Data Kelahiran
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="kunjungan-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#kunjungan-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="kunjungan-tab-pane"
                    aria-selected="false"
                  >
                    Data Kunjungan Posyandu
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="intervensi-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#intervensi-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="intervensi-tab-pane"
                    aria-selected="false"
                  >
                    Data Intervensi
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="tpk-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#tpk-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="tpk-tab-pane"
                    aria-selected="false"
                  >
                    Data Pendampingan TPK
                  </button>
                </li>
              </ul>
            </div>

            <!-- Tab Content -->
            <div class="tab-content" id="myTabContent">
              <!-- Tab Kelahiran-->
              <div
                class="tab-pane fade show active"
                id="kelahiran-tab-pane"
                role="tabpanel"
                tabindex="0"
              >
                <!-- Filter -->
                <div class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container-fluid">
                  <form class="row g-3 align-items-end" @submit.prevent="applyFilter_anak">
                    <!-- NIK (selalu tampil, realtime filter) -->
                    <div class="col-md-12">
                      <label for="nik" class="form-label">NIK Orang Tua</label>
                      <input
                        type="text"
                        v-model="filter_anak.nik"
                        id="nik"
                        class="form-control"
                        placeholder="Cari berdasarkan NIK Orang Tua"
                      />
                    </div>

                    <!-- Expandable section -->
                    <div v-if="isFilterOpen" class="row g-3 align-items-end mt-2">
                      <!-- Nama -->
                      <div class="col-md-2">
                        <label for="nama" class="form-label">Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nama"
                          v-model="advancedFilter_anak.nama"
                          placeholder="Nama Anak"
                        />
                      </div>

                      <!-- Gender -->
                      <div class="col-md-2">
                        <label for="gender" class="form-label">Jenis Kelamin</label>
                        <select
                          class="form-select"
                          id="gender"
                          v-model="advancedFilter_anak.gender"
                        >
                          <option value="">-- semua --</option>
                          <option value="L">Laki-laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                      </div>

                      <!-- KIA -->
                      <div class="col-md-4">
                        <label for="kia" class="form-label">No. KIA</label>
                        <input
                          type="text"
                          class="form-control"
                          id="no_kia"
                          v-model="advancedFilter_anak.no_kia"
                          placeholder="Nomor KIA"
                        />
                      </div>

                      <!-- Tanggal Lahir -->
                      <div class="col-md-4">
                        <label for="tgl_lahir" class="form-label">Tanggal Lahir</label>
                        <input
                          type="date"
                          class="form-control"
                          id="tgl_lahir"
                          v-model="advancedFilter_anak.lahir"
                        />
                      </div>

                      <!-- Tombol -->
                      <div class="col-md-12">
                        <button
                          type="submit"
                          class="btn btn-primary float-start"
                          @click="applyAdvancedFilter_anak"
                        >
                          <i class="bi bi-search"></i> Cari
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary float-end"
                          @click="resetFilter_anak"
                        >
                          <i class="bi bi-arrow-clockwise"></i> Reset
                        </button>
                      </div>
                    </div>
                  </form>

                  <!-- Expand/Collapse Button -->
                  <div class="text-end mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      @click="toggleExpand"
                    >
                      <i :class="isFilterOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                      {{ isFilterOpen ? 'Tutup Filter Lain' : 'Filter Lain' }}
                    </button>
                  </div>
                </div>

                <!-- Button Group -->
                <div class="container-fluid mt-4 d-flex flex-wrap gap-2 justify-content-end">
                  <!-- Tambah Data -->
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTambah"
                  >
                    <i class="bi bi-plus-square"></i> Tambah Data
                  </button>

                  <!-- Import Group -->
                  <a
                    class="btn btn-success"
                    href="#"
                    @click.prevent="openImport('Import Data Anak')"
                  >
                    <i class="bi bi-filetype-csv"></i> Import Data Anak
                  </a>
                  <!-- <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-success dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-file-earmark-arrow-up"></i> Import
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Kunjungan')"
                        >
                          <i class="bi bi-filetype-csv"></i> Kunjungan
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Intervensi')"
                        >
                          <i class="bi bi-filetype-csv"></i> Intervensi
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Pendampingan')"
                        >
                          <i class="bi bi-filetype-csv"></i> Pendampingan
                        </a>
                      </li>
                    </ul>
                  </div> -->

                  <!-- Grafik Gizi -->
                  <!-- <router-link to="/admin/grafik" class="btn btn-secondary">
                    <i class="bi bi-graph-up"></i> Grafik Gizi
                  </router-link> -->
                </div>

                <!-- Cards Section -->
                <div class="container-fluid">
                  <!-- Data Table -->
                  <div class="card modern-card mt-4">
                    <div class="card-body">
                      <div class="table-responsive">
                        <EasyDataTable
                          :headers="headers_anak"
                          :items="filteredAnak_anak"
                          :search-value="filter_anak.nik"
                          buttons-pagination
                          :rows-per-page="5"
                          table-class="table-modern"
                          theme-color="var(--bs-primary)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab Kunjungan Posyandu -->
              <div class="tab-pane fade" id="kunjungan-tab-pane" role="tabpanel" tabindex="0">
                <!-- Filter -->
                <div class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container-fluid">
                  <form class="row g-3 align-items-end" @submit.prevent="applyFilter">
                    <!-- NIK (selalu tampil, realtime filter) -->
                    <div class="col-md-12">
                      <label for="nik" class="form-label">NIK Orang Tua</label>
                      <input
                        type="text"
                        v-model="filter.nik"
                        id="nik"
                        class="form-control"
                        placeholder="Cari berdasarkan NIK"
                      />
                    </div>

                    <!-- Expandable section -->
                    <div v-if="isFilterOpen" class="row g-3 align-items-end mt-2">
                      <!-- Usia -->
                      <div class="col-md-2">
                        <label for="usia" class="form-label">Usia</label>
                        <input
                          type="number"
                          class="form-control"
                          id="usia"
                          v-model="advancedFilter.usia"
                          placeholder="Tahun"
                        />
                      </div>

                      <!-- Status BB -->
                      <div class="col-md-2">
                        <label for="status_bb2" class="form-label">Status BB</label>
                        <select
                          class="form-select"
                          id="status_bb2"
                          v-model="advancedFilter.status_bb"
                        >
                          <option value="">-- semua --</option>
                          <option value="Sangat Kurang">Sangat Kurang</option>
                          <option value="Kurang">Kurang</option>
                          <option value="Normal">Normal</option>
                          <option value="Resiko Lebih">Resiko Lebih</option>
                        </select>
                      </div>

                      <!-- Status TB -->
                      <div class="col-md-2">
                        <label for="status_tb" class="form-label">Status TB</label>
                        <select
                          class="form-select"
                          id="status_tb"
                          v-model="advancedFilter.status_tb"
                        >
                          <option value="">-- semua --</option>
                          <option value="Sangat Pendek">Sangat Pendek</option>
                          <option value="Pendek">Pendek</option>
                          <option value="Normal">Normal</option>
                          <option value="Tinggi">Tinggi</option>
                        </select>
                      </div>

                      <!-- Status Gizi -->
                      <div class="col-md-2">
                        <label for="status_gizi" class="form-label">Status Gizi</label>
                        <select
                          class="form-select"
                          id="status_gizi"
                          v-model="advancedFilter.status_bb_tb"
                        >
                          <option value="">-- semua --</option>
                          <option value="Gizi Buruk">Gizi Buruk</option>
                          <option value="Gizi Kurang">Gizi Kurang</option>
                          <option value="Gizi Baik">Gizi Baik</option>
                          <option value="Berisiko Gizi Lebih">Berisiko Gizi Lebih</option>
                          <option value="Gizi Lebih">Gizi Lebih</option>
                          <option value="Obesitas">Obesitas</option>
                        </select>
                      </div>

                      <!-- Tanggal Kunjungan -->
                      <div class="col-md-4">
                        <label for="tgl_kunjungan" class="form-label">Tanggal Kunjungan</label>
                        <input
                          type="date"
                          class="form-control"
                          id="tgl_kunjungan"
                          v-model="advancedFilter.kunjungan"
                        />
                      </div>

                      <!-- Tombol -->
                      <div class="col-md-12">
                        <button
                          type="submit"
                          class="btn btn-primary float-start"
                          @click="applyAdvancedFilter"
                        >
                          <i class="bi bi-search"></i> Cari
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary float-end"
                          @click="resetFilter_anak"
                        >
                          <i class="bi bi-arrow-clockwise"></i> Reset
                        </button>
                      </div>
                    </div>
                  </form>

                  <!-- Expand/Collapse Button -->
                  <div class="text-end mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      @click="toggleExpand"
                    >
                      <i :class="isFilterOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                      {{ isFilterOpen ? 'Tutup Filter Lain' : 'Filter Lain' }}
                    </button>
                  </div>
                </div>

                <!-- Button Group -->
                <div class="container-fluid mt-4 d-flex flex-wrap gap-2 justify-content-end">
                  <!-- Tambah Data -->
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTambah"
                  >
                    <i class="bi bi-plus-square"></i> Tambah Data
                  </button>

                  <!-- Import Group -->
                  <a
                    class="btn btn-success"
                    href="#"
                    @click.prevent="openImport('Import Kunjungan')"
                  >
                    <i class="bi bi-filetype-csv"></i> Import Kunjungan
                  </a>
                  <!-- <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-success dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-file-earmark-arrow-up"></i> Import
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Kunjungan')"
                        >
                          <i class="bi bi-filetype-csv"></i> Kunjungan
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Intervensi')"
                        >
                          <i class="bi bi-filetype-csv"></i> Intervensi
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Pendampingan')"
                        >
                          <i class="bi bi-filetype-csv"></i> Pendampingan
                        </a>
                      </li>
                    </ul>
                  </div> -->

                  <!-- Grafik Gizi -->
                  <!-- <router-link to="/admin/grafik" class="btn btn-secondary">
                    <i class="bi bi-graph-up"></i> Grafik Gizi
                  </router-link> -->
                </div>

                <!-- Cards Section -->
                <div class="container-fluid">
                  <!-- Data Table -->
                  <div class="card modern-card mt-4">
                    <div class="card-body">
                      <div class="table-responsive">
                        <EasyDataTable
                          :headers="headers"
                          :items="filteredAnak"
                          :search-value="filter.nik"
                          buttons-pagination
                          :rows-per-page="5"
                          table-class="table-modern"
                          theme-color="var(--bs-primary)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab Intervensi -->
              <div class="tab-pane fade" id="intervensi-tab-pane" role="tabpanel" tabindex="0">
                <!-- Filter -->
                <div class="filter-wrapper bg-light rounded shadow-sm p-3 mt-3 container-fluid">
                  <form class="row g-3 align-items-end" @submit.prevent="applyFilter_intervensi">
                    <!-- NIK (selalu tampil, realtime filter) -->
                    <div class="col-md-12">
                      <label for="nik" class="form-label">NIK Orang Tua</label>
                      <input
                        type="text"
                        v-model="filter_intervensi.nik"
                        id="nik"
                        class="form-control"
                        placeholder="Cari berdasarkan NIK Orang Tua"
                      />
                    </div>

                    <!-- Expandable section -->
                    <div v-if="isFilterOpen" class="row g-3 align-items-end mt-2">
                      <!-- Nama -->
                      <div class="col-md-6">
                        <label for="nama" class="form-label">Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          id="nama"
                          v-model="advancedFilter_intervensi.nama"
                          placeholder="Nama Anak"
                        />
                      </div>

                      <!-- Tanggal Lahir -->
                      <div class="col-md-6">
                        <label for="tgl_kunjungan" class="form-label">Tanggal Kunjungan</label>
                        <input
                          type="date"
                          class="form-control"
                          id="tgl_kunjungan"
                          v-model="advancedFilter_intervensi.tgl_kunjungan"
                        />
                      </div>

                      <!-- Tombol -->
                      <div class="col-md-12">
                        <button
                          type="submit"
                          class="btn btn-primary float-start"
                          @click="applyAdvancedFilter_intervensi"
                        >
                          <i class="bi bi-search"></i> Cari
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary float-end"
                          @click="resetFilter_intervensi"
                        >
                          <i class="bi bi-arrow-clockwise"></i> Reset
                        </button>
                      </div>
                    </div>
                  </form>

                  <!-- Expand/Collapse Button -->
                  <div class="text-end mt-2">
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      @click="toggleExpand"
                    >
                      <i :class="isFilterOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'"></i>
                      {{ isFilterOpen ? 'Tutup Filter Lain' : 'Filter Lain' }}
                    </button>
                  </div>
                </div>

                <!-- Button Group -->
                <div class="container-fluid mt-4 d-flex flex-wrap gap-2 justify-content-end">
                  <!-- Tambah Data -->
                  <button
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTambah"
                  >
                    <i class="bi bi-plus-square"></i> Tambah Data
                  </button>

                  <!-- Import Group -->
                  <a
                    class="btn btn-success"
                    href="#"
                    @click.prevent="openImport('Import Data Intervensi')"
                  >
                    <i class="bi bi-filetype-csv"></i> Import Data Intervensi
                  </a>
                  <!-- <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-success dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-file-earmark-arrow-up"></i> Import
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Kunjungan')"
                        >
                          <i class="bi bi-filetype-csv"></i> Kunjungan
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Intervensi')"
                        >
                          <i class="bi bi-filetype-csv"></i> Intervensi
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#"
                          @click.prevent="openImport('Import Pendampingan')"
                        >
                          <i class="bi bi-filetype-csv"></i> Pendampingan
                        </a>
                      </li>
                    </ul>
                  </div> -->

                  <!-- Grafik Gizi -->
                  <!-- <router-link to="/admin/grafik" class="btn btn-secondary">
                    <i class="bi bi-graph-up"></i> Grafik Gizi
                  </router-link> -->
                </div>

                <!-- Cards Section -->
                <div class="container-fluid">
                  <!-- Data Table -->
                  <div class="card modern-card mt-4">
                    <div class="card-body">
                      <div class="table-responsive">
                        <EasyDataTable
                          :headers="headers_intervensi"
                          :items="filteredAnak_intervensi"
                          :search-value="filter_intervensi.nik"
                          buttons-pagination
                          :rows-per-page="5"
                          table-class="table-modern"
                          theme-color="var(--bs-primary)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tab Pendampingan TPK -->
              <div class="tab-pane fade" id="tpk-tab-pane" role="tabpanel" tabindex="0">
                Pendampingan TPK
              </div>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <CopyRight class="mt-auto" />
      </div>
    </div>
  </div>

  <!-- Modal Tambah -->
  <div class="modal fade" id="modalTambah" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div
        class="modal-content shadow-lg border-0 rounded-4"
        :style="{
          backgroundImage: background ? `url(${background})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }"
      >
        <!-- Header -->
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title fw-bold text-primary">Tambah Data Anak</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form class="row g-4">
            <!-- NIK Ortu -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">NIK Ortu</label>
              <input
                type="text"
                class="form-control shadow-sm"
                v-model="form.nik"
                @input="form.nik = form.nik.replace(/\D/g, '')"
                maxlength="16"
              />
            </div>

            <!-- Nama Anak -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Nama Anak</label>
              <input type="text" class="form-control shadow-sm" v-model="form.nama" />
            </div>

            <!-- Jenis Kelamin -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Jenis Kelamin</label>
              <select class="form-select shadow-sm" v-model="form.gender">
                <option value="">L/P</option>
                <option value="L">Laki-laki</option>
                <option value="P">Perempuan</option>
              </select>
            </div>

            <!-- Alamat -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Alamat</label>
              <textarea class="form-control shadow-sm" rows="2" v-model="form.alamat"></textarea>
            </div>

            <!-- Tanggal lahir & Usia -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Tanggal Lahir</label>
              <input
                type="date"
                class="form-control shadow-sm"
                v-model="form.tgl_lahir"
                @change="hitungUsia"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Usia (bulan)</label>
              <input
                type="text"
                class="form-control shadow-sm bg-light"
                v-model="form.usia"
                readonly
              />
            </div>

            <!-- Status BB, TB, BB/TB -->
            <div class="col-md-4">
              <label class="form-label small fw-semibold text-secondary">Status BB</label>
              <select class="form-select shadow-sm" v-model="form.status_bb">
                <option value="">Pilih status</option>
                <option value="Sangat Kurang">Sangat Kurang</option>
                <option value="Kurang">Kurang</option>
                <option value="Normal">Normal</option>
                <option value="Resiko Lebih">Resiko Lebih</option>
              </select>
            </div>

            <div class="col-md-4">
              <label class="form-label small fw-semibold text-secondary">Status TB</label>
              <select class="form-select shadow-sm" v-model="form.status_tb">
                <option value="">Pilih status</option>
                <option value="Sangat Pendek">Sangat Pendek</option>
                <option value="Pendek">Pendek</option>
                <option value="Normal">Normal</option>
                <option value="Tinggi">Tinggi</option>
              </select>
            </div>

            <div class="col-md-4">
              <label class="form-label small fw-semibold text-secondary">Status BB/TB</label>
              <select class="form-select shadow-sm" v-model="form.status_bb_tb">
                <option value="">Pilih status</option>
                <option value="Gizi Buruk">Gizi Buruk</option>
                <option value="Gizi Kurang">Gizi Kurang</option>
                <option value="Gizi Baik">Gizi Baik</option>
                <option value="Berisiko Gizi Lebih">Berisiko Gizi Lebih</option>
                <option value="Gizi Lebih">Gizi Lebih</option>
                <option value="Obesitas">Obesitas</option>
              </select>
            </div>

            <!-- RT, RW -->
            <div class="col-md-3">
              <label class="form-label small fw-semibold text-secondary">RT</label>
              <input type="number" min="0" class="form-control shadow-sm" v-model="form.rt" />
            </div>
            <div class="col-md-3">
              <label class="form-label small fw-semibold text-secondary">RW</label>
              <input type="number" min="0" class="form-control shadow-sm" v-model="form.rw" />
            </div>

            <!-- Kunjungan Terakhir -->
            <div class="col-md-6">
              <label class="form-label small fw-semibold text-secondary">Kunjungan Terakhir</label>
              <input type="date" class="form-control shadow-sm" v-model="form.kunjungan" />
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 d-flex justify-content-between">
          <button class="btn btn-light border rounded-pill px-4" data-bs-dismiss="modal">
            <i class="bi bi-x-circle me-2"></i> Batal
          </button>
          <button class="btn btn-success rounded-pill px-4" @click="saveData">
            <i class="bi bi-save me-2"></i> Simpan
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Import -->
  <div class="modal fade" id="modalImport" ref="modalImport" tabindex="-1">
    <div class="modal-dialog">
      <div
        class="modal-content"
        :style="{
          backgroundImage: background ? `url(${background})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }"
      >
        <!-- Header -->
        <div class="modal-header text-primary bg-light border-0 rounded-top-4">
          <h5 class="modal-title">{{ importTitle }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="alert alert-warning p-2">
            <ul>
              <li>Fungsi import hanya untuk data kunjungan posyandu</li>
              <li>Pastikan data yang diimport, berformat CSV</li>
              <li>Pastikan data sudah lengkap sebelum di import</li>
            </ul>
          </div>
          <form @submit.prevent="handleImport">
            <input type="file" class="form-control" ref="csvFile" accept=".csv" />
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 d-flex justify-content-between">
          <button class="btn btn-light border rounded-pill px-4" data-bs-dismiss="modal">
            <i class="bi bi-x-circle me-2"></i> Batal
          </button>
          <button class="btn btn-success rounded-pill px-4" @click="handleImport">
            <i class="bi bi-upload me-2"></i> Unggah
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Success -->
  <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content border-0 shadow-lg rounded-4"
        :style="{
          backgroundImage: background ? `url(${background})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }"
      >
        <div class="modal-header bg-success text-white rounded-top-4">
          <h5 class="modal-title">✅ Berhasil</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          <p class="mb-0">Data Anak berhasil disimpan ke <strong>localStorage</strong>.</p>
        </div>
        <div class="modal-footer justify-content-center">
          <button type="button" class="btn btn-success rounded-pill px-4" data-bs-dismiss="modal">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Loader Overlay with Animated Progress -->
  <div
    v-if="isLoadingImport"
    class="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-dark bg-opacity-50"
    style="z-index: 2000"
  >
    <div class="w-50">
      <div class="progress" style="height: 1.8rem; border-radius: 1rem; overflow: hidden">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          :style="{ width: importProgress + '%' }"
          :data-progress="progressLevel"
        >
          <span class="fw-bold">{{ animatedProgress }}%</span>
        </div>
      </div>
    </div>
    <p class="text-white mt-3">Mengimpor data... {{ currentRow }}/{{ totalRows }} baris</p>
  </div>
</template>

<style scoped>
#chartBB,
#chartTB,
#chartBBTB {
  width: 100% !important;
  max-width: 300px;
  margin: auto;
}

.nutrition-wrapper {
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
/* .filter-wrapper {
  position: relative;
  z-index: 0;
  margin-top: -30px !important;
  width: 97%;
  border-radius: 0.75rem;
} */
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
  background-color: #f9f9fb;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: rgba(255, 255, 255, 0.7);
}
/* Smooth Apple-like Modal */
.modern-modal {
  border-radius: 1.5rem;
  border: 1px solid #eaeaea;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  background: #fff;
  transition: all 0.3s ease-in-out;
}

/* Form lebih clean */
.form-control-modern,
.form-select.form-control-modern {
  border-radius: 0.75rem;
  border: 1px solid #ddd;
  padding: 0.6rem 1rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.form-control-modern:focus {
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
}

/* Animasi modal lebih halus */
.modal.fade .modal-dialog {
  transform: translateY(20px);
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.modal.fade.show .modal-dialog {
  transform: translateY(0);
  opacity: 1;
}
.modern-card {
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border: none;
}
.table-modern {
  border: none !important;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

/* Header */
.table-modern th {
  background-color: var(--bs-primary) !important; /* primary */
  color: #fff !important;
  font-weight: 600;
  padding: 0.75rem;
  text-align: left;
}

/* Cell */
.table-modern td {
  vertical-align: middle;
  padding: 0.65rem 0.75rem;
  border-bottom: 1px solid #f1f1f1;
}

/* Row hover */
.table-modern tr:hover {
  background-color: rgba(13, 110, 253, 0.08) !important;
  transition: background 0.2s ease-in-out;
}

/* Pagination & footer */
.table-modern .pagination {
  margin-top: 1rem;
}

.table-modern .pagination .page-link {
  border-radius: 0.5rem;
  color: var(--bs-primary);
}

.table-modern .pagination .active .page-link {
  background-color: #6c757d; /* secondary */
  border-color: #6c757d;
  color: #fff;
}

.progress-bar {
  transition: width 0.4s ease-in-out;
}
.progress-bar[data-progress='low'] {
  background-color: var(--bs-primary); /* biru awal */
}
.progress-bar[data-progress='mid'] {
  background-color: #ffc107; /* kuning tengah */
}
.progress-bar[data-progress='high'] {
  background-color: #198754; /* hijau akhir */
}
</style>

<script>
import CopyRight from '@/components/CopyRight.vue'
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import HeaderAdmin from '@/components/HeaderAdmin.vue'
import EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'
//import { Chart } from 'chart.js/auto' // ini ganti <script src=...>
import { Modal } from 'bootstrap' // <-- butuh ini untuk kontrol modal

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Children',
  components: { NavbarAdmin, CopyRight, HeaderAdmin, EasyDataTable },
  data() {
    return {
      isCollapsed: false,
      isFilterOpen: false,
      importTitle: 'Import File', // <-- judul modal dinamis
      showAlert: false,
      showSuccessModal: false, // kontrol popup sukses
      isLoadingImport: false,
      importProgress: 0,
      animatedProgress: 0,
      currentRow: 0,
      totalRows: 0,
      form: {
        nik: '',
        nama: '',
        gender: '',
        alamat: '',
        tgl_lahir: '',
        usia: 0,
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        rt: '',
        rw: '',
        kunjungan: '',
      },

      // data intervensi
      intervensi: [
        {
          nama: 'Zainudin',
          nik_ayah: '1789026384957681',
          nama_ayah: 'Zainal Arifin',
          nik_ibu: '3124026384957681',
          nama_ibu: 'Dinda Fitari',
          tgl_kunjungan: '2025-09-12',
          ket: 'Semua Baik',
        },
        {
          nama: 'Didin',
          nik_ayah: '1543226384957681',
          nama_ayah: 'Ayah',
          nik_ibu: '3124020987657681',
          nama_ibu: 'Bunda',
          tgl_kunjungan: '2025-09-12',
          ket: 'Semua Baik',
        },
      ],

      // data dummy kunjungan
      kunjungan_posyandu: [
        {
          kia: '8196839208745623',
          nama: 'Ahmad Fauzi',
          nik: '3276012309870001',
          nama_ibu: 'Siti Aminah',
          tgl_lahir: '2022-03-14',
          gender: 'L',
          alamat: 'Jl. Damai 3 No. 36,',
          phone: '0819978654432',
          provinsi: 'DKI Jakarta',
          kota: 'Jakarta Timur',
          kecamatan: 'Cipayung',
          desa: 'Cilangkap',
          rw: '02',
          rt: '05',
          usia: '41',
          kunjungan: '2025-08-10',
          status_bb: 'Normal',
          status_tb: 'Pendek',
          status_bb_tb: 'Gizi Baik',
        },
        {
          kia: '-',
          nama: 'Ahmad Dino',
          nik: '3270875389405382',
          nama_ibu: 'Diniyah',
          tgl_lahir: '2021-03-20',
          gender: 'L',
          alamat: 'Jl. Damai 3 No. 39A,',
          phone: '0819970984432',
          provinsi: 'DKI Jakarta',
          kota: 'Jakarta Timur',
          kecamatan: 'Cipayung',
          desa: 'Cilangkap',
          rw: '02',
          rt: '05',
          usia: '41',
          kunjungan: '2025-08-10',
          status_bb: 'Normal',
          status_tb: 'Normal',
          status_bb_tb: 'Gizi Baik',
        },
        {
          kia: '819098087654312',
          nama: 'Fauzi Bukan',
          nik: '3271234567890123',
          nama_ibu: 'Siyah',
          tgl_lahir: '2024-03-14',
          gender: 'L',
          alamat: 'Jl. Damai 3 No. 44A,',
          phone: '0851978654432',
          provinsi: 'DKI Jakarta',
          kota: 'Jakarta Timur',
          kecamatan: 'Cipayung',
          desa: 'Cilangkap',
          rw: '02',
          rt: '05',
          usia: '1',
          kunjungan: '2025-08-10',
          status_bb: 'Normal',
          status_tb: 'Normal',
          status_bb_tb: 'Gizi Baik',
        },
      ],

      kelahiran_anak: [
        {
          no_kia: '-',
          nama: 'Dummy Name',
          tmpt_lahir: 'Depok',
          tgl_lahir: '2022-03-14',
          nik_ayah: '1678923680934782',
          ayah: 'Hamdan',
          nik_ibu: '3120987649567313',
          ibu: 'Hamidah',
          gender: 'L',
          anak_ke: '1',
          phone: '081798453887',
          alamat: 'Jl. Damai 3, No. 56',
          provinsi: 'DKI Jakarta',
          kota: 'Jakarta Timur',
          kecamatan: 'Cibubur',
          desa: 'Ciracas',
          rw: '06',
          rt: '03',
          tb: '8',
          bb: '3',
          lk: '20',
          jarak: '-',
          cara: 'normal',
        },
        {
          no_kia: '9823456789023456',
          nama: 'Erna',
          tmpt_lahir: 'Cipayung',
          tgl_lahir: '2022-03-14',
          nik_ayah: '1678923680909876',
          ayah: 'Erica',
          nik_ibu: '312098764956234',
          ibu: 'Nanang',
          gender: 'P',
          anak_ke: '2',
          phone: '081298453887',
          alamat: 'Jl. Damai 3, No. 100',
          provinsi: 'DKI Jakarta',
          kota: 'Jakarta Timur',
          kecamatan: 'Cibubur',
          desa: 'Ciracas',
          rw: '06',
          rt: '03',
          tb: '8',
          bb: '3',
          lk: '20',
          jarak: '2',
          cara: 'sesar',
        },
      ],

      // header kunjungan table
      headers: [
        { text: 'NIK Orang Tua', value: 'nik' },
        { text: 'Nama', value: 'nama' },
        { text: 'L/P', value: 'gender' },
        { text: 'Tanggal Lahir', value: 'tgl_lahir' },
        { text: 'Usia (Bulan)', value: 'usia' },
        { text: 'Status BB', value: 'status_bb' },
        { text: 'Status TB', value: 'status_tb' },
        { text: 'Status Gizi', value: 'status_bb_tb' },
        { text: 'Alamat', value: 'alamat' },
        { text: 'RT', value: 'rt' },
        { text: 'RW', value: 'rw' },
        { text: 'Kunjungan Terakhir', value: 'kunjungan' },
      ],

      // header intervensi
      headers_intervensi: [
        { text: 'nama', value: 'nama' },
        { text: 'NIK Ayah', value: 'nik_ayah' },
        { text: 'Nama Ayah', value: 'nama_ayah' },
        { text: 'NIK Ibu', value: 'nik_ibu' },
        { text: 'Nama Ibu', value: 'nama_ibu' },
        { text: 'Tanggal Kunjungan', value: 'tgl_kunjungan' },
        { text: 'Keterangan', value: 'ket' },
      ],

      //header kelahiran
      headers_anak: [
        { text: 'Nama', value: 'nama' },
        { text: 'NIK Ayah', value: 'nik_ayah' },
        { text: 'NIK Ibu', value: 'nik_ibu' },
        { text: 'No. KIA', value: 'no_kia' },
        { text: 'Nama Ayah', value: 'ayah' },
        { text: 'Nama Ibu', value: 'ibu' },
        { text: 'L/P', value: 'gender' },
        { text: 'Tanggal Lahir', value: 'tgl_lahir' },
        { text: 'TB', value: 'tb' },
        { text: 'BB', value: 'bb' },
        { text: 'LK', value: 'lk' },
      ],
      // filter
      filter_anak: {
        nik: '',
      },
      advancedFilter_anak: {
        no_kia: '',
        tgl_lahir: '',
        gender: '',
        nama: '',
      },
      appliedAdvancedFilter_anak: {
        no_kia: '',
        tgl_lahir: '',
        gender: '',
        nama: '',
      },

      // filter
      filter: {
        nik: '',
      },
      advancedFilter: {
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        kunjungan: '',
      },
      appliedAdvancedFilter: {
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        kunjungan: '',
      },

      // filter intervensi
      filter_intervensi: {
        nik: '',
      },
      advancedFilter_intervensi: {
        nama: '',
        tgl_kunjungan: '',
      },
      appliedAdvancedFilter_intervensi: {
        nama: '',
        tgl_kunjungan: '',
      },
    }
  },
  computed: {
    background() {
      const config = JSON.parse(localStorage.getItem('siteConfig'))
      return config && config.background ? config.background : null
    },
    filteredAnak() {
      return this.kunjungan_posyandu.filter((item) => {
        const af = this.appliedAdvancedFilter

        const usiaFilter = af.usia ? Number(item.usia) === Number(af.usia) : true

        return (
          (this.filter.nik === '' || item.nik.includes(this.filter.nik)) &&
          usiaFilter &&
          (af.status_bb === '' || item.status_bb === af.status_bb) &&
          (af.status_tb === '' || item.status_tb === af.status_tb) &&
          (af.status_bb_tb === '' || item.status_bb_tb === af.status_bb_tb) &&
          (af.kunjungan === '' || item.kunjungan === af.kunjungan)
        )
      })
    },
    filteredAnak_anak() {
      return this.kelahiran_anak.filter((item) => {
        const af = this.appliedAdvancedFilter_anak
        const nikFilter = this.filter_anak.nik

        return (
          // filter NIK gabungan (ayah OR ibu)
          (nikFilter === '' ||
            item.nik_ayah.includes(nikFilter) ||
            item.nik_ibu.includes(nikFilter)) &&
          // filter lanjutan
          (af.nama === '' || item.nama === af.nama) &&
          (af.tgl_lahir === '' || item.tgl_lahir === af.tgl_lahir) &&
          (af.gender === '' || item.gender === af.gender) &&
          (af.no_kia === '' || item.no_kia === af.no_kia)
        )
      })
    },
    filteredAnak_intervensi() {
      return this.intervensi.filter((item) => {
        const af = this.appliedAdvancedFilter_intervensi
        const nikFilter = this.filter_intervensi.nik

        return (
          // filter NIK gabungan (ayah OR ibu)
          (nikFilter === '' ||
            item.nik_ayah.includes(nikFilter) ||
            item.nik_ibu.includes(nikFilter)) &&
          // filter lanjutan
          (af.nama === '' || item.nama === af.nama) &&
          (af.tgl_kunjungan === '' || item.tgl_kunjungan === af.tgl_kunjungan)
        )
      })
    },

    progressLevel() {
      if (this.importProgress < 40) return 'low'
      if (this.importProgress < 80) return 'mid'
      return 'high'
    },
  },
  methods: {
    // helper close modal
    closeModal(id) {
      const el = document.getElementById(id)
      if (el) {
        const instance = Modal.getOrCreateInstance(el)
        instance.hide()
      }

      // jaga-jaga kalau backdrop masih nyangkut
      setTimeout(() => {
        document.querySelectorAll('.modal-backdrop').forEach((el) => el.remove())
        document.body.classList.remove('modal-open')
        document.body.style.removeProperty('overflow')
        document.body.style.removeProperty('padding-right')
      }, 300) // delay biar nunggu animasi fade
    },
    updateProgressBar(percent, row, total) {
      this.importProgress = percent
      this.currentRow = row
      this.totalRows = total

      const start = this.animatedProgress
      const end = percent
      const step = (end - start) / 10
      let i = 0
      const interval = setInterval(() => {
        this.animatedProgress = Math.min(end, Math.round(start + step * i))
        i++
        if (this.animatedProgress >= end) clearInterval(interval)
      }, 30)
    },
    saveData() {
      this.closeModal('modalTambah')

      this.isLoadingImport = true
      this.importProgress = 0
      this.animatedProgress = 0
      this.currentRow = 0
      this.totalRows = 1 // hanya 1 record, bisa disesuaikan kalau batch

      // simulasi progress bertahap
      let step = 0
      const interval = setInterval(() => {
        step += 10
        this.importProgress = Math.min(step, 100)
        this.animatedProgress = this.importProgress
        this.currentRow = Math.round((this.totalRows * this.importProgress) / 100)

        if (this.importProgress >= 100) {
          clearInterval(interval)

          // lanjut simpan data

          this.kunjungan_posyandu.push({ ...this.form })
          this.showAlert = true
          setTimeout(() => (this.showAlert = false), 3000)

          // reset form
          this.form = {
            nik: '',
            nama: '',
            gender: 'L',
            alamat: '',
            tgl_lahir: '',
            usia: 0,
            status_bb: '',
            status_tb: '',
            status_bb_tb: '',
            rt: '',
            rw: '',
            kunjungan: '',
          }

          this.$nextTick(() => {
            const el = document.getElementById('successModal')
            if (el) {
              const instance = Modal.getOrCreateInstance(el)
              instance.show()
            }
          })

          this.isLoadingImport = false
        }
      }, 150) // jeda antar progress
      // refresh chart kalau ada
      if (typeof this.refreshCharts === 'function') {
        this.refreshCharts()
      }
    },
    openImport(title) {
      this.importTitle = title
      const el = this.$refs.modalImport
      const instance = Modal.getOrCreateInstance(el)
      instance.show()
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
    },
    toggleExpand() {
      this.isFilterOpen = !this.isFilterOpen
    },
    hitungUsia() {
      if (!this.form.tgl_lahir) {
        this.form.usia = 0
        return
      }
      const lahir = new Date(this.form.tgl_lahir)
      const today = new Date()

      let usia = (today.getFullYear() - lahir.getFullYear()) * 12
      usia += today.getMonth() - lahir.getMonth()

      // kalau tanggal hari ini < tanggal lahir, kurangi 1 bulan
      if (today.getDate() < lahir.getDate()) {
        usia -= 1
      }
      this.form.usia = usia >= 0 ? usia : 0
    },
    handleImport() {
      this.closeModal('modalImport')

      const fileInput = this.$refs.csvFile
      if (!fileInput || !fileInput.files.length) return

      this.isLoadingImport = true
      this.importProgress = 0
      this.animatedProgress = 0

      const file = fileInput.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        const text = e.target.result
        const rows = text
          .split('\n')
          .map((r) => r.trim())
          .filter((r) => r)
        const headers = rows[0].split(',').map((h) => h.trim())
        const total = rows.length - 1
        this.totalRows = total

        rows.slice(1).forEach((row, idx) => {
          const values = row.split(',').map((v) => v.trim())
          const obj = {}
          headers.forEach((h, i) => {
            obj[h] = values[i] || ''
          })

          this.kunjungan_posyandu.push({
            nik: obj.nik || '',
            nama: obj.nama || '',
            gender: obj.gender || '',
            alamat: obj.alamat || '',
            tgl_lahir: obj.tgl_lahir || '',
            usia: obj.usia || '',
            status_bb: obj.status_bb || '',
            status_tb: obj.status_tb || '',
            status_bb_tb: obj.status_bb_tb || '',
            rt: obj.rt || '',
            rw: obj.rw || '',
            kunjungan: obj.kunjungan || '',
          })

          const percent = Math.round(((idx + 1) / total) * 100)
          this.updateProgressBar(percent, idx + 1, total)
        })

        setTimeout(() => {
          this.isLoadingImport = false
          const el = document.getElementById('successModal')
          const instance = Modal.getOrCreateInstance(el)
          instance.show()
        }, 500)
      }

      reader.readAsText(file)
    },
    applyAdvancedFilter() {
      // Salin isi input advancedFilter ke appliedAdvancedFilter
      this.appliedAdvancedFilter = { ...this.advancedFilter }
    },
    applyAdvancedFilter_anak() {
      // Salin isi input advancedFilter ke appliedAdvancedFilter
      this.appliedAdvancedFilter_anak = { ...this.advancedFilter_anak }
    },
    applyAdvancedFilter_intervensi() {
      // Salin isi input advancedFilter ke appliedAdvancedFilter
      this.appliedAdvancedFilter_intervensi = { ...this.advancedFilter_intervensi }
    },
    resetFilter() {
      this.advancedFilter = {
        usia: '',
        status_bb: '',
        status_tb: '',
        status_bb_tb: '',
        kunjungan: '',
      }
      this.appliedAdvancedFilter = { ...this.advancedFilter }
    },
    resetFilter_anak() {
      this.advancedFilter_anak = {
        nama: '',
        no_kia: '',
        gender: '',
        tgl_lahir: '',
        kunjungan: '',
      }
      this.appliedAdvancedFilter_anak = { ...this.advancedFilter_anak }
    },
    resetFilter_intervensi() {
      this.advancedFilter_intervensi = {
        nama: '',
        tgl_kunjungan: '',
      }
      this.appliedAdvancedFilter_intervensi = { ...this.advancedFilter_intervensi }
    },
  },
  watch: {
    anak: {
      handler() {
        this.refreshCharts()
      },
      deep: true,
    },
  },
}
</script>
