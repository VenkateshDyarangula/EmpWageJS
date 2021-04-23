const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
//const NUM_OF_WORKING_DAYS=2;


function getWorkingHours(empCheck)
{
  switch(empCheck)
  {
   case IS_PART_TIME:
         return PART_TIME_HOURS;
   case IS_FULL_TIME:
         return FULL_TIME_HOURS;
    default:
          return 0;
  }
}


      const MAX_HRS_IN_MONTH=160;
      const NUM_OF_WORKING_DAYS=20;
      let totalEmpHrs=0;
      
      let totalWorkingDays=0;
      while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
            totalWorkingDays < NUM_OF_WORKING_DAYS)
      {
         totalWorkingDays++;
         let empCheck = Math.floor(Math.random()*10)%3;
         totalEmpHrs+=getWorkingHours(empCheck);
      }
     let empWage = totalEmpHrs*WAGE_PER_HOUR;
     console.log("UC5 - Total Days: "+totalWorkingDays+
     " Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage); 

//arraylist
let origDogs=["Bulldog","Beagle","Labrador"];
let cats= new Array("Americal Curl","Bengal");
let birds=new Array("falcoms","Ducks","flamingoes");

//Array Copy Elements
let sliceDogs=origDogs.slice(1,2);
let copyDogs=[...origDogs];
let dogs=origDogs.slice(0);

//Stack Functions (LIFO) Push and Pop

let pushDog=dogs.push("Golden Retriever");
let popDog=dogs.pop();
dogs[dogs.length]="Poodle";

//Add and Remove from First
let addFirst=dogs.unshift("Golden Retriever");
let shiftDog=dogs.shift();

//Atomic add and remove elements (where, how many to remove, element list)
dogs.splice(2,1,"pug","Boxer");

//Array Function - Concat, Spread, Slice and Sort
let animals=dogs.concat(cats,birds);
let newAnimal=[...dogs, ...cats, ...birds].toString();
let sortDog=dogs.slice(0).sort();
function scanArray([first, second])
{
    console.log("Scan: "+first+" "+second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals="";
for(let animal of animals)
allAnimals+=animal+" ";
console.log("Animals : "+allAnimals);
