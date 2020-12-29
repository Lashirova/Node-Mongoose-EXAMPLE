import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// //const classProperties = 'blue small-font';
// //const blueColor = 'blue small-font'
// let classProperties = 'blue small-font';
// //classProperties += '  small-font';
const myBlogPost = {
  title: 'My first blog',
  body: 'lorem ipsum dolor sit amet..',
  published:true
}
let isPublishedClassName;
if(myBlogPost.published){
  isPublishedClassName = 'green'
} else{
  isPublishedClassName = 'red'
}
const element = <h1 className ='red'>{myBlogPost.title}</h1>
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
function publishThePost(e){
  if(e.target.innerText === 'Publish'){
  e.target.innerText ="Unpublish";
  document.getElementById('title').style.color ='green';
}else{
  e.target.innerText ="Publish"
  document.getElementById("title").style.color = "red";
}
}
const fontClass = 'font-times';
const blogPost = (
 <div>
   < h1 id="title" className={isPublishedClassName + " " + fontClass}>{myBlogPost.title}</h1>
   <p></p>
   <button onClick ={publishThePost}>Unpublish</button>
   <img src="" alt=""/>
   </div>);
 
ReactDOM.render(
  blogPost,
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
