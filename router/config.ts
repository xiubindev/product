const routes = [
  {
    path: ['/'],
    exact: true,
    component: 'Home',
  },
  {
    path: ['*'],
    exact: true,
    component: 'NotFound',
  },
];

export default routes;
