const aframe = document.getElementById("frame");
const gen = document.getElementById("gen");


// --
// Main function
function generate() {
    const id = Math.random();
    const url = `https://avatars.dicebear.com/api/adventurer/${id}.svg`
    aframe.src = url;
}

// main event
gen.addEventListener('click', function(e) {
    e.preventDefault();
    generate();
});



