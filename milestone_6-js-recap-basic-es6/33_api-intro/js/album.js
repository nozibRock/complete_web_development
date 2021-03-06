function loadAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => displayAlbums(data));
}

function displayAlbums(albums) {
    const albumContainer = document.getElementById("albums");
    for (const album of albums) {
        const paragraph = document.createElement('p');
        // paragraph.style.textAlign = 'center';
        paragraph.style.background = 'pink';
        paragraph.style.fontWeight = "bold";
        paragraph.style.textTransform = "capitalize";
        paragraph.style.margin = "10px";
        paragraph.style.padding = "20px";
        paragraph.style.borderRadius = "20px";
        paragraph.style.display = 'inline-block';
        paragraph.innerText = album.title;
        albumContainer.appendChild(paragraph)
    }
}
// console.log(loadAlbums());

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name); 

const premikas = { name: "keka ferdousi", cars: { brand: "toyota" } };
const {brand} = premikas.cars;
console.log(brand);

const info = { data: [{ language: "Javascript", library: "React" }] };  
const libraryInfo = info.data[0].library;
console.log(libraryInfo);