function addMeMaybe(number, theFunction){
    let text = "New Value:"
    let i = 0;
    while (i<3){
        number += 1
        console.log(text, + number);
        i++;
    }
}

module.exports = {
    addMeMaybe : addMeMaybe
}