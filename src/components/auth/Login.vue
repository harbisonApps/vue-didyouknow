<template>
    <div>
        <form style="margin-top:30px;height:auto; !important;"
          @submit.prevent="loginUser"
        >
          <input
            type="text"
            id="email"
            placeholder="Email"
            v-model="login.email"
            required
          />
        <br>
        <br>
        <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="login.password"
            required
          />
          <p>
            Don't have an account?? 
            <br>
            <router-link to="/register">Please register here</router-link>
          </p>
            <button class="authBtn" type="submit">
              Sign in
            </button>
        </form>
      </div>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/user/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "success");
          this.$router.push("/dashboard");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err);
      }
    }
  }
};
</script>
<style scoped>
.authBtn{
    margin: 10px;
    border: none;
    border-radius: 25px;
    color: black;
    background: #42b983;
    padding: 7px;
    cursor: pointer;
  }
</style>