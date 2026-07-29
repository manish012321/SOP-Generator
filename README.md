# 🤖 AI-Powered SOP Generator

> Transform any process description into a structured Standard Operating Procedure in seconds using AI.

![SOP Generator](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge)
![MERN Stack](https://img.shields.io/badge/MERN-Stack-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🌐 Live Demo

https://sop-generator-iota.vercel.app/

---

## 📋 What is this?

Every growing business loses knowledge when employees leave. Writing SOPs manually takes days and never gets done.

**SOP Generator** solves this — paste or type any process description, and AI instantly structures it into a professional, numbered Standard Operating Procedure with roles, warnings, and exportable PDF.

---

## 🐳 Docker Hub

Pull images directly:
docker pull manishsuriyal/sop-generator-server:latest
docker pull manishsuriyal/sop-generator-client:latest

## ✨ Features

- 🧠 **AI Generation** — Paste raw text, get a structured SOP instantly
- 📄 **PDF Export** — Download your SOP as a professional PDF
- 🔐 **Authentication** — Secure JWT-based register/login
- 🗂️ **SOP Management** — View, search, and delete all your SOPs
- 🏢 **Workspace** — Each user gets their own isolated workspace
- 📱 **Responsive UI** — Works on desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React + Vite | UI framework |
| Tailwind CSS | Styling |
| Zustand | Global state management |
| Axios | API calls |
| React Router | Navigation |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|---|---|
| Node.js + Express | REST API |
| MongoDB + Mongoose | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| Groq (Llama 3) | AI SOP generation |
| PDFKit | PDF generation |
| CORS | Cross-origin requests |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Groq API key (free at console.groq.com)

### 1. Clone the repository
```bash
git clone https://github.com/manish012321/SOP-Generator.git
cd SOP-Generator
```

### 2. Setup Backend
```bash
cd server
npm install
```

Create `server/.env`:
```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
GROQ_API_KEY=your_groq_api_key
PORT=5000
CLIENT_URL=http://localhost:5173
RESEND_API_KEY:
```

Start the server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd client
npm install
```

Create `client/.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 📁 Project Structure

```
sop-generator/
├── client/                   # React frontend
│   └── src/
│       ├── api/
│       │   └── axios.js      # Axios instance with interceptors
│       ├── components/
│       │   ├── Header.jsx
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── Dashboard.jsx
│       │   └── SopList.jsx
│       ├── store/
│       │   └── authStore.js  # Zustand auth store
│       └── App.jsx
│
└── server/                   # Express backend
    └── src/
        ├── config/
        │   └── db.js         # MongoDB connection
        ├── controllers/
        │   ├── authController.js
        │   └── sopController.js
        ├── middleware/
        │   └── authMiddleware.js
        ├── models/
        │   ├── User.js
        │   ├── Workspace.js
        │   ├── sop.schema.js
        │   └── Job.js
        ├── routes/
        │   ├── authRoutes.js
        │   └── sopRoutes.js
        ├── services/
        │   ├── aiService.js  # Groq AI integration
        │   └── pdfService.js # PDF generation
        └── index.js
```

---

## 🔌 API Endpoints

| Method | Route | Description | Auth |
|---|---|---|---|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| POST | `/api/sops` | Generate new SOP | Yes |
| GET | `/api/sops` | Get all SOPs | Yes |
| DELETE | `/api/sops/:id` | Delete SOP | Yes |
| GET | `/api/sops/:id/export/pdf` | Download PDF | Yes |

---

## 🧠 How It Works

```
User inputs process description
        ↓
Frontend sends to POST /api/sops
        ↓
JWT middleware verifies token
        ↓
Groq AI (Llama 3.3-70b) structures the text
        ↓
Returns: title + numbered steps + roles + warnings
        ↓
Saved to MongoDB
        ↓
Displayed on dashboard + available for PDF export
```

---

## 🔒 Environment Variables

### Server
| Variable | Description |
|---|---|
| `MONGO_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `GROQ_API_KEY` | Groq API key for AI generation |
| `PORT` | Server port (default 5000) |
| `CLIENT_URL` | Frontend URL for CORS |

### Client
| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API base URL |

---

## 🚀 Deployment

### Backend (Render)
1. Connect GitHub repo to Render
2. Set root directory to `server`
3. Build command: `npm install`
4. Start command: `npm start`
5. Add environment variables

### Frontend (Vercel)
1. Connect GitHub repo to Vercel
2. Set root directory to `client`
3. Add `VITE_API_URL` environment variable
4. Deploy

---

## 🔮 Roadmap

- [ ] Voice input — speak your process
- [ ] SOP editing — edit steps after generation
- [ ] Public sharing — shareable SOP links
- [ ] Flowchart generation — visual process diagrams
- [ ] Team workspaces — invite team members
- [ ] Razorpay billing — subscription plans
- [ ] Word/Docx export
- [ ] Templates library
- [ ] Chrome extension
- [ ] Mobile app

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Manish**
- GitHub: [@manish012321](https://github.com/manish012321)
- Project: [SOP Generator](https://sop-generator-iota.vercel.app)

---

## ⭐ Show your support

Give a ⭐ if this project helped you!
