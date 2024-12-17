// src/fakeDatabase.js

export const contestsData = [
  { id: 1, title: "Contest 1", details: "Details for Contest 1" },
  { id: 2, title: "Contest 2", details: "Details for Contest 2" },
  { id: 3, title: "Contest 3", details: "Details for Contest 3" },
  { id: 4, title: "Contest 4", details: "Details for Contest 4" },
];

export const questions = [
  {
    "question": "What is the difference between HTTP and HTTPS?",
    "answer": "HTTP (HyperText Transfer Protocol) is a protocol for transferring data over the web. HTTPS (HTTP Secure) adds a layer of security by encrypting the data, ensuring a secure connection using SSL/TLS."
  },
  {
    "question": "What does API stand for, and what is its purpose?",
    "answer": "API stands for Application Programming Interface. It allows different software applications to communicate with each other by defining a set of rules and protocols."
  },
  {
    "question": "What is cloud computing?",
    "answer": "Cloud computing is the delivery of computing services such as storage, servers, databases, networking, and software over the internet (\"the cloud\"), allowing users to access data remotely."
  },
  {
    "question": "What is the main difference between RAM and ROM?",
    "answer": "RAM (Random Access Memory) is a type of volatile memory that is used to store data temporarily while the system is running. ROM (Read-Only Memory) is non-volatile and stores permanent instructions for the system, like firmware."
  },
  {
    "question": "What is Git, and why is it used?",
    "answer": "Git is a distributed version control system used for tracking changes in source code during software development. It allows multiple developers to work on a project simultaneously, tracking changes and facilitating collaboration."
  },
  {
    "question": "What is machine learning?",
    "answer": "Machine learning is a subset of artificial intelligence (AI) that involves the use of algorithms and statistical models to enable computers to learn from data and make decisions without being explicitly programmed."
  },
  {
    "question": "What is 5G technology, and how does it differ from 4G?",
    "answer": "5G is the fifth generation of mobile network technology, offering faster data speeds, lower latency, and higher capacity compared to 4G. It enables more reliable and efficient communication for IoT devices and faster mobile internet experiences."
  }
]

// export const navItems = [
//   // { path: '/login', label: 'Login'},
//   // { path: '/register', label: 'Register'},
//   { path: '/contests', label: 'Contests'},
//   { path: '/createTeam', label: 'CreateTeam'},
//   { path: '/contests/register', label: 'Hackathon'},
//   { path: '/aboutUs', label: 'About Us'},
//   // { path: '/profile', label: 'Profile'},
//   { path: '/login', label: 'Login'}
// ];

export const teamDetails = [
  {
    teamName: 'Titans',
    members: [
      { firstName: 'Megan', lastName: 'Fox', phone: 1231, email: 'megan@titans.com' },
      { firstName: 'Mario', lastName: 'Titan', phone: 13321, email: 'mario@titans.com' },
      { firstName: 'Sarah', lastName: 'Connor', phone: 5678, email: 'sarah@titans.com' }
    ]
  },
  {
    teamName: 'Avengers',
    members: [
      { firstName: 'Tony', lastName: 'Stark', phone: 9876, email: 'tony@avengers.com' },
      { firstName: 'Steve', lastName: 'Rogers', phone: 5432, email: 'steve@avengers.com' },
      { firstName: 'Natasha', lastName: 'Romanoff', phone: 2468, email: 'natasha@avengers.com' },
      { firstName: 'Thor', lastName: 'Odinson', phone: 1357, email: 'thor@avengers.com' }
    ]
  },
  {
    teamName: 'Justice League',
    members: [
      { firstName: 'Bruce', lastName: 'Wayne', phone: 2468, email: 'bruce@justiceleague.com' },
      { firstName: 'Diana', lastName: 'Prince', phone: 1357, email: 'diana@justiceleague.com' }
    ]
  },
  {
    teamName: 'X-Men',
    members: [
      { firstName: 'Charles', lastName: 'Xavier', phone: 1111, email: 'charles@xmen.com' },
      { firstName: 'Jean', lastName: 'Grey', phone: 2222, email: 'jean@xmen.com' },
      { firstName: 'Scott', lastName: 'Summers', phone: 3333, email: 'scott@xmen.com' },
      { firstName: 'Logan', lastName: 'Howlett', phone: 4444, email: 'logan@xmen.com' },
      { firstName: 'Ororo', lastName: 'Munroe', phone: 5555, email: 'ororo@xmen.com' }
    ]
  }
]


export const users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 25,
    university: "University of California, Berkeley",
    phone: 9876543210,
    email: "john.doe@example.com",
    password: "password123"
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 22,
    university: "Massachusetts Institute of Technology",
    phone: 9876543211,
    email: "jane.smith@example.com",
    password: "qwerty456"
  },
  {
    firstname: "David",
    lastname: "Johnson",
    age: 30,
    university: "University of Oxford",
    phone: 9876543212,
    email: "david.johnson@example.com",
    password: "abc123xyz"
  },
  {
    firstname: "Emily",
    lastname: "Brown",
    age: 27,
    university: "University of Tokyo",
    phone: 9876543213,
    email: "emily.brown@example.com",
    password: "password456"
  },
  {
    firstname: "Michael",
    lastname: "Davis",
    age: 24,
    university: "University of Sydney",
    phone: 9876543214,
    email: "michael.davis@example.com",
    password: "qwerty789"
  }
]