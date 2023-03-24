import React, { createContext, useContext, useReducer } from "react";

// inisiai bank dat teller
const StorageData = createContext(null);
const TellerBank = createContext(null);

export const StorageContext = ({ children }) => {

// proses pembuatan Alat Transaksi  ==================================

  // data awal alat
  const initialTasks = [
    { id: 0, text: "Philosopher’s Path", done: true },
    { id: 1, text: "Visit the temple", done: false },
    { id: 2, text: "Drink matcha", done: false },
  ];

  // alat yang di gunakan untuk transaksi

  // fungsi fungsi yang ada dalam alat
  const tasksReducer = (tasks, action) => {
    // action = di gunakan untuk menentukan aksi apa yang kita lakukan
        // console.log(   tasks ,       "reducer")
    switch (action.type) {
      case "salto": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  };

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);


// End proses pembuatan Alat Transaksi  ==================================

  return (
   <StorageData.Provider  value={tasks}>
     <TellerBank.Provider value={dispatch}>
        {children}
     </TellerBank.Provider>
   </StorageData.Provider>
  );
};

// untuk  mengambil data 
export const useGetData=()=> {
    return useContext(StorageData);
  }

  export const useFungsiDispatch=()=> {
    return useContext(TellerBank);
  }

