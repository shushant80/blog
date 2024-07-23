<template>
  <div class="home-page">
    <div v-if="blogs.length === 0" class="no-blogs">
      No blogs available.
    </div>
    <div v-else class="blog-list">
      <ul>
        <li v-for="blog in blogs" :key="blog.id" class="blog-item">
          <div class="blog-content">
            <img :src="blog.image" alt="Blog image" class="blog-image" />
            <div class="blog-details">
              <h2 class="blog-title">{{ blog.title }}</h2>
              <h4 class="subtitle">{{ blog.subtitle }}</h4>
              <p class="blog-description">{{ blog.description.slice(0, 100) }}...</p>
              <router-link :to="`/blog/${blog.id}`" class="read-more">Read More</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters(['getBlogs']),
    blogs() {
      return this.getBlogs || [];
    }
  }
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.no-blogs {
  text-align: center;
  font-size: 18px;
  color: #777;
}

.blog-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.blog-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  align-items: flex-start; /* Align items to the top */
}

.blog-item:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.blog-content {
  display: flex;
  gap: 15px;
  width: 100%;
}

.blog-image {
  width: 30%; /* Adjust as needed */
  height: auto;
  border-radius: 8%;
  margin-right: 10%;
}

.blog-details {
  display: flex;
  flex-direction: column;
  width: 70%; /* Adjust as needed */
}

.blog-title {
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 15%;
}

.blog-description {
  font-size: 14px;
  color: #333;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.read-more {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  width: 10%;
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #0056b3;
}
</style>
