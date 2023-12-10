import { forwardRef, useImperativeHandle, useRef } from "react";
const resultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  let dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime/(targetTime*1000))*100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog className="result-modal" ref={dialog}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>You Score {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default resultModal;
