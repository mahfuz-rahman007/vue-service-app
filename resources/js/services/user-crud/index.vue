<template>
  <div class="row justify-content-center align-items-center mt-5">
    <div class="col-6 card p-5">
      <div class="d-flex justify-content-between">
        <h5 class="mb-3">User List</h5>
        <div class="d-flex justify-content-end">
          <router-link to="/" class="btn btn-success">Create</router-link>
          <router-link to="/" class="btn btn-dark ms-4">Home</router-link>
        </div>
      </div>
      <table class="table mt-4" v-if="users.length">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.date }}</td>
            <td>{{ user.time }}</td>
            <td>{{ user.temperature }}</td>
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

let users = ref({});
</script>
