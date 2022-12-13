const redux = require('redux')
const createStore = redux.createStore 

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREM = 'BUY_ICECREM'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCreams(){
    return {
        type: BUY_ICECREM
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())
unsubscribe()