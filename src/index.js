import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./storage/UserStore";
import SalaryStore from "./storage/SalaryStore";
import AdditionalIncomeStore from "./storage/AdditionalIncomeStore";
import ExpensesStore from "./storage/ExpensesStore";
import UserInfoStore from "./storage/UserInfoStore";



export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value = {{
          user: new UserStore(),
          userInfo: new UserInfoStore(),
          expenses: new ExpensesStore(),
          salary: new SalaryStore(),
          additionalIncome: new AdditionalIncomeStore()

      }} >
          <App />
      </Context.Provider>
  </React.StrictMode>
);
