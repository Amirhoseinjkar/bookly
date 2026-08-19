export async function searchBooks(query) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.docs
    
}

export async function popularBooks(condition){
const response = await fetch(` https://openlibrary.org/trending/monthly.json?${condition}`)
const data = await response.json()
return data.works
}

export async function someCategories(name){
    const response = await fetch(`https://openlibrary.org/subjects/${name}.json`)
    const data = await response.json()
    return data
}
export async function newReleases(){
    const response = await fetch('https://openlibrary.org/search.json?q=fiction&sort=rating&limit=20')
    const data = await response.json()
    return data.docs
}