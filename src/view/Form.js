import React from 'react'

const Form = (props) => {
    const {address, handleEventChange, handleEventClick} = props
    return (
        <div>
            <input type= "text" value= {address} onChange = {(event=> handleEventChange(event))}/>
            <button type="button" onClick= {(event) => handleEventClick(event) }> Toggle</button>
        </div>
    )
}

export default Form
