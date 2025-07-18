 
 var names = ["Piyush" ,"Satyam"," Toshif " ,"sahil","tomKar"];

function whosTurn(names) {
    var numberofPeople = names.length;
    var randomPerson = Math.floor(Math.random() * numberofPeople);
    return names[randomPerson] + " your turn now ";
}
console.log(whosTurn(names));
