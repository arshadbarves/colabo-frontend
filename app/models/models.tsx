interface Project {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  created_by: User;
  collaborators: User[];
  tasks: Tasks[];
}

interface Projects {
  count: number;
  next: string | null;
  previous: string | null;
  results: Project[];
}

interface Tasks {
  id: number;
  title: string;
  description: string;
  project: number;
  created_date: string;
  updated_date: string;
  due_date: string;
  priority: string;
  status: string;
  created_by: User;
  assigned_to: User;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
}
