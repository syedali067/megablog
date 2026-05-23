# MegaBlog 📝

A full-stack blog platform built with **React** and **Appwrite**, featuring user authentication, rich text editing, and image uploads. Built to demonstrate real-world frontend and backend integration skills.

![MegaBlog](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)
![Appwrite](https://img.shields.io/badge/Appwrite-Cloud-pink?style=flat-square&logo=appwrite)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?style=flat-square&logo=redux)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-teal?style=flat-square&logo=tailwindcss)

---

## 🌐 Live Demo

🔗 [megablog.vercel.app](https://megablog.vercel.app) *(update with your actual link)*

---

## 📸 Screenshots

> *(Add screenshots of your app here after deployment)*

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup, login, and logout via Appwrite
- ✍️ **Rich Text Editor** — Write and format blog posts with TinyMCE RTE
- 🖼️ **Image Uploads** — Featured image upload and preview via Appwrite Storage
- 📝 **Full CRUD** — Create, read, update, and delete blog posts
- 🟢 **Post Status** — Publish or keep posts inactive/draft
- 🔒 **Protected Routes** — Only logged-in users can create or edit posts
- 📱 **Responsive Design** — Works across all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite |
| Styling | Tailwind CSS |
| State Management | Redux Toolkit |
| Backend / Database | Appwrite Cloud |
| Authentication | Appwrite Auth |
| File Storage | Appwrite Storage |
| Rich Text Editor | TinyMCE |
| Routing | React Router DOM v6 |
| Form Handling | React Hook Form |

---

## 📁 Project Structure

```
megablog/
├── src/
│   ├── appwrite/
│   │   ├── config.js        # Appwrite DB, Storage services
│   │   └── auth.js          # Appwrite Auth service
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PostCard.jsx
│   │   ├── PostForm.jsx
│   │   ├── RTE.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   ├── store/
│   │   ├── store.js
│   │   └── authSlice.js
│   ├── conf/
│   │   └── conf.js          # Environment variables config
│   └── App.jsx
├── .env                     # Environment variables (not committed)
├── .env.sample              # Sample env file for reference
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- An [Appwrite Cloud](https://cloud.appwrite.io) account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/syedali067/megablog.git
cd megablog
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

4. **Set up Appwrite**

   - Create a new project on [Appwrite Cloud](https://cloud.appwrite.io)
   - Create a Database with a collection named `articles`
   - Add these attributes to the collection:

   | Attribute | Type | Required |
   |---|---|---|
   | title | String | ✅ |
   | content | String | ✅ |
   | featuredImage | String | ❌ |
   | status | String | ✅ |
   | userId | String | ✅ |

   - Create a Storage Bucket for image uploads
   - Set permissions to allow read for `any` role

5. **Run the app**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Key Implementation Details

- **Appwrite Service Layer** — All Appwrite interactions are abstracted into a clean service class (`config.js` and `auth.js`), keeping components clean and logic reusable
- **Redux for Auth State** — User session is managed globally via Redux Toolkit so any component can access auth state
- **Protected Routes** — Routes like Add Post and Edit Post are wrapped in an `AuthLayout` component that redirects unauthenticated users
- **React Hook Form** — Forms are handled efficiently with validation and minimal re-renders
- **Slug Generation** — Post slugs are auto-generated from the title in real time

---

## 🧠 What I Learned

- Integrating a **Backend-as-a-Service (BaaS)** with a React frontend
- Managing **global auth state** with Redux Toolkit
- Building a **service abstraction layer** for clean architecture
- Handling **file uploads** and generating preview URLs
- Implementing **role-based route protection** in React Router v6

---

## 📬 Contact

**Syed Ali**
- GitHub: [@syedali067](https://github.com/syedali067)
- LinkedIn: *(add your LinkedIn URL)*
- Email: *(add your email)*

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
