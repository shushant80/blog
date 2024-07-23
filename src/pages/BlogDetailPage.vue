<template>
  <div class="blog-details" v-if="blog">
    <h1>{{ blog.title }}</h1>
    <img :src="blog.image" alt="Blog image" class="blog-image" />
    <p>{{ blog.description }}</p>
    <router-link to="/">Back to Home</router-link>
    <router-link :to="`/edit-blog/${blog.id}`" class="edit-button">Edit</router-link>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: 'BlogDetailsPage',
  setup() {
    const store = useStore();
    const route = useRoute();
    const blogId = parseInt(route.params.id, 10);

    const blog = computed(() => {
      return store.getters.getBlogById(blogId);
    });

    return {
      blog
    };
  }
};
</script>

<style scoped>
.blog-details {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.blog-image {
  width: 100%;
  max-width: 600px;
  border-radius: 4px;
}

.blog-details p {
  font-size: 16px;
  color: #333;
}

.edit-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
