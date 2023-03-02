import logo from './logo.svg';
import './App.css';
import { useState } from"react"; 
import List from './List';

function App() {
const[currentItem,setCurrentItem]=useState(null);
const[itemList,updateItemList]=useState([]);
const onChangeHandler = e => {
console.log("current value",e.target.value);
setCurrentItem(e.target.value);
};
const addItemtoList = ()=>{
updateItemList([...itemList,{item:currentItem,key:Date.now()}]);
console.log("List items", itemList);
setCurrentItem("");
};
  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemtoList}>+</button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
