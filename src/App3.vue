<script setup>

// const point = 0
import {reactive, ref} from "vue"
// Ref() trong vue
const point = ref(0)

const addPoint = ()=>{
  point.value++;
}
const delPoint = ()=>{
  point.value--;
}
const name = ref("nguyen hoang tu")
const reName= ()=>{
  name.value = "Nguyen The Huy Hoang"
}

// reactive trong vue
const profile = reactive({
  name: "Nguyen Hoang Tu",
  gender: "Nam",
  age:211,
  homeTown: "Ha noi"
})
const addAge=()=>{
  profile.age++
}
</script>

<template>
<div class="container">
  <h1>Diem cua ban : {{ point }}</h1>
  <button @click="addPoint" class="btn btn-warning">Them 1 diem</button>
  <br> <br>
  <button @click="delPoint" class="btn btn-danger">Tru 1 diem</button>
  <hr> <br>
  <h2>Ten cua ban:{{ name }}</h2>
  <button @click="reName" class="btn btn-info">Doi ten</button>
</div>
 <div class="container">
  <h1>*****Information Yourself*****</h1>
  <hr>
  <br>
  <h2> Fullname: {{ profile.name }}</h2>
  <h2> Gender: {{ profile.gender }}</h2>
  <h2> Age: {{ profile.age }}</h2>
  <h2> HomeTown: {{ profile.homeTown }}</h2>
  <button @click="addAge" class="btn btn-success">ADD Age</button>
</div>
</template>
