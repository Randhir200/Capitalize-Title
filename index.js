var capitalizeTitle = function(title) {
    let arr = title.toLowerCase().split(" ");
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<1;j++){
            if(arr[i].length>2){
                arr[i]=arr[i][j].toUpperCase()+arr[i].slice(1);
            }
        }
    }
    return arr.join(" ");
};


console.log(capitalizeTitle("iT's mY tuRn, you are be ready randhir"));