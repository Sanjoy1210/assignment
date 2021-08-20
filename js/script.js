function addCost(text) {
  let cost = 0;
  if (text.includes('8GB') || text.includes('256GB') || text.includes('FREE')) cost = 0;
  else if (text.includes('512GB')) cost = 100;
  else if (text.toLowerCase().includes('charge $20')) cost = 20;
  else cost = 180;
  return cost;
}

// const totalPrice = document.getElementById('total-price');
let totalPrice = 0;

let bestPrice = document.getElementById('best-price').innerText;
// console.log(bestPrice);
// totalPrice(bestPrice);
totalPrice += parseInt(bestPrice);

const xdlskd = document.getElementById('total-price');
xdlskd.innerText = totalPrice;

document.getElementById('memory').addEventListener('click', function (event) {
  const memorySpace = event.target.innerText;
  let cost = 0;
  if (memorySpace.includes('8GB')) {
    cost = 0;
  }
  else {
    cost = 180;
  }
  document.getElementById('extra-memory-cost').innerText = cost;
  totalPrice = totalPrice + cost;
  xdlskd.innerText = totalPrice;
  // totalPrice(cost);
  // totalPrice.innerText = parseInt(totalPrice.innerText) + cost;
  // document.getElementById('extra-memory-cost').innerText = addCost(memorySpace);
});

document.getElementById('storage').addEventListener('click', function (event) {
  const storageSpace = event.target.innerText;
  let cost = 0;
  if (storageSpace.includes('256GB')) {
    cost = 0;
  }
  else if (storageSpace.includes('512GB')) {
    cost = 100;
  }
  else {
    cost = 180;
  }

  document.getElementById('extra-storage-cost').innerText = cost;
  // totalPrice(cost);
  totalPrice += cost;
  xdlskd.innerText = totalPrice;
});

document.getElementById('shipping').addEventListener('click', function (event) {
  const shipping = event.target.innerText;
  let cost = 0;
  if (shipping.includes('FREE')) {
    cost = 0;
  }
  else {
    cost = 20;
  }
  document.getElementById('delivery-cost').innerText = cost;
  // totalPrice(cost);
  totalPrice += cost;
  xdlskd.innerText = totalPrice;
});

console.log(totalPrice);



// function addDeliveryCost(delivery, cost) {
//   const deliveryType = document.getElementById(delivery + '-delivery');

// }

// document.getElementById('free-delivery').addEventListener('click', function () {
//   addDeliveryCost('free', 0);
// })

// document.getElementById('specifications').addEventListener('click', function (event) {
//   const specification = event.target.innerText;
//   const cost = addCost(specification);
//   console.log(cost);
//   console.log(event.target);

// })