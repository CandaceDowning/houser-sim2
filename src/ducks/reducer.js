const InitialState = {

    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    img:'',
    rent:"",
    mortgage:""

}

const UPDATE_ONE = 'UPDATE_ONE'
const CHANGE_HANDLER='CHANGE_HANDLER'


function reducer(state = InitialState, action){
         switch(action.tye){
             case UPDATE_ONE:
             return{
                 ...state,
                name: action.payload.match.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
                }
            case CHANGE_HANDLER:
            return{
                ...state,
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                state: action.payload.state,
                zip: action.payload.zip
            }
             default: return state
         }   
}

export function changeHandler(id, value) {
    return {
        type:CHANGE_HANDLER,
        payload: {id, value}
    }
}

export function updateOne(name, address, city, state, zip) {
    return { 
        type: UPDATE_ONE, 
        payload: {name, address, city, state, zip}, 
    };
  }



export default reducer