const characterNames = ["linda", "sara", "sofia", "Dracon"]
const characterDamage = [5, 7, 12, 20]
const characterHP = [100, 100, 100, 200]

const p1 = document.querySelector("body > div:nth-child(1)")
const p2 = document.querySelector("body > div:nth-child(2)")
const p3 = document.querySelector("body > div:nth-child(3)")
const drage1 = document.querySelector("body > div:nth-child(4)")

const HtmlElements = [p1, p2, p3, drage1]


HtmlElements.forEach(setup)

function setup(el, number) {
    if(number < 3){
        el.addEventListener("click", function(){attack (number)})
        el.querySelector(".name").innerText = characterNames[number]
    }
}

function attack(number) {
    characterHP[3] -= characterDamage[number]
    
    alert(characterNames[number] + " har gjort " + characterDamage [number] + " skade på " + characterNames[3])
    HtmlElements[3].querySelector(".HP").innerText = characterHP[3] + "/200"
    
    let dragonTarget = Math.floor(Math.random() * 2)
    
    
    
    characterHP[dragonTarget] -= characterDamage[3]
    alert(characterNames[3] + " har angrepet " + characterNames [dragonTarget]) 
    
    HtmlElements[dragonTarget].querySelector(".HP").innerText = characterHP[dragonTarget] + "/100"


}