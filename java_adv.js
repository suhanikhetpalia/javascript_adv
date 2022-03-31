
const student = [
    {
        age : 18,
        course  : "CSE",
    },
    {
        age : 21,
        course  : "Electrical",
    },
    {
        age : 10,
        course  : "Mechanical",
    }
    ];
    
    function getstudents(){
            setTimeout(()=>{
                student.forEach((student)=>{
                    console.log(student.course)
                })
            },1000)

    }
    function createstudent(newStudent){
        console.log("create student")
        return new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    student.push(newStudent)
                    let flag = true;
                    if(flag){
                        resolve();
                        
                    }
                    else{
                        reject("Problem")
                    }
                },2000)
            })
    }
    
    createstudent({age : 21 , course : "CSE"}).then(getstudents).catch(err => console.log(err))
    getstudents()
    
