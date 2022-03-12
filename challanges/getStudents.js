/*
Destrucering 

- Destructer Arrays: we use squar brackets

- Destructer Object: we use curly brackets


Challange: return a list of students

- getStudents
- hasTeachingAssistance
The first name in the array is the Teacher and the second is the assistance
if hasTeachingAssistance is false, there will be only 1 teacher and the rest are students

["Rashida", "John", "Lisa", "Omair","Lukas"]

Goal is to get a list of students. 
*/ 


// DEFINE STUDENT FUNCTION

function getStudents(classroom){
    let {hasTeachingAssistance, classList} = classroom;
    let teacher, teachingAssitance, students;

    if(hasTeachingAssistance){
        [teacher, teachingAssitance, ...students] = classList;

    }else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(
    getStudents({
        hasTeachingAssistance: true,
        classList: ["Rashida", "John", "Lisa", "Omair","Lukas"]

    })
);
