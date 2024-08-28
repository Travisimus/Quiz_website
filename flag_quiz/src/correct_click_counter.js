// clickTracker.js

let correctClickCount = 0;

let clickCount = 0;

export const incrementCount = () => {
    clickCount+=1
}

export const return_clickCount = () => {
    return clickCount
}

export const incrementCorrectClickCount = () => {
    correctClickCount += 1;
};
export const last_score = () => {
    let x;
    if (clickCount===10){
        x = correctClickCount;
    }
    return x
}
export const getCorrectClickCount = () => {
    if (clickCount===10){
        last_score();
        clickCount = 0
        correctClickCount = 0
    }

    return correctClickCount;
};
