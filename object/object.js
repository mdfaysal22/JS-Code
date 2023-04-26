const myObject= {
    name: 'Md Faysal',
    class: 'BBA',
    college: ['Govt Abul Kalam College, Barisal', 'Govt B.M. College, Barisal'],
    myStudent: {
        name: 'Hasan',
        class: 'Inter 2nd Year',
        hisStudent: {
            name: 'Rakib',
            class: 'SSC'
        }
    },
    myFun: function(x, y){
        let z = x + y;
        return z;
    }
}

// console.log(myObject.myStudent.hisStudent);
console.log(myObject.myFun(5,4));