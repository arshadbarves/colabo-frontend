"use client";

import React, { useState } from "react";
import { Logo } from "../components/utils/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faSearch,
  faChevronRight,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { HomeLink } from "../components/auth/common/ui/TLink";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("toggleDarkMode", isDarkMode);
  };

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Design new UI components",
      description: "Design new UI components for the new website",
      createdAt: "10th March, 2024",
      status: "Completed",
      collaborators: [
        {
          name: "John Doe",
          image: "https://avatar.iran.liara.run/public",
        },
        {
          name: "Jane Doe",
          image: "https://avatar.iran.liara.run/public",
        },
        {
          name: "Ricky Doe",
          image: "https://avatar.iran.liara.run/public",
        },
        {
          name: "Micky Doe",
          image: "https://avatar.iran.liara.run/public",
        },
      ],
      tasks: [
        { id: 1, name: "Create new button" },
        { id: 2, name: "Design new modal" },
        { id: 3, name: "Create new form" },
        { id: 4, name: "Create new table" },
      ],
    },
    {
      id: 2,
      name: "Acme Website Redesign",
      description: "Redesign the Acme website to make it more user-friendly",
      createdAt: "20th March, 2024",
      status: "In Progress",
      collaborators: [
        {
          name: "John Doe",
          image: "https://avatar.iran.liara.run/public",
          role: "admin",
        },
        {
          name: "Jane Doe",
          image: "https://avatar.iran.liara.run/public",
          role: "developer",
        },
        {
          name: "Ricky Doe",
          image: "https://avatar.iran.liara.run/public",
          role: "designer",
        },
      ],
      tasks: [
        { id: 1, name: "Create new button" },
        { id: 2, name: "Design new modal" },
        { id: 3, name: "Create new form" },
        { id: 4, name: "Create new table" },
        { id: 5, name: "Create new table" },
      ],
    },
  ]);

  const handleProjectCreate = () => {
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        name: "New Project",
        description: "New Project Description",
        createdAt: "10th March, 2024",
        status: "New",
        collaborators: [
          {
            name: "John Doe",
            image: "https://avatar.iran.liara.run/public",
            role: "admin",
          },
        ],
        tasks: [],
      },
    ]);
  };

  const handleProjectSelect = (id: number) => {
    console.log("Project Selected", id);
  };

  const handleProjectDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleProjectUpdate = (id: number, name: string) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, name } : project
      )
    );
  };

  const handleProjectClick = (id: number) => {
    console.log("Project Clicked", id);
  };

  function handleSelectAll(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    console.log("handleSelectAll", checked);
  }

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
              className="rounded-lg border dark:border-gray-800 bg-card text-card-foreground shadow-sm dark:bg-gray-800/40 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors"
              data-v0-t="card"
            >
              <div className="p-6">
                <button className="group relative w-full flex justify-center border text-sm font-medium rounded-xl text-base px-4 py-2 bg-primary hover:bg-primary-600 text-white">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 dark:border-gray-800">
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
                  className="flex h-10 rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-your-color focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-300 dark:placeholder-gray-500 md:pl-10 dark:focus-visible:ring-gray-900 dark:focus-visible:ring-offset-gray-700"
                  name="search"
                  id="search"
                  placeholder="Press enter or click '/' to search"
                  autoComplete="off"
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
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold leading-none tracking-tight">
              <span className="text-muted-foreground dark:text-gray-500"></span>
            </h1>
            <button
              onClick={handleProjectCreate}
              className="flex items-center space-x-2 text-sm font-md text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800/40 dark:hover:bg-gray-700/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg px-4 py-2"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="text-muted-foreground dark:text-gray-500"
              />
              <span>Create New Project</span>
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {projects.map((project) => (
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm dark:border-gray-800 dark:bg-gray-800/40 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors"
                data-v0-t="card"
              >
                <div className="p-6 flex flex-row items-center justify-between pb-2 space-y-0">
                  <h3 className="text-lg font-semibold leading-none tracking-tight">
                    {project.name}
                  </h3>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-muted-foreground dark:text-gray-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {project.description}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-muted-foreground dark:text-gray-500"
                      />
                      {project.createdAt}
                    </p>
                  </div>
                  <div className="h-2 mt-2"></div>
                  <div className="flex items-center space-x-2 mt-2">
                    {project.collaborators.slice(0, 2).map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar.image}
                        alt="Collaborator Avatar"
                        className="w-8 h-8 rounded-full object-cover dark:bg-gray-600"
                        style={{
                          zIndex: project.collaborators.length - index,
                        }}
                      />
                    ))}
                    {project.collaborators.length > 2 && (
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold text-sm">
                        +{project.collaborators.length - 2}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
