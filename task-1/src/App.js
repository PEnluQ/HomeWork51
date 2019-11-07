import React from 'react';
import './App.css';
import Films from './Components/Films/Films'

function App() {
    return (
        <div className='App'>
        <Films name='Бойцовский клуб'
               date='1999'
               img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF1jzaJrdR-tJSgu451pAGh9KMfco3pFKaqENABj-Oy27ubo6o'
        />
        <Films name='Элизиум — рай не на Земле'
               date='2013'
               img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKO5hUwlQmITKmcez0HZAhhjG70jh45XMbyASvAAR9Mgg5QMk2'
        />
        <Films name='Спасти рядового Райана'
               date='1998'
               img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgV8QmupVqGWeunf8HW_SGDRrn33sfqtUnWKe7z6NgnRMoZYXe'
        />
        </div>
    );
}

export default App;