import _ from 'lodash';

import "./addElement.css"
const createFooElement = ()=>{
    const foo = document.createElement('p');
    foo.innerHTML = _.join(['Heeloo','CarbonTeq']);
    return foo;
}
document.body.appendChild(createFooElement());