<script setup>
import {ref, reactive} from 'vue';

const score = ref(5)

// v-for mang
const listStudent = reactive([
    "Anh Chao Em",
    "Anh Rat Chao Em",
    "Anh Rat Rat Chao Em"
])
// v-for obj
const teacher = reactive({
    name : "Khong Co Ten",
    gender: "Khong Phai Nu",
    country : "Noi Co Nguoi Sinh Song"
})
// v-for template (mang obj)
const listFood = reactive([
    {id : 1, code:"ACE", name:"Anh Chao Em", stock :10},
    {id : 2, code:"ARCE", name:"Anh Rat Chao Em", stock :0},
    {id : 3, code:"ARRCE", name:"Anh Rat Rat Chao Em", stock :5},
])

const listDanhsach = reactive([
    {
       id :1,
       name : "Khong Co Ban Do",
       imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROs2qn9sg5pq6tP3nJZGD1AaGjtdr5Sstg6w&s",
       price: 100000,
       sl : 16
    },
    {
       id :2,
       name : "Khong Co Ban Do",
       imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROs2qn9sg5pq6tP3nJZGD1AaGjtdr5Sstg6w&s",
       price: 120000,
       sl : 36
    },
    {
       id :3,
       name : "Co Cai Nit",
       imgUrl : "",
       price: 900000,
       sl : 6
    }
])
</script>

<template>
  <div class="layout">



  <div>
        <h1>ket qua hoc tap : {{ score }}</h1>
        <h2 v-if="score>=9.2">Gioi</h2>
        <h2 v-else-if="score>=7">Kha</h2>
        <h2 v-else-if="score>=5">Tien Bo</h2>
        <h2 v-else>Yeu</h2>
        <input type="number" step="any" v-model="score">
    </div>
    <!-- v-for mang -->
    <div>

        <table class="table">
            <thead>
                <th>STT</th>
                <th>Ho Ten</th>
            </thead>
            <tbody v-for="(student, index) in listStudent" :key="index">
                <tr>
                    <td>{{ index+1 }}</td>
                    <td>{{ student }}</td>
                </tr>
            </tbody>
        </table>
    </div>
  <!-- v-for object -->
    <div>
        <table class="table">
            <thead>
                <th>Key</th>
                <th>Value</th>
            </thead>
            <tbody v-for="(value, key) in teacher" :key="key">
                <tr>
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
     </div>
     <!-- v-for template (mang obj) -->
     <div>
        <table class="table">
            <thead>
                <th>STT</th>
                <th>ID</th>
                <th>Ma</th>
                <th>Ten</th>
                <th>So Luong</th>
                <th>Trang Thai</th>
            </thead>
            <tbody v-for="(food, index) in listFood" :key="index">
                <tr>
                    <td>{{ index+1 }}</td>
                    <td>{{ food.id }}</td>
                    <td>{{ food.code }}</td>
                    <td>{{ food.name }}</td>
                    <td>{{ food.stock }}</td>
                    <td>{{ food.stock > 0 ? "Con Hang":"Het Hang" }}</td>
                </tr>
            </tbody>
        </table>
     </div>
     <!-- cho 1 danh sach san pham (MA, ten , hinh anh(Url), gia tien , so luong)
      hien thi danh sach ra man hinh
      neu san pham khong co hinh anh thi hien thi ra 1 anh khac
      neu so luong duoi 10 sp thi hien thi trang thai sap het hang -->
      <div>
        <table class="table">
            <thead>
                <th>STT</th>
                <th>Ma</th>
                <th>Ten</th>
                <th>Anh</th>
                <th>Gia</th>
                <th>So Luong</th>
                <th>Trang Thai</th>
            </thead>
            <tbody v-for="(ds, index) in listDanhsach" :key="index">
                <tr>
                    <td>{{ index+1 }}</td>
                    <td>{{ ds.id }}</td>
                    <td>{{ ds.name }}</td>
                    <td><img :src="ds.imgUrl== ''?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROs2qn9sg5pq6tP3nJZGD1AaGjtdr5Sstg6w&s':ds.imgUrl " alt=""></td>
                    <td>{{ ds.gia }}</td>
                    <td>{{ ds.sl }}</td>
                    <td>{{ ds.sl <10 ? "Sap Het hang":"Con Hang" }}</td>
                </tr>
            </tbody>
        </table>
      </div>  
    </div>
</template>

<style scoped>
img{
    width: 100;
    height: 100;
}


</style>
