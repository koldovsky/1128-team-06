// Opposites Attract SZ
function lovefunc(flower1, flower2) {
    if ((flower1 % 2 === 0 && flower2 % 2 === 0) || (flower1 % 2 !== 0 && flower2 % 2 !== 0)) {
        return 'false';
    } else {
        return 'true';
    }
}
let x = lovefunc(1, 2);
console.log(x);

// якщо обидва аргумента функції діляться на два без остачі або з остачею одночасно,
// вони не закохані, а це просто симпатія( 
