import Login from '../pages/login'
import Layout from '../pages/home'
import Dashboard from '../pages/dashboard'
import User from '../pages/user'
import Role from '../pages/role'
import Hospital from '../pages/hospital'

const routes =  [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'user',
        element: <User />
      },
      {
        path: 'role',
        element: <Role />
      },
      {
        path: 'hospital',
        element: <Hospital />
      },
    ],
  }
]

export default routes