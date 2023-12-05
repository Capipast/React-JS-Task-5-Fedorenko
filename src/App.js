import React from 'react';
import './App.css';
import './Components.css';
import Element from './helpers.js';

const sideList = [{text: "this page", url: "http://localhost:3000/"},
                  {text: "Google", url: "https://www.google.com/"},
                  {text: "Wikipedia", url: "https://uk.wikipedia.org/"},
                  {text: "this page"},
                  {text: "this page", url: "http://localhost:3000/"},
                  {text: "YouTube"},
                  {text: "this page", url: "http://localhost:3000/"}];

const footList = [{text: "this page", url: "http://localhost:3000/"},
                  {text: "Microsoft", url: "https://www.microsoft.com/uk-ua/"},
                  {text: "this page", url: "http://localhost:3000/"},
                  {text: "GitHub", url: "https://github.com/"},
                  {text: "this page"},
                  {text: "YouTube", url: "https://www.youtube.com/"},
                  {text: "this page"}];

                  
class Header extends React.Component {
  render() {
    return <header className='Component-header borders'><h1>Hello! I am a {this.props.name}</h1></header>;
  }
}

class Footer extends React.Component {
  render() {
    return <footer className='Component-footer borders'><h2>Hello! I am a {this.props.name}</h2>
              <Menu item="menu-item" list={footList}></Menu>
            </footer>;
  }
}

class Content extends React.Component {
  render() {
    return <div className='Component-content borders'><p>Hello! I am a {this.props.name}</p></div>;
  }
}

class Sidebar extends React.Component {
  render() {
    
    return <div className='Component-sidebar borders'><p><i>Hello! I am a {this.props.name}</i></p>
              <Menu item="menu-item" list={sideList}></Menu>
            </div>;
  }
}

class MenuItem extends React.Component{
  render() {
    const url = this.props.url;
    const text = this.props.text;

    return <li className='Component-menu-item'>
              {url !== undefined ?
                  url === window.location.href ?
                          <a href={url}>{text}</a>:
                          <a href={url} target="_blank" rel="noreferrer">{text}</a>
                    :<span>{text}</span>}
            </li>;
  }
}

class Menu extends React.Component{
  render() {
    const elemID = new Element();

    const list = this.props.list;
    const listItems = list.map((l, ind) => {
        const id = elemID.getId(this.props.item) || JSON.stringify(l) + `_${ind}`;
          
        return <MenuItem key={id} url={l.url} text={l.text}/>
    });

    return <ul className='Component-menu'>{listItems}</ul>;
  }
}


function App() {
  return  (<div className='App'>
            <Header name='Header'/>
            <Content name='Content'/>
            <Sidebar name='Sidebar'/>
            <Footer name='Footer'/>
          </div>);
}

export default App;
