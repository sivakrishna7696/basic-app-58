import './App.css';
import FuncComponent from './FuncComponent';
import ClassComponent from './ClassComponent';
import Counter from './Counter';
import Styling from './styling/Styling';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2 className='text-danger'>Welcome to ReactJs</h2>
      {/* <FuncComponent courseName="ReactJs" duration="1month" />
      <ClassComponent courseName="ReactJs" duration="1month" /> */}
      <Counter />
      <Styling />
    </div>
  );
}

export default App;
