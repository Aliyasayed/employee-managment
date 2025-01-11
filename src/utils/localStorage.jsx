const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.c",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "UI Design",
        description: "Design a user interface for the dashboard.",
        date: "2024-Jan-12",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Bug Fixing",
        description: "Resolve bugs reported in the login module.",
        date: "2024-Feb-13",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Database Optimization",
        description: "Optimize database queries for better performance.",
        date: "2024-Dec-11",
        category: "Database"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "API Integration",
        description: "Integrate payment gateway API.",
        date: "2024-Dec-14",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Frontend Testing",
        description: "Test the React components for bugs.",
        date: "2024-12-10",
        category: "Testing"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review the new code submitted by the team.",
        date: "2024-March-09",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Team Meeting",
        description: "Conduct a team meeting to discuss project progress.",
        date: "2024-Aug-12",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deployment",
        description: "Deploy the application to the production server.",
        date: "2024-Jun-08",
        category: "Deployment"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Ayaan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create Wireframe",
        description: "Develop a wireframe for the mobile app.",
        date: "2024-Jul-13",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Optimization",
        description: "Refactor code to improve readability.",
        date: "2024-Sep-11",
        category: "Development"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Krishna",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Documentation",
        description: "Update the user manual with new features.",
        date: "2024-Nov-10",
        category: "Documentation"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Client Demo",
        description: "Prepare and present a demo for the client.",
        date: "2024-Jan-15",
        category: "Presentation"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

const admin = [
  {
    "admin": {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  }
];

  console.log(employees)
  console.log(admin)

export const setLocalStorage = () => {
    localStorage.setItem('admin' , JSON.stringify(admin))
    localStorage.setItem('employees' , JSON.stringify(employees))
}

export const getLocalStorage = () => {
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))
    
   
  return{employees, admin}
}  
