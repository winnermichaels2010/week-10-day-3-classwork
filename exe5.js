let studentsName = [
    {name: "Ella",score: "55"},
    {name: "Jane",score: "48"},
    { name: "Blessed",score: "52"},
    {name: "Joshua",score: "59"}
];


function sStudentsName(){
    for (let i=0; i<studentsName.length; i++) {
        console.log(studentsName[i].name)
        console.log(studentsName[i].score)
        if(studentsName.score>50){
            console.log()
        }
    }
}

sStudentsName()