async function render(fi, si) {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)
    let data = await response.json()
    console.log(data)
    // Your code goes here
}

render(20, 35);
