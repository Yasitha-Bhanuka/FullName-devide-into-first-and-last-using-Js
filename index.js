/* slice() extracts a section of a string 
and return it as a new string
without modifying the original string. */


// declare the variables first.
document.getElementById("sbButton").onclick = function(){
    let fullName = document.getElementById("flName").value;
    
    // remove the additional spaces in the full name.
    let flName = fullName.trim();
    
    // declare the first name and last name
    let firstName;
    let lastName;
    
    // by dividing the name using the space where is it.
    firstName = flName.trim().slice(0, flName.indexOf(" "));
    document.getElementById("fName").innerHTML = "Your first name is " + firstName;
    lastName = flName.slice(flName.indexOf(" ") + 1);
    document.getElementById("sName").innerHTML = "Your last name is  " + lastName;

    // so that for devide the names we can use the directly index number in to the slice parenthesis
    // firstName = fName.trim().sice(0, x)
    // x => index number is the first blank space.
}




