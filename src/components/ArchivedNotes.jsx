import NoteItem from "./NoteItem";

function ArchivedNotes({ notes, onToggleArchive, onDelete }) {
  return (
    <section className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-orange-600 border-b-2 border-orange-200 pb-3">
        Arsip
      </h2>

      <div className="space-y-5">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              isArchived={note.archived}
              onToggleArchive={() => onToggleArchive(note.id)}
              onDelete={() => onDelete(note.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">Tidak ada arsip</p>
        )}
      </div>
    </section>
  );
}

export default ArchivedNotes;
