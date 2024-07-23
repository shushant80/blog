<template>
  <header>
    <nav>
      <router-link to="/">Home |</router-link>
      <router-link to="/login">Login |</router-link>
      <!-- <router-link to="/signup">Sign Up |</router-link> -->
      <router-link to="/create-blog">Create Blog |</router-link>
      <!-- <router-link to="/edit-blog/:id">Edit Blog |</router-link> -->
      <!-- <router-link to="/create-blog">Blog |</router-link> -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
/* Header styles */
header {
  background-color: #333;
  padding: 10px;
  color: #fff;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
  background-color: #555;
  color: #f0f0f0;
}

nav a.active {
  background-color: #007bff;
  color: #fff;
}
</style>
