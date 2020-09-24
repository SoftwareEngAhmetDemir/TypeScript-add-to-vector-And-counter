export type Action = 
|{type:'Add'}
   |{type:'Dec'}
    |{type:'pushf',payload:string}
  


export const initState = {
    count:0,
    n:[]
}
export interface CounterT {
    count:number,
    n:string[],
    
}
export function  counter(state:CounterT=initState, action:Action) {
  switch (action.type) {
   
   case 'Add':
     return { ...state,
       count:state.count+1 
     }
     case 'Dec':
       return {
         ...state,
         count:state.count-1
       }
   
    case 'pushf':
    
     return {...state,
     n:[...state.n,action.payload]
     }
    
    default:
      return state
  }
}
 




// export  {store};