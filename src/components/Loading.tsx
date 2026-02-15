export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-14 h-14 rounded-full border-4 border-gray-200"></div>

        {/* Animated ring */}
        <div className="w-14 h-14 rounded-full border-4 border-transparent border-t-blue-500 absolute top-0 left-0 animate-spin"></div>
      </div>
    </div>
  );
}
