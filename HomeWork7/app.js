const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ],
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ],
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ],
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ],
    },
];

const AverageResults = (
    (`Средний бал студента ${students[0].name}: `) + calculateStudentAverageMark(0) + 
    (`\nСредний бал студента ${students[1].name}: `) + calculateStudentAverageMark(1) +
    (`\nСредний бал студента ${students[2].name}: `) + calculateStudentAverageMark(2) +
    (`\nСредний бал студента ${students[3].name}: `) + calculateStudentAverageMark(3) +
    ('\nСредний бал всех студентов: ') + calculateGroupAverageMark(students)
    );

function getAverage (val){
    const marksCalc = val.reduce((acc,item) => acc+item);
    const averageMark = marksCalc / val.length;
    return averageMark;
}

function calculateStudentAverageMark(id){
    const studentMarks = students[id].marks;
    return getAverage (studentMarks);
}

function calculateGroupAverageMark(students){
    let arr = [];
    for (let i = 0; i < students.length; i++){
        arr = arr.concat(students[i].marks);
    }
    return getAverage(arr);
}

console.log(AverageResults);
