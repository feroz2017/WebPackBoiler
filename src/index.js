
import './addElement';


const foo = ()=>{
    return "This is Foo Foo foo foo";
}
const bar = ()=>{
    return "This is Bar";
}
console.log(foo());
console.log(bar());


const btn = document.createElement('button');
btn.innerHTML = "Load Me Up"
btn.onclick = ()=>{
    import('./codeSplitex').then((mod)=>{
        console.log(mod.default());
    })
}
document.body.appendChild(btn);
// adding images in files

