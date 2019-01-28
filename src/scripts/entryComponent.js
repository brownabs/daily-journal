//creating HTML from the entry log 
const entryHTMLComponent = {
    createComponent(completedEntry) {
        return `
        <article class="dailyEntryLog">
            <section class="entryDate">${completedEntry.date}</section>
            <section class="entryConcepts"> Concepts Covered: ${completedEntry.conceptsCovered}</section>
            <section class="entryEntry">Entry: ${completedEntry.entry}</section>
            <section class="entryMood"> Mood: ${completedEntry.mood}</section>
        </div>
        `
    }
}
    