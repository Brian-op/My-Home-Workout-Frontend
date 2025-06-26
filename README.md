# 🏠 My Home Workout — Front End

A React + Vite single-page app that lets users browse, start and complete home-workout routines.  
Paired with the Flask back-end in the `../backend` repo.

---

## ✨ Tech Stack

| Tech                | Why we use it                               |
| ------------------- | ------------------------------------------- |
| **React 18**        | Component-based UI                          |
| **Vite**            | Super-fast dev server & bundle              |
| **React-Router DOM**| Client-side routing                         |
| **Formik + Yup**    | Forms & validation (login / register)       |
| **Tailwind CSS**    | Utility-first styling                       |
| **Context API**     | Simple global auth state                    |

---

## 🚀 Getting Started

```bash
# clone the repo (front-end folder only)
git clone https://github.com/r0dn3y7/my-home-workout-frontend.git
cd my-home-workout-frontend

# install packages
npm install

# start Vite dev server  (http://localhost:5173 by default)
npm run dev
````

The app expects a running back-end at **`http://localhost:5000`**.
Start the Flask API in another terminal (`pipenv run flask run` inside backend folder).

---

## 🌍 Environment Variables

Create `.env` (or `.env.local`) in the project root:

```
VITE_API_URL=http://localhost:5000/api
```

`VITE_API_URL` is read by `src/utils/api.js` to prefix all fetch calls.

---

## 📂 Project Structure (key bits)

```
src/
├─ main.jsx               ■ wraps <App/> in BrowserRouter + AuthProvider
├─ App.jsx                ■ route definitions
│
├─ context/
│   └─ AuthContext.jsx    ■ login, logout, token, isLogged
│
├─ utils/
│   └─ api.js             ■ apiFetch helper (adds JWT header)
│
├─ pages/
│   ├─ Login.jsx          ■ POST /login   → stores JWT
│   ├─ Register.jsx       ■ POST /register
│   ├─ Dashboard.jsx      ■ shows welcome + workouts
│   ├─ Workouts.jsx       ■ filter ▸ start ▸ complete
│   └─ Profile.jsx        ■ GET /profile  + logout button
│
└─ components/
    ├─ Navbar.jsx
    └─ ProtectedRoute.jsx
```

---

## ✅ Implemented Features

* **Auth**

  * Register / Login (Formik forms)
  * JWT stored in localStorage
  * Context-based `login` / `logout`
  * Protected routes (`/dashboard`, `/workouts`, `/profile`)

* **Dashboard**

  * Dynamic welcome (user email)
  * Workout summary cards
  * Active-workout banner

* **Workouts**

  * Fetch list from Flask (`GET /api/workouts`)
  * Filter by category
  * Start → view instructions → Complete
  * PATCH `/api/workouts/<id>/complete`

* **Profile**

  * Pulls user data (`GET /api/profile`)
  * Logout button clears JWT & redirects

* **Global**

  * Responsive Tailwind design
  * Centralised `apiFetch` with auto-JWT header
  * `.env` configurable API base URL

---

## 🧪 Scripts

| Command           | Action                                 |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start Vite dev server                  |
| `npm run build`   | Create production build in `dist/`     |
| `npm run preview` | Preview the production build locally   |
| `npm run lint`    | (optional) Lint with ESLint / Prettier |

---

## 🔗 Back-End Quick Links

| Endpoint                            | Purpose                    |
| ----------------------------------- | -------------------------- |
| `POST /api/register`                | New user sign-up           |
| `POST /api/login`                   | Login → returns JWT        |
| `GET  /api/profile`                 | Protected profile          |
| `GET  /api/workouts`                | List all workouts          |
| `POST /api/workouts`                | Create workout (protected) |
| `PATCH /api/workouts/<id>/complete` | Mark complete              |

---

## 💡 Roadmap

* User progress history
* File uploads (profile pics)
* Workout videos / GIFs
* Push to Render (Flask) & Vercel (React) for live demo

---

### 👷‍♂️ Contributors
    1.Rodney Amani
    2.Ian Mwendwa

---

```


