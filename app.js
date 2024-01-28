/*Function to print the odd number and print name with prompt*/
//Example 1
// let NameUser=prompt("Please Enter Your Name ")
// function FindNumber(  numbur1, number2){
//     for(let i=numbur1;i<number2;i++)
//     {
//         if(i%2==1)
//         {
//             console.log("This Number Is Odd "+i+" "+NameUser)

//         }
//     }
// }
// FindNumber(200,300)

//Example 2
// function enter name of student and their marks and calcucle the avg and assign each mark to each sudent find maxdd

let NameStudent = ["Sarah", "Anmar", "Haya"]
let Marks = [90, 50, 20]
let sum = 0
let max = Marks[0]
let flag = 0;
function MarksStudent() {
    for (let i = 0; i < NameStudent.length; i++) {
        console.log(NameStudent[i] + " " + Marks[i]);
        sum = sum + Marks[i]
        if (max < Marks[i + 1]) {
            max = Marks[i + 1]
            flag++
        }

    }
    // print message show you are passed of failed
    let avg = sum / Marks.length
    console.log("Avarage= " + avg)
    console.log("The name of student who has the max mark is :" + NameStudent[flag] + " the mark is " + max)

    for (let k = 0; k < Marks.length; k++) {

        if (Marks[k] < 50) {

            console.log("Sorry " + NameStudent[k] + " You are failed " + Marks[k])
        }
       else if (Marks[k] >= 50) {
        console.log("Congratulations! " + NameStudent[k] + ", you have passed. Marks: " + Marks[k]);
    }
        else { console.log("Check the value of marks!!!") }
    }
}


MarksStudent()

