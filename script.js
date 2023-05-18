const btnAll = document.querySelectorAll('.btn');
const countNumDOM = document.querySelector('.counter');
let countNum = 0;
const btnHandler = (event) => {
    if (event.target.id === 'inc') ++countNum;
    if (event.target.id === 'dec' && countNum > 0) --countNum
    countNumDOM.innerHTML = countNum;
};

const keyHandler = (event) => {
    if (event.code === 'NumpadAdd') ++countNum;
    if (event.code === 'NumpadSubtract' && countNum > 0) --countNum
    countNumDOM.innerHTML = countNum;
};

btnAll.forEach(btn => btn.addEventListener('click', btnHandler));
document.addEventListener('keydown', keyHandler);