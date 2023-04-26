const javaScript = {
    name: javaScript,
    laibraries: ['React.js', 'Angular.js', 'Vue.js', 'NodeJs'],
    printLaibrary: function(){
        this.laibraries.forEach(function (a){
            console.log(`${this.name} Loved ${a}`);
        })
    }
}

javaScript.printLaibrary();