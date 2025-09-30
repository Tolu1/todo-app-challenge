# Todo System - Frontend Developer Assessment

A modern todo management application built with Next.js, TypeScript, and Chakra UI. Features both table and kanban board views with drag-and-drop functionality.

[![Todo App Demo](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Chakra UI](https://img.shields.io/badge/Chakra_UI-3.27.0-teal?logo=chakra-ui)](https://chakra-ui.com/)

## Features

### Core Functionality

- [x] **Table View** - Display todos in an organized table with status tabs (To Do, In Progress, Complete)
- [x] **Kanban View** - Visual board with drag-and-drop functionality between columns
- [x] **Status Management** - Mark todos as complete and move between different statuses
- [x] **Empty States** - Clean UI when no todos are present
- [x] **View Toggle** - Switch seamlessly between table and kanban views

### Bonus Features

- [x] **LocalStorage Persistence** - Todos persist across browser sessions
- [x] **Live Updates** - Instant UI updates without page reloads
- [x] **Drag & Drop** - Intuitive drag-and-drop in kanban view

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Tolu1/todo-app-challenge.git
cd todo-app-challenge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

## Project Structure

```
todo-app-challenge/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main application page
│   │   ├── layout.tsx            # Root layout
│   │   └── providers.tsx         # Chakra UI provider setup
│   ├── components/
│   │   ├── todo/
│   │   │   ├── todo-header.tsx   # Header with title
│   │   │   ├── todo-searchbar.tsx # Search functionality
│   │   │   ├── todo-table-view.tsx     # Tab-based table view
│   │   │   ├── todo-table.tsx    # Todo table component
│   │   │   ├── todo-kanban-view.tsx   # Kanban board view
│   │   │   ├── todo-card.tsx     # Individual todo card
│   │   │   └── todo-view-toggle.tsx # View switcher
│   │   └── ui/
│   │       └── empty-state.tsx   # Empty state component
│   ├── hooks/
│   │   ├── use-todos.ts          # Todo management hook
│   │   └── use-local-storage.ts  # LocalStorage hook
│   ├── types/
│   │   ├── todo.ts               # Todo type definitions
│   │   └── user.ts               # User type definitions
│   ├── data/
│   │   ├── todos.ts              # Initial todo data
│   │   └── users.ts              # User data
│   ├── utils/
│   │   └── todos-mapper.ts       # Kanban board data transformation
│   └── theme.ts                  # Chakra UI theme customization
├── public/                       # Static assets
├── package.json
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── README.md
```

## Key Features Explained

### View Modes

#### Table View

- Organized tabs for different todo statuses
- Priority badges (Low, Medium, Important, Urgent)
- Assignee avatars
- Context menu for status changes
- Empty states for each tab

#### Kanban View

- Three columns: To Do, In Progress, Complete
- Drag and drop cards between columns
- Real-time updates as you drag
- Column headers with todo counts

### State Management

The app uses custom React hooks for clean state management:

```typescript
// use-todos.ts - Main todo management
const { todos, addTodo, updateTodo } = useTodos();

// use-local-storage.ts - Persistence layer
const [data, setData] = useLocalStorage("key", initialValue);
```

### Data Persistence

All todos are automatically saved to browser's localStorage:

- Survives page refreshes
- No backend required
- Instant sync across tabs (same browser)
