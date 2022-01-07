import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

export const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
export const years = [
  currentYear - 2,
  currentYear - 1,
  currentYear,
  currentYear + 1,
  currentYear + 2,
];

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Keyboard",
    amount: 22.50,
    date: new Date(currentYear, currentMonth + 2, 14),
  },
  {
    id: "e2",
    title: "Sunglasses",
    amount: 53.75,
    date: new Date(currentYear, currentMonth + 1, 12),
  },
  {
    id: "e3",
    title: "Taxes",
    amount: 303.32,
    date: new Date(currentYear, currentMonth + 3, 28),
  },
  {
    id: "e4",
    title: "Bicycle",
    amount: 197.65,
    date: new Date(currentYear, currentMonth, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  console.log(expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
