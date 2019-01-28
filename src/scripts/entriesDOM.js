//creates a variable that holds the function to add the newest entry to the DOM
const Entry = {
    printEntry(entryHTML) {
        document.querySelector(".entryLog").innerHTML += entryHTML
    }
}