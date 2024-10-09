export default function Square({ value, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="w-16 h-16"
    >
      {value ? value : " "}
    </button>
  );
};
