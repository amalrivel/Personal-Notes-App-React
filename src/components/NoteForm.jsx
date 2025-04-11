import { useState } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (e) => {
    const input = e.target.value;

    if (input.length <= 50) {
      setTitle(input);
      setRemainingChars(50 - input.length);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime().toString();
    const createdAt = new Date().toISOString();
    const archived = false;

    const note = { id, title, body, createdAt, archived };
    console.log(note);

    setTitle("");
    setBody("");
    setRemainingChars(50);

    addNote(note);
  };

  return (
    <section className="mb-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
        Buat Catatan Pribadi Baru
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-800 mb-2">
            Judul
          </label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
            className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Sisa karakter: {remainingChars}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-gray-800 mb-2">
            Isi
          </label>
          <textarea
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            className="border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-800 transition-colors shadow-md"
        >
          Buat Catatan
        </button>
      </form>
    </section>
  );
}

export default NoteForm;
