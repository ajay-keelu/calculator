let ac = document.querySelector('.ac');
let div = document.querySelector('.div');
let mul = document.querySelector('.mul');
let plus = document.querySelector('.plus');
let sub = document.querySelector('.sub');
let equ = document.querySelector('.equ');
let nums = document.querySelectorAll('.num');
let back = document.querySelector('.back');
let result = document.querySelector('#result');
let res = '';
back.addEventListener('click',()=>{
    res = res.substring(0,res.length-1);
    if(res.length == 0){
    result.innerHTML = '0';
    }else
    result.innerHTML = res;
})
equ.addEventListener('click',()=>{
    try {
        res = ''+eval(res);
        result.innerHTML=res;
    } catch (error) {
        alert('syntax error');
        res = '';
        result.innerHTML = '0';
    }
})
nums.forEach((e)=>{
    e.addEventListener('click',()=>{
        res += e.innerHTML;
        result.innerHTML = res;
    })
})
let arr = document.querySelectorAll('.calc');
let calc = Array.from(arr);
calc.pop()
console.log(calc)
ac.addEventListener('click',()=>{
    res = '';
    result.innerHTML='0';
})
arr.forEach((e)=>{
    if(e != arr[arr.length-1] && e != arr[0])
    e.addEventListener('click',()=>{
        res += e.innerHTML;
        result.innerHTML = res;
    })
})