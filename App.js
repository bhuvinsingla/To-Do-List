// import React, { useState } from 'react';
// import './App.css' ;
// // import MyButton from './MyButton'; 

// function App(){

//   const[values,setvalue]  = useState('');
//   const[arr,setarr] = useState([]);
//   const[editIndex,setEditIndex]=useState(null);

//   function Addtask(){
//     if(values=== ''){return;}

//       if(editIndex!== null){
//         arr[editIndex] = values;
//         setEditIndex(null);
//       }
//       else{
//     setarr([...arr, values]);}
//     setvalue('');
//   }

//   function deleteitem(index){
//     const temp = [...arr];
//     temp.splice(index,1);
//     setarr(temp);
//   }
//   const editTodo = (index) => {
//     setvalue(arr[index]);
//     setEditIndex(index);
//   };

//   return(
//     <div className='App-header'>
//       <input type='text' placeholder='Add a task' value={values} onChange={(e) => setvalue(e.target.value)} />
      
//       <button onClick={Addtask}>{editIndex!== null ? 'Edit' : 'Add'}</button>

//       {editIndex !== null && <button onClick={() => (setEditIndex(null)+setvalue('')) }>Cancel</button>}<br/>
//       {arr.map((e, index) => (    
//           <span key={index}>
//             {index+1}. &nbsp;
//             {e} &nbsp;&nbsp;
//             <button onClick={() => editTodo(index)}>Edit</button> &nbsp;
//             <button onClick={() => deleteitem(index)}>Delete</button>
//           </span>))}
//       {/* <h1>Welcome to my app</h1> */}
//       {/* <MyButton /> */}


//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
