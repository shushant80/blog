<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="signup">
      <div>
        <label for="email">Email:</label>
        <input v-model="email" id="email" type="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" id="password" type="password" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignupPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signup() {
      try {
        await axios.post('/api/signup', {
          email: this.email,
          password: this.password,
        });
        this.$router.push('/login');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add styles here */
</style>
