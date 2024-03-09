let currentFilterIndex = 0;
const filters = [
    { name: 'Type : <br>None type [0]', value: 'none' },
    { name: 'Type : <br>Protanopia [1]', value: 'url(#protanopia)' },
    { name: 'Type : <br>Protanomaly [2]', value: 'url(#protanomaly)' },
    { name: 'Type : <br>Deuteranopia [3]', value: 'url(#deuteranopia)' },
    { name: 'Type : <br>Deuteranomaly [4]', value: 'url(#deuteranomaly)' },
    { name: 'Type : <br>Tritanopia [5]', value: 'url(#tritanopia)' },
    { name: 'Type : <br>Tritanomaly [6]', value: 'url(#tritanomaly)' },
    { name: 'Type : <br>Achromatopsia [7]', value: 'url(#achromatopsia)' },
    { name: 'Type : <br>Achromatomaly [8]', value: 'url(#achromatomaly)' }
];

const colorBlindnessButton = document.getElementById('colorBlindnessButton');
const spanElement = document.getElementById('filterValue');
const filterNameSpan = document.getElementById('filterName');


colorBlindnessButton.addEventListener('click', () => {
    currentFilterIndex = (currentFilterIndex + 1) % filters.length;
    applyColorBlindnessFilter();
    updateSpanInfo();
});

function applyColorBlindnessFilter() {
    const filter = filters[currentFilterIndex].value;
    document.body.style.filter = filter;
}

function updateSpanInfo() {
    const filterName = filters[currentFilterIndex].name;
    spanElement.textContent = currentFilterIndex;
    filterNameSpan.innerHTML = filterName;
}