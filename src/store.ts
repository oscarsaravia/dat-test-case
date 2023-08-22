import { createEvent, createStore } from 'effector'
import { postData } from './api/fetchData'

// Damage List Events
export const initDamageList = createEvent<string[]>()   // Initialize the list of car damages
export const addCarDamage = createEvent<string>()       // Add a car damage to the list
export const resetCarDamages = createEvent()            // Reset the list of car damages

export const $carDamage = createStore<string[]>([])
    .on(initDamageList, (_, damageList) => damageList)
    .on(addCarDamage, (state, newDamage) => {
        // Check if the damage is already in the list
        const damageIndex = state.indexOf(newDamage)
        let listToReturn: string[] = []
        if (damageIndex !== -1) {
            listToReturn = [
                ...state.slice(0, damageIndex),
                ...state.slice(damageIndex + 1),
            ]
        } else {
            listToReturn = [...state, newDamage]
        }
        postData(listToReturn)
        return listToReturn
    })
    .reset(resetCarDamages)

// Loading State Events
export const setIsLoading = createEvent<boolean>()     // Set the loading state
export const $isLoading = createStore(true)
    .on(setIsLoading, (_, isLoading) => isLoading)
