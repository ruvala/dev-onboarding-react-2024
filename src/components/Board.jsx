import Square from './Square';

const Board = ({ squares, onClick }) => {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div style={styles.board}>
      {[0, 1, 2].map((row) => (
        <div key={row} style={styles.row}>
          {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  board: {
    border: '4px solid #333',
    borderRadius: '10px',
    width: '300px',
    margin: '20px auto',
  },
  row: {
    display: 'flex',
  },
};

export default Board;
