let aframe = document.getElementById("frame");
let gen = document.getElementById("gen");


// --
// Main function
function generate() {
    let id = Math.random();
    let url = `https://avatars.dicebear.com/api/adventurer/${id}.svg`
    aframe.src = url;
}

// main event
gen.addEventListener('click', function(e) {

    generate();
});



