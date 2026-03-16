# 📂 Digital Document Manager

A modern **Digital Document Management System** built using **React.js, Redux Toolkit, and Firebase Storage**.
This application allows users to **upload, manage, preview, download, and delete documents** securely in the cloud.

The project demonstrates **cloud storage integration, centralized state management, and real-time UI updates**, making it suitable for real-world applications such as **student document management, office file storage, or certificate verification systems**.

---

# 🚀 Features

### 📤 Upload Documents

Users can upload different types of files including:

* PDF Documents
* Images
* Certificates
* Reports
* Resume Files

Each uploaded file stores metadata such as:

* File Name
* File Type
* File Size
* Upload Date
* Download URL

---

### 📄 View Uploaded Documents

All uploaded files are displayed in a structured UI with:

* File Name
* Download Link
* File Preview
* Upload Time

---
# 📂 Digital Document Manager

A modern **Digital Document Management System** built using **React.js, Redux Toolkit, and Firebase Storage**.
This application allows users to **upload, manage, preview, download, and delete documents** securely in the cloud.

The project demonstrates **cloud storage integration, centralized state management, and real-time UI updates**, making it suitable for real-world applications such as **student document management, office file storage, or certificate verification systems**.


---

# 📸 Project Preview

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e5c4e104-82a0-408d-85c1-9d7bf8c5cb4c" />

---


# 🚀 Features

### 📤 Upload Documents

Users can upload different types of files including:

* PDF Documents
* Images
* Certificates
* Reports
* Resume Files

Each uploaded file stores metadata such as:

* File Name
* File Type
* File Size
* Upload Date
* Download URL

---

### 📄 View Uploaded Documents

All uploaded files are displayed in a structured UI with:

* File Name
* Download Link
* File Preview
* Upload Time

---

### ✏️ Update File Details

Users can update document metadata such as:

* File Title
* File Category
* Description

---

### 🗑 Delete Documents

Users can remove files from **Firebase Storage**, and Redux instantly updates the UI without refreshing the page.

---

### 🔍 Search & Filter Documents

Users can search documents based on:

* File Name
* File Type
* Upload Date

---

### ⚡ Real-Time UI Updates

Using **Redux Toolkit**, the interface automatically updates when:

* A file is uploaded
* A file is deleted
* Metadata is updated

---

# 🛠 Tech Stack

| Technology                | Purpose            |
| ------------------------- | ------------------ |
| React.js                  | Frontend UI        |
| Redux Toolkit             | State Management   |
| Firebase Storage          | Cloud File Storage |
| Redux Thunk               | Async Operations   |
| CSS                       | Styling            |
| Vercel / Firebase Hosting | Deployment         |

---

# 📂 Project Structure

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── UploadFile.jsx
│   ├── FileList.jsx
│   ├── FileCard.jsx
│   └── SearchFilter.jsx
│
├── features
│   └── fileSlice.js
│
├── firebase
│   └── firebaseConfig.js
│
├── pages
│   └── Dashboard.jsx
│
├── styles.css
├── App.js
└── index.js
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/digital-document-manager.git
```

### 2️⃣ Navigate to Project

```
cd digital-document-manager
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Install Firebase

```
npm install firebase
```

### 5️⃣ Configure Firebase

Create a file:

```
src/firebase/firebaseConfig.js
```

Add the following code:

```javascript
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
```

---

# 🔥 Firebase Setup

1. Go to **Firebase Console**
2. Create a new project
3. Enable **Firebase Storage**
4. Set **Storage Rules**:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

---

# ▶️ Run the Application

Start the development server:

```
npm start
```

or

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 📌 Use Case Example

This system can be used by:

### 🎓 Colleges

* Students upload certificates
* Faculty upload reports
* Admin verifies documents

### 🏢 Offices

* Employees upload resumes
* Store official documents
* Centralized document management

---

# 🚀 Future Improvements

* Drag & Drop Upload
* File Upload Progress Bar
* Image / PDF Preview
* User Authentication
* Role-Based Access Control
* File Categories
* Cloud Database Integration
* Dark Mode UI
* Pagination for large file lists



---

# 👨‍💻 Author

**Mann Patel**

GitHub:
https://github.com/mannpatel08

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub to support the development.


### ✏️ Update File Details

Users can update document metadata such as:

* File Title
* File Category
* Description

---

### 🗑 Delete Documents

Users can remove files from **Firebase Storage**, and Redux instantly updates the UI without refreshing the page.

---

### 🔍 Search & Filter Documents

Users can search documents based on:

* File Name
* File Type
* Upload Date

---

### ⚡ Real-Time UI Updates

Using **Redux Toolkit**, the interface automatically updates when:

* A file is uploaded
* A file is deleted
* Metadata is updated

---

# 🛠 Tech Stack

| Technology                | Purpose            |
| ------------------------- | ------------------ |
| React.js                  | Frontend UI        |
| Redux Toolkit             | State Management   |
| Firebase Storage          | Cloud File Storage |
| Redux Thunk               | Async Operations   |
| CSS                       | Styling            |
| Vercel / Firebase Hosting | Deployment         |

---

# 📂 Project Structure

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── UploadFile.jsx
│   ├── FileList.jsx
│   ├── FileCard.jsx
│   └── SearchFilter.jsx
│
├── features
│   └── fileSlice.js
│
├── firebase
│   └── firebaseConfig.js
│
├── pages
│   └── Dashboard.jsx
│
├── styles.css
├── App.js
└── index.js
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/digital-document-manager.git
```

### 2️⃣ Navigate to Project

```
cd digital-document-manager
```

### 3️⃣ Install Dependencies

```
npm install
```

### 4️⃣ Install Firebase

```
npm install firebase
```

### 5️⃣ Configure Firebase

Create a file:

```
src/firebase/firebaseConfig.js
```

Add the following code:

```javascript
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
```

---

# 🔥 Firebase Setup

1. Go to **Firebase Console**
2. Create a new project
3. Enable **Firebase Storage**
4. Set **Storage Rules**:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

---

# ▶️ Run the Application

Start the development server:

```
npm start
```

or

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

# 📌 Use Case Example

This system can be used by:

### 🎓 Colleges

* Students upload certificates
* Faculty upload reports
* Admin verifies documents

### 🏢 Offices

* Employees upload resumes
* Store official documents
* Centralized document management

---

# 🚀 Future Improvements

* Drag & Drop Upload
* File Upload Progress Bar
* Image / PDF Preview
* User Authentication
* Role-Based Access Control
* File Categories
* Cloud Database Integration
* Dark Mode UI
* Pagination for large file lists

---

# 📸 Project Preview

*(Add screenshots here after deployment)*

---

# 👨‍💻 Author

**Mann Patel**

GitHub:
https://github.com/mannpatel08

---

# ⭐ Support

If you like this project, please consider giving it a ⭐ on GitHub to support the development.
