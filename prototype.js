function persion(name, age){
    let persions = {};

    persions.name = name;
    persions.age = age;

    persions.eat = function(){
        console.log("Rohim Is Eating Rice");
    }
    persions.sleep = function(){
        console.log(name, 'is sleeping at that time');
    }

    return persions;
}

console.dir(persion("Rohim", 18));