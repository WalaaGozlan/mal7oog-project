import React from 'react'

export default function ErrNotice(props) {
    return (
        <div>
            <span>{props.message}</span>
            <button onClick = {props.clearError}>X</button>
        </div>
    )
}


