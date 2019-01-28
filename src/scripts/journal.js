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



