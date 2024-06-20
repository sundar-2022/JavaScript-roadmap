// let country = "INDIA";
// let continent = "ASIA";
// let population = 140;
// let isIsland = false;
// const language = "Tamil";
// let half= population/2;

// console.log(half);
// population++;
// console.log(population);
// const finland = 60000000;
// console.log(population > finland);
// const check = population > finland;
// if(check){
//     console.log("yes more than finaland");
// }else{
//     console.log("less than finland");
// }
// const description = "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);
// // continent = 25;
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);
// let firstname = "sundar";
// const secondName = `I'm just a ${firstname}`;
// console.log(secondName);
// const fav = Number(prompt("gimme your no"));
// console.log(fav)

// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas  = (88+91+110)/3;

// if (scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }else if(scoreDolphins < scoreKoalas){
//     console.log("Koalas win the trophy");
// }else{
//     console.log("Both win the trophy");
// }

// const age = prompt("what is your age?");
// age>=18 ? console.log("party") : console.log("school");

// const bill = 275;
// let tip;
// bill>=50 && bill<=300 ? tip=15 : tip=20;
// tip = (tip/100)*bill;
// const total = bill + tip;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);

// js fundamental part 2 and challange 1

// const calcAverage = (score1, score2, score3)=> (score1 + score2 + score3)/3;

// const scoreDolphins=calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// function checkWinner(scoreDolphins,scoreKoalas){
//     if(scoreDolphins > (2*scoreKoalas)){
//         return `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`;
//     }else if((2*scoreDolphins) < scoreKoalas){
//         return `Kolas win (${scoreKoalas} vs. ${scoreDolphins})`; 
//     }else{
//         return "No team wins...";
//     }
// }

// console.log(checkWinner(scoreDolphins,scoreKoalas))
// let tip;
// let total;
// let avg;
// const calcTip = function(billValue){
//     billValue>=50 && billValue<=300 ? tip=15 : tip=20;
// avg = (tip/100)*billValue;
// total = billValue+tip;
// const tips = tips.push(tip);
// const totals = totals.push(tip)
// const bills = bills.push(tips);
// bills = bills.push(totals);
// }


// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

//  const calcAverage  = function(array){
//     return sum / totals.length;
//  } 

// const bills = [22,295,176,440,37,105,10,1100,86,52];
// const tips =[];
// const totals =[];

//   for(let i=0; i<bills.length; i++){
//     tips[i] = calcTip(bills[i]);
//     totals[i] = tips[i] + bills [i];
//   }
// debugger;
// let sum = 0;
// for(let i=0; i<totals.length; i++){
//     sum+=totals[i];
// }

// const avgArray = calcAverage(sum);
// console.log(tips);
// console.log(totals);
// console.log(avgArray);

// const mark = {
//   fullName : "Mark Miller",
//   mass : 78, 
//   height : 1.69,

//   calcBMI : function(){
//     this.bmi = this.mass / (this.height * this.height)
//     return this.bmi;
//   }
// }

// const john = {
//   fullName: "John Smith",
//   mass : 92, 
//   height : 1.95,

//   calcBMI : function(){
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();

// if(markBMI > johnBMI){
//   console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})`);
//  }else {
//   console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})`);
// }

// const array = [24, 353, 535, 3252];
// let temp = 1;
// for(let i = 0; i<10; i++){
//   if(array[i]===undefined){
//     break;
//   }
//   console.log(array[i]); // if we exeed the array it does not throw index out of bound error like java it instead printing "undefined"
// }

const calcTip = function(bill){
  return bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
}

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

for(let i =0; i<bills.length; i++){
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(tips);
console.log(totals);






