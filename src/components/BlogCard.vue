<template>
    <div class="blog-card">
      <img :src="blog.image" alt="Blog Image" />
      <h2>{{ blog.title }}</h2>
      <h3>{{ blog.subtitle }}</h3>
      <p>{{ blog.description }}</p>
      <router-link :to="'/blog/' + blog.id">Read More</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogCard',
    props: {
      blog: Object,
    },
  }
  </script>
  
  <style scoped>
  /* Add styles for your blog card */
  </style>
  