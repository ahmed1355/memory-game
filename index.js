let counter = 0;
let frstSelection = "";
let scndSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {

    

    card.classList.add("clicked");
    // console.log(card)
    if (counter === 0) {
      frstSelection = card.getAttribute("animal");
      counter++;
    } else {
      scndSelection = card.getAttribute("animal");
      counter = 0;
    }
    // console.log(frstSelection)
    // console.log(scndSelection)
    if (frstSelection === scndSelection) {
      const crtcard = document.querySelectorAll(
        ".card[animal='" + frstSelection + "']"
      );
    //   console.log(crtcard)
      crtcard[0].classList.add('checked')
      crtcard[0].classList.remove('clicked')

      crtcard[1].classList.add('checked')
      crtcard[1].classList.remove('clicked')

    //   console.log(crtcard)
    }
    else{
        const incorrectCards = document.querySelectorAll(".card.clicked");

        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");
        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");

        setTimeout(() => {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }, 800);
    }
 

  });
});
