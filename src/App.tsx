import { useState } from 'react';
import './App.css'
import { CircleButton } from './components/CircleButton/CircleButton'

export const App = () => {
  const showId = true;
  const [ activeDots, setActiveDots ] = useState<string[]>(['A4', 'B1', 'C1'])
  const updateActiveDots = (id: string) => {
    if (activeDots.includes(id)) {
      setActiveDots(activeDots.filter(dot => dot !== id))
    } else {
      setActiveDots([...activeDots, id])
    }
  }
  const buttonConfig = [
    { idPrefix: 'A', left: 80, positions: [5, 30, 50, 80] },
    { idPrefix: 'B', left: 45, positions: [0, 13, 45, 75, 90] },
    { idPrefix: 'C', left: 5, positions: [5, 30, 50, 80] },
  ];
  return (
    <div className='container'>
      <h1>Application</h1>
      <p>
        This is a React application that is rendered inside a Dataverse
        dashboard.
      </p>
      <div className="image-container">
        <img className='car' src="src/assets/car.svg" alt="Car Top View" />
        {buttonConfig.map(row => 
        row.positions.map((top, index) => (
          <CircleButton 
            key={`${row.idPrefix}${index + 1}`}
            id={`${row.idPrefix}${index + 1}`} 
            background='white' 
            size={6} 
            left={row.left} 
            top={top} 
            showId={showId}
            isActive={activeDots.includes(`${row.idPrefix}${index + 1}`)}
            customClick={updateActiveDots}
          />
        ))
      )}
      </div>
    </div>
  )
}
