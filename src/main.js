import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import firebaseConfig from './firebase'; // Comment this out if not used

const app = createApp(App);

const auth = getAuth();

onAuthStateChanged(auth, user => {
  if (user) {
    store.commit('setUser', user);
  } else {
    store.commit('setUser', null);
  }
  app.use(router).use(store).mount('#app');
});
