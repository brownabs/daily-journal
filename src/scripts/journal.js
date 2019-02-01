//this file ties all the shit together
const journalEntries = API.getJournalEntries(); //API is the object that holds the function getJournalEntries from data.js
//journalEntries is a promise: fetch always returns a promise
//promise that parses the data, then runs a forEach loop 
journalEntries.then(entries => {
    entries.forEach(entry => {
        const entryHTML = entryHTMLComponent.createComponent(entry)
        Entry.printEntry(entryHTML)
    })
})

document.querySelector("#recordButton").addEventListener("click", () => {  //event listener 
    const date = document.querySelector(".dateInput").value                 //takes the value of the input field and turns it into a variable
    const conceptsCovered = document.querySelector(".conceptsCoveredInput").value
    const entry = document.querySelector(".entryInput").value
    const mood = document.querySelector(".moodInput").value

    const dailyJournal = {  //object that stores the values from the input fields
        date: date,
        conceptsCovered: conceptsCovered,
        entry: entry,
        mood: mood
    }
    fetch("http://localhost:3000/entries", {  //takes the dailyJournal object and stores it inside of the json file
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dailyJournal)
    })
    function resetInput () {
        document.querySelector("#AbbeyForm").reset();
    }
    resetInput();
})