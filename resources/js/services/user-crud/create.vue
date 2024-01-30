<template>
    <div class="row justify-content-center align-items-center mt-5">

      <div class="col-6 card p-5">

        <div class="d-flex justify-content-between">
          <h5 class="mb-3">Create User</h5>
          <router-link to="/users" class="btn btn-dark">Back</router-link>
        </div>
        <hr>
        <div class="card-body">
            <form action="#" method="post" @submit.prevent="saveUser">

                <div class="form-group mb-3">
                    <label for="name" class="mb-1">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" :class="name_valid" class="form-control" v-model="user.name">
                    <div class="invalid-feedback">Enter Name</div>
                </div>

                <div class="form-group mb-3">
                    <label for="email" class="mb-1">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" :class="email_valid" class="form-control" v-model="user.email">
                    <div class="invalid-feedback">Enter Email</div>
                </div>

                <div class="form-group mb-3">
                    <label for="age" class="mb-1">Age</label>
                    <input type="number" name="age" id="age" placeholder="Age" :class="age_valid" class="form-control" v-model="user.age">
                    <div class="invalid-feedback">Enter Age</div>
                </div>

                <div class="form-group">
                    <label for="name" class="mb-1">Gender</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" value="male" id="male" checked v-model="user.gender">
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" value="female" id="female" v-model="user.gender">
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>

                <div class="form-group text-end">
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </div>
            </form>
        </div>

      </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

let name_valid = ref('');
let email_valid = ref('');
let age_valid = ref('');

let user = reactive({
    name: '',
    email: '',
    age: '',
    gender: ''
});

const saveUser = () => {

    if(checkValidation()) {
        console.log('passed');
    }

};

const checkValidation = () => {
    let validation_pass = true;

    name_valid.value = user.name ? 'is-valid' : 'is-invalid';

    email_valid.value = user.email ? 'is-valid' : 'is-invalid';

    age_valid.value = user.age ? 'is-valid' : 'is-invalid';

    validation_pass = user.name && user.age && user.email ? true : false;

    return validation_pass;
}


</script>
