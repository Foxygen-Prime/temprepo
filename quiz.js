
//warm up//
console.log('quiz 1');

function begin(){
  console.log('begin');
}
begin();

//echo function//

function thingy(x){
let x = 'hello';
  console.log(thingy(x));
  return thingy(x);
}

//math function//

function mathing(a,b,c){
  // (a + b) * c
    return (a + b) * c
}

mathing(2,3,4);

//toString//

array = ['now','is','the','time']

function stringer(array){
for (let i = 0; i < array.length; i++){
  let answer = array[i] +=
  console.log(answer);
  return answer
}
}

//callMe//

function firstfunc(x){
  console.log('in first function');
}

function callme(y){
  console.log('in second function');
}

callme(firstfunc);

//callMe2//
function firstfunc(x){
  console.log('in first function');
}

function callme(x,y){
  console.log('in second function');
}

callme(firstfunc,'hello');

//reverse//

thewords = "hello how are you today";

function stringer(thewords){
for (let i = charAt(thewords.length) - 1; i > 0; i--){
  let thewords = thewords[i] +=
  console.log(thewords);
  return thewords
}
}

//sleeping function//

  setTimeout(function () {

  }, 1000);
}
