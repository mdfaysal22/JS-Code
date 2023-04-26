const firstObj = {a: 2, b: 3, c:4};
const sceondobj = {a: 2, b: 3, c:4};

const compare = (first, second) => {
    if(Object.keys(first).length === Object.keys(second).length){
        for(const keys of Object.keys(first)){
            if(first[keys] === second[keys]){
                return true;
            }
            else{
                return false;
            }
        }
    }else{
        return false;
    }
};

console.log(compare(firstObj, sceondobj));