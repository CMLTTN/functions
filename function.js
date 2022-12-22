// function printHello(){
//     console.log("Hello");
// }
// printHello()
// printHello()
// printHello()
function greet(firstName, lastName = ""){
    console.log(`hi,${firstName} ${lastName}`);
} 

greet("cemalettin","Dimlioglu")
greet("cemalettin","Dimlioglu")

greet("Dimlioglu","cemalettin")

// const firstName = prompt("Your name:")
// const lastName = prompt("Your surname:")
// greet(lastName, firstName)
greet("Ahmet")

//? js fonksiyonlar parametrelere değişkenleri değil onların değerlerini aktarır
 