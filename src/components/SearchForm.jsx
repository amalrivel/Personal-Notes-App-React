import { useState } from "react";

function SearchForm({ searchNotes }) {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchNotes(keyword);
  };

  return (
    <section className="mb-12 bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-indigo-800 border-b-2 border-indigo-200 pb-3">
        Cari Catatan
      </h2>
      <form className="flex flex-wrap gap-3" onSubmit={handleSearch}>
        <div className="flex-grow">
          <label className="sr-only">Judul</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Masukkan judul catatan..."
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-800 transition-colors shadow-md"
        >
          Cari
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
