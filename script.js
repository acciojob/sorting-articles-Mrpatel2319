//your JS code here. If required.
const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Function to clean and sort the bands
function sortBands(bands) {
    const ignoreWords = ['a', 'an', 'the'];
    return bands.sort((a, b) => {
        const cleanA = a.split(' ').filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');
        const cleanB = b.split(' ').filter(word => !ignoreWords.includes(word.toLowerCase())).join(' ');
        return cleanA.localeCompare(cleanB);
    });
}

// Populate the unordered list with sorted bands
function displaySortedBands() {
    const sortedBands = sortBands(bands);
    const bandList = document.getElementById('band');

    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
}

// Call the function to display the sorted bands on page load
displaySortedBands();
