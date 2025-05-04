# 📝 Manwrite – Full-Stack Blog Application

![image](https://github.com/user-attachments/assets/efb7c144-0b54-4518-af8d-126c26fe9a22)

Manwrite is a modern, fully functional full-stack blog application built from the ground up. This project covers everything from setting up the frontend to integrating a robust backend with database storage, offering a complete end-to-end experience for developers looking to build and scale dynamic web applications. Besides being a full stack project, this project is also where I capture my thoughts and ideas about my side hobbies and life in general.

## 🚀 Features

- **User Authentication** – Secure registration and login system using Express.
- **User Profiles** – Users can update personal details or delete their accounts.
- **Rich Text Editing** – Dynamic Markdown support for creating blog posts with automatic syntax highlighting.
- **Seamless Media Storage** – Upload and manage images effortlessly with ImageKit.
- **User Engagement** – Like and interact with blog posts in real time.
- **Personal Dashboard** – A dedicated space with user stats and blog management tools.
- **Responsive UI** – Fully optimized for all devices with light/dark mode support.
- **Real-Time Notifications** – Instant updates for likes and comments.
- **Advanced Search** – Quickly find blog posts with a powerful search feature.
- **Infinite Scrolling** – Smooth browsing experience with automatic content loading.

### Additional Capabilities

- 🏗️ Full CRUD (Create, Read, Update, Delete) functionality for blog posts.
- 🖼️ Image upload support via ImageKit integration.
- 🔐 Secure authentication and session management.
- 🔥 Built using a modern full-stack development approach.

## 🛠 Tech Stack

### **Frontend**

- **React 19** – Component-based UI development with the latest React version.
- **Tailwind CSS** – Utility-first styling for rapid design.
- **Framer Motion** – Smooth animations and transitions.
- **React Router v7** – Advanced routing capabilities.
- **Vite** – Next-generation frontend tooling for faster development.

### **Backend**

- **Node.js** – High-performance server-side JavaScript runtime.
- **Express.js** – Lightweight framework for building APIs and handling requests.
- **MongoDB** – NoSQL database for scalable data storage.

### **Cloud Services**

- **ImageKit** – Cloud-based image and video management.

## 📂 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/yourusername/manwrite.git
cd manwrite
```

### 2️⃣ Install dependencies

```sh
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the client directory and add the following variables:

```ini
VITE_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
VITE_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Create a `.env` file in the server directory and add:

```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Start the development servers

```sh
# Start frontend (from client directory)
npm run dev

# Start backend (from server directory)
npm run dev
```

The frontend will be available at **http://localhost:5173** and the backend at **http://localhost:5000**.

## 🎯 Key Takeaways from This Project

✅ **Mastering full-stack application architecture** – Understanding the synergy between frontend and backend.  
✅ **Modern React development** – Working with React 19 and the latest ecosystem tools.  
✅ **Responsive design with Tailwind** – Creating adaptive layouts with utility-first CSS.  
✅ **Cloud integration** – Managing media assets with ImageKit.  
✅ **Building real-world CRUD applications** – Implementing core web app functionalities with modern tools.
