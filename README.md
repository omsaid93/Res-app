# Restaurant Reservation System

A modern, TypeScript-based React application for managing restaurant reservations with a clean, professional architecture.

## 🚀 Features

- **TypeScript**: Full type safety throughout the application
- **Modern React**: Built with React 18 and functional components
- **Professional Architecture**: Clean separation of concerns with custom hooks and utilities
- **Responsive Design**: Mobile-friendly interface
- **Local Storage**: Data persistence across sessions
- **Error Handling**: Comprehensive error boundaries and error handling
- **Form Management**: Advanced form handling with react-hook-form
- **Sorting & Filtering**: Advanced table operations with search capabilities

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **React Router** - Navigation
- **React Hook Form** - Form Management
- **React Icons** - Icon Library
- **Local Storage** - Data Persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button component
│   ├── Input/          # Input component
│   ├── Select/         # Select component
│   ├── Table/          # Table component
│   ├── Loading/        # Loading component
│   ├── ErrorBoundary/  # Error boundary
│   ├── Layout/         # Layout wrapper
│   ├── navbar/         # Navigation bar
│   ├── footer/         # Footer component
│   └── reservationForm/ # Reservation form
├── hooks/              # Custom React hooks
│   └── useReservations.ts
├── pages/              # Page components
│   ├── homePage/       # Home page
│   ├── Reservation/    # Reservation page
│   ├── ReservationList/ # Reservation list page
│   └── notfound/       # 404 page
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── utils/              # Utility functions
│   ├── storage.ts      # Local storage utilities
│   └── dateUtils.ts    # Date formatting utilities
└── data/               # Static data
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Res-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## 🏗️ Architecture Highlights

### Custom Hooks

- `useReservations`: Manages reservation state and operations
- Error handling and loading states included

### Utility Functions

- `storageUtils`: Local storage operations with error handling
- `dateUtils`: Date formatting and validation

### Constants

- Centralized constants for routes, storage keys, and enums
- Type-safe constant definitions

### Components

- Reusable UI components (Button, Input, Select, Table)
- Error boundaries for graceful error handling
- Loading states for better UX

## 🎨 Key Features

### Reservation Management

- Create new reservations with detailed information
- View all reservations in a sortable table
- Filter reservations by date, status, shift, and area
- Search reservations by customer name

### Professional UI Components

- Consistent design system
- Responsive layout
- Accessible form controls
- Loading and error states

### Data Persistence

- Local storage integration
- Automatic data saving
- Error recovery mechanisms

## 🔧 Development

### TypeScript Configuration

- Strict type checking enabled
- Modern ES2015+ features
- React JSX support

### Code Quality

- ESLint configuration
- Prettier formatting
- Type-safe component props
- Comprehensive error handling

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions, please open an issue in the repository.
