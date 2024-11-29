<script setup>
import {ref, onMounted, reactive} from 'vue';
import axios from 'axios';

const users = ref([]) //reactive chứa dữ liệu người dùng
const loading= ref(true)
const error=ref(null)
// gọi API khi comp home dc goi
const fetchUser = async()=>{
    try{
        // gữi mã yêu cầu GET tới API
        const response = await axios.get("http://localhost:3000/users");
        users.value = response.data; // truyền dữ liệu lấy đc vao users
    }catch(error){
        error.value = "Lỗi CMNR" +error.message;
    }finally{
        loading.value = false; //kết thúc
    }
}
// hàm xác nhận xóa ng dùng
const comfirmDelete = async(id)=>{
    // hiển thị hộp thoại xác nhận trc khi xóa
    if(window.confirm("bạn có chắc muốn cóa sinh vien này không")){
        // niếu ng dùng nhấn "ok" , gọi hàm xóa
        await deleteUser(id);
    }
};
// hàm xóa ng dùng khỏi API và danh sách
const deleteUser = async(id)=>{
    try {
        // gửi yêu cầu delete tới API để xóa ng dùng id tương ứng
        await axios.delete(`http://localhost:3000/users/${id}`);
        // cập nhật danh sách ng dùng sau khi xóa
        users.value = users.value.filter((user) =>user.id !== id);
        alert('xóa sinh vien thành công!');
    } catch (error) {
        alert("lỗi khi xóa sinh vien :"+error.message);
    }
};
onMounted(fetchUser);
</script>

<template>
 <div class="container">
    <h1 class="text-center">Danh Sách Người Dùng</h1>
    <!-- thông báo khi đang tải dữ liệu -->
     <p v-if="loading">Đang load đợi tí đê...</p>
     <!-- hiển thị -->
      <p v-if="error">{{ error }}</p>
      <!-- hiển thị danh sách người dùng -->
       <div v-if="!loading && !error">

        <router-link to="/add" class="btn btn-success">Thêm người dùng</router-link>
        <table class="table table-border table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Họ Tên</th>
                    <th>Tuoi</th>
                    <th>Email</th>
                    <th>Anh</th>
                    <th>Thao Tác</th>
                </tr>
            </thead>
            <tbody v-for="(user, key) in users" :key="key">
                <tr>
                    <td>{{ key+1 }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.image }}</td>
                    <td>
                        <!-- liên kết tới trang sủa ng dùng với id tương ứng -->
                         <router-link :to="`/edit/${user.id} `" class="btn btn-primary">Sửa</router-link>
                         <!--  nút xóa với sự kiện click gọi hàm comfimdelete -->
                        <button @click="comfirmDelete(user.id)" class="btn btn-danger">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
       </div>
</div>

</template>

<style scoped>

</style>
