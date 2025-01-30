const studentsData = [
    { name: "Sarah", rollNo: 201, chemistry: 88, homeScience: 78, commerce: 92, physicalEducation: 90, moralScience: 85, totalMarks: 433, avgMarks: 86.6 },
    { name: "Michael", rollNo: 202, chemistry: 75, homeScience: 90, commerce: 85, physicalEducation: 94, moralScience: 88, totalMarks: 432, avgMarks: 86.4 },
    { name: "Emily", rollNo: 203, chemistry: 82, homeScience: 95, commerce: 88, physicalEducation: 92, moralScience: 90, totalMarks: 447, avgMarks: 89.4 },
    { name: "David", rollNo: 204, chemistry: 95, homeScience: 96, commerce: 94, physicalEducation: 99, moralScience: 99, totalMarks: 483, avgMarks: 96.6 },
    { name: "Olivia", rollNo: 205, chemistry: 85, homeScience: 92, commerce: 89, physicalEducation: 91, moralScience: 86, totalMarks: 443, avgMarks: 88.6 }
  ];
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
    if(avg >= 95) return "A+"
    if(avg >= 90) return "A"
    if(avg >= 85) return "B+"
    if(avg >= 80) return "B"
    if(avg >= 75) return "C+"
    if(avg >= 70) return "C"
    if(avg >= 65) return "D+"
    if(avg >= 60) return "D"
    if(avg >= 55) return "E"
    return "F"
  }
  
  function getAPlusGradeCount(data){
    let count = 0
    for(let i = 0; i < data.length; i++){
      if(data[i].avgMarks >= 95){
        count = count + 1
      }
    }
    return count
  }
  
  function getTotalMarksScored(data){
    let classTotalMarks = 0
    for(let i = 0; i < data.length; i++){
      classTotalMarks = classTotalMarks + data[i].totalMarks
    }
    return classTotalMarks
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
    let aPlusGradeCount = getAPlusGradeCount(studentsData)
    let totalMarksScored = getTotalMarksScored(studentsData)
    let chemistryAverage = subjectTotalAverage(studentsData, "chemistry")
    let homescienceAverage = subjectTotalAverage(studentsData, "homeScience")
    let commerceAverage = subjectTotalAverage(studentsData, "commerce")
    let physicaleducationAverage  = subjectTotalAverage(studentsData, "physicalEducation")
    let moralscienceAverage = subjectTotalAverage(studentsData, "moralScience")
    
    
    let report = "====== Class Performance Report ======" + "\n"
    report += "\nTopper: "
    report += "\n-------\n"
    report += "\nName: " + topper.name 
    report += "\nRoll No: " + topper.rollNo
    report += "\nTotalMarks: " + topper.totalMarks 
    report += "\nGrade: " + getGrade(topper.avgMarks) + "\n"
    report += "\nA+ Graders: " +  "\n------\n"
    report += "\n Total No. of A+ Graders: " + + aPlusGradeCount
    for(let i = 0; i < studentsData.length; i++){
      if(studentsData[i].avgMarks >= 95){
        report += "\nName: " + studentsData[i].name + "\n" + "Total Marks: " + studentsData[i].totalMarks 
      }
    }
    report += "\nClass Average: " + "\n------\n"
    report += "\nTotal Marks Scored by  Class: " + totalMarksScored
    report += "\nTotal Average Marks: " + totalMarksScored / studentsData.length + "\n-------"
    report += "\nTotal Average of Chemistry: " + chemistryAverage
    report += "\nTotal Average of Home science: " + homescienceAverage
    report += "\nTotal Average of commerce: " + commerceAverage
    report += "\nTotal Average of physical Education: " + physicaleducationAverage
    report += "\nTotal Average of Moral Science: " + moralscienceAverage
  
    
    
    return report
  }
  console.log(generateClassReport(studentsData))
      
  