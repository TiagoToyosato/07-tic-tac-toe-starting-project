export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
          {/* <span className="log-player">{turn.player}</span>
          <span className="log-square">
            Row: {turn.square.row}, Col: {turn.square.col}
          </span> */}
        </li>
      ))}
    </ol>
  );
}
