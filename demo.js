const redux = require("redux")

const counterReducer = (state={count:0},action)=>{
    if(action.type === "increment"){
        return {
            count:state.count + 2
         }
    }
    if(action.type === "decrement"){
        return {
            count:state.count - 2
        }
    }
  
     return state
}

const store = redux.createStore(counterReducer);

//console.log(store.getState())

const counterSubscriber = () =>{
    const latestState = store.getState()
    console.log(latestState)
}

store.subscribe(counterSubscriber);

store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})


