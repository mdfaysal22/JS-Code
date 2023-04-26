const studentsMark = {
    name: "MD Faysal",
    roll: 33,
    subject: {
        math: 99,
        bangla: 89,
        english: 88, 
        accounting: 90,
        business_stadis: 99
    }
};

const mathMark = studentsMark.subject.math;
console.log(mathMark);

// USE Dynamicly
const subMark = "accounting";
const accountingMark = studentsMark.subject[subMark];
console.log(accountingMark);
