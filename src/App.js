import './App.css';

import ClassComponent2 from './components/ClassComponent2';
import ClassCounter2 from './components/ClassCounter2';
import FuncComponent2 from './components/FuncComponent2';




function App() {
  return (
    //{name : "둥이", children:"사료사기"} => props
    <div className="App">
      {/* 자동으로 props 되는 "사료사기" 는 칠드런*/}
      <FuncComponent2></FuncComponent2>
      <ClassComponent2 name = "abc">하하하</ClassComponent2>
      <ClassCounter2></ClassCounter2>
    </div>
  );
}


export default App; 