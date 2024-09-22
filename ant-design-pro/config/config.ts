import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Demo',
  },
  routes: [
    {
      path: "/", component: "Home"
    },
  ],
  npmClient: 'yarn',
});

