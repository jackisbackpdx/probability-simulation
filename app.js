const container = document.querySelector('main');

const colors = [
    '#D2222D',
    '#007000'
];

let failed = 0;
let succeeded = 0;

function createProbability() {
    for (let i = 0; i < 100; i++) {

        let wholeItem = document.createElement('article');
        wholeItem.setAttribute('id', 'whole');
        let succeedText = document.createElement('p');
        let colorBlock = document.createElement('div');

        
        let randomNumber = Math.floor((Math.random() * 100) + 1);
        
        if (randomNumber === 100) {
            succeedText.textContent = 'SUCCEEDED';
            colorBlock.style.backgroundColor = colors[1];
            succeeded++;
        } else if (randomNumber === 99) {
            succeedText.textContent = 'SUCCEEDED';
            colorBlock.style.backgroundColor = colors[1];
            succeeded++;
        }
        
        else {
            succeedText.textContent = 'FAILED';
            colorBlock.style.backgroundColor = colors[0];
            failed++;
        }
        
        colorBlock.textContent = randomNumber;
        
        wholeItem.appendChild(colorBlock);
        wholeItem.appendChild(succeedText);
        container.appendChild(wholeItem);
    }
    let succeededFraction = document.createElement('p');
    succeededFraction.textContent = succeeded + ' / ' + failed;
    succeededFraction.setAttribute('id', 'succeed');
    
    container.appendChild(succeededFraction);
    

    failed = 0;
    succeeded = 0;
}

function removeReset() {
    let panels = document.querySelectorAll('article');
    let succeed = document.getElementById('succeed');
    let failedPara = document.getElementsByClassName('failed');

    for (let i = 0; i < panels.length; i++) {
        container.removeChild(panels[i]);
    }
    for (let i = 0; i < failedPara.length; i++) {
        container.removeChild(failedPara[i]);
    }
    container.removeChild(succeed);

    createProbability();
    setTimeout(function() {
        removeReset();
    }, 1000);
}

createProbability();
removeReset();
