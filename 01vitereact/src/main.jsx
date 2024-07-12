import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//we know that App.jsx is just a method, so why not declare a method here itself and passin to render
function MyApp(){
  return(
    <div>
      <h1>Custom App via Vite</h1>
    </div>
  )
}//when we pass this function to render, it works perfectly

//While creating the custom react, we saw how react sees the funnction passed to it to render, as at the end of the day, react also makes all the html passed by us in Tree structur as we did in custom react folder.So what if we directly pass such objct to run?
const ReactElement = { //this is how react sees the element after complation which is returned to the index file to render
  type: "a", //let say we want ot insert a tag (or any othet tag)
  props:{ //properties of the a tag
      href: "https://www.google.com",
      target: "_blank"
  },
  children: "Click here to visit Google" 
}// but when we pass the reference of this element to the render function then is does not work. This is because, we had made this element acording to our own made render function, which accepts the objects according to our made object. Similarly, the render function made by react expects the elemets in diffeent format. For that we need to create the react element (element whic is supported by react)

const anotherElement = (
  <a href="https://www.google.com" target = "_blank">Visit Google</a>
)//passing this element directly to render works. This element is going to be converted to an object which is accepted by react, and hence it works

//creating the object which is accepted by react
const ReactElement2 = React.createElement(
  'a' ,//tag
  {//object
    href:'https://www.google.com',
    target:'_balnk'
  },
  'Click here to visit Google' //innerHTML
)//once this react element is created, which is accepted by react, not if we pass this to render, then everything will run fine
ReactDOM.createRoot(document.getElementById('root')).render(
  
    ReactElement2
  
)
