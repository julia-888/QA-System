import './styles.css';
import React, {useState} from 'react';
import Dropdown from './Dropdown';

function App() {
  const [selected, setSelected] = useState("");
  return(
    <Dropdown selected={selected} setSelected={setSelected}/>
  );
}

// function computeInitialCounter() {  /* функция инициализации счётчика */
//   console.log('Some calculations...')
//   return Math.trunc(Math.random()*20)
// }


// function App() {
//   const [counter, setCounter] = useState(() => { /* инициализация счётчика с помощью callback-функции */
//     return computeInitialCounter()
//   });

//   const [state, setState] = useState( {
//     title: 'Счётчик',
//     date: Date.now()
//   })

//   function increment() {
//     setCounter((counter) => {  /* Увеличение значения счётчика на 2 с помощью callback-функций */
//       return counter + 1;
//     })
//     setCounter(counter => counter + 1)
//   }

//   function decrement() {
//     setCounter(counter-1)
//   }

//   function updateTitle() {  /* функция изменения поля title */
//     setState(prev => {
//       return {
//         ...prev,
//         title: 'Новое название'
//       }
//     })
//   }

//   return (
//     <div>
//       <h1>Счётчик: {counter} </h1>
//       <button onClick={increment}>Добавить</button>
//       <button onClick={decrement}>Убрать</button>
//       <button onClick={updateTitle}>Изменить</button>
//       <pre>{JSON.stringify(state, null, 2)}</pre>
//     </div>
//   );
// }

export default App;
