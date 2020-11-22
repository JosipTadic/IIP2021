import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <>
      <div>
        <Button text='1!'/>
        <Button text='2!'/>
        <Button text='3!'/>
        <Button text='4!'/>
      </div>
    </>
  )
}

const Button = ({text}) => {
return(
  <button type="button" className={`btn btn-primary btn-lg`}>{text}</button>
)
}
  
ReactDOM.render(
    <App />,
  document.getElementById('root')
)
