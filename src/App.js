import React from 'react'
import {useState , useEffect} from 'react' //need to import hooks for using them


const App = () => {

  const [count, setCount] = useState(0);  // useState hook 

  useEffect(() => {                       // use effect hook 
    setTimeout(() => {                    // javascript function 
      setCount((count) => count + 1);     // javascipt function to increment the count variable by 1 
    }, 1000);                             // here we pass second argument which tells timeout function about how much time this function has to run in current senerio it'll run after 1sec(1000 millisecond)
  }, []);                                 // empty brackets here tell the useEffect hook to run only once. 

  return <h1>I've rendered {count} times!</h1>; //the count value 'll be 0 initially but after 1sec it'll update as 1
}

export default App
