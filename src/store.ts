import { createEvent, createStore } from 'effector'

// Effector events
export const initDamageList = createEvent<string[]>()   // Initialize the list of car damages
export const addCarDamage = createEvent<string>()       // Add a car damage to the list
export const resetCarDamages = createEvent()            // Reset the list of car damages

// let firstTime = true

export const $carDamage = createStore<string[]>([])
    .on(initDamageList, (_, damageList) => damageList)
    .on(addCarDamage, (state, newDamage) => {
        // Check if the damage is already in the list
        const damageIndex = state.indexOf(newDamage)
        if (damageIndex !== -1) {
            console.log('FINISH 1');
            return [
                ...state.slice(0, damageIndex),
                ...state.slice(damageIndex + 1),
            ]
        } else {
            console.log('FINISH 2 ', newDamage);
            return [...state, newDamage]
        }
    })
    .reset(resetCarDamages)

// $carDamage.watch((state) => {
//     if (firstTime) {
//         firstTime = false
//         return
//     }
//     postData(state)
// })

export const setIsLoading = createEvent<boolean>()     // Set the loading state
export const $isLoading = createStore(true)
    .on(setIsLoading, (_, isLoading) => isLoading)
