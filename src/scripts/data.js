const API = {
    getJournalEntries() { //funcion that retrieves the API data
        return fetch("http://localhost:3000/entries")
            .then(entries => entries.json())
    }
}