# School Management System

A **School Management System** built with **Node.js, Prisma, and MongoDB** for handling student data.

## 🚀 Features

✅ Add a new student (POST /students)  
✅ Retrieve all students (GET /students)  
✅ Fetch student details by registration number (GET /students/:regNo)  
✅ Update student details (PUT /students/:regNo)  
✅ Delete a student (supports soft deletion by updating status) (DELETE /students/:regNo)  
✅ Error handling and validation  
✅ API testing via cURL scripts.  
✅ MongoDB integration with Prisma ORM.

---

## 📌 Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 16.x)
- **npm** (>= 8.x)
- **MongoDB** (Cloud or Local Instance)

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
 git clone https://github.com/Debraj-Das/student-module.git
 cd student-module
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Environment Variables

Create a .env file in the project root (or rename .env.example to .env) and update the values:

```bash
# MongoDB Connection String
DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/<collection-name>?retryWrites=true&w=majority"

# Server Port
PORT=3000
```

> ⚠️ Replace `<username>`, `<password>`, and `<collection-name>` with your actual MongoDB credentials.

---

### 4️⃣ Initialize Prisma

```bash
npx prisma generate
```

Push database changes:

```bash
npx prisma db push
```

---

### 5️⃣ Start the Server

```bash
npm start
```

> Your API will be running at `http://localhost:3000`

---

## 📜 API Testing

You can test the API using **cURL** scripts from the `scripts/` directory:

#### Create a Student

```bash
bash scripts/create_student.sh
```

#### Get All Students

```bash
bash scripts/get_students.sh
```

#### Get a Student by Registration No

```bash
bash scripts/get_student.sh
```

#### Update a Student

```bash
bash scripts/update_student.sh
```

#### Delete a Student

```bash
bash scripts/delete_student.sh
```

#### Change Student Status (Active/Inactive)

```bash
bash scripts/status_change.sh
```

---
