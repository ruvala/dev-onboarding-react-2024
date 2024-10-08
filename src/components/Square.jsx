export default function Square({ value, onClick }) {
  return (
    <button style={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

const styles = {
  square: {
    width: '100px',
    height: '100px',
    backgroundColor: '#fff',
    border: '2px solid #333',
    fontSize: '36px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default Square;
