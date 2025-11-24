# 🐦 Twitter Clone App (React + Node.js + Express)

A simple Twitter-like application built with **React** on the frontend and **Node.js + Express** on the backend. Users can **post, update, and delete tweets**, with validation and toast notifications. All data is stored in a local JSON file.

---

## ✨ Features

- 📝 **Post tweets** with username, profile image URL, and content.
- ✏️ **Edit tweets** — only content can be edited, username and profile image are disabled.
- 🗑️ **Delete tweets**.
- ✅ **Validation**:
  - All fields must be filled.
  - Content must be at least 5 characters.
  - Username & Profile URL cannot be just spaces.
- 🔔 **Toast notifications** for success, warning, and error messages.
- 🖥️ **Server-side logging** of all requests in `middleware/server.log`.
- 💾 **Persistent storage** using `tweet.json`.

---

## 🛠️ Technologies Used

- **Frontend**: React, react-icons, react-toastify, Axios
- **Backend**: Node.js, Express, CORS, fs module
- **Storage**: JSON file
- **Logging**: Middleware writes all requests to `server.log`

---

## 🎥 Video Demo

[📹 Click here to watch](https://drive.google.com/file/d/1kcxTb9EzV3KoVZ1eTM5SfIFs4tqC8uQH/view?usp=sharing)

---

## ⚙️ Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
