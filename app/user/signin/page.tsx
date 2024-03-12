"use client";

import React from "react";
import { SocialSignInOptions } from "@/app/components/auth/SocialSignInOptions";
import { TLink } from "@/app/components/auth/common/ui/TLink";
import { TButton } from "@/app/components/auth/common/ui/TButton";
import { Logo } from "@/app/components/utils/Logo";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="mt-6 text-center text-gray-700">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-t-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-b-xl focus:outline-none focus:ring-red-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Don't forget me
              </label>
            </div>
            <div className="text-sm">
              <TLink text="Forgot your password?" href="forgot" />
            </div>
          </div>
          <div>
            <TButton text="Sign in" fullWidth={true} />
          </div>
          <div>
            <p className="text-center text-sm text-gray-700">Or sign in with</p>
          </div>
          <div>
            <SocialSignInOptions />
          </div>

          <div className="flex items-center justify-center">
            <p className="text-center text-sm text-gray-700">
              Don't have an account? <TLink text="Sign up" href="signup" />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
