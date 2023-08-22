import './App.css'

export const App = () => {
  return (
    <div className='container'>
      <h1>Application</h1>
      <p>
        This is a React application that is rendered inside a Dataverse
        dashboard.
      </p>
      <div className="image-container">
        <img className='car' src="src/assets/car.svg" alt="Car Top View" />
        <div className="circle"></div>
      </div>
    </div>
  )
}
