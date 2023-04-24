
document.getElementById('calcButton').addEventListener("click", calculateValue)

function calculateValue() {
    let item1Value = parseInt(document.getElementById("item1").value);
    let item2Value = parseInt(document.getElementById("item2").value);
    let item3Value = parseInt(document.getElementById("item3").value);
    let item4Value = parseInt(document.getElementById("item4").value);
    let item5Value = parseInt(document.getElementById("item5").value);
    let item6Value = parseInt(document.getElementById("item6").value);
    let totalValue = item1Value + item2Value + item3Value + item4Value + item5Value + item6Value;
    document.getElementById("totalValue").innerHTML = "Total value: $" + totalValue;
    
  }

  document.addEventListener('DOMContentLoaded', fetchResults)
  function fetchResults() {
    fetch('http://localhost:3000/films')
      .then(res => res.json())
      .then(data => data)
    }
  

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





