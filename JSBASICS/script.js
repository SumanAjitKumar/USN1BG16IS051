/*//decision making
var age=18;
if(age<18){
console.log("minor");
}else if(age>=18){
    console.log("major");
}

//con?true:false
age>=18?console.log("major"):console.log("minor");
*/
//function
/*function suman(firstname,Lastname){
    console.log(firstname+' '+Lastname);
}
suman('Suman','A');
//array
var names=["suman",'Roopa','Malavika'];
console.log(name[2]);
console.log(name.length);
names.push("Nikitha");
names.unshift("Pavithra");
names.pop();
console.log(names);
*/
//
challenge-2
function calculator(amount){
    if(amount<50){
        tip=0.2*amount;
        return tip;
    }
    else if(amount>50&&amount<200){
        tip=0.1*amount;
        return tip;
    }
}
bill[0]=calculator(124);
bill[1]=calculator(48);
bill[2]=calculator(268);
final_amount[0]=bill[0]+124