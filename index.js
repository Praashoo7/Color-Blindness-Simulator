/* --------------------- FILTER-SWITCH --------------------- */

let currentFilterIndex = 0;
  const filters = [
    { name: 'Type : <br>None type', value: 'none' },
    { name: 'Type : <br>Protanopia', value: 'url(#protanopia)' },
    { name: 'Type : <br>Deuteranopia', value: 'url(#deuteranopia)' },
    { name: 'Type : <br>Tritanopia', value: 'url(#tritanopia)' },
    { name: 'Type : <br>Protanomaly', value: 'url(#protanomaly)' },
    { name: 'Type : <br>Deuteranomaly', value: 'url(#deuteranomaly)' },
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
var textToCopy = `

<!-- SVG FROM [ https://github.com/hail2u/color-blindness-emulation ] -->
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg class="COLOR-FILTERS-SVG"
xmlns="http://www.w3.org/2000/svg"
version="1.1">
<defs>
    <filter id="protanopia">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.567, 0.433, 0,     0, 0
                0.558, 0.442, 0,     0, 0
                0,     0.242, 0.758, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="protanomaly">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.817, 0.183, 0,     0, 0
                0.333, 0.667, 0,     0, 0
                0,     0.125, 0.875, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="deuteranopia">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.625, 0.375, 0,   0, 0
                0.7,   0.3,   0,   0, 0
                0,     0.3,   0.7, 0, 0
                0,     0,     0,   1, 0"/>
    </filter>
    <filter id="deuteranomaly">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.8,   0.2,   0,     0, 0
                0.258, 0.742, 0,     0, 0
                0,     0.142, 0.858, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="tritanopia">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.95, 0.05,  0,     0, 0
                0,    0.433, 0.567, 0, 0
                0,    0.475, 0.525, 0, 0
                0,    0,     0,     1, 0"/>
    </filter>
    <filter id="tritanomaly">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.967, 0.033, 0,     0, 0
                0,     0.733, 0.267, 0, 0
                0,     0.183, 0.817, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="achromatopsia">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.299, 0.587, 0.114, 0, 0
                0.299, 0.587, 0.114, 0, 0
                0.299, 0.587, 0.114, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
    <filter id="achromatomaly">
    <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="0.618, 0.320, 0.062, 0, 0
                0.163, 0.775, 0.062, 0, 0
                0.163, 0.320, 0.516, 0, 0
                0,     0,     0,     1, 0"/>
    </filter>
</defs>
</svg>

<div class="main">
<button id="colorBlindnessButton">
    <svg class="eye_main" width="24" height="24" viewBox="0 0 30 30" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <path d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z" id="outline" fill="black"></path>
            <mask id="mask">
            <rect width="100%" height="100%" fill="white"></rect>
            <use xlink:href="#outline" id="lid" fill="black"/>
            </mask>
        </defs>
        <g id="eye">
            <path id="eye_eye" d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z M14.9348958,22.081464 C11.2690863,22.081464 8.29688487,18.9510766 8.29688487,15.089434 C8.29688487,11.2277914 11.2690863,8.09740397 14.9348958,8.09740397 C18.6007053,8.09740397 21.5725924,11.2277914 21.5725924,15.089434 C21.5725924,18.9510766 18.6007053,22.081464 14.9348958,22.081464 L14.9348958,22.081464 Z M18.2535869,15.089434 C18.2535869,17.0200844 16.7673289,18.5857907 14.9348958,18.5857907 C13.1018339,18.5857907 11.6162048,17.0200844 11.6162048,15.089434 C11.6162048,13.1587835 13.1018339,11.593419 14.9348958,11.593419 C15.9253152,11.593419 14.3271242,14.3639878 14.9348958,15.089434 C15.451486,15.7055336 18.2535869,14.2027016 18.2535869,15.089434 L18.2535869,15.089434 Z" ></path>
            <use xlink:href="#outline" mask="url(#mask)" fill="#FFFFFF"/>
        </g>
    </svg>
</button>
<span id="filterName">Type : <br>None type<span style="margin-left: 0.25em;" id="filterValue">[0]</span></span>
</div>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&display=swap');
    
    .COLOR-FILTERS-SVG{
        display: none;
    }
    
    .main{
      padding: 0.5em;
      padding-right: 0.85em;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      gap: 0.75em;
      border: 1px solid black;
      background-color: #F8EBC9;
    }

    #filterName, #filterValue{
      font-family: Josefin Slab;
      color: black;
      line-height: 1.15em;
      font-weight: bold;
    }
    #filterName{
      width: 139px;
    }

    #colorBlindnessButton{
        background-color: transparent;
        border: 1px solid black;
        border-radius: 8px;
        width: 3em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: .4s ease-in-out;
    }
    #colorBlindnessButton:hover{
        background-color: #171717;
    }
    #eye_eye{
        fill: black;
        transition: .4s ease-in-out;
    }
    #colorBlindnessButton:hover #eye_eye{
        fill: white;
    }

    #lid{
      animation: eye 2s ease-in-out infinite;
    }
    #colorBlindnessButton:hover #lid{
      animation: none;
    }
  
    @keyframes eye {
      0%{
          transform: scaleX(1) scaleY(1);
          transform-origin: center;
      }
      10%{
          transform: scaleX(1) scaleY(0);
          transform-origin: center;
      }
      20%{
          transform: scaleX(1) scaleY(1);
          transform-origin: center;
      }
      75%{
          transform: scaleX(1) scaleY(1);
          transform-origin: center;
      }
      80%{
          transform: scaleX(1) scaleY(0);
          transform-origin: center;
      }
      85%{
          transform: scaleX(1) scaleY(1);
          transform-origin: center;
      }
      100%{
          transform: scaleX(1) scaleY(1);
          transform-origin: center;
      }
    }
    
</style>
    
<script>
    
      let currentFilterIndex = 0;
      const filters = [
          { name: 'Type : <br>None type [0]', value: 'none' },
          { name: 'Type : <br>Protanopia [1]', value: 'url(#protanopia)' },
          { name: 'Type : <br>Deuteranopia [2]', value: 'url(#deuteranopia)' },
          { name: 'Type : <br>Tritanopia [3]', value: 'url(#tritanopia)' },
          { name: 'Type : <br>Protanomaly [4]', value: 'url(#protanomaly)' },
          { name: 'Type : <br>Deuteranomaly [5]', value: 'url(#deuteranomaly)' },
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
    
</script>

`;

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