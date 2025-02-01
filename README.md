# Humble Superhero (Monorepo)

## 🤝 How to Collaborate

- If working in a team, we can organize a meeting and braintstorm ideas for improvements, the first thing I would suggest is using a database (PostgreSQL, MongoDB).
- We could also implement authentication for superhero submissions.
- For displaying results we can add pagination and filtering.

## ⏳ If I Had More Time

- Implement a real database instead of an in-memory array.
- Improve the ui/ux (responsive page, animations, etc...)
- Add unit tests for the controller and integration tests.

## 📌 Project Structure

This monorepo contains:

- **Backend:** A NestJS API (`apps/backend`) named `humble-superhero-api` in `package.json`.
- **Frontend:** A Vite + React app (`apps/frontend`).

## 🚀 Getting Started

### 1️⃣ Install Dependencies

Make sure you have **Node.js** installed, then run:

```bash
npm install
```

This will install dependencies for both the backend and frontend using npm workspaces.

### 2️⃣ Start the Project

To start both the **NestJS API** and **React app** simultaneously, run:

```bash
npm run dev
```

This will:

- Start the **backend (NestJS API)** at `http://localhost:3000`
- Start the **frontend (React app)** at `http://localhost:5173`

### 3️⃣ API Endpoints

Once running, the backend provides:

- **POST** `/superheroes` → Add a new superhero
- **GET** `/superheroes` → Fetch all superheroes, sorted by humility

## 📂 Folder Structure

```
my-monorepo/
│── apps/
│   ├── backend/   # NestJS API (named humble-superhero-api in package.json)
│   ├── frontend/  # React + Vite frontend
│── package.json   # Root package.json (npm workspaces config)
│── package-lock.json
│── npm-workspace.json  # npm workspace configuration
```

## 🛠 Additional Commands

### Start Backend Only

```bash
npm --workspace humble-superhero-api run start
```

### Start Frontend Only

```bash
npm --workspace frontend run dev
```

## 🎯 Notes

- Ensure ports `3000` (backend) and `5173` (frontend) are available.
- Modify `vite.config.ts` if you need to change frontend settings.

Enjoy coding! 🚀
