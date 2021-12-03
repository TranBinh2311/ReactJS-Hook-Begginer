import React , {useState}from 'react'

const Todos = (props) => {
    const {todos,title, handleDeleteData } = props;
    
    const handleDelete = (id) =>{
        handleDeleteData(id);
    }
    return (
        <div>
            <div className= "todos-container">
                <div style= {{color: 'red'}} className = "todos-container__header">
                    {title}
                </div>
                { todos.map( (todo) => {
                    return ( 
                        <div key = {todo.id}>
                            <li className= "todos-child" key= {todo.id}> {todo.title} <span style = {{cursor: 'pointer'}} onClick= {() => handleDelete(todo.id)}>x</span></li> 
                        </div>
                    
                    );
                })}
            </div>
            <hr/>
        </div>
    )
}

export default Todos
