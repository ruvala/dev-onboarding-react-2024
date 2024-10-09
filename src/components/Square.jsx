export default function Square({ value, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-20 h-20"
    >
      {value ? value : " "}
    </button>
  );
};
