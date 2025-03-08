import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RecommendationsView from '../views/RecommendationsView.vue';
import StockDetailView from '../views/StockDetailView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/recommendations', component: RecommendationsView },
  { path: '/stocks/:ticker', component: StockDetailView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
