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
/*

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
*/
var myDetails={
    firstname:'suman',
    lastname:'A',
    dob:1998,
    family:['suman','Nanda','AjitKumar'],
    calcAge:function(birthyear){
        return 2019-birthyear;

    }
};
console.log(myDetails.firstname);
var z='dob';
console.log(myDetails[z]);
myDetails.dob=1998;
console.log(myDetails);

//new object
var shiva=new Object();
shiva.firstname='Suman';
console.log(shiva);
console.log('Suman is'+myDetails.calcAge(1998)+'years old');
//
/*
*/
var tip;
function calculator(amount){
    if(amount<50){
        tip=0.2*amount;
        return tip;
    }
    else if(amount>50 && amount<200){
        tip=0.15*amount;
        return tip;
    }
    else if(amount>200){
        tip=0.1*amount;
        return tip;
    }
}
var bill=[calculator(124),calculator(48),calculator(268)];
console.log('Bill='+bill);
var final_amount=[bill[0]+124,bill[1]+48,bill[2]+268];
console.log('Final amount='+final_amount);
/*


