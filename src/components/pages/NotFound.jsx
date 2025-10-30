import React from "react"
import { Link } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"
import Card from "@/components/atoms/Card"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card variant="elevated" className="max-w-2xl w-full p-8 text-center">
        <div className="mb-6">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
            <ApperIcon name="Home" size={48} className="text-white" />
          </div>
          <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h2>
          <p className="text-lg text-slate-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link to="/">
            <Button variant="primary" className="w-full sm:w-auto">
              <ApperIcon name="Home" size={18} className="mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/rooms" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Rooms
              </Link>
              <Link to="/guests" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Guests
              </Link>
              <Link to="/bookings" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Bookings
              </Link>
              <Link to="/staff" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Staff
              </Link>
              <Link to="/analytics" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default NotFound