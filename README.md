# Mini WhatsApp

A WhatsApp-inspired chat management application built using **Node.js, Express.js, EJS, MongoDB and Mongoose**. This project demonstrates CRUD operations with persistent database storage.

## Features

- **Create Chats:** Add new conversations with sender, receiver and message details.
- **View Chats:** Display all stored chats with sender, receiver, message and timestamp.
- **Edit Chats:** Update existing chat messages.
- **Delete Chats:** Remove conversations from the database.
- **Database Integration:** Store and manage chat records using MongoDB and Mongoose.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, EJS
- **Database:** MongoDB
- **ODM:** Mongoose
- **Other:** Method-Override

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
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
└── .gitignore
```

## Installation & Setup

1. Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

2. Navigate to the project directory:

```bash
cd mini-whatsapp
```

3. Install dependencies:

```bash
npm install
```

4. Make sure MongoDB is running locally.

5. Start the application:

```bash
node index.js
```

6. Open in your browser:

```text
http://localhost:8080/chats
```

## Database

- Database Name: `whatsapp`
- Collection: `chats`

Each chat document contains:

| Field | Description |
|---|---|
| from | Sender name |
| to | Receiver name |
| msg | Chat message |
| created_at | Chat creation date and time |

## CRUD Operations

| Operation | HTTP Method | Route |
|---|---|---|
| View all chats | GET | `/chats` |
| Create chat form | GET | `/chats/new` |
| Save new chat | POST | `/chats` |
| Edit chat form | GET | `/chats/:id/edit` |
| Update chat | PUT | `/chats/:id` |
| Delete chat | DELETE | `/chats/:id` |

## Learning Outcomes

- Implementing CRUD operations using Express.js.
- Working with MongoDB through Mongoose.
- Creating schemas and models.
- Handling dynamic routes and request parameters.
- Using EJS for dynamic page rendering.
- Implementing PUT and DELETE methods using Method-Override.

---

**Developed as a Full Stack Development practice project.**
