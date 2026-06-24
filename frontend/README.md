# Frontend - Secure User Authentication System

## Setup Instructions

### 1. Create React App
```bash
cd frontend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the frontend directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 3. Project Structure
- `src/components/` - Reusable React components
- `src/pages/` - Page components (Login, Register, Dashboard, etc.)
- `src/context/` - Context API for state management (Auth context)
- `src/services/` - API service calls

### 4. Run the Development Server
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## Key Components
- `LoginPage` - User login form
- `RegisterPage` - User registration form
- `Dashboard` - Protected dashboard page
- `ProfilePage` - User profile management
- `AdminPanel` - Admin-only management panel

## Authentication Flow
1. User registers/logs in
2. JWT token stored in localStorage
3. Token included in API requests
4. Protected routes check authentication
5. Redirect to login if unauthorized
