<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";

const route = useRoute()
const router = useRouter();

const editingUser = ref({});

const fetchUses = async ()=>{
    try {
        const response= await axios.get(`http://localhost:3000/users/${route.params.id}`);
        editingUser.value = response.data;
    } catch (error) {
        alert("lỗi khi tải dữ liệu ng dùng :" + error.massahe);
    }
};

const updateUser = async()=>{
    try {
        await axios.put(`http://localhost:3000/users/${route.params.id}`, editingUser.value);
        alert('cập nhật người dùng thành công');
        router.push("/");
    } catch (error) {
        alert("lỗi khi cập nhật ng dùng :" + error.massahe);
    }
}
</script>
<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <h1 class="text-center mb-4"> Cập Nhật người dùng</h1>
                <form @submit.prevent="updateUser" class="card shadow p-4">
                    <div class="form-group mb-3">
                        <label for="name">Họ Tên</label>
                        <input type="text" id="name" v-model="editingUser.name" class="form-control" placeholder="Nhập Họ tên" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="editingUser.email" class="form-control" placeholder="Nhập Email" required>
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
