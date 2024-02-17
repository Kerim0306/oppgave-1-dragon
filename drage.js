const characterNames = ["linda", "sara", "sofia", "Dracon"]
const characterDamage = [5, 7, 12, 35]
const characterHP = [100, 100, 100, 100]

//HTML ref
const p1 = document.querySelector("body > div:nth-child(1)")
const p2 = document.querySelector("body > div:nth-child(2)")
const p3 = document.querySelector("body > div:nth-child(3)")
const drage1 = document.querySelector("body > div:nth-child(4)")

//array ref
const HtmlElements = [p1, p2, p3, drage1]

//ref array loop
HtmlElements.forEach(setup)

//setup func
function setup(el, number) {
    if(number < 3){
        el.addEventListener("click", function(){attack (number)})
        el.querySelector(".name").innerText = characterNames[number]
        el.querySelector(".HP").innerText = characterHP[number] + "/100"
    }
}

let numberOfplayers = 3

//attack func
function attack(number) {
    //dragonHP ikke click mer
    if(characterHP[3] <= 0){
        return
    }

    //drage tar skade fra spiller
    characterHP[3] -= characterDamage[number]
    
    //skade på drage anonsering
    alert(characterNames[number] + " har gjort " + characterDamage [number] + " skade på " + characterNames[3])
    //oppdater ui
    HtmlElements[3].querySelector(".HP").innerText = characterHP[3] + "/200"

    //drage hp minder en null
    if(characterHP[3] <= 0){
        HtmlElements[3].remove()
        alert("Victory")
        return
    }


    //drage velger spiller
    let dragonTarget = Math.floor(Math.random() *  (numberOfplayers - 1))
    
    
    //drage gjør skade på spiller
    characterHP[dragonTarget] -= characterDamage[3]

    //skade på spiller anonsering
    alert(characterNames[3] + " har angrepet " + characterNames [dragonTarget]) 
    
    //oppdater spiller ui
    HtmlElements[dragonTarget].querySelector(".HP").innerText = characterHP[dragonTarget] + "/100"

    //spiller er død ?
    if(characterHP[dragonTarget] <= 0){
        HtmlElements[dragonTarget].remove()
        numberOfplayers -= 1

        //alle spillere døde ?
        if(numberOfplayers == 0){
            alert("you lose")
            return
        }
    }
    

}