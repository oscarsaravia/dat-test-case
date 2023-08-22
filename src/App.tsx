import { useStore } from 'effector-react';
import { useEffect } from 'react';

import './App.css'
import { $carDamage, addCarDamage, initDamageList, $isLoading, setIsLoading } from './store';
import { CircleButton } from './components/CircleButton/CircleButton'
import { fetchData } from './api/fetchData';

export const App = () => {

  const store = useStore($carDamage)
  const isLoading = useStore($isLoading)

  const handleClick = (row: {idPrefix: string, left: number, positions: number[]}, index: number) => {
    addCarDamage(`${row.idPrefix}${index + 1}`)
  }

  useEffect(() => {
    const result = fetchData()
    result
      .then((data) => {
        initDamageList(data)
        setIsLoading(false)}
      )
      .catch((error) => {console.log(error)})
  }, [])

  const showId = true;
  const buttonConfig = [
    { idPrefix: 'A', left: 80, positions: [5, 30, 50, 80] },
    { idPrefix: 'B', left: 45, positions: [0, 13, 45, 75, 90] },
    { idPrefix: 'C', left: 5, positions: [5, 30, 50, 80] },
  ];
  

  return (
    isLoading ? <div className='loader'></div> :
    <div className='container'>
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
            customClick={() => {
              handleClick(row, index)
            }}
            isActive={store.includes(`${row.idPrefix}${index + 1}`)}
          />
        ))
      )}
      </div>
    </div>
  )
}
