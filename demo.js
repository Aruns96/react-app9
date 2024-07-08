const redux = require("redux")

const counterReducer = (state={count:5},action)=>{
     return {
        count:state.count -1
     }
}

const store = redux.createStore(counterReducer);

console.log(store.getState())

const counterSubscriber = () =>{
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber);

store.dispatch({type:"decrement"})
