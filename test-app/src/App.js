import React, { use } from 'react'
import './App.css';
import { useState } from 'react';

/*React Component
컴포넌트는 UI를 독립적인 조각으로 쪼갠 것이고, 함수나 클래스 형태올 만들 수 
있다. 대부분 함수형으로 작성
*/
function Hello() {
  return <h1 style={{ textAlign: "center" }}>Hello, React!</h1>
}

function JSX1() {
  /*JSX: 자바스크립트 안에서 HTML 쓰듯 작성하는 문법 */
  const name = "SESAC"
  const element = <h2 style={{ textAlign: "center" }}>Hello JSX! {name} </h2>
  return (<div>{ element }</div>) 
}

/*Props
부모 컴포넌트가 자식 컴포넌트에 값을 전달할때 사용*/ 
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

/*State
컴포넌트 내부에서 관리되는 값. 동적인 UI에 사용한다
React의 useState()는 값을 바꾸는게 아니라, 바꿔 달라고 요청*/
function Count(){
  const [count, setCount] = useState(0);
  return (
  <div>
  <p>현재 카운트 : {count}</p>
  <button onClick= {() => setCount(count+1)}>증가 클릭</button>
  </div>)
}

//7
function Bool(){
 const[check, setCheck] = useState(false)
 
const Change = () => setCheck(!check)
 
 return (<div><p>{check? "true":"false"} </p>
 <button onClick={Change}>클릭</button></div>)
}

/*Event Handling
onClick, onChange 등으로 처리하며, 함수로 연결*/ 
function Button(){
  const handleClick = () => {
    alert('버튼 클릭됨');
  }

  return <button onClick={handleClick}>클릭</button> 
}

//9
function Alert(){
  const Alet = () => alert('안녕하세요')
    
  return <button onClick={Alet}>얼렛</button>
}

//10
function Con(){
  const Co = () => console.log('안녕하세요')
    
  return <button onClick={Co}>콘솔</button>
}

/*map()
배열을 반복하여  JSX 엘리멘트를 렌더링할 때 사용합니다. */

function Arr(){
  const fruits = ["apple", "banana", "grape"];
  const ma = fruits.map((fruit, index)=> <li key = {index}>{fruit}</li>)
  return (<div>{ma}</div>)
}

//13
function List(props){
  const arr = [1,2,3,4,5]
  const list = props.arr.map((ar, index) => ar*2).join(" ")

  return (<div>13번 문제<br></br>{list} </div>)
}

/*filter()
특정 조건에 맞는 데이터만 걸러내어 보여줄 때 사용합니다*/
function Filter(){
  const fruits = ["apple", "banana", "grape"];
  const list = fruits.filter(fruit => fruit.includes('a')).join(" ")
  return (<p><li>{list}</li></p>)
}

function Profile(props){
  return <h2>이름: {props.name} <br></br> 나이: {props.age}</h2>
}

function Write(){
  const [input, setInput] =useState('');
  const [items, setItems] = useState([]);

  const Add = () =>{
    
    if(!input){
     alert('입력해라')
     return;
    }
    
    setItems([...items, input])
    setInput("")
 
    
  }
  return (<div>조합실습<br></br><input value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="항목을 입력하세요"
      /> <button onClick={Add}>추가</button>
      <ul>{items.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>)
}

function App() {
  /*const [fruits, setFruits] = useState(["apple", "banana", "grape"])
  const [input, setInput] = useState("");
  const [filterText,setFilterText ] = useState("")

  const handleAdd = () => {
    if(input.trim()){
      setFruits([...fruits, input]);
      setInput("");
    }

    if(!input){
      return alert("빈칸 없이 입력해주세요")
    }
  }

  const filteredFruits = fruits.filter(fruit => 
    fruit.toLowerCase().includes(filterText.toLowerCase())
  );*/

  return (
    <div>
      <h1>Hello React!</h1>
      <Profile name="상혁" age={24}/>
      <Count/>
      <Bool/>
      <Welcome name ="WEB"/>
      <Alert/>
      <Con/>
      {/* 11 */}
      <Arr/>
      <Filter/>
      <List arr={[1,2,3,4,5]}/>
      <Write/>
      {/* <Hello />
      <JSX1 />
      <Welcome tite ="WEB"/>
      <State/>
      <Button/>
      <Arr/>
      <Filter/> */}

   {/* <div style={{padding:"20px"}}>
     <h1>과일 리스트</h1>  
      <input
        type="text"
        placeholder ="과일 이름 입력"
        onChange={e => setInput(e.target.value)}/>
        <button onClick={handleAdd}>클릭</button>

       <ul>
        {filteredFruits.map((fruit, index) => (
          <li key = {index}>{fruit}</li>
        ))}
       </ul>
    </div>*/}
    </div>
  )
}

export default App;
