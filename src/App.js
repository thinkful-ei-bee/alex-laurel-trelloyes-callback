import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './store';

class App extends Component {
  
    state={
      Store:store,
    }
  /*
   store={
     lists:[],
     allCards:[]
   }
   */
  //added function below
   deleteCard =(id) =>{

    const updatedList = this.state.Store.lists.map(items =>{
      items.cardIds= items.cardIds.filter(itemId=> itemId !== id);
      return items;
    });
      const updatedAllCards = this.state.Store.allCards;
      delete this.state.Store.allCards[id];
      const updatedAllCards2 = this.state.Store.allCards;
      console.log(id);
      console.log(updatedAllCards);
      console.log(updatedAllCards2);

     
/*
      this.setState({
          Store:{
            lists: updatedList,
            updatedAllCards
          }
        })
        */
   };

   

  render() {
    //added this line below
    let{Store} = this.state;
    //let {store} =this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map((items=> 
          <List key ={items.id} 
                //added line below
                id ={items.id}
                header ={items.header} 
                cards={items.cardIds.map(itemList=>store.allCards[itemList])}
                //added this line below
                onDelete={this.deleteCard}
                //onClickAdd={this.addCard}
                />
            ))}
        </div>
      </main>
    );
  }
}

export default App;
