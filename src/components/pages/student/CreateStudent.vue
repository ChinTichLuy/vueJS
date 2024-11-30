<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter()
const newStu = ref({ name: "", email: "", age: "", image: "" });
// const newStu = ref({ id: String(Math.floor(Math.random() * 100)),name: "", email:"",age:"",image:""});
// let lastID = 0;
// const changeID = ()=>{
//   lastID += 1;
//   return lastID;
// }
// const newStu = ref({id:String(changeID()),name: "", email:"",age:"",image:""});
const fetchMaxID = async () => {
  const response = await axios.get("http://localhost:3000/students");
  const maxID = response.data.reduce((max, student) => Math.max(max, Number(student.id || 0)), 0);
  return String(maxID + 1); // Trả về chuỗi của id lớn nhất + 1
};

const createStudent = async () => {
  try {
    newStu.value.id = await fetchMaxID();
    await axios.post("http://localhost:3000/students", newStu.value);
    alert('Them Sinh vien thành công');
    router.push("/student");
  } catch (error) {
    alert("lỗi khi thêm sinh vien :" + error.massage);
  }
};
</script>
<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4"> Thêm Sinh Vien</h1>
        <form @submit.prevent="createStudent" class="card shadow p-4">
          <div class="form-group mb-3">
            <label for="name">Họ Tên</label>
            <input type="text" id="name" v-model="newStu.name" class="form-control" placeholder="Nhập Họ tên" required
              pattern="^[A-Za-z\s]+$" title="Họ tên chỉ chứa ký tự chữ và khoảng trắng">
          </div>
          <div class="form-group mb-3">
            <label for="age">Age</label>
            <input type="number" id="age" v-model="newStu.age" class="form-control" placeholder="Nhập Age" required
              min="1" step="1" title="Tuổi phải là số nguyên dương">
          </div>
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="newStu.email" class="form-control" placeholder="Nhập Email" required
              title="Vui lòng nhập email hợp lệ">
          </div>
          <div class="form-group mb-3">
            <label for="image">Image</label>
            <input type="text" id="image" v-model="newStu.image" class="form-control" required pattern="https?://.+"
              title="Đường dẫn phải là URL hợp lệ (http hoặc https)">
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">Thêm</button>
            <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<!-- <template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-4"> Thêm Sinh Vien</h1>
        <form @submit.prevent="createStudent" class="card shadow p-4">
          <div class="form-group mb-3">
            <label for="name">Họ Tên</label>
            <input type="text" id="name" v-model="newStu.name" class="form-control" placeholder="Nhập Họ tên" required>
          </div>
          <div class="form-group mb-3">
            <label for="age">Age</label>
            <input type="number" id="age" v-model="newStu.age" class="form-control" placeholder="Nhập Age" required>
          </div>
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="newStu.email" class="form-control" placeholder="Nhập Email"
              required>
          </div>
          <div class="form-group mb-3">
            <label for="image">Image</label>
            <input type="text" id="image" v-model="newStu.image" class="form-control" required>
          </div>
          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-success">Thêm</button>
            <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template> -->
