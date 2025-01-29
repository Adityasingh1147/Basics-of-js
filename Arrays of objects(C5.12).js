

const studentsData = [
    { 
     name: "Rahul",
     rollNo: 101,
     hindi: 80, 
     english: 75,
     maths: 90, 
     computers: 88,
     science: 82, 
     totalMarks: 415,
     avgMarks: 83 
    },
    {
      name: "Amit",
     rollNo: 102, 
     hindi: 85, 
     english: 70,
     maths: 95, 
     computers: 92,
     science: 78, 
     totalMarks: 420,
     avgMarks: 84 
    },
    { 
     name: "Priya",
     rollNo: 103, 
     hindi: 78, 
     english: 92, 
     maths: 87, 
     computers: 95, 
     science: 90,
     totalMarks: 442, 
     avgMarks: 88.4 
    },
    { 
      name: "Kaveri", 
      rollNo: 104, 
      hindi: 89,
      english: 95,
      maths: 96,
      computers: 98,
      science: 91, 
      totalMarks: 469, 
      avgMarks: 93.8 
    }
  ]
  
  function getTopper(data){
    let highestMarks = data[0]
    for(let i = 1; i < data.length; i++){
      if(data[i].totalMarks > highestMarks.totalMarks){
        highestMarks = data[i]
      }
    }
    return highestMarks
  }
  
  function getGrade(avg){
    if(avg >= 90) return "A"
    if(avg >= 80) return "B"
    if(avg >= 70) return "C"
    if(avg >= 60) return "D"
    if(avg >= 50) return "E"
    return "F"
    
  }
  function getAGradecount(data){
    let count = 0
    for(let i = 0; i < data.length; i++){
      if(data[i].avgMarks >= 90){
        count = count + 1
      }
    }
    return count
  }
  function getTotalMarksScored(data){
    let classtotalMarks = 0
    for(let i = 0; i < data.length; i++){
      classtotalMarks = classtotalMarks + data[i].totalMarks
    }
    return classtotalMarks
  }
  
  function subjectTotalAverage(data, subjectName){
    let totalMarks = 0
    for(let i = 0; i < data.length; i++){
      totalMarks = totalMarks + data[i][subjectName]
    }
    return totalMarks / data.length
  }
  
  
  
  function generateClassReport(studentsData){
    
    
    let topper = getTopper(studentsData)
    let aGradecount = getAGradecount(studentsData)
    let totalMarksscored = getTotalMarksScored(studentsData)
    let hindiAverage = subjectTotalAverage(studentsData, "hindi")
    let mathsAverage = subjectTotalAverage(studentsData, "maths")
    let englishAverage = subjectTotalAverage(studentsData, "english")
    let scienceAverage = subjectTotalAverage(studentsData, "science")
    let computerAverage = subjectTotalAverage(studentsData, "computers")
    
    
    
    let report = "===== Class Performance Report =====" 
    report += "\nTopper: "
    report += "\n------"
    report += "\nName: " + topper.name
    report += "\nRoll No: " + topper.rollNo
    report += "\nTotal Marks: " + topper.totalMarks
    report += "\nGrades: " + getGrade(topper.avgMarks)
    report += "\nA Graders: " 
    report += "\n------"
    report += "\nTotal No. of A Graders: " + aGradecount
    for(let i = 0; i < studentsData.length; i++){
      if(studentsData[i].avgMarks >= 90 ){
        report += "\nName: " + studentsData[i].name + "\n" + "Total Marks:  " + studentsData[i].totalMarks +"\n-------"
      }
    }
    
    report += "\nClass Average: \n"
    report += "\n------\n"
    report += "\nTotal Marks Scored By Class: " + totalMarksscored + "\n"
  
    report += "\nTotal Average of Class: " + totalMarksscored / studentsData.length +"\n------"
    report += "\nTotal Average of Hindi: " + hindiAverage
    report += "\nTotal Average of Maths: " + mathsAverage
    report += "\nTotal Average of English: " + englishAverage
    report += "\nTotal Average of Science: " + scienceAverage
    report += "\nTotal Average of Computer: " + computerAverage
  
  
    
    return report
      
  }
  console.log(generateClassReport(studentsData))
    
    