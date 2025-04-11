# Personal Notes App

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.1-38B2AC?style=flat&logo=tailwind-css)

A sleek and intuitive personal notes application built with React and styled with Tailwind CSS. This application allows users to create, archive, search, and delete notes with a responsive and user-friendly interface.

## ✨ Features

- ✏️ **Create Notes**: Add new notes with titles (limited to 50 characters) and content
- 🔍 **Search Notes**: Find specific notes by title
- 📂 **Archive/Unarchive**: Toggle notes between active and archived states
- 🗑️ **Delete Notes**: Remove unwanted notes with confirmation dialog
- 💾 **Character Counter**: Dynamic character limit tracking for note titles

## 🖥️ Screenshots

![App Screenshot](https://github.com/user-attachments/assets/ed238774-6cae-4f59-8b01-e4c3f9796263)

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amalrivel/Personal-Notes-App-React.git
   cd Personal-Notes-App-React
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🧱 Project Structure

```
src/
├── assets/         # Static assets
│   └── react.svg
├── components/     # React components
│   ├── ActiveNotes.jsx
│   ├── ArchivedNotes.jsx
│   ├── Header.jsx
│   ├── NoteForm.jsx
│   ├── NoteItem.jsx
│   ├── NotesContainer.jsx
│   └── SearchForm.jsx
├── styles/         # CSS styles
│   └── index.css
├── utils/          # Utility functions
│   └── index.js
├── App.jsx         # Main application component
└── main.jsx        # Application entry point
```

## 🌟 Key Features Implementation

### Character Limit for Note Title

```jsx
const handleTitleChange = (e) => {
  const input = e.target.value;

  if (input.length <= 50) {
    setTitle(input);
    setRemainingChars(50 - input.length);
  }
};
```

### Delete Confirmation

```jsx
const deleteNote = (id) => {
  const isConfirmed = window.confirm(
    "Apakah Anda yakin ingin menghapus catatan ini?"
  );

  if (isConfirmed) {
    setNotes(notes.filter((note) => note.id !== id));
  }
};
```

### Archive/Unarchive Functionality

```jsx
const toggleArchiveStatus = (id) => {
  setNotes(
    notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    )
  );
};
```

## 📊 What I Learned

- Building a complete React application with multiple components
- Managing component state effectively using React hooks
- Implementing a search feature for filtering content
- Creating a responsive UI with Tailwind CSS
- Form validation and character limiting on inputs
- Using conditional rendering based on component state

## 🚧 Future Improvements

- Add user authentication
- Implement dark/light theme toggle
- Add tags/categories for better organization
- Create a backend to store notes data
- Add rich text editing capabilities
- Implement drag and drop for note organization
- Add export/import functionality for notes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

---

Feel free to use this project as a reference or starting point for your own React applications!
