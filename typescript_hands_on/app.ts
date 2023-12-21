
const numb1 = document.getElementById('num1') as HTMLInputElement;

const numb2 = document.getElementById('num2') as HTMLInputElement;

const btn = document.querySelector('button')!;

type NumOrString = number | string;
type Result = {val: number, timeStamp: Date};

const numResults:Array<number> = [];
const stringResults:string[] = [];   

function adds(num1:NumOrString, num2:NumOrString){
    if(typeof num1 === "number" && typeof num2 === "number")
        return num1+num2;
    else if(typeof num1 === "string" && typeof num2 === "string")
        return num1 + " "+ num2;
    return +num1 + +num2;
}

// console.log(add(1,5));
// console.log(add('1','5'))

function printResult(resultObj:Result){
    console.log(resultObj.val);
}

btn.addEventListener('click', ()=>{
    const number1 = numb1.value;
    const number2 = numb2.value
    const result = adds(+number1, +number2);
    console.log(result);
    numResults.push(result as number);
    const strResult = adds(number1, number2);
    console.log(strResult);
    stringResults.push(strResult as string);
    // const s = adds(true, false);
    printResult({val: result as number, timeStamp: new Date()});

    console.log(numResults,stringResults)
});



const myPromise = new Promise<String>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('it worked');
    }, 1000);
});

myPromise.then(result=>{
    console.log(result.split('w'));
})