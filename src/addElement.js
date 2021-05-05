import _ from 'lodash';

import "./addElement.css";
import "./addE.less";
const createFooElement = (tag)=>{
    const foo = document.createElement(tag);
    foo.innerHTML = _.join(['Heeloo','CarbonTeq']);
    return foo;
}
document.body.appendChild(createFooElement('p'));
document.body.appendChild(createFooElement('div'));