// function getFullName(fname,lname ) {
// this.firstName=fname;
// this.lastname=lname;
// this.ratings=[5,10,15,20,25]
// this.getName =function() {
//     // const Hello=this;
// this.ratings.forEach(function (elem){
//     return console.log({name:"Akram",ratings:"2,5,6,7,8,9",lastname:"khan"})

// }.bind(this)
// )    
// }
// }
// const output = new getFullName("Akram","Khan")
// console.log(output.getName())

function Person(fname,country) {
    this.firstName=fname;
    this.live=country;
    this.other=[{lname:"Khan",age:20},{lname:"sayyed",age:21},{lname:"pathan",age:22},{lname:"shaikh",age:23},{lname:"khan",age:24}]
    this.getFullDetails=function(elem){
        
        this.other.forEach(function(elem){
        console.log( fname + " " + elem.lname + " " + elem.age + " "  + country)
        } .bind(this)
        )
    }
}
    const output = new Person("Akram","India")
console.log(output.getFullDetails())


