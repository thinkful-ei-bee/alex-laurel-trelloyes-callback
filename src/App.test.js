import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import List from './List';
import Card from './Card';
import App from './App';
import renderer from 'react-test-renderer';

describe('My App test', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected',()=>{
    const tree = renderer.create(<List key={store.lists[0].id} header ={store.lists[0].header} 
      cards={store.lists[0].cardIds.map(itemList=>store.allCards[itemList])}/> ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected',()=>{
    const tree = renderer.create(<Card key ={'a'} title ={store.allCards.a.title} content={store.allCards.a.content}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
  