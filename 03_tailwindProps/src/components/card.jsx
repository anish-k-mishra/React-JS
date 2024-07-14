import React from 'react'
//by default props are given ansd the values passed in the time of rendering is shown up here
function Card({name, btn = "Visit Here"}) { //it can also be written as {username}, and can be accessed directly by username. In present form it can pe accessed as props.username (as in case of objects)
    //console.log("props", props); //props are objects, which are passed on the rendering page (app.jsx). 
    return (
        <div className="w-[300px] rounded-md border m-4 ">
        <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
            <h1 className="text-lg font-semibold">About {name}</h1>
            <p className="mt-3 text-sm text-white-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
            </p>
            <button
            type="button"
            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            {btn}
            </button>
        </div>
        </div>
    )
}

export default Card
