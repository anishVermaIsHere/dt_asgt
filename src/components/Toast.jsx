import React from 'react'

const Toast = ({ message, color, type }) => {
    return (
        <>

            <div className={`alert alert-${color} alert-dismissible fade show`}
                role="alert">
                <strong>{type}</strong> {message}
            </div>

        </>
    )
}

export default Toast