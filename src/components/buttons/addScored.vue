<script setup>

import {ref} from 'vue';

const score = ref(0)

const pushScore = ()=>{
  score.value++;
}

</script>
<template>

<button @click="pushScore" class="btn btn-success">Them so diem +1 = {{ score }}</button>

</template>
<style scoped>

</style>
