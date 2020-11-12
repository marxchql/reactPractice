import fn from './a';
import "./assets/style.css";

import img1 from './assets/1.png';
import img2 from './assets/timg.jpg';


console.log('hello webpack');
console.log('hello webpack too');

fn();


const Img1 = new Image()
const Img2 = new Image()
Img1.src = img1
Img2.src = img2
document.body.appendChild(Img1)
document.body.appendChild(Img2)