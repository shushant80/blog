import { createStore } from 'vuex';
import { signInWithGoogle } from '@/firebase';

export default createStore({
  state: {
    user: null,
    blogs: [
      {
        id: 1,
        title: 'Sample Blog Post 1',
        subtitle: 'Subtitle for Blog 1',
        image: 'https://img.freepik.com/premium-photo/purple-shirt-with-red-curly-haircut-it_130412-31178.jpg?size=626&ext=jpg&ga=GA1.1.824406421.1721476063&semt=sph',
        description: 'This is a brief description of Blog Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        id: 2,
        title: 'Sample Blog Post 2',
        subtitle: 'Subtitle for Blog 2',
        image: 'https://img.freepik.com/free-photo/with-her-cake_1450-216.jpg?size=626&ext=jpg&ga=GA1.1.824406421.1721476063&semt=sph',
        description: 'This is a brief description of Blog Post 2. Asemper interdum lacinia dapibus, iaculis duis arcu consectetur. Mollis facilisis eu conubia est commodo ultrices nisi luctus. Justo hac maximus vestibulum sit lacinia velit rutrum cursus. Facilisi aliquet tincidunt molestie imperdiet est. Posuere mus donec egestas commodo varius fermentum bibendum aptent malesuada. Sollicitudin odio in viverra aptent integer at suspendisse viverra volutpat. Dolor pharetra in suscipit nascetur semper scelerisque. Sem fames efficitur potenti a imperdiet morbi dapibus.',
      },
      // Add more blog posts as needed
    ],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    addBlog(state, blog) {
      state.blogs.push(blog);
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    }
  },
  actions: {
    login({ commit }, { id, password }) {
      const hardcodedUser = { id: 'user123', password: 'password123' };
      if (id === hardcodedUser.id && password === hardcodedUser.password) {
        commit('setUser', { id });
      } else {
        throw new Error('Invalid credentials');
      }
    },
    async loginWithGoogle({ commit }) {
      try {
        const result = await signInWithGoogle();
        commit('setUser', { id: result.user.uid, name: result.user.displayName });
      } catch (error) {
        throw new Error('Google login failed');
      }
    },
    logout({ commit }) {
      commit('clearUser');
    },
    createBlog({ commit }, blog) {
      commit('addBlog', blog);
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
    getBlogs: state => state.blogs,
  }
});
