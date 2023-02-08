import React from "react";
import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 4, name: "Вилка" },
    { id: 3, value: 4, name: "Тарелка" },
    { id: 4, value: 4, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((count) => count.id !== id));
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.filter((el) => {
        if (el.id === id) {
          el.value++;
          return el;
        }
        return el;
      })
    );
  };
  const handleDecrement = (id) => {
    setCounters(
      counters.filter((el) => {
        if (el.id === id) {
          el.value--;
          return el;
        }
        return el;
      })
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
