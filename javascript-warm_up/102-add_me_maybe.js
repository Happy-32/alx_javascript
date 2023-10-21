function addMeMaybe(number, theFunction){
    let i = 0;
    while (i<3){
        number += 1
        if (i == 0){
            console.log(`New Value: ` + number);
            i++;
        }
        else{
            console.log(`New Value${i+1}: ` + number);
            i++;
        }
    }
}

module.exports = {
    addMeMaybe : addMeMaybe
}