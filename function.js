function myFirstFunction(){
    console.log("My First Function Without Paramiter");
    return;
}

myFirstFunction();


function mySceFun(x , y){
    for(let i = x; y > x; x++){
        console.log(x);
    }

    return 15;
    console.log("MY Returned Value");
}
mySceFun(3, 5);

function my_fun_3(x, y){
    let z = x /y;
    return z;
}
console.log(my_fun_3(50, 4));
// let my_fun_re = my_fun_3(45, 3);
// console.log(my_fun_re);