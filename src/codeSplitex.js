import img1 from '../public/test1.jpg';
import img2 from '../public/test2.png';
const imageEle1 = document.createElement('img');
const imageEle2 = document.createElement('img');
imageEle1.src = img1;
imageEle2.src = img2;

document.body.appendChild(imageEle1);
document.body.appendChild(imageEle2);

export default ()=>{
    console.log("I have been loaded Up")
}