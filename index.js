
document.getElementById('calcButton').addEventListener("click", calculateValue)

function calculateValue() {
    let item1Value = parseInt(document.getElementById("item1").value);
    let item2Value = parseInt(document.getElementById("item2").value);
    let item3Value = parseInt(document.getElementById("item3").value);
    let item4Value = parseInt(document.getElementById("item4").value);
    let item5Value = parseInt(document.getElementById("item5").value);
    let item6Value = parseInt(document.getElementById("item6").value);
    let totalValue = item1Value + item2Value + item3Value + item4Value + item5Value + item6Value;
    
    fetch('https://my-json-server.typicode.com/Kevin-Kinyanjui/Phase-1-final-project/advise')
    .then(res => res.json())
    .then(data => {
        if (totalValue >= 75) {
            document.getElementById("totalValue").innerHTML = data[0].givenAdvise;
            //console.log('75')
        } else if (totalValue >= 60) {
            document.getElementById("totalValue").innerHTML = data[1].givenAdvise;
            //console.log('60')
        } else if (totalValue >= 45) {
            document.getElementById("totalValue").innerHTML = data[2].givenAdvise;
            //console.log('45')
        } else if (totalValue >= 30) {
            document.getElementById("totalValue").innerHTML = data[3].givenAdvise;
            //console.log('30')
        } else if (totalValue >= 15) {
            document.getElementById("totalValue").innerHTML = data[4].givenAdvise;
            //console.log('30')
        } else {
            document.getElementById("totalValue").innerHTML = data[5].givenAdvise;
            //console.log('0')
        }
})}


document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector("#commentSection")
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        makeComment(e.target.newComment.value)
        form.reset()
    })
})

function makeComment(comment) {
let p = document.createElement('p')
let btn = document.createElement('button')

btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
btn.style.backgroundColor = "lightblue"
p.textContent = `${comment}     `
p.appendChild(btn)

document.querySelector('#commentContainer').appendChild(p)
}

function handleDelete (e){
e.target.parentNode.remove()
}





