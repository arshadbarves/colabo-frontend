"use client";

import React, { useState } from "react";
import { Logo } from "../components/utils/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { HomeLink } from "../components/auth/common/ui/TLink";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="grid min-h-screen bg-gray-50 lg:grid-cols-[250px_1fr] dark:bg-gray-800/40">
      <div className="hidden border-r border-gray-200 bg-gray-100/40 lg:block dark:border-gray-800 dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div
            className="flex h-[60px] items-center border-b border-gray-200 px-4 dark:border-gray-800
            dark:bg-gray-800 justify-center"
          >
            <a className="flex items-center" href="#">
              <Logo size="text-2xl" />
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 -translate-y-1">
                beta
              </span>
            </a>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium gap-2">
              <HomeLink
                href="/"
                text="Home"
                icon={<FontAwesomeIcon icon={faMoon} />}
              />
              <HomeLink
                href="/about"
                text="About"
                icon={<FontAwesomeIcon icon={faSun} />}
              />
              <HomeLink
                href="/contact"
                text="Contact"
                icon={<FontAwesomeIcon icon={faSun} />}
              />
              <HomeLink
                href="/dashboard"
                text="Dashboard"
                icon={<FontAwesomeIcon icon={faSun} />}
              />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <div
              className="rounded-lg border dark:border-gray-800 bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                  Upgrade to Pro
                </h3>
                <p className="text-sm text-muted-foreground">
                  Unlock all features and get unlimited access to our support
                  team
                </p>
              </div>
              <div className="p-6">
                <button className="group relative w-full flex justify-center border text-sm font-medium rounded-xl text-base px-4 py-2 bg-primary hover:bg-primary-600 text-white">
                  Upgrade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <a className="lg:hidden" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
              <path d="M12 3v6"></path>
            </svg>
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground dark:text-gray-500 pointer-events-none z-10"
                />
                <input
                  className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-300 dark:placeholder-gray-500 md:pl-10"
                  name="search"
                  id="search"
                  aria-label="Search for anything... "
                  placeholder="Search for anything..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <button
            className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800/40 hover:bg-gray-200 dark:hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            type="button"
            id="radix-:r2q:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <img
              src="https://avatar.iran.liara.run/public"
              width="32"
              height="32"
              className="rounded-full"
              alt="Avatar"
              style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
            />
            <span className="sr-only">Toggle user menu</span>
          </button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                  Tasks
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Design new UI components</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Start: 10th March, 2024
                  </p>
                </div>
                <div className="h-2 mt-2"></div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
                  Projects
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">Acme Website Redesign</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Start: 10th March, 2024
                  </p>
                </div>
                <div className="h-2 mt-2"></div>
              </div>
            </div>
          </div>
          {/* Add other components and content here */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
