//window.addEventListener("DOMContentLoaded", () => {

    let button = document.getElementById("button");
    button = button.getElementsByTagName("button")[0];
    console.log(button);

    let table = document.getElementsByTagName("table")[0]
    const cellsArray = Array.from(table.getElementsByTagName("td"));
    console.log(cellsArray);

    let competitor1 = " ";
    let competitor2 = " ";

    let form = document.getElementById("playersInfo");
    console.log(form)
    let breakage = false;

    let name1 = document.getElementById("name1");
    let name2 = document.getElementById("name2");
    let play = document.getElementById("Play");
    
    console.log(play)
    let i = 1;

    button.addEventListener("keypress", (event) => {
        let name = event.key
        //console.log(name)
        if (name == "Enter") {
            form.style.display = "unset"
            button.style.display = "none"
        }
    })

    button.addEventListener("click", () => {
        form.style.display = "unset"
        button.style.display = "none"
    })



    play.addEventListener("keypress", (event) => {
        let name = event.key
        console.log(name)
        if (name == "Enter")
            form.style.display = "none"

    })

    
    

    setError = (element,error)=>{
        element.getElementsByClassName("error").innerHTML = error;
    }

    

    /*vaidateFakeForm = ()=>{    
        
        let value = true;
        let Form = document.getElementsByName("firstForm")[0]

        let player1 = name1.innerText; 
        let player2 = name2.innerText;

        
        if(player1.length<5)
        {
            setError(name1,"Player1 name is too short")
            value = false;
        } 
        if(player2.length<5)
        {
            setError(name1,"Player2 name is too short")
            value = false
        }

         if(value)
         {
            
            
         }
         return value;
    }*/
    play.addEventListener("click", () => {
        form.style.display = "none"

        competitor1 = " ✔️ ";
        competitor2 = " ❌ ";

        for (let z = 0; z < cellsArray.length; z++) {
            console.log("i : " + i)
            cellsArray[z].addEventListener("click", () => {
                if (!breakage)
                    if (!(cellsArray[z].innerHTML === "✔️" || cellsArray[z].innerHTML === "❌")) {
                        if (i % 2) {
                            cellsArray[z].innerHTML = "✔️";
                            cellsArray[z].classList.add("tick")
                        }
    
                        else {
                            cellsArray[z].innerHTML = "❌";
                            cellsArray[z].classList.add("cross")
                        }
                        console.log(cellsArray[z].getAttribute("class"))
                        if (i > 4)
                            checkSeuence();
                        // console.log(cellsArray)
                        console.log("i : " + i)
                        if(i==9)
                            displayDraw()
                            
                        ++i;
                    }
            }); 
        }
            
    });

    let Click = 0
    checkAction = (element) => {
        element.addEventListener("click", () => {
            if (i % 2 == 0)
                console.log(i)
            else
                console.log("What are you doing")
            Click++;
            i++;
            console.log("Click : " + Click)
        });
    }

    checkImage = (element) => {

        image = element.getElementsByTagName("img")[0]
        tick = "images/190411.png";
        cross = "images/753345.png"
        element.addEventListener("click", () => {
            if (i % 2 == 0)
                image.src = tick
            else
                image.src = cross

            Click++;
            i++;
            console.log("Click : " + Click)
        })

    }

    addHtml = (element) => {
        if (element.innerText === "✔️")
            console.log("Player1 Wins");
        else if (element.innerText === "❌")
            console.log("Player2 Wins");
        breakage = true;
    } 

    display1Winner = (result)=>{

       //console.log(element)
        let winner = `<h1 id = "winner"> <strong><em> ${competitor1} Wins </strong></em> </h1>`
        form.insertAdjacentHTML("beforebegin",winner)
    return returnValue    
    }
    display2Winner = ()=>{
        let   winner = `<h1 id = "winner"> <strong><em> ${competitor2} Wins </strong></em> </h1>`
        form.insertAdjacentHTML("beforebegin",winner)
    }
    displayDraw=()=>{
        let winner = `<h1 id = "winner"><strong><em> It's a Draw </strong></em></h1>`
        form.insertAdjacentHTML("beforebegin",winner)
    }

    checkMark = (cell1, cell2, cell3) => {
        text1 = cell1.innerText;
        text3 = cell3.innerText;
        text2 = cell2.innerText;

        if ((text1 === "✔️" || text1 === "❌") && (text2 === "✔️" || text2 === "❌") &&
            (text3 === "✔️" || text3 === "❌")) {

            console.log(text1)
            console.log(text2)
            console.log(text3)


            if (text1 === text2 && text2 === text3) {
                breakage = true;
                console.log("Mark returns : true at i : " + i);
                return true;
            }
        }

    }

    checkSeuence = () => {
        let x = 0;
        while (x <= 7) {
            
            tdClassAraay = (cellsArray[x].getAttribute("class"));
            let newArray = Array.from(document.getElementsByTagName("table")[0].getElementsByTagName("td"))
            console.log(newArray)
            
            if (!breakage) {
                if (x < 3) {
                    if (checkMark(newArray[x], newArray[x + 3], newArray[x + 6]))
                    {
                        addHtml(cellsArray[x]);
                        if(newArray[x].innerText==="✔️")
                            display1Winner();
                        else if(newArray[x].innerText==="❌")
                            display2Winner();
                    }    

                    if (!breakage) {
                        if (tdClassAraay.includes("left")) {
                            if (checkMark(newArray[x], newArray[x + 1], newArray[x + 2]))
                            {
                                if(newArray[x].innerText==="✔️")
                                     display1Winner();
                                else if(newArray[x].innerText==="❌")
                                    display2Winner();
                                addHtml(cellsArray[x]);
                            } 
                            else if (checkMark(newArray[x], newArray[4], newArray[8]))
                            {
                                if(newArray[x].innerText==="✔️")
                                     display1Winner();
                                else if(newArray[x].innerText==="❌")
                                    display2Winner();

                                addHtml(cellsArray[x]);
                            } 
                        }
                        else if (tdClassAraay.includes("right")) {
                            if (checkMark(newArray[x], newArray[x + 2], newArray[x + 4]))
                            {
                                if(newArray[x].innerText==="✔️")
                                     display1Winner();
                                else if(newArray[x].innerText==="❌")
                                    display2Winner();

                                addHtml(cellsArray[x]);
                            } 
                        }
                    }

                }
                else {
                    if (tdClassAraay.includes("left"))
                        if (checkMark(newArray[x], newArray[x + 1], newArray[x + 2]))
                         {
                            if(newArray[x].innerText==="✔️")
                                display1Winner();
                            else if(newArray[x].innerText==="❌")
                                display2Winner();
                            addHtml(cellsArray[x]); 
                         }   
                }
            }
            ++x;
        }
    }
    
    /* 
        Just Getting the concept
        for the different keypress events
    name1.addEventListener("keypress",(event)=>{
        let name = event.key
        console.log(name)
        if(name == "Enter")
            document.getElementById("name2").style.display = "unset"
    })
    
    name2.addEventListener("keypress",(event)=>{
        let name = event.key
        console.log(name)
        if(name == "Enter")
            document.getElementById("Play").style.display = "unset"
    })
    
    */

//})