
const routes = [
  {
    path: '/',
    component: () => import('layouts/Lessons.vue'),
    children: [
      { path: '', component: () => import('pages/Lesson.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
