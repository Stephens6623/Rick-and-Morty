async function render(fi, si) {
    try {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${fi},${si}`)

    if(!response.ok) {
        throw new error('Network response was not ok')
    }

    let data = await response.json()
    console.log(data)
    //The API returns a single object if only one ID is provided, otherwise it returns an array of objects
    let characters;
    if (Array.isArray(data)){
        characters = data;
    } else {
        characters = [data];
    }

    if (characters.length < 2 && fi !== si) {
        throw new error('One or both character IDs are invalid');
    }
    //Targetting two img elements from out HTML
    document.getElementById('firstImage').src = characters[0].image;
    document.getElementById('secondImage').src = characters[1] ? characters[1].image : characters[0].image;
    //Setting the text content of the name elements to the character names from the API response
    document.getElementById('firstName').textContent = characters[0].name;
    document.getElementById('secondName').textContent = characters[1] ? characters[1].name : characters[0].name;

    } catch (error) {//Error catching
        console.error('Error fetching characters:', error);
    } 
}
render(20, 35) //Initial call to render function with default character IDs
//Function to fetch characters based on user input
function fetchCharacters() {
    const id1 = document.getElementById('first-id').value;
    const id2 = document.getElementById('second-id').value;
    if (id1 && id2) {
        render(id1, id2);
    }else {
        alert('Please enter both character IDs.');
    }
}

