console.log("A5.11_CW")
console.log("---- ---- ----")
const studentData = [
  {name: "Anu", rollNo: 101, hindi: 80, english: 75,  maths: 90},
  {name: "Priya", rollNo: 102, hindi: 85, english: 70, maths: 95},
  {name: "Ravi", rollNo: 103, hindi: 78, english: 92, maths: 87}
]
console.log("1.1")
console.log("---- ---- ----")
function printReportCard(rollNo){
  let student = getReportByRollNo(rollNo)
  console.log("===== Report card for " + student.name + " =====" + "\n" + "Roll NO: " + student.rollNo + "\n" + "-----" + "\nMarks: " + "\n-----\n" + "hindi: " + student.hindi + "\n" + "English: " + student.english + "\n" + "Maths: " + student.maths + "\n---- ---- ----")
}

function getReportByRollNo(rollNo){
  for(let i = 0; i < studentData.length; i++){
    if(studentData[i].rollNo === rollNo){
      return studentData[i]
    }
  }
}
printReportCard(101)
printReportCard(102)

console.log("1.2")
console.log("---- ---- ----")

function getStudentDataByCutoff(subjectName, cutOff){
  let result = []
  for(let i = 0; i < studentData.length; i++){
    if(studentData[i][subjectName] > cutOff){
      result.push(studentData[i])
    }
  }
  return result
}
console.log("\nStudent data with cutoff for hindi > 80")
console.log(getStudentDataByCutoff("hindi", 80))

console.log("\nStudent data with cutoff for Maths > 90")
console.log(getStudentDataByCutoff("maths", 90))


console.log("\nStudent data with cutoff for english > 90")
console.log(getStudentDataByCutoff("english", 90))

console.log("---- ---- ----")
console.log("1.3")
console.log("---- ---- ----")

for (let i = 0; i < studentData.length; i++){
  let numberOfSubjects = 3
  let total = studentData[i].hindi + studentData[i].english + studentData[i].maths
  studentData[i].totalMarks = total
  
  studentData[i].avgMarks = studentData[i].totalMarks / numberOfSubjects

  
}

function printStudentsAboveAverage(avgCutOff){
  for(let i = 0; i < studentData.length; i++){
    if(studentData[i].avgMarks > avgCutOff){
      console.log(studentData[i].name + " has average marks " + studentData[i].avgMarks)
    }
  }
}
printStudentsAboveAverage(82)

console.log("---- ---- ----")
console.log("1.4")
console.log('---- ---- ----')

function getHighestAverageMarks(data){
  let highestAvgMarks = data[0].avgMarks
  for(let i = 0; i < data.length; i++){
    if(data[i].avgMarks > highestAvgMarks){
      highestAvgMarks = data[i].avgMarks
    }
  }
  return highestAvgMarks
}
console.log("Students with highest average marks: ", getHighestAverageMarks(studentData))