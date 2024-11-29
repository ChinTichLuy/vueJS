<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";

const route = useRoute()
const router = useRouter();

const editingStu = ref({});

const fetchStu = async ()=>{
    try {
        const response= await axios.get(`http://localhost:3000/students/${route.params.id}`);
        editingStu.value = response.data;
    } catch (error) {
        alert("lỗi khi tải dữ liệu sinh vien :" + error.massahe);
    }
};

const updateStu = async()=>{
    try {
        await axios.put(`http://localhost:3000/students/${route.params.id}`, editingStu.value);
        alert('cập nhật sinh vien thành công');
        router.push("/student");
    } catch (error) {
        alert("lỗi khi cập nhật sinh vien :" + error.massahe);
    }
}
onMounted(fetchStu);
</script>
<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center mb-4"> Cập Nhật Sinh vien</h1>
                <form @submit.prevent="updateStu" class="card shadow p-4">
                    <div class="form-group mb-3">
                        <label for="name">Họ Tên</label>
                        <input type="text" id="name" v-model="editingStu.name" class="form-control" placeholder="Nhập Họ tên" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="age">Age</label>
                        <input type="number" id="age" v-model="editingStu.age" class="form-control" placeholder="Nhập Tuoi" required>
                    </div>

                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="editingStu.email" class="form-control" placeholder="Nhập Email" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="image">Image</label>
                        <input type="text" id="image" v-model="editingStu.image" class="form-control" required>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button type="submit" class="btn btn-success">Cập Nhật</button>
                        <router-link to="/" class="btn btn-secondary">Quay lại</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
