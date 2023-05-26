import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './CoustomCss/coustomcss.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Home'
import JobDetails from './Components/JobDetails'
import AppliedJobs from './Components/AppliedJobs'
import Statistics from './Components/Statistics'
import Blog from './Components/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/jobDetails/:jobId',
        element: <JobDetails />,
        loader: () => fetch('/jobFeatured.json'),
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
        loader: () => fetch('/assignment.json')
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
