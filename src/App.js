import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
   store={
     lists:[],
     allCards:[]
   }

  render() {
    let {store} =this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map((items=> <List key ={items.id} header ={items.header} 
          cards={items.cardIds.map(itemList=>store.allCards[itemList])}/>
            ))}
        </div>
      </main>
    );
  }
}

export default App;
