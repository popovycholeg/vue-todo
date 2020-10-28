<template>
  <div class="login-form">
    <form @submit="login">
      <h2 class="text-center">Log in</h2>
      <div class="form-group">
        <input
          v-model="email"
          type="text"
          class="form-control"
          placeholder="Username"
          required="required"
        >
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required="required"
        >
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
      </div>
    </form>
    <p class="text-center"><a href="#">Create an Account</a></p>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { BASE_URL } from "../store";

export default {
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const login = (e) => {
      e.preventDefault();

      axios
        .post(`${BASE_URL}/auth/local`, { // TODO: move to vuex
          identifier: email.value,
          password: password.value,
        })
        .then(({data}) => {
          localStorage.setItem('token', data.jwt);
        })
        .catch((err) => console.log(err));
    };

    return { login, password, email };
  },
};
</script>

<style lang="scss">
.login-form {
  width: 500px;
  margin: 100px auto;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}
</style>
