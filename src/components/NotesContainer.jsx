import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

function NotesContainer({
  activeNotes,
  archivedNotes,
  onToggleArchive,
  onDelete,
}) {
  return (
    <div className="grid gap-10">
      <ActiveNotes
        notes={activeNotes}
        onToggleArchive={onToggleArchive}
        onDelete={onDelete}
      />
      <ArchivedNotes
        notes={archivedNotes}
        onToggleArchive={onToggleArchive}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NotesContainer;
