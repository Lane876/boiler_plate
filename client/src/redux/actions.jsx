import {SET_USER} from './types'


const setUser = (name) => {
    return({
        type: 'SET_USER',
        payload: name
    })
}

export default setUser