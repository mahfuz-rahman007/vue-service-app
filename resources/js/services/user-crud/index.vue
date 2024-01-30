<template>
  <div class="row justify-content-center align-items-center mt-5">
    <div class="col-6 card p-5">
      <div class="d-flex justify-content-between">
        <h5 class="mb-3">User List</h5>
        <div class="d-flex justify-content-end">
          <router-link to="/create-user" class="btn btn-success">Create</router-link>
          <router-link to="/" class="btn btn-dark ms-4">Home</router-link>
        </div>
      </div>
      <hr>
      <!-- Table -->
      <table class="table mt-4" v-if="users.length">
        <!-- Table Head -->
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <!-- Table Body -->
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>
                <div class="d-flex">
                    <button class="btn btn-primary">Edit</button>
                    <button class="btn btn-danger ms-3">Delete</button>
                </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-center mt-5" v-else>No Data Available</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

let users = ref([
  {
    id: 1,
    name: "Rakib",
    email: "rakib@gmail.com",
    age: 20,
    gender: "Male",
  },
  {
    id: 2,
    name: "Hasan",
    email: "hasan@gmail.com",
    age: 25,
    gender: "Male",
  },
  {
    id: 1,
    name: "Lima",
    email: "lima@gmail.com",
    age: 24,
    gender: "Female",
  },
]);

</script>
