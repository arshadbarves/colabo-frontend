import React from "react";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center items-center">
            <span className="font-logo text-gradient bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-4xl pr-2">
              404
            </span>
            <span className="text-gray-700 text-4xl">- Page Not Found</span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="group flex items-center justify-center rounded-xl border border-gray-300 py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
