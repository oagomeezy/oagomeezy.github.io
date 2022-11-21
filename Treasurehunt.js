const treasure = (id)=> {
    var randomRainbow = Math.floor(Math.random() * 9) 
    var randomBomb = Math.floor(Math.random() * 9) 

    if(id === randomRainbow) {
         document.getElementById(id).innerHTML = "&#x1f308"
          return alert("Congratulations, you won!")
    }

       else if (id===randomBomb){

        document.getElementById(id).innerHTML ="&#x2620"
        return alert("Ha! better luck next time!")
    }    else {
        document.getElementById(id).innerHTML = "&#x1f332"
    }   
    }
   
   



