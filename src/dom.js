console.log('Dom file');

 const body = document.querySelector('body');

 const bodyStyle = () =>{
    body.style.backgroundColor = 'peachpuff';
}

 const title = (text) =>{
    const titleText = document.createElement('h1');
    titleText.textContent = text;
    body.appendChild(titleText);
}

const contact = 'Tracy@jsninja.dev';

bodyStyle();
title('Hello World from the index file 🔥');
console.log(contact);

export { bodyStyle, title, contact };