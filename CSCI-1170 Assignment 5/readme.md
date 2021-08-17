# CSCI 1170: Intro to Web Design and Development
## Fall 2020 (Online Edition)
## Assignment 5


### Student Details
* Full Name: Aitzaz Qadir Khowaja
* Dal-ID   : B00853169
* Email    : at382154@dal.ca

### JSON Data Chosen

> I chose to do the bonus work hence I ended up using all of the JSON data that was provided.

### Brief description of web page developed (~150 words)

The majority of the functionality of the webpage depends on the scripts. It first links JSON data to the website. Then makes use of that data to create a table. Firstly it parses all of the JSON data that is available and adds it to an array of JSON objects called "jsonData". The first functionality it implements is 4 functions allowing the user to select which data to view based on the index of this data array. By default it displays the school data, however the user can choose to change this simply by pressing the appropriate button. 

Next the script specifies the createTable() method which performs the creation of the table from whichever data is selected. The table is recreated everytimg a new data is selected. It does this by referring to data from the objects array and incorporating it into a string of written HTML tables. Initially it builds a string of \<th> tags containing the headers or attributes of the data of a specific object and then adds this string into a \<table> which is then added into the inner HTML of the website. It performs this same operation for every single attribute of every single JSON object through loops. Except this time it only adds the built strings into the premade table.

Lastly, the function filter() is used to filter through the data. It does this by first creating reference variables to the table, the input from search bars and all table rows. It loops through every single row, it extracts the 2nd attribute from each JSON object which is the name. It capitalizes all the text it works with so that capitalization does not affect the comparisons of strings. Then it compares the strings using indexOf() which returns the index of the first occurence of the search query inside the data being evaluated, if the data doesnt exist it returns -1 or above, the program uses this returning value and decides wether to display each specific data of a row or not. This method is called both in real-time and upon the click of the filter button. I implemented both as the assignment did not specify exactly which to use.

The website is extremely easy to use. It default loads up school data. Click the buttons in the middle to change the data to any other. The search bar filters in realtime and by the button. It also changes design when viewd in mobile view. The table headers collapse and the elements become block-level to allow for easy viewing.

## Material Studied

* Recorded Lectures & ZyBooks from CSCI-1170
* The MDN Web Docs documentation on web development
* I have done a intro course in web design and development back in my home country offered by AP-TECH Learning in 2018.

### Citations

* HTML, CSS and Javascript documentation was reviewed in the MDN.
>https://developer.mozilla.org/en-US/

* Icons made by Creaticca Creative Agency & Freepik
>URL : https://www.flaticon.com/

* HTML was validated by using W3C Markup Validator
>URL : https://validator.w3.org/

* CSS was validated using W3C CSS Validation Service
>URL : https://jigsaw.w3.org/css-validator/

* Additional CSS added for Normalization
>URL : https://necolas.github.io/normalize.css/