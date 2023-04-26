const myresult = {
    name: "Md Faysal",
    class: "BBA in Accounting",
    year: "2nd Year",
    math: 95,
    Accounting: 99,
    Statistic: 80,

    total: function total(math, acc, sta){
        const totalMarks = math + acc + sta ;
        const totalAve = totalMarks / 3;
        if(totalAve >= 80){
            return "A+";
        }else{
            if(totalAve >= 60){
                return "A";
            }else{
                if(totalAve >= 40){
                    return "B"
                }else{
                    if(totalAve >= 30){
                        return "C";
                    }else{
                        return "Not Promoted";
                    }
                }
            }
        }
    }
}

console.log(myresult.total(myresult.math, myresult.Accounting, myresult.Statistic));