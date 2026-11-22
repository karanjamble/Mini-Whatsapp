# Mini WhatsApp

A WhatsApp-inspired chat application built using **Node.js, Express.js, EJS and MongoDB**. The application allows users to create, view, edit and delete chat messages with data stored persistently in MongoDB using Mongoose.

## Features

- **Create Chats:** Add messages with sender, receiver and message content.
- **View Chats:** Display all conversations with their details and timestamps.
- **Edit Chats:** Update existing chat messages.
- **Delete Chats:** Remove conversations from the database.
- **MongoDB Integration:** Store chat records using Mongoose schemas and models.
- **Sample Data:** Initialize the database with sample chat records.

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB object modeling |
| EJS | Dynamic HTML rendering |
| HTML & CSS | Frontend |
| Method-Override | Support PUT and DELETE form requests |

## Project Structure

```text
mini-whatsapp/
│
├── models/
│   └── chat.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── chats.ejs
│   ├── edit.ejs
│   └── new.ejs
│
├── index.js
├── init.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd mini-whatsapp
```

**3. Install dependencies**

```bash
npm install
```

**4. Start MongoDB**

Make sure your local MongoDB server is running.

The application connects to:

```text
mongodb://127.0.0.1:27017/whatsapp
```

**5. Initialize sample data (optional)**

```bash
node init.js
```

This inserts 10 sample chat records into the database.

**6. Start the application**

```bash
node index.js
```

Open in your browser:

```text
http://localhost:8080/chats
```

## Database Schema

Each chat document contains the following fields:

| Field | Type | Description |
|---|---|---|
| from | String | Sender name |
| to | String | Receiver name |
| msg | String | Chat message |
| created_at | Date | Message creation timestamp |

## CRUD Operations

| Operation | Method | Endpoint |
|---|---|---|
| View all chats | GET | `/chats` |
| Display new chat form | GET | `/chats/new` |
| Create chat | POST | `/chats` |
| Display edit form | GET | `/chats/:id/edit` |
| Update chat | PUT | `/chats/:id` |
| Delete chat | DELETE | `/chats/:id` |

## Learning Outcomes

- Implementing CRUD operations using Express.js.
- Connecting Node.js applications with MongoDB.
- Creating Mongoose schemas and models.
- Performing database operations using Mongoose methods.
- Handling dynamic routes and form submissions.
- Rendering dynamic content using EJS.
- Working with HTTP methods and Method-Override.

---

**Built as a Full Stack Development practice project.**
