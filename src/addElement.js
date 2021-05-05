import _ from 'lodash';

const createFooElement = ()=>{
    const foo = document.createElement('div');
    foo.innerHTML = _.join(['Heeloo','CarbonTeq']);
    return foo;
}
document.body.appendChild(createFooElement());