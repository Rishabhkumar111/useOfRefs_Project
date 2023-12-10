import { forwardRef, useImperativeHandle, useRef} from "react";
const resultModal = forwardRef(function ResultModal({ result, targetTime },ref) {
    let dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
  return (
    <dialog className="result-modal" ref={dialog}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default resultModal;