import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Line, Circle } from 'rc-progress';

function App() {
  return (
    <>
      <div className='container'>
        <h1>Todo List</h1>
        <p>Add things to do</p>
        <hr></hr>
        <div className='d-flex'><h5>50%</h5><Line percent={20} strokeWidth={2} strokeColor="#D3D3D3" /></div>
        

      </div>


    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
