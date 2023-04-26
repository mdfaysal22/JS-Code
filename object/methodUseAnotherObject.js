const emon = {
    name: "Emon",
    balance: 20000,
    id: 1205,

    cost: function(rent, exp, tax = 0){
        const Taxper =  tax / 100;
        const costWithOutTax = rent + exp;
        const taxableCost = this.balance - costWithOutTax;
        const totalTax = taxableCost * Taxper;
        const totalCost = costWithOutTax + totalTax;
        const Income = this.balance - totalCost ;
        return Income;
    }
}

console.log(emon.cost(2000, 5000, 15));

const faysal = {
    name: "Faysal",
    balance: 50000,
    id: 1200
};

// const faysalIncome = emon.cost.apply(faysal, [5000, 15000, 15]);
const faysalIncome = emon.cost.call(faysal, 15000, 5000, 15);
console.log(faysalIncome);

// Apply, Call এর মতো আরো একটা method আছে যা হলো bind , Apply and Call সরাসরি function কে call করে ফেলে,কিন্তু  bind সরাসরি call না করে নতুন করে আর একটা function create করে ফেলে, যার ফলে বার বার ওই function call করে কাজ করা যায়। 

const faysalincomeRepeat = emon.cost.bind(faysal);
console.log(faysalincomeRepeat(5000, 20000));
console.log(faysalincomeRepeat(5000, 30000));


const obj1= {module: 35, video:2};
const obj2= {module: 35, video:2};
console.log(obj1 === obj2);
const getGirlFriend= (name = "chokina")=>"name";
console.log(getGirlFriend()); 