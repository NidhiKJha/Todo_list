import React from 'react';

const TodoForm = props => {
    return(
        <form>
            <input
            name='todo'
            type='text'
            placeholder='enter a task' />
            <button>Add a task</button>
            <button>Remove Completed</button>
        </form>
    )
}

export default TodoForm