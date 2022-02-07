import { createStore } from "redux";

const reducer =(state = {counter:2}, action) =>
{
    if(action.type === 'INCR')
    {
        return {counter : state.counter+1};
    }
    if(action.type === 'DECR')
    {
        return {counter : state.counter-1};
    }

    return state;
}

const appstore = createStore(reducer);
export default appstore;