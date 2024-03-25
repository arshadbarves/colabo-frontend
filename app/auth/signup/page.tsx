"use client";

import React, { useState } from "react";
import { SocialSignInOptions } from "@/app/components/auth/SocialSignInOptions";
import { TLink } from "@/app/components/common/ui/TLink";
import { TButton } from "@/app/components/common/ui/TButton";
import { Logo } from "@/app/components/utils/Logo";
import { signUp } from "@/app/services/api/auth";
import { RedirectionComponent } from "@/app/components/auth/AuthGuard";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!terms) {
      setError("Please agree to the terms and conditions");
      return;
    }
    try {
      await signUp({ firstName, lastName, email, password });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RedirectionComponent>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <Logo />
            </div>
            <h2 className="mt-6 text-center text-gray-700">
              Create an account to continue
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSignUp}
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-x-px">
              <div className="mb-4 flex">
                <label htmlFor="name" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-l-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                />
                <label htmlFor="name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-r-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div className="mb-4 flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-full relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-4 flex">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-l-xl focus:outline-none focus:ring-red-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-700 rounded-r-xl focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                onChange={(e) => setTerms(e.target.checked)}
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <TLink text="Terms and Conditions" href="terms" />
              </label>
            </div>
            <div>
              <TButton text="Sign up" fullWidth={true} type="submit" />
            </div>
            <div>
              <p className="text-center text-sm text-gray-700">
                Or sign up with
              </p>
            </div>
            <div>
              <SocialSignInOptions />
            </div>

            <div className="flex items-center justify-center">
              <p className="text-center text-sm text-gray-700">
                Already have an account?{" "}
                <TLink text="Sign in" href="./signin" />
              </p>
            </div>
          </form>
        </div>
      </div>
    </RedirectionComponent>
  );
};

export default LoginPage;
