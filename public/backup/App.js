import React from 'react';

const tasks=['rohit','venu','paani'];
class App extends React.Component{
   
render(){
    return(
        <div>
            <h1> Person List</h1>
        <ol>
            {tasks.map((task,index) => <li key={index}>{task}</li>)}
        {/* <li>{tasks[0]}</li>
        <li>{tasks[1]}</li>
        <li>{tasks[2]}</li> */}
    </ol>
    </div>
    );
}


} 
//const tasks=['rohit','venu','paani'];



export default App;