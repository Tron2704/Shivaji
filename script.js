document.addEventListener('DOMContentLoaded', function () {
    const translateButton = document.querySelector('.translate');
    const englishContents = document.querySelectorAll('.english');
    const marathiContents = document.querySelectorAll('.marathi');

    let isMarathiVisible = true;

    translateButton.addEventListener('click', function () {
        if (isMarathiVisible) {
            englishContents.forEach(content => {
                content.style.display = 'block';
            });
            marathiContents.forEach(content => {
                content.style.display = 'none';
            });
            translateButton.textContent = 'Translate to Marathi';
        } else {
            englishContents.forEach(content => {
                content.style.display = 'none';
            });
            marathiContents.forEach(content => {
                content.style.display = 'block';
            });
            translateButton.textContent = 'Translate to English';
        }
        isMarathiVisible = !isMarathiVisible;
    });
});
// -----------------------------------------------------------------------

const plusButton = document.getElementById('plusButton');
const minusButton = document.getElementById('minusButton');
const movies = document.querySelectorAll('.movie');

let currentIndex = 0;

plusButton.addEventListener('click', () => {
    if (currentIndex < movies.length - 1) {
        movies[currentIndex].classList.remove('active');
        currentIndex++;
        movies[currentIndex].classList.add('active');
        minusButton.disabled = false;
        minusButton.style.opacity = 1; // Reset opacity
    }
    plusButton.disabled = currentIndex === movies.length - 1;
    plusButton.style.opacity = plusButton.disabled ? 0.5 : 1;
});

minusButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        movies[currentIndex].classList.remove('active');
        currentIndex--;
        movies[currentIndex].classList.add('active');
        plusButton.disabled = false;
        plusButton.style.opacity = 1; // Reset opacity
    }
    minusButton.disabled = currentIndex === 0;
    minusButton.style.opacity = minusButton.disabled ? 0.5 : 1;
});



//   ----------------------------------------------------------------------

const imgf1p1 = document.querySelector('.f1-p1-img');
const imgf1p2 = document.querySelector('.f1-p2-img');
const imgf1p3 = document.querySelector('.f1-p3-img');
const imgf1p4 = document.querySelector('.f1-p4-img');
const imgf1p5 = document.querySelector('.f1-p5-img');

const dobElement = document.querySelector('.f1-p2-english');
const locElement = document.querySelector('.f1-p3-english');
const parentsElement = document.querySelector('.f1-p4-english');
const clanElement = document.querySelector('.f1-p5-english');

const dobElementM = document.querySelector('.f1-p2-marathi');
const locElementM = document.querySelector('.f1-p3-marathi');
const parentsElementM = document.querySelector('.f1-p4-marathi');
const clanElementM = document.querySelector('.f1-p5-marathi');

dobElement.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'block';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'none';
});

dobElementM.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'block';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'none';
});

imgf1p2.addEventListener('mouseleave', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'block';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'none';
});
// ----------------------------------------
locElement.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'block';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'none';
});

locElementM.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'block';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'none';
});

imgf1p3.addEventListener('mouseleave', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'block';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'none';
});

// ---------------------------------------------

parentsElement.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'block';
    imgf1p5.style.display = 'none';
});

parentsElementM.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'block';
    imgf1p5.style.display = 'none';
});

imgf1p4.addEventListener('mouseleave', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'block';
    imgf1p5.style.display = 'none';
});

// ------------------------------------------------------

clanElement.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'block';
});

clanElementM.addEventListener('mouseenter', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'block';
});

imgf1p5.addEventListener('mouseleave', function () {
    imgf1p1.style.display = 'none';
    imgf1p2.style.display = 'none';
    imgf1p3.style.display = 'none';
    imgf1p4.style.display = 'none';
    imgf1p5.style.display = 'block';
});


// -------------------------------------------------------------
// ---------------------------div2----------------------------------


const h3Elements2 = document.querySelectorAll('h3[class^="22"], h3[class^="24"], h3[class^="26"], h3[class^="28"], h3[class^="210"], h3[class^="212"]');
const h4Elements2 = document.querySelectorAll('h4[class^="23"], h4[class^="25"], h4[class^="27"], h4[class^="29"], h4[class^="211"], h4[class^="213"]');
const images = document.querySelectorAll('.sectionb img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionb').style.backgroundImage = 'url("Resources/young.jpg")';
document.querySelector('.sectionb').style.backgroundSize = 'cover';
document.querySelector('.sectionb').style.backgroundRepeat = 'no-repeat';

h3Elements2.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements2.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        images.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });

        h3.style.marginBottom = '10px';
    });
});

const h3Elements3 = document.querySelectorAll('h3[class^="two"], h3[class^="four"], h3[class^="six"], h3[class^="eight"], h3[class^="ten"], h3[class^="twelve"]');
const h4Elements3 = document.querySelectorAll('h4[class^="three"], h4[class^="five"], h4[class^="seven"], h4[class^="nine"], h4[class^="eleven"], h4[class^="thirteen"]');
const imagesb = document.querySelectorAll('.sectionb img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionb').style.backgroundImage = 'url("Resources/young.jpg")';
document.querySelector('.sectionb').style.backgroundSize = 'cover';
document.querySelector('.sectionb').style.backgroundRepeat = 'no-repeat';

h3Elements3.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements3.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesb.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });

        h3.style.marginBottom = '10px';
    });
});


// -----------------------------div3-------------------------------

const h3Elements4 = document.querySelectorAll('h3[class^="32"], h3[class^="34"], h3[class^="36"], h3[class^="38"], h3[class^="310"], h3[class^="312"]');
const h4Elements4 = document.querySelectorAll('h4[class^="33"], h4[class^="35"], h4[class^="37"], h4[class^="39"], h4[class^="311"], h4[class^="313"]');
const imagesc = document.querySelectorAll('.sectionc img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionc').style.backgroundImage = 'url("Resources/torna.jpg")';

h3Elements4.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements4.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesc.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements5 = document.querySelectorAll('h3[class^="twob"], h3[class^="fourb"], h3[class^="sixb"], h3[class^="eightb"], h3[class^="tenb"], h3[class^="twelveb"]');
const h4Elements5 = document.querySelectorAll('h4[class^="threeb"], h4[class^="fiveb"], h4[class^="sevenb"], h4[class^="nineb"], h4[class^="elevenb"], h4[class^="thirteenb"]');
const imagesd = document.querySelectorAll('.sectionc img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionc').style.backgroundImage = 'url("Resources/torna.jpg")';

h3Elements5.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements5.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesd.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

// ---------------------------------div4------------------------------------

const h3Elements6 = document.querySelectorAll('h3[class^="42"], h3[class^="44"], h3[class^="46"], h3[class^="48"], h3[class^="410"], h3[class^="412"]');
const h4Elements6 = document.querySelectorAll('h4[class^="43"], h4[class^="45"], h4[class^="47"], h4[class^="49"], h4[class^="411"], h4[class^="413"]');
const imagese = document.querySelectorAll('.sectiond img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectiond').style.backgroundImage = 'url("Resources/fortss.webp")';

h3Elements6.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements6.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagese.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements7 = document.querySelectorAll('h3[class^="twoc"], h3[class^="fourc"], h3[class^="sixc"], h3[class^="eightc"], h3[class^="tenc"], h3[class^="twelvec"]');
const h4Elements7 = document.querySelectorAll('h4[class^="threec"], h4[class^="fivec"], h4[class^="sevenc"], h4[class^="ninec"], h4[class^="elevenc"], h4[class^="thirteenc"]');
const imagesf = document.querySelectorAll('.sectiond img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectiond').style.backgroundImage = 'url("Resources/fortss.webp")';

h3Elements7.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements7.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesf.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

// --------------------------------div5-------------------------------------

const h3Elements8 = document.querySelectorAll('h3[class^="52"], h3[class^="54"], h3[class^="56"], h3[class^="58"], h3[class^="510"], h3[class^="512"]');
const h4Elements8 = document.querySelectorAll('h4[class^="53"], h4[class^="55"], h4[class^="57"], h4[class^="59"], h4[class^="511"], h4[class^="513"]');
const imagesg = document.querySelectorAll('.sectione img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectione').style.backgroundImage = 'url("Resources/raigad2.jpg")';

h3Elements8.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements8.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesg.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements9 = document.querySelectorAll('h3[class^="twod"], h3[class^="fourd"], h3[class^="sixd"], h3[class^="eightd"], h3[class^="tend"], h3[class^="twelved"]');
const h4Elements9 = document.querySelectorAll('h4[class^="threed"], h4[class^="fived"], h4[class^="sevend"], h4[class^="nined"], h4[class^="elevend"], h4[class^="thirteend"]');
const imagesh = document.querySelectorAll('.sectione img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectione').style.backgroundImage = 'url("Resources/raigad2.jpg")';

h3Elements9.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements9.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesh.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});


// --------------------------------div6-------------------------------------

const h3Elements10 = document.querySelectorAll('h3[class^="62"], h3[class^="64"], h3[class^="66"], h3[class^="68"], h3[class^="610"], h3[class^="612"]');
const h4Elements10 = document.querySelectorAll('h4[class^="63"], h4[class^="65"], h4[class^="67"], h4[class^="69"], h4[class^="611"], h4[class^="613"]');
const imagesi = document.querySelectorAll('.sectionf img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionf').style.backgroundImage = 'url("Resources/navy1.jpg")';

h3Elements10.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements10.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesi.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements11 = document.querySelectorAll('h3[class^="twoe"], h3[class^="foure"], h3[class^="sixe"], h3[class^="eighte"], h3[class^="tene"], h3[class^="twelvee"]');
const h4Elements11 = document.querySelectorAll('h4[class^="threee"], h4[class^="fivee"], h4[class^="sevene"], h4[class^="ninee"], h4[class^="elevene"], h4[class^="thirteene"]');
const imagesj = document.querySelectorAll('.sectionf img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionf').style.backgroundImage = 'url("Resources/navy1.jpg")';

h3Elements11.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements11.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesj.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});


// --------------------------------div7-------------------------------------

const h3Elements12 = document.querySelectorAll('h3[class^="72"], h3[class^="74"], h3[class^="76"], h3[class^="78"], h3[class^="710"], h3[class^="712"]');
const h4Elements12 = document.querySelectorAll('h4[class^="73"], h4[class^="75"], h4[class^="77"], h4[class^="79"], h4[class^="711"], h4[class^="713"]');
const imagesk = document.querySelectorAll('.sectiong img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectiong').style.backgroundImage = 'url("Resources/raigad2.jpg")';

h3Elements12.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements12.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesk.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements13 = document.querySelectorAll('h3[class^="twof"], h3[class^="fourf"], h3[class^="sixf"], h3[class^="eightf"], h3[class^="tenf"], h3[class^="twelvef"]');
const h4Elements13 = document.querySelectorAll('h4[class^="threef"], h4[class^="fivef"], h4[class^="sevenf"], h4[class^="ninef"], h4[class^="elevenf"], h4[class^="thirteenf"]');
const imagesl = document.querySelectorAll('.sectiong img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectiong').style.backgroundImage = 'url("Resources/raigad2.jpg")';

h3Elements13.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements13.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesl.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});


// --------------------------------div8-------------------------------------

const h3Elements14 = document.querySelectorAll('h3[class^="82"], h3[class^="84"], h3[class^="86"], h3[class^="88"], h3[class^="810"], h3[class^="812"]');
const h4Elements14 = document.querySelectorAll('h4[class^="83"], h4[class^="85"], h4[class^="87"], h4[class^="89"], h4[class^="811"], h4[class^="813"]');
const imagesm = document.querySelectorAll('.sectionh img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionh').style.backgroundImage = 'url("Resources/pratapgad.jpg")';

h3Elements14.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements14.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesm.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements15 = document.querySelectorAll('h3[class^="twog"], h3[class^="fourg"], h3[class^="sixg"], h3[class^="eightg"], h3[class^="teng"], h3[class^="twelveg"]');
const h4Elements15 = document.querySelectorAll('h4[class^="threeg"], h4[class^="fiveg"], h4[class^="seveng"], h4[class^="nineg"], h4[class^="eleveng"], h4[class^="thirteeng"]');
const imagesn = document.querySelectorAll('.sectionh img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionh').style.backgroundImage = 'url("Resources/pratapgad.jpg")';

h3Elements15.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements15.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesn.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});


// --------------------------------div9-------------------------------------

const h3Elements16 = document.querySelectorAll('h3[class^="92"], h3[class^="94"], h3[class^="96"], h3[class^="98"], h3[class^="910"], h3[class^="912"]');
const h4Elements16 = document.querySelectorAll('h4[class^="93"], h4[class^="95"], h4[class^="97"], h4[class^="99"], h4[class^="911"], h4[class^="913"]');
const imageso = document.querySelectorAll('.sectioni img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectioni').style.backgroundImage = 'url("Resources/fortss.webp")';

h3Elements16.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements16.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imageso.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements17 = document.querySelectorAll('h3[class^="twoh"], h3[class^="fourh"], h3[class^="sixh"], h3[class^="eighth"], h3[class^="tenh"], h3[class^="twelveh"]');
const h4Elements17 = document.querySelectorAll('h4[class^="threeh"], h4[class^="fiveh"], h4[class^="sevenh"], h4[class^="nineh"], h4[class^="elevenh"], h4[class^="thirteenh"]');
const imagesp = document.querySelectorAll('.sectioni img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectioni').style.backgroundImage = 'url("Resources/fortss.webp")';

h3Elements17.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements17.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesp.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

// --------------------------------div10-------------------------------------

const h3Elements18 = document.querySelectorAll('h3[class^="102"], h3[class^="104"], h3[class^="106"], h3[class^="108"], h3[class^="1010"], h3[class^="1012"]');
const h4Elements18 = document.querySelectorAll('h4[class^="103"], h4[class^="105"], h4[class^="107"], h4[class^="109"], h4[class^="1011"], h4[class^="1013"]');
const imagesq = document.querySelectorAll('.sectionj img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionj').style.backgroundImage = 'url("Resources/surat.jpg")';

h3Elements18.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements18.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesq.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements19 = document.querySelectorAll('h3[class^="twoi"], h3[class^="fouri"], h3[class^="sixi"], h3[class^="eighti"], h3[class^="teni"], h3[class^="twelvei"]');
const h4Elements19 = document.querySelectorAll('h4[class^="threei"], h4[class^="fivei"], h4[class^="seveni"], h4[class^="ninei"], h4[class^="eleveni"], h4[class^="thirteeni"]');
const imagesr = document.querySelectorAll('.sectionj img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionj').style.backgroundImage = 'url("Resources/surat.jpg")';

h3Elements19.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements19.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesr.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

// --------------------------------div11-------------------------------------

const h3Elements20 = document.querySelectorAll('h3[class^="112"], h3[class^="114"], h3[class^="116"], h3[class^="118"], h3[class^="1110"], h3[class^="1112"]');
const h4Elements20 = document.querySelectorAll('h4[class^="113"], h4[class^="115"], h4[class^="117"], h4[class^="119"], h4[class^="1111"], h4[class^="1113"]');
const imagess = document.querySelectorAll('.sectionk img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionk').style.backgroundImage = 'url("Resources/panhala.jpg")';

h3Elements20.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements20.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagess.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements21 = document.querySelectorAll('h3[class^="twoj"], h3[class^="fourj"], h3[class^="sixj"], h3[class^="eightj"], h3[class^="tenj"], h3[class^="twelvej"]');
const h4Elements21 = document.querySelectorAll('h4[class^="threej"], h4[class^="fivej"], h4[class^="sevenj"], h4[class^="ninej"], h4[class^="elevenj"], h4[class^="thirteenj"]');
const imagest = document.querySelectorAll('.sectionk img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionk').style.backgroundImage = 'url("Resources/panhala.jpg")';

h3Elements21.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements21.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagest.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});


// --------------------------------div12-------------------------------------

const h3Elements22 = document.querySelectorAll('h3[class^="122"], h3[class^="124"], h3[class^="126"], h3[class^="128"], h3[class^="1210"], h3[class^="1212"]');
const h4Elements22 = document.querySelectorAll('h4[class^="123"], h4[class^="125"], h4[class^="127"], h4[class^="129"], h4[class^="1211"], h4[class^="1213"]');
const imagesu = document.querySelectorAll('.sectionl img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionl').style.backgroundImage = 'url("Resources/purandar.jpg")';

h3Elements22.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements22.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesu.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements23 = document.querySelectorAll('h3[class^="twok"], h3[class^="fourk"], h3[class^="sixk"], h3[class^="eightk"], h3[class^="tenk"], h3[class^="twelvek"]');
const h4Elements23 = document.querySelectorAll('h4[class^="threek"], h4[class^="fivek"], h4[class^="sevenk"], h4[class^="ninek"], h4[class^="elevenk"], h4[class^="thirteenk"]');
const imagesv = document.querySelectorAll('.sectionl img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionl').style.backgroundImage = 'url("Resources/purandar.jpg")';

h3Elements23.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements23.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesv.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

// --------------------------------div13-------------------------------------

const h3Elements24 = document.querySelectorAll('h3[class^="132"], h3[class^="134"], h3[class^="136"], h3[class^="138"], h3[class^="1310"], h3[class^="1312"]');
const h4Elements24 = document.querySelectorAll('h4[class^="133"], h4[class^="135"], h4[class^="137"], h4[class^="139"], h4[class^="1311"], h4[class^="1313"]');
const imagesw = document.querySelectorAll('.sectionm img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionm').style.backgroundImage = 'url("Resources/coro1.jpg")';

h3Elements24.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements24.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesw.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements25 = document.querySelectorAll('h3[class^="twol"], h3[class^="fourl"], h3[class^="sixl"], h3[class^="eightl"], h3[class^="tenl"], h3[class^="twelvel"]');
const h4Elements25 = document.querySelectorAll('h4[class^="threel"], h4[class^="fivel"], h4[class^="sevenl"], h4[class^="ninel"], h4[class^="elevenl"], h4[class^="thirteenl"]');
const imagesx = document.querySelectorAll('.sectionm img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionm').style.backgroundImage = 'url("Resources/coro1.jpg")';

h3Elements25.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements25.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesx.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

// --------------------------------div18-------------------------------------

const h3Elements26 = document.querySelectorAll('h3[class^="182"], h3[class^="184"], h3[class^="186"], h3[class^="188"], h3[class^="1810"], h3[class^="1812"]');
const h4Elements26 = document.querySelectorAll('h4[class^="183"], h4[class^="185"], h4[class^="187"], h4[class^="189"], h4[class^="1811"], h4[class^="1813"]');
const imagesy = document.querySelectorAll('.sectionn img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionn').style.backgroundImage = 'url("Resources/young.jpg")';

h3Elements26.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements26.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesy.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements27 = document.querySelectorAll('h3[class^="twom"], h3[class^="fourm"], h3[class^="sixm"], h3[class^="eightm"], h3[class^="tenm"], h3[class^="twelvem"]');
const h4Elements27 = document.querySelectorAll('h4[class^="threem"], h4[class^="fivem"], h4[class^="sevenm"], h4[class^="ninem"], h4[class^="elevenm"], h4[class^="thirteenm"]');
const imagesz = document.querySelectorAll('.sectionn img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectionn').style.backgroundImage = 'url("Resources/young.jpg")';

h3Elements27.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements27.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesz.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});


// --------------------------------div19-------------------------------------

const h3Elements28 = document.querySelectorAll('h3[class^="192"], h3[class^="194"], h3[class^="196"], h3[class^="198"], h3[class^="1910"], h3[class^="1912"]');
const h4Elements28 = document.querySelectorAll('h4[class^="193"], h4[class^="195"], h4[class^="197"], h4[class^="199"], h4[class^="1911"], h4[class^="1913"]');
const imagesaa = document.querySelectorAll('.sectiono img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectiono').style.backgroundImage = 'url("Resources/young.jpg")';

h3Elements28.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements28.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesaa.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});

const h3Elements29 = document.querySelectorAll('h3[class^="twon"], h3[class^="fourn"], h3[class^="sixn"], h3[class^="eightn"], h3[class^="tenn"], h3[class^="twelven"]');
const h4Elements29 = document.querySelectorAll('h4[class^="threen"], h4[class^="fiven"], h4[class^="sevenn"], h4[class^="ninen"], h4[class^="elevenn"], h4[class^="thirteenn"]');
const imagesbb = document.querySelectorAll('.sectiono img');

// Set all images to display: none initially
images.forEach(img => {
    img.style.display = 'none';
});

// Set background image initially
document.querySelector('.sectiono').style.backgroundImage = 'url("Resources/young.jpg")';

h3Elements29.forEach((h3, index) => {
    h3.addEventListener('mouseenter', () => {
        const currentOddIndex = index; // Calculate the index of the corresponding odd number
        h4Elements29.forEach((h4, oddIndex) => {
            if (oddIndex === currentOddIndex) {
                h4.style.display = 'block'; // Show the current odd number
            } else {
                h4.style.display = 'none'; // Hide other odd numbers
            }
        });

        // Update the image based on the hovered even number
        const imageIndex = (index); // Get the index of the image
        imagesbb.forEach((img, imgIndex) => {
            if (imgIndex === imageIndex) {
                img.style.display = 'block'; // Show the corresponding image
            } else {
                img.style.display = 'none'; // Hide other images
            }
        });
        h3.style.marginBottom = '10px';
    });
});