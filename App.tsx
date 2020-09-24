import React, { Dispatch } from 'react';
import './App.css';


import { Action,CounterT } from './Redux/Store';

import { connect} from 'react-redux'

type P={
  mystate?:number,
  a:string[],
  toggleOn:()=>void,
  Decrement:()=>void,
  pushf:(name:string)=>void
}

function App({mystate,toggleOn,Decrement,pushf,a}:P) {
 
  return (


<div className="App">
  {mystate}
  {a.map((e,index:number)=><div key={index}>{e}</div>)}
<button onClick={()=>pushf('Ahmed')}>++--</button>
<button onClick={()=>toggleOn()}>++</button>
<button onClick={()=>Decrement()}>--</button>
    </div>
  );
  }


const mapState = (state: CounterT) => ({
 mystate: state.count,
 a:state.n
})

const mapDispatch =(dispatch:Dispatch<Action>)=> {
 return { toggleOn: () => dispatch({type:'Add'}),
          Decrement:()=>dispatch({type:'Dec'}),
          pushf:(name:string)=>dispatch({type:'pushf',payload:name})
}
}

export default connect(mapState, mapDispatch)(App);
