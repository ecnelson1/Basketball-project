export function createMessage(wins) {
    if (wins >= 60) {
        return 'Your team had over 60 wins! You are a superstar!!';
    } else if (wins >= 50) {
        return 'Your team had over 50  wins!! You are a pro!';
    } else {
        return 'Your team had less than 50 wins. You are a rookie...';
    }
}

export function calculateMessage(wins) {
    const result = createMessage(wins);
    return result;
}

export function bonusMessage(posWorth){
    if (posWorth === 289) {
        return 'You actually set a proper lineup! bonus 7 wins added!';
    } else { 
        return 'You failed to set a proper lineup! No Bonus!';}}
