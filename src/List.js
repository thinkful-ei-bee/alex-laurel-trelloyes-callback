import React from 'react';
import Card from './Card';
import './List.css';

export default function List(props){
    return (
        <section className='List'>
        <header className='List-header'>
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {props.cards.map((item, index)=>
            <Card key ={index} 
                  id ={item}
                  title ={item.title} 
                  content={item.content}
                  //added a line
                  onDelete={props.onDelete}
                  />
          )}
        
        <button type='button' className='randoCard'>+ Add Random Card</button>
        </div>
      </section>
    )
}