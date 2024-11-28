
//chay lenh npm i vue-router
//tao file router/index.js

import { createRouter, createWebHistory } from "vue-router";

// import cac comp hien thi phan content
import Home from "@/components/pages/Home.vue";
import Product from "@/components/pages/Product.vue";
import Contact from "@/components/pages/Contact.vue";
import Student from "@/components/pages/Student.vue";

import AddUser from "@/components/pages/user/AddUser.vue";
import EditUser from "@/components/pages/user/EditUser.vue";

import CreateStudent from "@/components/pages/student/CreateStudent.vue";
import UpdateStudent from "@/components/pages/student/UpdateStudent.vue";
import DetailStudent from "@/components/pages/student/DetailStudent.vue";

//khai bao router
const routes = [
  {path:'/',component:Home,name:'home'},
  {path:'/product',component:Product,name:'product'},
  {path:'/contact',component:Contact,name:'contact'},
  {path:'/student',component:Student,name:'student'},

  {path:'/add', component:AddUser , name:'AddUser'},
  {path:'/edit/:id', component:EditUser , props: true , name:'EditUser'},

  {path:'/create', component:CreateStudent , name:'CreateStudent'},
  {path:'/update/:id', component:UpdateStudent , props: true , name:'UpdateStudent'},
  {path:'/detail/:id', component:DetailStudent , props: true , name:'DetailStudent'},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
