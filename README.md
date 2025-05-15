# Fullstack Engineer Online Assessment

## Task Overview

**Build an Up/Down Counter Web App**

Create a simple web application that allows a user to:

- Increase the counter (Up)
- Decrease the counter (Down)
- Reset the counter to zero

The counter state should be **stored and updated on the backend via API calls**.

---

## Requirements

- **Frontend:** Use React (preferred), or any modern frontend framework.
- **Backend:** Use Node.js (Express), Python (FastAPI/Django), or Java (Spring Boot).
- **API:** RESTful endpoints between frontend and backend.
- **Data Persistence:**
  - By default, store the counter in-memory (server restarts reset counter).
  - **Optional:** Use a database (PostgreSQL, MongoDB, or SQLite/JSON file) to persist the counter value.
- **Authentication:** Not required for this assessment, but bonus if you secure the APIs with JWT.

---

## Deliverables

- Source code (GitHub repo or zip)
- Simple README with clear run instructions

---

## Minimum Features

### Frontend

- Display the current counter value
- Button to increment (Up)
- Button to decrement (Down)
- Button to reset

### Backend

- `GET /counter` — Get current counter value
- `POST /counter/up` — Increment counter
- `POST /counter/down` — Decrement counter
- `POST /counter/reset` — Reset counter

---

## Optional Features (Bonus)

- **Data persistence:** Store the counter value in a database (PostgreSQL, MongoDB, or file).
- **JWT Authentication:** Secure the endpoints with JWT tokens.
- **Monitoring & Logging:**  Add application-level logging for key actions (API requests, errors, state changes).  

- **Timestamp/history log:** Show a log of counter changes (last N actions).
- **Responsive UI:** Use Tailwind CSS or similar.
- **Dockerize the application:** Provide Dockerfile and Docker Compose for easy setup.
- **API validation:** Add input validation or error handling.

---

## Time Limit

**1.5 hours**

---

## Evaluation Criteria

- Completeness and correctness of features
- Clean, readable, and maintainable code
- Proper API usage and frontend/backend separation
- Clear setup and run instructions
- Implementation of any optional bonus features

---
