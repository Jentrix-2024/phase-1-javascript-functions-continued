// code your solution here
function saturdayFun(funActivity= "roller-skate"){
    return(`This Saturday, I want to ${funActivity}!`);
}
const mondayWork = function (activity="go to the office"){
return(`This Monday, I will ${activity}.`);
}
function wrapAdjective(parameter1='*'){
return function( parameter="special"){
 return (`You are ${parameter1}${parameter}${parameter1}!`)
}
}