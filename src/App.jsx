import React, { lazy, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"
import DashboardLayout from "./layout/DashboardLayout"

import { CounterPage, HomePage, ProductsPage, UsersPage } from "./pages"

function App() {
  return (
    <Suspense fallback={<h1>Page is loading</h1>}>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="counter" element={<CounterPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
