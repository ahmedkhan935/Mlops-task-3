// import React, { useState } from 'react';
// import './App.css'; // We'll create this file next

// const TodoApp = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Learn React', completed: false },
//     { id: 2, text: 'Build a Todo App', completed: false },
//     { id: 3, text: 'Style with CSS', completed: false }
//   ]);
//   const [showModal, setShowModal] = useState(false);
//   const [newTodo, setNewTodo] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Generate a unique ID for new todos
//   const generateId = () => {
//     return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
//   };

//   // Add a new todo (with API integration hooks)
//   const addTodo = async () => {
//     if (newTodo.trim() === '') return;
    
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       // Simulate API call
//       // In real app, replace with actual API call:
//       // const response = await fetch('/api/todos', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({ text: newTodo })
//       // });
//       // const data = await response.json();
      
//       // For now, just add locally:
//       const newTodoItem = { id: generateId(), text: newTodo, completed: false };
//       setTodos([...todos, newTodoItem]);
//       setNewTodo('');
//       setShowModal(false);
//     } catch (err) {
//       setError('Failed to add todo. Please try again.');
//       console.error('Error adding todo:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Delete a todo (with API integration hooks)
//   const deleteTodo = async (id) => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       // Simulate API call
//       // In real app, replace with actual API call:
//       // await fetch(`/api/todos/${id}`, {
//       //   method: 'DELETE'
//       // });
      
//       // For now, just delete locally:
//       setTodos(todos.filter(todo => todo.id !== id));
//     } catch (err) {
//       setError('Failed to delete todo. Please try again.');
//       console.error('Error deleting todo:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Toggle todo completion status (with API integration hooks)
//   const toggleComplete = async (id) => {
//     setIsLoading(true);
//     setError(null);
    
//     try {
//       const todoToUpdate = todos.find(todo => todo.id === id);
      
//       // Simulate API call
//       // In real app, replace with actual API call:
//       // await fetch(`/api/todos/${id}`, {
//       //   method: 'PATCH',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify({ completed: !todoToUpdate.completed })
//       // });
      
//       // For now, just update locally:
//       setTodos(todos.map(todo => 
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ));
//     } catch (err) {
//       setError('Failed to update todo. Please try again.');
//       console.error('Error updating todo:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="todo-container">
//       <div className="todo-card">
//         <h1 className="todo-title">Todo List</h1>
        
//         {/* Error Message */}
//         {error && <div className="error-message">{error}</div>}
        
//         {/* Todo List */}
//         <div className="todo-list">
//           {isLoading && <div className="loading">Loading...</div>}
          
//           {todos.length === 0 ? (
//             <p className="empty-message">No todos yet. Add one!</p>
//           ) : (
//             todos.map(todo => (
//               <div key={todo.id} className="todo-item">
//                 <div className="todo-content">
//                   <input 
//                     type="checkbox" 
//                     checked={todo.completed} 
//                     onChange={() => toggleComplete(todo.id)}
//                     className="todo-checkbox"
//                   />
//                   <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
//                     {todo.text}
//                   </span>
//                 </div>
//                 <button 
//                   onClick={() => deleteTodo(todo.id)}
//                   className="delete-button"
//                   aria-label="Delete todo"
//                 >
//                   <svg className="delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
//                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
        
//         {/* Add Todo Button */}
//         <button 
//           onClick={() => setShowModal(true)}
//           className="add-button"
//           disabled={isLoading}
//         >
//           Add New Todo
//         </button>
//       </div>

//       {/* Modal/Popup for Adding Todo */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2 className="modal-title">Add New Todo</h2>
            
//             <input
//               type="text"
//               value={newTodo}
//               onChange={(e) => setNewTodo(e.target.value)}
//               placeholder="What needs to be done?"
//               className="todo-input"
//               onKeyPress={(e) => e.key === 'Enter' && addTodo()}
//               autoFocus
//             />
            
//             <div className="modal-buttons">
//               <button 
//                 onClick={() => setShowModal(false)}
//                 className="cancel-button"
//                 disabled={isLoading}
//               >
//                 Cancel
//               </button>
//               <button 
//                 onClick={addTodo}
//                 className="save-button"
//                 disabled={isLoading || newTodo.trim() === ''}
//               >
//                 {isLoading ? 'Adding...' : 'Add'}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TodoApp;
import React, { useState, useEffect } from 'react';
import './TodoApp.css'; // Make sure this CSS file is imported

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  // API base URL - change this to match your server
  const API_BASE_URL = 'http://localhost:5000/api';

  // Fetch all todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch all todos from the API
  const fetchTodos = async () => {
    try {
      setError(null);
      const response = await fetch(`${API_BASE_URL}/todos`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError('Failed to load todos. Please refresh the page.');
      console.error('Error fetching todos:', err);
    } finally {
      setInitialLoading(false);
    }
  };

  // Add a new todo
  const addTodo = async () => {
    if (newTodo.trim() === '') return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newTodo })
      });
      
      if (!response.ok) {
        throw new Error('Failed to add todo');
      }
      
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTodo('');
      setShowModal(false);
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle todo completion status
  const toggleComplete = async (id) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const todoToUpdate = todos.find(todo => todo._id === id);
      
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todoToUpdate.completed })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update todo');
      }
      
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error('Error updating todo:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1 className="todo-title">Todo List</h1>
        
        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Todo List */}
        <div className="todo-list">
          {initialLoading ? (
            <div className="loading">Loading todos...</div>
          ) : todos.length === 0 ? (
            <p className="empty-message">No todos yet. Add one!</p>
          ) : (
            todos.map(todo => (
              <div key={todo._id} className="todo-item">
                <div className="todo-content">
                  <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    onChange={() => toggleComplete(todo._id)}
                    className="todo-checkbox"
                  />
                  <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                  </span>
                </div>
                <button 
                  onClick={() => deleteTodo(todo._id)}
                  className="delete-button"
                  aria-label="Delete todo"
                  disabled={isLoading}
                >
                  <svg className="delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ))
          )}
          
          {isLoading && <div className="loading-overlay">Processing...</div>}
        </div>
        
        {/* Add Todo Button */}
        <button 
          onClick={() => setShowModal(true)}
          className="add-button"
          disabled={isLoading}
        >
          Add New Todo
        </button>
      </div>

      {/* Modal/Popup for Adding Todo */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Add New Todo</h2>
            
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="todo-input"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              autoFocus
            />
            
            <div className="modal-buttons">
              <button 
                onClick={() => setShowModal(false)}
                className="cancel-button"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                onClick={addTodo}
                className="save-button"
                disabled={isLoading || newTodo.trim() === ''}
              >
                {isLoading ? 'Adding...' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;