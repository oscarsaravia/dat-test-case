import { useStore } from 'effector-react'
import { useEffect } from 'react'

import './App.css'
import { initDamageList, $isLoading, setIsLoading } from './store'
// import { fetchData } from './api/fetchData'
import { Car } from './components/Car/Car'



export const App: React.FC<MyAppProps> = ({ initializedOptions, onInit, onPositionChange }) => {
  // Store Variables
  const isLoading = useStore($isLoading)  // Loading state

  // API Call on App Load
  useEffect(() => {
    onInit()
    initializedOptions ? initDamageList(initializedOptions) : initDamageList([])
    setIsLoading(false)

    // Uncomment this to use the API call

    // const result = fetchData()
    // result
    //   .then((data) => {
    //     initDamageList(data)
    //     setIsLoading(false)}
    //   )
    //   .catch((error) => {console.log(error)})
  }, [])

  

  return (
    <div className="general-div">
      {
        isLoading ? <div className='loader'></div> :
        <div className='container'>
          <Car onPositionChange={ onPositionChange }/>
        </div>
      }
    </div>
  )
}
