// // import { set } from "mongoose";
// // import React, {Fragment} from "react"
// // import { useState } from "react"

// // let counter = 4;

// // function App() {
// //   const [todos, setTodos] = useState([{
// //     id: 1,
// //     title: "go to gym",
// //     desciption: "go to gym today"
// //   },{
// //     id: 2,
// //     title: "eat food",
// //     desciption: "eat food"
// //   },{
// //     id: 3,
// //     title: "got to class",
// //     desciption: "go to class"
// //   }])

// //   //spread operator can also be used

// // function addTodo(){
// // //spread operator can be used
// // setTodos([...todos,{
// //   id: counter++,
// //   title: Math.random(),
// //   desciption: Math.random()
// // }])

// // //or by creating an array 
// //   // const newTodos = [];
// //   // for(let i= 0;i<todos.length;i++){
// //   //   newTodos.push(todos[i]);
// //   // }

// //   // newTodos.push({
// //   //   id: 4,
// //   //   title: Math.random(),
// //   //   desciption: Math.random()
// //   // })
// //   // setTodos(newTodos)
// // }

// //   return (
// //     <div>
// //      <button onClick={addTodo}>Add a todo</button>
      
// //         {todos.map(todo => <Todo title={todo.title} desciption={todo.desciption}/>)}
   
// //        </div>
// //   )
// // }

// // function Todo({title, desciption}){
// //   return <div>
// //     <h1>{title}</h1>
// //     <h4>{desciption}</h4>
// //   </div>
// // }

 
// // export default App

// import { useState } from "react"

// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: "Go to gym",
//     description: "Need to hit the gym from 7-9PM"
//   }, {
//     id: 2,
//     title: "Go to Clas",
//     description: "Need to go to the class from 4-7 PM"
//   }, {
//     id: 3,
//     title: "Eat foor",
//     description: "Need to eat food from 2-4 PM"
//   }])
//   return (
//     <div>
//       {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App

// function App() {

//   return (
//     <div style={{display: "flex"}}>
//       <CardWrapper>
//         hi there
//       </CardWrapper>
//       <CardWrapper>
//         <div>
//           hello from the 2nd card
//         </div>
//       </CardWrapper>
//     </div>
//   )  
// }

// function CardWrapper({children}) {
//   return <div style={{
//     border: "1px solid black",
//     padding: 10,
//     margin: 10
//   }}>
//     {children}
//   </div>
// }

// export default App


// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

// function App() {
 
//   const [todos, setTodos] = useState({});

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function(response) {
       
//         setTodos(response.data.todos);
//       })
//   }, []);
//   return (
//     <>
//     {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}

    
//     </>
//   )
// }
// function Todo({title, description}){
//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// export default App;

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, [])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App;