const score=67;
let grade;
if(score>=90){
    grade ="A";
} else if(score >=80){
    grade="B";
} else if(score>=70){
    grade = "C";
} else if(score>=60){
    grade="D";
} else{
    grade = "F";
}
let gradeDescription;

switch(grade ){
    case "A":
        gradeDescription="A";
        break;
    case "B":
        gradeDescription = "B";
        break;
    case "C":
        gradeDescription="C";
        break;
    case "D":
        gradeDescription = "D";
        break;
    default:
        gradeDescription="F";
}
const status=score>=40 ? "Passed": "Failed";
console.log(`Score: ${score}`);
console.log(`Grade: ${gradeDescription}`);
console.log(`Status: ${status}`);