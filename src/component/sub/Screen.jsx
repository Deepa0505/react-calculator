import React from 'react'

function Screen(props) {
    return (
        <div className={props.class}>
            { props.result }
        </div>
    )
}

export default Screen