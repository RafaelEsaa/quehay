import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/404/ErrorPage'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
])
