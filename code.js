
const colorChoices = [
    ["#5EFFD4","#992C0B"],
    ["#FF0000","#0000FF"],
    ["#FF7054","#22E094"], //COMPLEMENTARY
    ["#E65572","#49BAE6"], //ANALOGOUS
    ["#6072E6","#293061"], //MONOCHROME
    ["#38FFE0","#E0541B"], //COMPLEMENTARY
    ["#39EDC3","#3BF796"]
]

const chosen = getRandomPair(colorChoices);

document.body.style.background = chosen[0]
document.getElementById("splash-title").style.color = chosen[1]

function getRandomPair(pairs){
    const i = Math.floor(Math.random() * pairs.length)
    const j = Math.floor(Math.random() * 2)

    const value1 = pairs[i][j]
    const value2 = pairs[i][(j+1)%2]

    const value1b = `linear-gradient(${value2} 0%, ${value1} 40%,${value1} 60%, ${value2} 100%)`
    console.log(value1b)
    return [value1b, value2]
}

