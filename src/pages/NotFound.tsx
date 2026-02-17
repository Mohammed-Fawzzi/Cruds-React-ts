import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      {/* SVG */}
      <div className="w-72 max-w-full mb-6">
        <svg viewBox="0 0 500 300" className="w-full">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-gray-200 text-[120px] font-bold select-none"
          >
            404
          </text>

          {/* magnifier */}
          <circle
            cx="300"
            cy="150"
            r="60"
            className="stroke-blue-500"
            strokeWidth="6"
            fill="none"
          />
          <line
            x1="345"
            y1="195"
            x2="410"
            y2="260"
            className="stroke-blue-500"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Text */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>

      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition active:scale-95 shadow-md"
      >
        Go Back Home
      </Link>
    </div>
  );
}
