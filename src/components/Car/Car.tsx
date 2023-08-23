import { useStore } from 'effector-react'
import { $carDamage, addCarDamage } from "../../store"
import { CircleButton } from "../CircleButton/CircleButton"

export const Car = () => {

  // Config Variables
  const showId = false
  const buttonDisplayConfig = [
    { idPrefix: 'A', left: 80, positions: [5, 30, 50, 80] },
    { idPrefix: 'B', left: 45, positions: [0, 13, 45, 75, 90] },
    { idPrefix: 'C', left: 5, positions: [5, 30, 50, 80] },
  ]

  const store = useStore($carDamage)      // List of damaged parts

  const handleClick = (row: {idPrefix: string, left: number, positions: number[]}, index: number) => {
    addCarDamage(`${row.idPrefix}${index + 1}`)
  }

  return (
    <div className="image-container">
        <img className='car' src="public/car.svg" alt="Car Top View" />
        {buttonDisplayConfig.map(row => 
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
  )
}
