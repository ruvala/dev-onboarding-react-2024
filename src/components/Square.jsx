/**
 * Square.jsx
 * @author Gabriel Sessions - JumboCode Fall 2024
 * @todo Comment this file!
 * 
 */

export default function Square({ value, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={"w-full h-full text-center text-xl"}
      >
        {/* 
        * Optional TODO: Render an image or a more visually appealling icon
        * instead of a string (X or O)
        */}
        {value ? value : " "}
      </button>
    </>
  );
};
