// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
//kata 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.



//Kata 1: Use the .filter() method

const kata1 = users.filter(t => t.isActive === true)

printKata('1', kata1)  


//Kata 2: Use the .map() method
//Map over the users array to show only the email addresses of the users.

const kata2 = users.map(t => t.email)
printKata('2', kata2)  


//Kata 3: Use the .some() method
//Check whether at least one user in the users array has a company property of "OVATION".

const kata3 = users.some(t => t.company = "OVATION")
printKata('3', kata3)

//Kata 4: Use the .find() method
//Find the first user in the array over the age of 38.

const kata4 = users.find(t => t.age > 38)
printKata('4', kata4)

//Kata 5: Use the .filter() and .find() methods
//Find the first user in the array over the age of 38 who is active.

const kata5 = users.filter(t => t.age > 38).find(t => t.isActive === true)
printKata('5', kata5)


//Kata 6: Use the .filter() and .map() methods
//Show the balance of every user in the array from the "ZENCO" company.

const kata6 = users.filter(t => t.company === "ZENCO").map(t => t.balance)
printKata('6', kata6)




//Kata 7: Use the .filter() method with .includes() and the .map() method
//Show the age of every user with the "fugiat" tag.

const kata7 = users.filter(t => t.tags.includes('fugiat')).map(t => t.age)
printKata('7', kata7)
