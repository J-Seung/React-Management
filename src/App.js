import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id : 1,
    img : "https://placeimg.com/64/64/1",
    name : '홍길동',
    birthday : '961222', 
    gender : '남자',
    job : '대학생'
  }, 
  {
    id : 2,
    img : "https://placeimg.com/64/64/2",
    name : '이재승',
    birthday : '950525', 
    gender : '남자',
    job : '프로그래머'
  },
  {
    id : 3,
    img : "https://placeimg.com/64/64/3",
    name : '이순신',
    birthday : '990822', 
    gender : '남자',
    job : '대학생'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c=> {
          return (
            <Customer key={c.id} id={c.id} img={c.img} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>
          )
        })
      
      }
    </div>  
  );
}

export default App;
