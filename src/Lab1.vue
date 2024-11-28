
<!-- bai 2 -->
<!-- <script setup>

</script>
<template>
<h1>Chào mừng đến với VueJS</h1>

</template>
<style scoped>
h1{
  color: red;
  }
  </style> -->

<!-- bai 3 -->

  <!-- <script setup>
  import { ref } from "vue";
  const hello = ref("Xin chào bạn!");
  const change = () => {
  hello.value = "Hello, World!";
  };
  </script>
<template>
  <h1>{{ hello }}</h1>
  <br>
  <button @click="change">Thay Doi</button>
  </template> -->

  <!-- bai 4 -->
  <script setup>
  // Dữ liệu sản phẩm
  const products = [
  {
  name: "Sản phẩm 1",
  description: "Mô tả sản phẩm 1, rất chất lượng và đáng mua.",
  price: 500000,
  image: "http://picsum.photos/500/500",
  },
  {
  name: "Sản phẩm 2",
  description: "Mô tả sản phẩm 2, chất lượng tốt và giá phải chăng.",
  price: 300000,
  image: "http://picsum.photos/400/400",
  },
  {
  name: "Sản phẩm 3",
  description: "Mô tả sản phẩm 3, sản phẩm cao cấp và nhiều tính năng.",
  price: 1000000,
  image: "http://picsum.photos/300/300",
  }
  ];
  </script>
  <template>
    <div class="container">
    <h1 class="text-center">Danh sách sản phẩm</h1>
    <div class="row">
    <!-- Sản phẩm 1 -->
    <div class="col-4">
    <div class="card">
    <img :src="products[0].image" alt="Hình ảnh sản phẩm" class="card-img-top" />
    <div class="card-body">
    <h3 class="card-title">{{ products[0].name }}</h3>
    <p class="card-text">{{ products[0].description }}</p>
    <p class="card-text">Giá: {{ products[0].price }} VND</p>
    <button class="btn btn-success">Mua ngay</button>
    </div>
    </div>
    </div>
    <!-- Sản phẩm 2 -->
    <div class="col-4">
    <div class="card">
      <img :src="products[1].image" alt="Hình ảnh sản phẩm" class="card-img-top" />
<div class="card-body">
<h3 class="card-title">{{ products[1].name }}</h3>
<p class="card-text">{{ products[1].description }}</p>
<p class="card-text">Giá: {{ products[1].price }} VND</p>
<button class="btn btn-success">Mua ngay</button>
</div>
</div>
</div>
<!-- Sản phẩm 3 -->
<div class="col-4">
<div class="card">
<img :src="products[2].image" alt="Hình ảnh sản phẩm" class="card-img-top" />
<div class="card-body">
<h3 class="card-title">{{ products[2].name }}</h3>
<p class="card-text">{{ products[2].description }}</p>
<p class="card-text">Giá: {{ products[2].price }} VND</p>
<button class="btn btn-success">Mua ngay</button>
</div>
</div>
</div>
</div>
</div>
</template>



