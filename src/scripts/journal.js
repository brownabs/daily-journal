fetch("http://localhost:3000/entries") //implementation of a promise //make the request
    .then(entries => entries.json()) //taking a string and then turning into a js object//parsing the response
    .then(parsedEntries => { //parsedEntries is the argument to the function //this function is anonymous/now we can do shit
        parsedEntries.forEach(entries => {
            const entryHTML = createEntryHTMLComponent(entries)
            printEntry(entryHTML)

        })
    })

    const createEntryHTMLComponent = completedEntry => {
        return `
    <article class="dailyEntryLog">
        <section class="entryDate">${completedEntry.date}</section>
        <section class="entryConcepts"> Concepts Covered: ${completedEntry.conceptsCovered}</section>
        <section class="entryEntry">Entry: ${completedEntry.entry}</section>
        <section class="entryMood"> Mood: ${completedEntry.mood}</section>
    </div>
    `
    }

const printEntry = entryHTML => {
    document.querySelector(".entryLog").innerHTML += entryHTML
}

