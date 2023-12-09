import { useState } from "react";
export default function Player() {
  const [displayValue, setDisplayValue] = useState('');
  const [allowChange, setAllowChange] = useState(false);
  function handleChange(event){
    setAllowChange(false);
    setDisplayValue(event.target.value);
  }
  function handleClick(){
    setAllowChange(true);
  }

  return (
    <section id="player">
      <h2>Welcome {allowChange ? displayValue : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={displayValue}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
