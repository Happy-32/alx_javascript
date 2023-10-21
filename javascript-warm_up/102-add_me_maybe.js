function addMeMaybe(number, theFunction){
    let text = "New Value:"
    number += 1
    console.log(text, + number);
}

module.exports = {
    addMeMaybe : addMeMaybe
}