<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();  // Lấy đối tượng route
const studentId = route.params.id;  // Lấy ID từ URL
const detailStudent = ref([]);  // Dữ liệu sinh viên
const loading= ref(true);
const error=ref(null);
const showStu = async () => {
  try {
    // gữi mã yêu cầu GET tới API
    const response = await axios.get(`http://localhost:3000/students/${studentId}`);
    // console.log(studentId);
    detailStudent.value = response.data;
  } catch (error) {
    error.value = "Lỗi" + error.message;
  } finally {
    loading.value = false; //kết thúc
  }
}
onMounted(showStu);
</script>
<template>
  <div class="container">
    <h1 class="text-center">Chi tiet Sinh Vien</h1>
    <!-- thông báo khi đang tải dữ liệu -->
    <p v-if="loading">Loading...</p>
    <!-- hiển thị -->
    <p v-if="error">{{ error }}</p>
    <!-- hiển thị danh sách người dùng -->
    <div v-if="!loading && !error">


        <div class="card" style="width: 30rem;">
        <img :src="detailStudent.image" alt="Student Image" class="card-img-top" width="max" height="max">

        <div class="card-body">
          <h2 class="card-title">{{ detailStudent.name }}</h2>
          <p class="card-text">
            <b>ID: </b> {{ detailStudent.id }}
          </p>
          <p class="card-text">
            <b>Age: </b> {{ detailStudent.age }}
          </p>
          <p class="card-text">
            <b>Email: </b> {{ detailStudent.email }}
          </p>
        </div>
      </div>


      <router-link to="/student" class="btn btn-success">Back</router-link>
    </div>
  </div>
</template>
