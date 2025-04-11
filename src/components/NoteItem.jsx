import { showFormattedDate } from "../utils/index";

function NoteItem({
  title,
  body,
  createdAt,
  isArchived,
  onToggleArchive,
  onDelete,
}) {
  return (
    <div
      className={
        "p-5 border-2 rounded-lg hover:shadow-md transition-shadow " +
        (isArchived ? "border-orange-200" : "border-purple-200")
      }
    >
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-sm text-gray-700 mb-2">{body}</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={onToggleArchive}
          className={
            "px-3 py-2 text-xs font-medium rounded-lg transition-colors " +
            (isArchived
              ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
              : "bg-purple-100 text-purple-700 hover:bg-purple-200")
          }
        >
          {isArchived ? "Aktifkan" : "Arsipkan"}
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-2 text-xs font-medium rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
