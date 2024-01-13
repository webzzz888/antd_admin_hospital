import Login from '../pages/login'
import Layout from '../pages/home'

const routes =  [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Layout />
  },
]

export default routes