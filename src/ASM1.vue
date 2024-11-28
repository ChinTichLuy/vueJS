<script setup>
import { Alert } from 'bootstrap/dist/js/bootstrap.bundle.min';
import { reactive,ref,computed } from 'vue';

//cau 1+2
const Product = reactive({
  name :"San pham 1",
  price:300000,
  quantity: 0,
  description: "mo ta acbsb fabda ahf"
})

//cau 3
const checkSoluong= ()=>{
  if (Product.quantity > 0) alert('sp con hang')
  else alert('sp het hang')
}

// cau 4


const hienthi =(product)=>{
  alert(`ten san pham:${product.name}, gia: ${product.price}`)
}
const ListProducts = reactive([
  {
  name :"San pham 1",
  price:300000,
  quantity: 23,
  description: "mo ta acbsb fabda ahf"
},
{
  name :"San pham 2",
  price:90000,
  quantity: 27,
  description: "mo ta acbsb fabda ahf"
},
{
  name :"San pham 3",
  price:880000,
  quantity: 28,
  description: "mo ta acbsb fabda ahf"
}
]);


</script>

<template>

<!-- cau 1 -->
<div>
  <b>Cau 1: </b>
  <h2>Ten sp:  {{ Product.name }}</h2>
  <h2>gia sp:  {{ Product.price }}</h2>
  <h2>soluong sp:  {{ Product.quantity }}</h2>
  <h2>mota sp:  {{ Product.description }}</h2>
</div>

  <!-- cau 2 -->
  <div>
    <b>Cau 2: </b>
<h2>Gia sua: {{ Product.price }}</h2>
  <input type="number" step="any" v-model="Product.price">
  </div>

  <!-- cau 3 -->
  <div>
    <b>Cau 3:</b>
    <div>
      <button class="btn btn-warning" @click="checkSoluong">Kiem tra so luong</button>
    </div>

  </div>
    <!-- cau 4 -->
<div>
   <b>Cau 4: </b>
   <div v-for="(product,index) in ListProducts" :key="index">

   <h2>Ten sp:{{ product.name }}</h2>
   <h2>Gia:{{ product.price }}</h2>
   <h2>So luong:{{ product.quantity }}</h2>
   <h2>Mo ta: {{ product.description }}</h2>
   <button @click="hienthi(product)" class="btn btn-danger">thong bao</button>
 </div>
</div>
</template>


<style scoped>


</style>
