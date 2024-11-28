<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const products = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async()=>{
  try {
    const res = await axios.get('http://localhost:3000/products')
    products.value = res.data;
  } catch (err) {
    error.value = "loi goi API" + err.message;
  }finally{
    loading.value = false;
  }
})


</script>
<template>
  <div class="container">
    <h1>Danh sach Products</h1>
    <p v-if="loading">loading...</p>
    <p v-if="error">{{ error }}</p>
    <div v-if="!loading && !error">
      <div class="table table-border table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody v-for="(product,key) in products" :key="key">
          <tr>
            <td>{{ key+1 }}</td>
            <td>{{ product.id }}</td>
            <td>{{ product.sku }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </div>
    </div>

  </div>



</template>
<style scoped>

</style>
