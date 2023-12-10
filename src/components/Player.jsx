import { useRef, useState } from "react";
export default function Player() {
  const [displayValue, setDisplayValue] = useState("");
  var playerName = useRef();

  function handleClick() {
    setDisplayValue(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {displayValue ? displayValue : "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
