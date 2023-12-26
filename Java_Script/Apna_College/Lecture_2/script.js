let marks=prompt("Enter marks:");
 if(marks>=80&& marks<=100)
 {
    console.log("Garde = A");
 }
 else if(marks>=70 && marks<=89)
 {
    console.log("Garde = B");
 }
 else if(marks>=60&& marks<=69){
    console.log("Garde = C");

 }
 else if (marks>=50&& marks<=69)
 {
    console.log("Grade=D");
 }
 else if(marks>=0 && marks<=40)
 {
    console.log("Grade=F");
 }
 else{
    console.log("Please enter the valid marks");
 }