<template>
  <div id="app" class="fluid">
    <b-row>
      <div class="mx-auto mt-5 mb-5">
        <h3>WELCOME TO OPIN1ON8</h3>
      </div>
    </b-row>
    <b-row>
      <b-col>
        <div id="intro">
          Where you can share your opinion on various services and employers.
        </div>
      </b-col>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="Enter a valid email address"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import { LayoutPlugin } from "bootstrap-vue";
Vue.use(LayoutPlugin);

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        name: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
    }
  }
};
</script>

<style>
</style>