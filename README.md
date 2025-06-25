# 🏃‍♂️ RunNexus - Marathon Management System

Welcome to **RunNexus**, a complete marathon management platform that connects organizers with runners. Easily manage, create, and participate in marathon events — all from one streamlined dashboard.

🌐 **Live Site:** [https://run-nexus.web.app/](https://run-nexus.web.app/)

---

## 🚀 Key Features

- 🔐 **Firebase Authentication** — Secure login and user authentication system for both organizers and participants.
- 🗓️ **Marathon Event Management** — Create, view, and update marathon events with custom registration periods and marathon dates.
- 📋 **User Dashboard** — Participants can register for events, view their registered marathons, and manage their activities.
- 🔒 **Secured API with Firebase Admin** — All sensitive routes are protected using Firebase Admin token verification.
- 🎨 **Modern UI/UX** — Built using **Tailwind CSS**, **SwiperJS**, and **custom alert modals** for a seamless user experience.

---

## 🛠️ Technologies Used

- ⚛️ React.js & React Router
- 🌬️ Tailwind CSS
- 🔥 Firebase Auth & Hosting
- ☁️ MongoDB & Express.js (Backend)
- 🔐 Firebase Admin for Secured APIs
- 🔄 Axios with Interceptors
- 💡 SwiperJS (for carousels/sliders)

---
## 📦 Dependencies

```json
{
  "@tailwindcss/vite": "^4.1.8",
  "axios": "^1.10.0",
  "firebase": "^11.9.1",
  "flowbite": "^3.1.2",
  "lottie-react": "^2.4.1",
  "react": "^19.1.0",
  "react-countdown-circle-timer": "^3.2.1",
  "react-datepicker": "^8.4.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.2",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.6.13",
  "swiper": "^11.2.8",
  "tailwindcss": "^4.1.8"
}
```

## ⚙️ How to Run Locally

### 1.Clone the repository
```bash
git clone https://github.com/Abdullah0604/marathon-management-system.git
cd marathon-management-system
```
### 2.Install Dependencies
```bash
npm install 
```
### 3.Create and Configure .env File
```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```
### 4.Run the application
```bash
npm run dev 
```
