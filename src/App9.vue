<script setup>
import Header from './components/blocks/Header.vue';
import Sidebar from './components/blocks/Sidebar.vue';
import Content from './components/blocks/Content.vue';
import Footer from './components/blocks/Footer.vue';
import addScored from './components/buttons/addScored.vue';
</script>

<template>
<!-- header -->
 <Header></Header>
<!-- cach 2: "<Header/>" -->

<div class="container-fluid">
  <div class="row">
    <!-- sidebar -->
    <Sidebar/>
    <main class="col-9 bg-danger">
     <!-- content -->
      <Content/>
      <addScored/>
      <addScored/>
      <addScored/>
      <addScored/>
    </main>

  </div>
</div>

<!-- footer -->
 <Footer/>
</template>


<style scoped>

</style>
