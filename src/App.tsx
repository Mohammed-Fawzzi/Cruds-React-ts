import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Loading from "@/components/loading/Loading";
import DarkModeToggler from "@/components/common/ui/DarkModeToggler";
import { ThemeContextProvider } from "./contexts/Theme";

export default function App() {
  return (
    <ThemeContextProvider>
      <div className="min-h-screen bg-gray-50 text-gray-800 dark:bg-[#020617] dark:text-gray-200">

        {/* Navbar */}
        <header className="bg-white dark:bg-[#0f172a] border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              CRUDS Dashboard
            </h1>

            <div className="flex items-center justify-center gap-4">
              <span className="text-sm text-gray-400 dark:text-gray-500">
                React + TypeScript
              </span>
              <DarkModeToggler />
            </div>
          </div>
        </header>

        {/* Pages */}
        <main className="max-w-6xl mx-auto px-6 py-8">
          <React.Suspense fallback={<Loading />}>
            <RouterProvider router={routes} />
          </React.Suspense>
        </main>

      </div>
    </ThemeContextProvider>
  );
}