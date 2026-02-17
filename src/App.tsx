import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Loading from "@/components/loading/Loading";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-600">CRUDS Dashboard</h1>

          <span className="text-sm text-gray-400">React + TypeScript</span>
        </div>
      </header>

      {/* Pages */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <React.Suspense fallback={<Loading />}>
          <RouterProvider router={routes} />
        </React.Suspense>
      </main>
    </div>
  );
}
