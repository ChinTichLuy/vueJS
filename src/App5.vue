<
<script setup>
import {ref, reactive, computed} from "vue"
const name = ref("nguyen hoang tu")

const age = ref(19)
const namSinh = computed(()=>2024 - age.value);

//bai tap
// khai bao 1 bien so luong, 1 bien gia tien
const soLuong = ref(5)
const giaTien = ref(5000)
// hien thi ra man hinh gia tri
// them 2 o input su dung blinding 2 chieu cho 2 bien tren
// hien thi ra man hinh tong tien (so luong x gia tien)
const tongTien = computed(()=>soLuong.value*giaTien.value);
// khi thay doi gia tri trong 2 input thi tong tien cung thay doi theo

const reName = ()=>{
  name.value = "Tran Thi Hue"
}

// const imgURL = computed(()=>"http://picsum.photos/300/300")
const imgURL = ref("https://homegift.vn/img/cms/Blog-CMS/Thuy-Sinh-Tieu-Canh-be-ca-mini-02-opt.jpg")

// them 1 o input nhap link anh, khi nhap link anh thi link anh moi tren man hinh cung thay doi


const styleDIV = ref({backgroundColor:'brown', color:'white', padding:'30px'})
</script>
<template>
<div class="container">
  <!-- binding 1 chieu -->
  <h1>ho va ten: {{ name }}</h1>
  <!-- binding 2 chieu -->
  <input type="text" v-model="name">
  <!-- binding 1 chieu su kien -->
   <button class="btn btn-warning" @click="reName">Doi ten</button>
   <!-- binding 1 chieu thuoc tinh -->
  <!-- <img v-bind:src="imgURL" alt=""> -->
  <br>
  <input type="text" v-model="imgURL">
 <img :src="imgURL" alt=""> <br> <br>
  <h2>Tuoi {{ age }}</h2>
  <h2>Nam sinh {{ namSinh }}</h2>
  <input type="text" v-model="age">
  <br><hr> <br>

 <h2>So luong : {{ soLuong }}</h2>
 <input type="text" v-model="soLuong">
 <h2>Gia tien : {{ giaTien }}</h2>
 <input type="text" v-model="giaTien">

 <h2>So luong : {{ soLuong }}</h2>
 <h2>Tong tien = {{ tongTien }} VND</h2>


</div>
<div class="container" >
  <div v-bind:class="'hello'">
    <h1>Xin chao moi nguoi</h1>
  </div>
  <div v-bind:style="{backgroundColor:'green', color:'white', padding:'30px'}">
    <h1>Xin chao moi nguoi</h1>
  </div>
  <div v-bind:style="styleDIV">
    <h1>Xin chao moi nguoi</h1>
  </div>


</div>

</template>

<style scoped>
.hello{
  background-color: gray;
  color: White;
  padding: 20px;
}

</style>




