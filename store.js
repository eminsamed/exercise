let addToBoxButton = document.getElementsByClassName(
  "shop-item-button"
);

for (
  let index = 0;
  index < addToBoxButton.length;
  index++
) {
  let button = addToBoxButton[index];
  button.addEventListener("click", addToBoxProduct);
}
function addToBoxProduct(pevent) {
  let button = pevent.target;
  let shopItem = button.parentElement.parentElement; //iki defa parent.Elemant yazarak üstteki baba koda ulastik

  let title = shopItem.getElementsByClassName(
    "shop-item-title"
  )[0].innerText; //default degeri atadik
  let imageSrc = shopItem.getElementsByClassName(
    "shop-item-image"
  )[0].src; //resmin text i olmaz uzantisi olur, bu yüzden src yazdik
  let price = shopItem.getElementsByClassName(
    "shop-item-price"
  )[0].innerText;
  addItemToBox(title, imageSrc, price);
}
function addItemToBox(title, imageSrc, price) {
  let cartRow = document.createElement("div"); //burada yeni bir div elemani olusturduk
  cartRow.classList.add("cart-row"); //olusturdugumuz div elemanina class.List ile class ismi verdik
  let sentCartItems =
    document.getElementsByClassName("cart-items")[0];

  let cartRowContent = ` <div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
  `;
  cartRow.innerHTML = cartRowContent; //olusturdugumuz kod blogunu inner.html ile cartRow a ekledik.
  sentCartItems.append(cartRow); //append ile sentCartItems in icine cartRow dan gelen bilgiyi ekledik.
}
