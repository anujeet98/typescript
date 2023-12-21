var numb1 = document.getElementById('num1');
var numb2 = document.getElementById('num2');
var btn = document.querySelector('button');
var numResults = [];
var stringResults = [];
function adds(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number")
        return num1 + num2;
    else if (typeof num1 === "string" && typeof num2 === "string")
        return num1 + " " + num2;
    return +num1 + +num2;
}
// console.log(add(1,5));
// console.log(add('1','5'))
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', function () {
    var number1 = numb1.value;
    var number2 = numb2.value;
    var result = adds(+number1, +number2);
    console.log(result);
    numResults.push(result);
    var strResult = adds(number1, number2);
    console.log(strResult);
    stringResults.push(strResult);
    // const s = adds(true, false);
    printResult({ val: result, timeStamp: new Date() });
    console.log(numResults, stringResults);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('it worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
