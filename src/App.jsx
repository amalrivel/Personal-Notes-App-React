import { useState } from "react";
import Header from "./components/Header";
import NotesContainer from "./components/NotesContainer";
import { useEffect } from "react";
import { getInitialData } from "./utils/index";
import NoteForm from "./components/NoteForm";
import SearchForm from "./components/SearchForm";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    setNotes(getInitialData());
  }, []);

  const activeNotes = notes.filter(
    (note) =>
      !note.archived &&
      (searchKeyword === "" ||
        note.title.toLowerCase().includes(searchKeyword.toLowerCase()))
  );

  const archivedNotes = notes.filter(
    (note) =>
      note.archived &&
      (searchKeyword === "" ||
        note.title.toLowerCase().includes(searchKeyword.toLowerCase()))
  );

  const searchNotes = (keyword) => {
    setSearchKeyword(keyword);
  };

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const toggleArchiveStatus = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const deleteNote = (id) => {
    const isConfirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus catatan ini?"
    );

    if (isConfirmed) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <Header />
      <main className="container max-w-5xl mx-auto px-6 py-10">
        <NoteForm addNote={addNote} />
        <SearchForm searchNotes={searchNotes} />
        <NotesContainer
          activeNotes={activeNotes}
          archivedNotes={archivedNotes}
          onToggleArchive={toggleArchiveStatus}
          onDelete={deleteNote}
        />
      </main>
    </>
  );
}

export default App;
