// get user input
var filter = document.querySelector("#filter")
console.log(filter);


filter.addEventListener("keyup", filterNames)
// filter out list denpends on the user input

function filterNames(){
    var value = filter.value;

    
    
    //get all names in list
    var names = document.querySelectorAll("li a");
    console.log(names);

    
    
    for(var i=0;i<names.length;i++){
        // campare names
        if(names[i].innerText.toUpperCase().includes(value.toUpperCase())) {
           names[i].parentElement.style.display ="block"
        } else {
            names[i].parentElement.style.display ="none"
        }
    }
}
 