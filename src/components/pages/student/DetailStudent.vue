<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const router = useRouter()


</script>
<template>
      <div class="container">
    <h1 class="text-center">Chi tiet Sinh Vien</h1>
    <!-- thông báo khi đang tải dữ liệu -->
     <p v-if="loading">Đang load đợi tí đê...</p>
     <!-- hiển thị -->
      <p v-if="error">{{ error }}</p>
      <!-- hiển thị danh sách người dùng -->
       <div v-if="!loading && !error">

        <router-link to="/student" class="btn btn-success">Back</router-link>
        <table class="table table-border table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Họ Tên</th>
                    <th>Tuoi</th>
                    <th>Email</th>
                    <th>Anh</th>
                </tr>
            </thead>
            <tbody v-for="(student, key) in students" :key="key">
                <tr>
                    <td>{{ key+1 }}</td>
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.age }}</td>
                    <td>{{ student.email }}</td>
                    <td>{{ student.image }}</td>
                </tr>
            </tbody>
        </table>
       </div>
</div>
</template>
