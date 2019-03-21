import React, { Component } from 'react';
import List from './List'
import './App.css';
import store from './store';

class App extends Component {
  
  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

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

      this.setState({
          Store:{
            lists: updatedList,
            allCards:updatedAllCards
          }
        })
        
   };

 

  addCard =(id) =>{
    const randoCard = this.newRandomCard();

    const updatedList=this.state.Store.lists.map(i => {
      if(i.id===id){
        i.cardIds.push(randoCard.id);
      }
      return i;
    })

    const updatedAllCards = this.state.Store.allCards;
    updatedAllCards[randoCard.id]={...randoCard};

    this.setState({
      Store:{
        lists:updatedList,
        allCards:updatedAllCards
      }
    })



  }

   

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
                id ={items.id}
                header ={items.header} 
                cards={items.cardIds.map(id=>({id, ...store.allCards[id]}))}
                onDelete={this.deleteCard}
                onClickAdd={this.addCard}
                />
            ))}
        </div>
      </main>
    );
  }
}

export default App;
