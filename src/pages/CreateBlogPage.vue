<template>
  <div class="create-blog-page">
    <h1>Create a New Blog</h1>
    <form @submit.prevent="createBlog">
      <div class="form-group">
        <label for="title">Title</label>
        <input id="title" v-model="title" required />
      </div>
      <div class="form-group">
        <label for="subtitle">Subtitle</label>
        <input id="subtitle" v-model="subtitle" required />
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input id="image" v-model="image" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <button type="submit">Create Blog</button>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  name: 'CreateBlogPage',
  setup() {
    const store = useStore();
    const router = useRouter();

    const title = ref('');
    const subtitle = ref('');
    const image = ref('');
    const description = ref('');

    const createBlog = () => {
      const blog = {
        id: Date.now(), // Generate a unique ID for the blog
        title: title.value,
        subtitle: subtitle.value,
        image: image.value,
        description: description.value
      };

      store.dispatch('createBlog', blog);
      router.push('/');
    };

    return {
      title,
      subtitle,
      image,
      description,
      createBlog
    };
  }
};
</script>

<style scoped>
.create-blog-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
  height: 100px;
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
