// All components mapping with path for internal routes

import { lazy } from 'react'

const Welcome = lazy(() => import('../../../../src/pages/protected/Welcome'))
const Page404 = lazy(() => import('../../../../src/pages/protected/404'))
const Blank = lazy(() => import('../../../../src/pages/protected/Blank'))
const Calendar = lazy(() => import('../../../pages/protected/Services'))
const Team = lazy(() => import('../../../../src/pages/protected/Team'))
const Transactions = lazy(() => import('../../../../src/pages/protected/Transactions'))
const Orders = lazy(() => import('../../../../src/pages/protected/Orders'))
const ProfileSettings = lazy(() => import('../../../../src/pages/protected/ProfileSettings'))
const Customers = lazy(() => import('../../../../src/pages/protected/Customers'))
const EditCustomerProfile = lazy(() => import('../../../../src/pages/protected/EditCustomerProfile'))
const EditServiceDetails = lazy(() => import('../../../../src/pages/protected/EditServiceDetails'))
const Appointments = lazy(() => import('../../../../src/pages/protected/Appointments'))
const Reports = lazy(() => import('../../../../src/pages/protected/Reports'))
const Inventory = lazy(() => import('../../../../src/pages/protected/Inventory'))
const EditProductDetails = lazy(() => import('../../../../src/pages/protected/EditProductDetails'))
const Login = lazy(() => import('../../../../src/pages/Login'))

const routes = [
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/customers',
    component: Customers,
  },
  {
    path: '/settings-team',
    component: Team,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
  {
    path: '/transactions',
    component: Transactions,
  },
  {
    path: '/edit-product-details',
    component: EditProductDetails,
  },
  {
    path: '/edit-service-details',
    component: EditServiceDetails,
  },
  {
    path: '/inventory',
    component: Inventory,
  },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  {
    path: '/edit-customer-profile',
    component: EditCustomerProfile,
  },
  {
    path: '/appointments',
    component: Appointments,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/reports',
    component: Reports,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default routes
