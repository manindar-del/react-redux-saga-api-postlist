import queryString from 'query-string';

export const routes = {
  home: {
    path: '/',
  },
  login: {
    path: '/login'
  },
  forgetPassword: {
    path: '/forget-password'
  },
  register: {
    path: '/register'
  },
  dashboard: {
    path: '/dashboard',

    children: {
      me: {
        path: 'me',
        fullPath: '/dashboard/me'
      },
      postList: {
        path: 'post-list',
        fullPath: '/dashboard/post-list',
        build: (query: { page: number }) => `/dashboard/post-list?${queryString.stringify(query)}`,
      },
      post: {
        path: 'post/:id',
        fullPath: (id: number) => `/dashboard/post/${id}`
      }
    },
  }

};

export default routes;