import React from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "@/router"
import { ToastContainer } from "react-toastify"
import Layout from "@/components/organisms/Layout"
import Dashboard from "@/components/pages/Dashboard"
import Rooms from "@/components/pages/Rooms"
import Guests from "@/components/pages/Guests"
import Bookings from "@/components/pages/Bookings"
import Staff from "@/components/pages/Staff"
import Reports from "@/components/pages/Reports"
import Analytics from "@/components/pages/Analytics"
import Billing from "@/components/pages/Billing"
import GuestBooking from "@/components/pages/GuestBooking"
import Profile from "@/components/pages/Profile"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="z-50"
      />
    </>
  )
}

export default App