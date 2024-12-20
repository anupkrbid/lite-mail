class Email {
  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

module.exports = User;

// Here’s an example schema and optimized queries for using SQLite in your email app:

// Schema Design
// This schema follows the requirements for managing emails, including filtering by is_read, is_favorite, and pagination.

// sql
// Copy code
// -- Emails Table
// CREATE TABLE emails (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,   -- Unique ID for each email
//     sender_name TEXT NOT NULL,              -- Sender's name
//     sender_email TEXT NOT NULL,             -- Sender's email address
//     subject TEXT NOT NULL,                  -- Email subject
//     short_description TEXT,                 -- Short description of the email
//     body TEXT,                              -- Full email body
//     is_read BOOLEAN DEFAULT 0,              -- Read status: 0 = Unread, 1 = Read
//     is_favorite BOOLEAN DEFAULT 0,          -- Favorite status: 0 = Not Favorite, 1 = Favorite
//     date_time TEXT NOT NULL                 -- Email timestamp in ISO 8601 format
// );

// -- Indexes to Optimize Queries
// CREATE INDEX idx_is_read ON emails(is_read);
// CREATE INDEX idx_is_favorite ON emails(is_favorite);
// CREATE INDEX idx_date_time ON emails(date_time);
