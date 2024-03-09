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

  /*let currentInfoIndex = 0;
  const info = [
    { data: ''},
    { data: 'Red Color Blindness.'},
    { data: 'A mild form of Red color blindness.'},
    { data: 'Green Color Blindness.'},
    { data: 'A mild form of Green color blindness.'},
    { data: 'Blue Color Blindness.'},
    { data: 'A mild form of Blue color blindness.'},
    { data: 'No Color.'},
    { data: 'A mild color blindness from all colors.'},
  ];*/

  const colorBlindnessButton = document.getElementById('colorBlindnessButton');
  const spanElement = document.getElementById('filterValue');
  const filterNameSpan = document.getElementById('filterName');
  /*const dataSpan = document.getElementById('data');*/


  colorBlindnessButton.addEventListener('click', () => {
    currentFilterIndex = (currentFilterIndex + 1) % filters.length;
    /*currentInfoIndex = (currentInfoIndex + 1) % info.length;*/
    applyColorBlindnessFilter();
    updateSpanInfo();
  });

  function applyColorBlindnessFilter() {
    const filter = filters[currentFilterIndex].value;
    setTimeout(() => {
      document.body.style.filter = filter;
    }, 100);
  }

  function updateSpanInfo() {
    const filterName = filters[currentFilterIndex].name;
    spanElement.textContent = currentFilterIndex;
    filterNameSpan.innerHTML = filterName;

    /*const infoData = info[currentInfoIndex].data;
    dataSpan.innerHTML = infoData;*/
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

var textToCopy = `

<link rel="stylesheet" type="text/css" href="https://praashoo7.github.io/Color-Blindness-Simulator/Button/style.css">
<svg class="COLOR-FILTERS-SVG" xmlns="http://www.w3.org/2000/svg" version="1.1"> <defs> <filter id="protanopia"> <feColorMatrix values="0.152 1.053 -0.205 0.000 0.000 0.115 0.786 0.099 0.000 0.000 -0.004 -0.048 1.052 0.000 0.000 0.000 0.000 0.000 1.000 0.000"> </feColorMatrix> </filter> <filter id="protanomaly"> <feColorMatrix in="SourceGraphic" type="matrix" values="0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"/> </filter> <filter id="deuteranopia"> <feColorMatrix values="0.367 0.861 -0.228 0.000 0.000 0.280 0.673 0.047 0.000 0.000 -0.012 0.043 0.969 0.000 0.000 0.000 0.000 0.000 1.000 0.000"> </feColorMatrix> </filter> <filter id="deuteranomaly"> <feColorMatrix in="SourceGraphic" type="matrix" values="0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"/> </filter> <filter id="tritanopia"> <feColorMatrix values="1.256 -0.077 -0.179 0.000 0.000 -0.078 0.931 0.148 0.000 0.000 0.005 0.691 0.304 0.000 0.000 0.000 0.000 0.000 1.000 0.000"> </feColorMatrix> </filter> <filter id="tritanomaly"> <feColorMatrix in="SourceGraphic" type="matrix" values="0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"/> </filter> <filter id="achromatopsia"> <feColorMatrix values="0.213 0.715 0.072 0.000 0.000 0.213 0.715 0.072 0.000 0.000 0.213 0.715 0.072 0.000 0.000 0.000 0.000 0.000 1.000 0.000"> </feColorMatrix> </filter> <filter id="achromatomaly"> <feColorMatrix in="SourceGraphic" type="matrix" values="0.618, 0.320, 0.062, 0, 0 0.163, 0.775, 0.062, 0, 0 0.163, 0.320, 0.516, 0, 0 0, 0, 0, 1, 0"/> </filter> </defs> </svg>
<div class="mainColorBlindness">
    <button id="colorBlindnessButton"><svg class="eye_main" width="24" height="24" viewBox="0 0 30 30" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><path d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z" id="outline" fill="black"></path><mask id="mask"><rect width="100%" height="100%" fill="white"></rect><use xlink:href="#outline" id="lid" fill="black"/></mask></defs><g id="eye"><path id="eye_eye" d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z M14.9348958,22.081464 C11.2690863,22.081464 8.29688487,18.9510766 8.29688487,15.089434 C8.29688487,11.2277914 11.2690863,8.09740397 14.9348958,8.09740397 C18.6007053,8.09740397 21.5725924,11.2277914 21.5725924,15.089434 C21.5725924,18.9510766 18.6007053,22.081464 14.9348958,22.081464 L14.9348958,22.081464 Z M18.2535869,15.089434 C18.2535869,17.0200844 16.7673289,18.5857907 14.9348958,18.5857907 C13.1018339,18.5857907 11.6162048,17.0200844 11.6162048,15.089434 C11.6162048,13.1587835 13.1018339,11.593419 14.9348958,11.593419 C15.9253152,11.593419 14.3271242,14.3639878 14.9348958,15.089434 C15.451486,15.7055336 18.2535869,14.2027016 18.2535869,15.089434 L18.2535869,15.089434 Z" ></path><use xlink:href="#outline" mask="url(#mask)" fill="#FFFFFF"/></g></svg></button>
    <span id="filterName">Type : <br>None type<span style="margin-left: 0.25em;" id="filterValue">[0]</span></span>
</div>
<script src="https://praashoo7.github.io/Color-Blindness-Simulator/Button/script.js"></script>


<!-- GET THE REACT COMPONENT HERE : https://github.com/Praashoo7/Color-Blindness-Simulator/blob/main/ReactComponent/ReactComponent.js -->
<!-- GET THE FULL CODE HERE : https://github.com/Praashoo7/Color-Blindness-Simulator/blob/main/Button/Button_RAW.html -->
`;

document.getElementById("copyButton").addEventListener("click", function() {

  var tempTextArea = document.createElement("textarea");
  tempTextArea.textContent = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempTextArea);

  var copySVG = document.querySelector('.copysvg');
  var doneSVG = document.querySelector('.donesvg');
  var tooltipText = document.querySelector('.tooltip_copy');

  copySVG.style.display = 'none';
  doneSVG.style.display = 'block';
  tooltipText.textContent = 'Copied!';
  tooltipText.style.marginRight = '0.75em';

  setTimeout(function() {
    copySVG.style.display = 'block';
    doneSVG.style.display = 'none';
    tooltipText.textContent = 'Copy code!';
    tooltipText.style.marginRight = 0;
  }, 3000);

});