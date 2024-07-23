import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue';
import SignUpPage from '@/pages/SignUpPage.vue';
import HomePage from '@/pages/HomePage.vue';
import CreateBlogPage from '@/pages/CreateBlogPage.vue';
import EditBlogPage from '@/pages/EditBlogPage.vue';
import BlogDetailsPage from '@/pages/BlogDetailPage.vue';
import { getAuth } from 'firebase/auth';

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage },
  { path: '/create-blog', component: CreateBlogPage, meta: { requiresAuth: true } },
  { path: '/edit-blog/:id', component: EditBlogPage, meta: { requiresAuth: true } },
  { path: '/blog/:id', component: BlogDetailsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = !!auth.currentUser || localStorage.getItem('authenticated') === 'true';

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
