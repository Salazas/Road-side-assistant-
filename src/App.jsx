import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

// UI
import Loader from "./ui/Loader";

// Registration
import Login from "./pages/Login";
import Register from "./pages/Register";

// User
import Home from "./pages/Home";
import Garage from "./pages/Garage";
import Bookings from "./pages/Bookings";
import Profile from "./pages/Profile";

// User Actions
import MyLocation from "./pages/MyLocation";
import BookService from "./pages/BookService";
import BookedService from "./pages/BookedService";

// Admin
import Users from "./pages/Users";
import Vehicles from "./pages/Vehicles";
import Records from "./pages/Records";
import MainLayout from "./layout/MainLayout";
import CreateCar from "./pages/CreateCar";
import ProtectedRoute from "./ui/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/garage" element={<Garage />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/current-location" element={<MyLocation />} />
              <Route path="/add-vehicle" element={<CreateCar />} />
              <Route path="/booking/:id/new" element={<BookService />} />
              <Route path="/bookings/:id" element={<BookedService />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/vehicles" element={<Vehicles />} />
              <Route path="/dashboard/bookings" element={<Records />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>

      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            mawWidth: "900px",
            padding: "16px 24px",
            color: "#fff",
            background: "#333",
            borderRadius: "8px",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
