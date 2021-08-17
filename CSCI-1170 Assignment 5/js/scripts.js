// Creating an array of all JSON inputted objects.
let jsonData= [JSON.parse(jsonDataSchool), JSON.parse(jsonDataLibrary), JSON.parse(jsonDataWeather), JSON.parse(jsonDataRestaurant)];
// Creating a reference to the main content section of the body.
let main = document.getElementById("main-content");

// Setting data index to 0 and calling the createTable() function.
var dataIndex= 0;
// Default creating school data table.
createTable();

function determineIndex0() { dataIndex=0; createTable(); }  // Created table for School data.
function determineIndex1() { dataIndex=1; createTable(); }  // Created table for Library data.
function determineIndex2() { dataIndex=2; createTable(); }  // Created table for Weather data.
function determineIndex3() { dataIndex=3; createTable(); }  // Created table for Restaurant data.

// Function to recreate the table if user selects different data.
function createTable() {

    // Creating a seperate variable to refer to user selected data pool.
    let selectedData= jsonData[dataIndex];
    // Determining the attributes to be displayed in table header.
    let dataKeys= Object.keys(selectedData[0]);
    // Creating a string with all attributes of object in HTML form.
    let innerTable= '';

    // Loop that goes through the datakeys and creates table header string in HTML.
    for(var i=0; i<dataKeys.length;i++) {
        innerTable+="\n        <th style=\"width:fit-content;\">"+dataKeys[i]+"</th>"
    }

    // Creating a table inside the main content section of the website and adding the string to it.
    main.innerHTML= 
           "<table id=\"data-table\">"
        +"\n    <tr class=\"table-header\">"
        +           innerTable
        +"\n    </tr>"
        +"\n</table>";

    // Creating a reference to the created table.
    let table= document.getElementById("data-table");

    // Creating a string with all values of object in HTML form and adding them to the table.
    // Loop that runs through all objects.
    for(var i=0;i<selectedData.length;i++) {
        // Intializing two strings to store data and table row.
        let innerData='';
        let completeDataString='';
        // loop that runs through each objects keys.
        for(var j=0; j<dataKeys.length;j++) {
            innerData+="\n    <td>"+selectedData[i][dataKeys[j]]+"</td>"
            completeDataString= "\n<tr>"+innerData+"\n</tr>";
        }
        // Adding the table row to the premade table.
        table.innerHTML+=completeDataString;
    }
    
}

// Filter function to filter through data both onkey and onclick.
function filter() {
    let input = document.getElementById("search-bar").value.toUpperCase();
    let tr= document.getElementById("data-table").getElementsByTagName("tr");
    // Starts from 1 in order to skip the first row which contains table headers.
    for(var i=1;i<tr.length;i++) {
        // Selects attribute value in the 2nd column which refers to the name.
        let name= tr[i].getElementsByTagName("td")[1].innerText.toUpperCase();
        // Compares the name with search bar input.
        if (name.indexOf(input)>-1) tr[i].style.display= "";
        else tr[i].style.display= "none";
    }
}
