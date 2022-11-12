import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import "./App.scss";

function App() {
  const [formValue, setFormValue] = useState("");
  const [isResponseOk, setIsResponseOk] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (formValue) {
      const response = await fetch("http://jservice.io/api/random?count=1");
      if (response?.ok) {
        setIsResponseOk(true);
      } else {
        setIsResponseOk(false);
      }
    }
  };

  return (
    <div className="page">
      {isResponseOk === null ? (
        <form>
          <input
            type="text"
            placeholder="Ваш номер..."
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
          />
          <button onClick={onSubmit}>
            ЗАКАЗАТЬ{" "}
            <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white" }} />
          </button>
        </form>
      ) : null}
      {isResponseOk ? (
        <div className="result">
          Ваш запрос по номеру "{formValue}" прошел успешно!
        </div>
      ) : null}
      {isResponseOk === false ? (
        <div className="result">Ошибка :( Попробуйте еще раз </div>
      ) : null}
    </div>
  );
}

export default App;
