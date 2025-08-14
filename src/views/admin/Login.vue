<template>
  <div class="d-flex flex-column min-vh-100 bg-brand-gradient">
    <!-- Form di tengah -->
    <div class="flex-grow-1 d-flex justify-content-center align-items-center">
      <div
        class="card p-4 shadow-lg rounded-4"
        style="min-width: 320px; max-width: 400px; width: 100%"
      >
        <h4 class="mb-4 text-center fw-bold text-brand">Login</h4>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control rounded-pill"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control rounded-pill"
              id="password"
              v-model="password"
              required
            />
          </div>
          <button type="submit" class="btn w-100 text-white btn-brand-gradient rounded-pill">
            Login
          </button>
        </form>
        <div class="mt-3 text-center">
          <a href="/admin/forgot" class="text-decoration-none text-brand fw-semibold"
            >Lupa Password?</a
          >
        </div>
      </div>
    </div>

    <!-- Footer di bawah -->
    <FooterUser />
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import FooterUser from '@/components/FooterUser.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginView',
  components: {
    FooterUser,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    handleLogin() {
      console.log('Login attempt:', this.email, this.password)

      Swal.fire({
        title: 'Login Berhasil!',
        text: 'Selamat datang!',
        icon: 'success',
        confirmButtonText: 'Go to Dashboard',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.push('/admin')
        }
      })
    },
  },
}
</script>

<style scoped>
/* Warna teks brand */
.text-brand {
  color: #006341;
}

/* Tombol gradient */
.btn-brand-gradient {
  background: linear-gradient(90deg, #006341, #b3a369);
  border: none;
  transition: opacity 0.2s ease-in-out;
}
.btn-brand-gradient:hover {
  opacity: 0.9;
}
</style>
