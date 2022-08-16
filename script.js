const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
// function to strip bands of the a and an
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
// variable to store the bands sorted by which is higher a or b
const sortedBands = bands.sort(function(a,b){
    // if the stripped band name is higher add it further up, otherwise move it further down
    if(strip(a) > strip(b)){
        return 1;
    } else {
        return -1;
    }
});
// grab the bands ul from html page, the for the innerhtml map through the bands and display each band as a list item
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('')


