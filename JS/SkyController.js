let starsArray = []

function GenerateNewStarId(){
    let row = Math.round(Math.random() * 20);
    let column = Math.round(Math.random() * 20);
    return `skyCell_${row}_${column}`
}

for (let count = 0; count < 50; count++){
    let starId = GenerateNewStarId()

    while (starsArray.includes(starId)){
        starId = GenerateNewStarId()
    }

    starsArray.push(GenerateNewStarId())
}

console.log(starsArray)

starsArray.forEach(
    (star)=>{$(`#${star}`).append(`<img src="Images/star1.jpg">`)}
)

let intervalHandler= setInterval(() => {
    $(`#${starsArray[0]}`).empty()
    starsArray.shift()
    let starId = GenerateNewStarId()

    while (starsArray.includes(starId)){
        starId = GenerateNewStarId()
    }

    starsArray.push(starId)
    $(`#${starId}`).append(`<img src="Images/star1.jpg">`)
}, 150)
