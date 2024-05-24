import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todolist.css'

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [searchText, setSearchText] = useState('');
  const [scale, setScale] = useState(1);
  const zoomIn = () => {
    setScale(scale + 0.1);
  };
  const zoomOut = () => {
    setScale(scale - 0.1);
  };
  
  const handleAddTask = () => {
    if (newTask.trim() !== '' && selectedDate !== '') {
      setTasks([...tasks, { task: newTask, date: selectedDate }]);
      setNewTask('');
      setSelectedDate('');
    }
  };
  
  const handleSearch = () => {
    const filteredTasks = tasks.filter(task =>
      task.task.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filteredTasks);
  };

  return (
    <div >
    
          {/* <div className='row -md-3'> */} 
          <div className="App" style={{ transform: `scale(${scale})` }}>
      <h1 className='head'>ToDoList</h1>
      <button onClick={zoomIn} className='btnzoom'>+🔍</button>
          <button onClick={zoomOut} className='btnin'>-🔍</button>
      <div className='main'> 
      <aside className='dates'>
      <input className='date'
    type="date"
    value={selectedDate}
    onChange={e => setSelectedDate(e.target.value)}
  />
  </aside>
      <input
    type="text" className='inp'
    value={newTask}
    onChange={e => setNewTask(e.target.value)}
    placeholder="Enter task..."
  />
  <button onClick={handleAddTask}>Add Task</button>
<div>
        <input
          type="text" className='inp2'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search tasks..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
       <ul type='circle'>
      {tasks.map((task, index) => (
     
      <p className='out'><li key={index}>{task.task} - {new Date(task.date).toDateString()}<input type="checkbox"/>
    
      </li></p>
          ))}
        </ul>
      </div>

    
      {searchResults.length > 0 && (
        <div className='sear'> 
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;Search Results</h2>
          <ul>
            {searchResults.map((task, index) => (
          
             <li key={index}>{task.task} - {new Date(task.date).toDateString()}</li>
            ))}
          </ul>
        </div>
      )}


     
  
</div>
</div>
</div>


    
  );
}

export default TodoList;



// import React from 'react'

// function TodoList() {
//   return (
//     <div>TodoList</div>
//   )
// }

// export default TodoList





