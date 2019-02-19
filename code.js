let img_ext = ".jpg";

function openModal(cardNumber) {
  let mc = document.querySelector(".modal-content");
  mc.innerHTML = "";
  let img = document.createElement("img");
  img.src = "images/" + cardNumber + img_ext;
  mc.append(img);
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomVector() {
  return shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]).slice(0, 8);
}

function nextCombination() {
  let cardNumbers = randomVector();

  let cards = cardNumbers.map(i => {
    let img = document.createElement("img");
    img.onclick = function() {
      openModal(i);
    };
    img.src = "images/" + i + img_ext;
    return img;
  });
  console.log(cards);
  let container = document.getElementById("cards");
  container.innerHTML = "";
  for (let i = 0; i < cards.length; i++) container.append(cards[i]);
}

nextCombination();
