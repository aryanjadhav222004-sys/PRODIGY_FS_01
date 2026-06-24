# PRODIGY_FS_01 - Secure User Authentication System

## Objective
Implement a complete user authentication system featuring secure login and registration functionality with role-based access control.

## Key Features
- **Registration**: Allow new users to create accounts with unique username/email and secure passwords
- **Secure Login**: Authenticate existing users against stored credentials
- **Protected Routes**: Middleware/route guards to block unauthenticated users
- **Password Hashing**: Industry-standard bcrypt hashing
- **Session Management**: JWT tokens for secure authentication
- **Role-Based Access Control (RBAC)**: Admin and User roles with restricted access

## Tech Stack
- **Backend**: Node.js with Express.js
- **Frontend**: React
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt

## Project Structure
```
PRODIGY_FS_01/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## Installation & Setup

See backend and frontend README files for detailed setup instructions.

## License
MIT
