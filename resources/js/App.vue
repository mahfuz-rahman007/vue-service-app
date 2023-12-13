<template>
  <div class="row justify-content-center align-items-center mt-5">
    <div class="col-6 card p-5">
      <p class="mb-3">Weather Report</p>
      <h5>Date: {{ date }}</h5>
      <div class="d-flex mt-3">
          <button class="btn btn-primary" @click="prevDayReport">Prev Date Report</button>
          <button class="btn btn-dark ms-5" @click="nextDayReport">Next Date Report</button>
      </div>
      <table class="table mt-4" v-if="reports.length">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(report, index) in reports" :key="index">
            <td>{{ report.date }}</td>
            <td>{{ report.time }}</td>
            <td>{{ report.temperature }}</td>
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
import moment from 'moment';

const reports = ref({});

const date = ref("2023-12-13");

const getReports = () => {
  axios
    .get(`/api/get-report?city_id=${1}&date=${date.value}`)
    .then((res) => {
      reports.value = res.data.reports;
    })
    .catch((error) => {
      console.log(error);
    });
};

const nextDayReport = () => {
    date.value = moment(date.value).add(1, 'd').format('YYYY-MM-DD');
    getReports();
};

const prevDayReport = () => {
    date.value = moment(date.value).subtract(1, 'd').format('YYYY-MM-DD');
    getReports();
}

getReports();

</script>
