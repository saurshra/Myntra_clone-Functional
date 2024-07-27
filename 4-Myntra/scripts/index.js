let bagItems;
onload();

function onload() {
  let bagItemStr = localStorage.getItem("bagItems");
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemONHomePage();
  displayBagIcon();
}

displayItemONHomePage();

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem("bagItems", JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

function displayItemONHomePage() {
  let itemsElementContainer = document.querySelector(".items-container");
  if (!itemsElementContainer) {
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item-container">
      <img class="item-image" src=${item.image} alt="item-image" />
      <div class="rating">${item.rating.stars} ⭐ | ${item.rating.count}</div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage} % OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`;
  });

  itemsElementContainer.innerHTML = innerHTML;
}
