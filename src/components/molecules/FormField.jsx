import React from "react"
import Input from "@/components/atoms/Input"
import { cn } from "@/utils/cn"

const FormField = ({ 
  label, 
  error, 
  required = false, 
  className = "",
  children,
  ...props 
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-semibold text-slate-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children || <Input error={!!error} {...props} />}
      {error && (
        <p className="text-sm text-red-600 font-medium">{error}</p>
      )}
    </div>
  )
}

export default FormField