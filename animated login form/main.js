let a =10;
let b=a;
a=20;
let x={value:10}
let y=x;
//console.log(y.value);
x.value=11;

//console.log(b);
let max;
function maximum(){
    max=a;
    if(a>b){
        console.log('max is a');
    }
    else{
    console.log('max is b');
    max=b;
    }
    return max;
}
function isLandscape(height, width){
    if(height > width){
        return true;
        console.log('true');
    }
    else{
    console.log('true');
    return false;}
}
function fizzBuzz(input){
    if(typeof input!=='number'){
        console.log('Not a number');
    }
    else if(input % 5==0 && input % 3==0 ){
        console.log('fizzBuzz');
    }
   else if(input % 3==0){
        console.log('fizz');
    }
   else if(input%5==0){
        console.log('buzz');
    }
    else
    console.log(input);
}
function isPrime(num){
if(num==1){
    console.log('One is not a prime neither composite')
}
else{
    for(let i=2;i<num;i++){
        if(num % i==0){
            console.log('the number is not prime');
            break;
        }
        else{
            console.log('The number is prime');
            break;
        }
    }
}
}

//Object 
let circle={
  radius:1,
  location : {
    x:1,
    y:2
  },
  draw:function(){
    console.log('circle is drawn')
  }

  

}
// above object circle has two attributes and a function which can be called some where else
//circle.draw();
//console.log(circle.radius);
//  factory functions to which creates an object as below
function creatCircle(radius){
    return {
        radius : radius,//or radius is enough if the parameter passed is same as variable 
        draw(){
            console.log('circle is drawn');
        }
    }
}
let circle1=creatCircle(1);
//circle1.draw();
//as by above method we can create many object having same attributes


//Constructor
function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('yup it is created');
    }
}
let c=new Circle(1);
//console.log(c.radius);

function increase(b){
b++;
console.log(b);
}
increase(a);
//console.log(a);