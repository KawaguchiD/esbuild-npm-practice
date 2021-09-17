import React from 'react'
import ReactDOM from 'react-dom'

const App = (props: {message: string}) => {
    return (
        <>
            <p>{props.message}</p>
        </>
    )
}

ReactDOM.render(
    <App message='hello' />,
    document.getElementById('root')
)
