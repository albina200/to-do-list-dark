import './App.css';
import TaskItem from './components/TaskItem.jsx';
import TaskListStore from './store.js';
import {addTaskStore} from './store.js';

function App() {
  let TaskItems = TaskListStore.map((TaskItemInfo) => {
    return <TaskItem text={TaskItemInfo.text} id={TaskItemInfo.id} status={TaskItemInfo.status} key={TaskItemInfo.id}/>
  })

  function addTaskButtonClick(e) {
    // let button = e.target;
    // let buttonPerents = button.parentNode;
    // let input = buttonPerents.querySelector('input');
    if (e.target.parentNode.querySelector('input').value != '') {
      let taskText = e.target.parentNode.querySelector('input').value;
      addTaskStore(taskText);
      e.target.parentNode.querySelector('input').value = '';

    }
  }

  return (
    <div className="App">
      <h1>To Do List</h1>

      <div className='app__new-task'>
        <input placeholder='Enter task text'></input>
        <button onClick={addTaskButtonClick} ><i className="fa-solid fa-plus"></i></button>
      </div>

      <div className='app__task-list'>
        {TaskItems}
      </div>
    </div>
  );
}

export default App;
