"use client";

import { Fragment, useEffect, useState } from "react";
import { Menu, Transition, Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSearch,
  faChevronRight,
  faClock,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../components/utils/Logo";
import { HomeLink } from "../components/common/ui/TLink";
import { AuthGuard } from "../components/auth/AuthGuard";
import { getProfile, signOut } from "../services/api/auth";
import { useRouter } from "next/navigation";
import { getProjects } from "../services/api/projects";
import { formatDate } from "../utils/others";
import Image from "next/image";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "https://avatar.iran.liara.run/public",
};

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];
const Dashboard = () => {
  const router = useRouter();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUser();
    fetchProjects();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await getProfile();
      const data = response;
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      const data = response.results;
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleProjectCreate = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleDialogSubmit = () => {
    setProjectName("");
    setProjectDescription("");
    setIsDialogOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log("toggleDarkMode", isDarkMode);
  };

  async function handleSignOut() {
    const response = await signOut();
    if (response) {
      router.push("/auth/signin");
    }
  }

  const handleProjectCreate2 = () => {
    console.log("Create New Project");

    // // Create a new project
    // const newProject = {
    //   id: projects.length + 1,
    //   name: "New Project",
    //   description: "New Project Description",
    //   createdAt: new Date().toLocaleDateString(),
    //   status: "In Progress",
    //   collaborators: [
    //     {
    //       name: "John Doe",
    //       image: "https://avatar.iran.liara.run/public",
    //       role: "admin",
    //     },
    //   ],
    //   tasks: [],
    // };

    // // Add the new project to the projects array
    // setProjects([...projects, newProject]);

    // // Select the new project
    // handleProjectSelect(newProject.id);
  };

  const handleProjectSelect = (id: number) => {
    console.log("Project Selected", id);
  };

  const handleProjectDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  // const handleProjectUpdate = (id: number, name: string) => {
  //   setProjects(
  //     projects.map((project) =>
  //       project.id === id ? { ...project, name } : project
  //     )
  //   );
  // };

  const handleProjectClick = (id: number) => {
    console.log("Project Clicked", id);
  };

  function handleSelectAll(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    console.log("handleSelectAll", checked);
  }

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <AuthGuard>
      <div className="grid min-h-screen bg-gray-50 lg:grid-cols-[250px_1fr] dark:bg-gray-800/40">
        <div className="hidden border-r border-gray-200 bg-gray-100/40 lg:block dark:border-gray-800 dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b border-gray-200 px-4 dark:border-gray-800 dark:bg-gray-800 justify-center">
              <a className="flex items-center" href="#">
                <Logo size="text-2xl" />
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 -translate-y-1">
                  beta
                </span>
              </a>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium gap-2">
                {navigation.map((item) => (
                  <HomeLink
                    href={item.href}
                    key={item.name}
                    text={item.name}
                    icon={<FontAwesomeIcon icon={faMoon} />}
                  />
                ))}
              </nav>
            </div>
            <div className="mt-auto p-4">
              <div className="rounded-lg border dark:border-gray-800 bg-card text-card-foreground shadow-sm dark:bg-gray-800/40 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors">
                <div className="p-6">
                  <button className="group relative w-full flex justify-center border text-sm font-medium rounded-xl text-base px-4 py-2 bg-primary hover:bg-primary-600 text-white">
                    {/* user name */}
                    <span>{user?.first_name + " " + user?.last_name}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 dark:border-gray-800 backdrop-filter backdrop-blur-lg">
            <a className="lg:hidden" href="#">
              <Logo size="text-xl" />
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
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white border border-gray-800 dark:bg-gray-800 dark:border-gray-300">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="https://avatar.iran.liara.run/public"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:text-gray-100 backdrop-filter backdrop-blur-lg">
                  <div className="p-4 items-center gap-4 border-b dark:border-gray-500">
                    <span className="block font-semibold">
                      {user?.first_name + " " + user?.last_name}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </span>
                  </div>
                  <div className="p-2 border-b dark:border-gray-800">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active
                                ? "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                                : "block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700",
                              "text-decoration-none",
                              "rounded-lg",
                              "hover:bg-gray-200"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 hover:text-gray-200 text-decoration-none rounded-lg hover:bg-gray-200"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 lg:p-8 overflow-y-auto">
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

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm dark:border-gray-800 dark:bg-gray-800/40 dark:text-gray-300 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700/50"
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
                        {formatDate(project.created_at)}
                      </p>
                    </div>
                    <div className="h-2 mt-2"></div>
                    <div className="flex items-center space-x-2 mt-2">
                      {project.collaborators
                        .slice(0, 2)
                        .map((avatar, index) => (
                          <Image
                            key={index}
                            src="https://avatar.iran.liara.run/public"
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
        <Transition.Root show={isDialogOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={handleDialogClose}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity dark:bg-gray-800/40" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div className="bg-white dark:bg-gray-800/40 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    {/* Dialog Content */}
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300"
                        >
                          Create New Project
                        </Dialog.Title>
                        <div className="mt-2">
                          <form>
                            <div className="mb-4">
                              <label
                                htmlFor="projectName"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                Project Name
                              </label>
                              <input
                                type="text"
                                name="projectName"
                                id="projectName"
                                className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300"
                                placeholder="Enter project name"
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                              />
                            </div>
                            <div className="mb-4">
                              <label
                                htmlFor="projectDescription"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                Project Description
                              </label>
                              <textarea
                                id="projectDescription"
                                name="projectDescription"
                                rows={3}
                                className="mt-1 p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300"
                                placeholder="Enter project description"
                                value={projectDescription}
                                onChange={(e) =>
                                  setProjectDescription(e.target.value)
                                }
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800/40 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleDialogSubmit}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Create
                    </button>
                    <button
                      onClick={handleDialogClose}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </AuthGuard>
  );
};

export default Dashboard;
