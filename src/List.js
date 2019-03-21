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
          {props.cards.map((item)=>
            <Card key ={item.id} 
                  id ={item.id}
                  title ={item.title} 
                  content={item.content}
                  onDelete={props.onDelete}
                  />
          )}
        
        <button type='button' onClick={()=> props.onClickAdd(props.id)} className='randoCard'>+ Add Random Card</button>
        </div>
      </section>
    )
}