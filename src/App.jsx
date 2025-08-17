import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Writer from './Writer'
import BookStore from './BookStore'

function App() {

  const actors = ['sakib', 'Sariful raj', 'jasim', 'rubel', 'salman'];

  const books = [
    {id: 1, name: 'physics', price: 100},
    {id: 2, name: 'biology', price: 120},
    {id: 1, name: 'chemistry', price: 130},
    {id: 1, name: 'Math', price: 150},
  ]

  const writers = [
    {id: 1, name: 'Dr. Mahfuz', age: 68},
    {id: 2, name: 'Shorif', age: 30},
    {id: 3, name: 'Shamsu', age: 58},
    {id: 4, name: 'Asraful', age: 28}
  ]
  return (
    <> 
      <h3>Vite + React</h3>

      <BookStore books={books}></BookStore>

      {
        writers.map(writer => <Writer writer={writer}></Writer>)
      }



      <Actor name={"steve"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo 
      task="Learn React" 
      isDone={true}>
      </Todo>
      <Todo 
      task="Core concepts" 
      isDone={false}>
      </Todo>
      <Todo 
      task="Try JSX" 
      isDone={true}>
      </Todo> */}
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props)
  return <h2>This Device: {props.name} price: {props.price}</h2>
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am {person.name} with age: {age + money}</h3>
}

const {grade, score} = {grade: '7',score: '99'};

function Student({grade=1, score=0}) {
  console.log(grade, score)
  return (
  <div className='student'>
    <h3>This is a Student</h3>
    <p>Class: {grade}</p>
    <p>Score: {score}</p>
  </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h5>devo devo</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
