function customRender(reactElement, container){//designing the function which injects the custom element to the html of index.html
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement); //This format is not that good as in case of multiple properties, this code will take much longer time

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = { //this is how react sees the element after complation which is returned to the index file to render
    type: "a", //let say we want ot insert a tag (or any othet tag)
    props:{ //properties of the a tag
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click here to visit Google" 
}

const container = document.querySelector('#root');

customRender(reactElement, container)