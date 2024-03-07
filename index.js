/* --------------------- FILTER-SWITCH --------------------- */

let currentFilterIndex = 0;
  const filters = [
    { name: 'Type : <br>None type', value: 'none' },
    { name: 'Type : <br>Protanopia', value: 'url(#protanopia)' },
    { name: 'Type : <br>Protanomaly', value: 'url(#protanomaly)' },
    { name: 'Type : <br>Deuteranopia', value: 'url(#deuteranopia)' },
    { name: 'Type : <br>Deuteranomaly', value: 'url(#deuteranomaly)' },
    { name: 'Type : <br>Tritanopia', value: 'url(#tritanopia)' },
    { name: 'Type : <br>Tritanomaly', value: 'url(#tritanomaly)' },
    { name: 'Type : <br>Achromatopsia', value: 'url(#achromatopsia)' },
    { name: 'Type : <br>Achromatomaly', value: 'url(#achromatomaly)' }
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


/* --------------------- DIV-ANIMATION-ONCLICK --------------------- */

function animateDivs() {
  var innerdivIds = ['inner1', 'inner2', 'inner3', 'inner4', 'inner5', 'inner6', 'inner7', 'inner8'];
  var outerdivIds = ['outer1', 'outer2', 'outer3', 'outer4', 'outer5', 'outer6', 'outer7', 'outer8', 'outer9', 'outer10', 'outer11', 'outer12', 'outer13', 'outer14', 'outer15', 'outer16'];
  /* var mainDivId = document.getElementById('mainDiv'); */

  // Remove animation class from all divs
  innerdivIds.forEach(function(id) {
      var divr = document.getElementById(id);
      divr.classList.remove('animate_outer_inner');
  });
  outerdivIds.forEach(function(id) {
    var divr = document.getElementById(id);
    divr.classList.remove('animate_outer_inner');
  });
  /* mainDivId.classList.remove('animate_main'); */

  // Apply animation class to all divs based on IDs
  /* setTimeout(function() { 
    mainDivId.classList.add('animate_main');
  }, 0); */
  setTimeout(function() {
      innerdivIds.forEach(function(id) {
          var diva = document.getElementById(id);
          diva.classList.add('animate_outer_inner');
      });
  }, 0); /* 200 */
  setTimeout(function() {
    outerdivIds.forEach(function(id) {
        var diva = document.getElementById(id);
        diva.classList.add('animate_outer_inner');
    });
  }, 175); /* 400 */
}


/* --------------------- POPUP --------------------- */

function openPop(ID) {

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.disabled = true;
  });

  document.getElementById(ID).style.opacity = "1";
  document.getElementById(ID).style.zIndex = "99";
  document.querySelector("body").style.overflow = "hidden";
}
function closePop(ID) {

  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
      checkbox.disabled = false;
  });

  document.getElementById(ID).style.opacity = "0";
  document.getElementById(ID).style.zIndex = "-2";
  document.querySelector("body").style.overflow = "auto";
}


/* --------------------- COPY-CODE --------------------- */

// Define a variable to store the text
var textToCopy = `<iframe style="width: 14.7em; height: 5em; outline: none; border: none;" src="https://praashoo7.github.io/Color-Blindness-Simulator/Button/index.html"></iframe>`;

document.getElementById("copyButton").addEventListener("click", function() {
  // Create a temporary textarea element
  var tempTextArea = document.createElement("textarea");

  // Set the text content of the textarea to the text to be copied
  tempTextArea.textContent = textToCopy;

  // Append the textarea to the DOM
  document.body.appendChild(tempTextArea);

  // Select the text inside the textarea
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999); /* For mobile devices */

  // Copy the selected text
  document.execCommand("copy");

  // Remove the temporary textarea from the DOM
  document.body.removeChild(tempTextArea);

  // Select the first element with class 'copysvg'
var copySVG = document.querySelector('.copysvg');
// Select the first element with class 'donesvg'
var doneSVG = document.querySelector('.donesvg');
var tooltipText = document.querySelector('.tooltip_copy');

// Hide 'copysvg' and show 'donesvg'
copySVG.style.display = 'none';
doneSVG.style.display = 'block';
tooltipText.textContent = 'Copied!';
tooltipText.style.marginRight = '0.75em';

// Set a timeout to revert the changes after 3 seconds
setTimeout(function() {
  // Show 'copysvg' and hide 'donesvg'
  copySVG.style.display = 'block';
  doneSVG.style.display = 'none';
  tooltipText.textContent = 'Copy code!';
  tooltipText.style.marginRight = 0;
}, 3000); // 3000 milliseconds = 3 seconds
});