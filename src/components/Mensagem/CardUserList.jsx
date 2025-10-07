export default function CardUserList({ name, message, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between p-3 w-full rounded-lg hover:bg-purple-100 transition"
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white text-lg font-bold">
          {name[0]}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold text-purple-900">{name}</span>
          <span className="text-xs text-gray-500">{message}</span>
        </div>
      </div>
      <div className="text-gray-500 text-xl">⋮</div>
    </button>
  );
}