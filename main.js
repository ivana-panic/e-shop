var product, benefits, benefitsText, textImage;
window.onload = function () {
  product = [
    {
      id: 1,
      buttonCompare: true,
      image: {
        src: "fa796138c1614955bbc80ad3cc3c0a62.webp",
        alt: "image 1",
      },
      numberComment: 23,
      name: "Karcher usisivac za suvo pranje",
      price: {
        oldPrice: 20,
        newPrice: 15,
      },
      savings: null,
      benefitsId: 1,
    },
    {
      id: 2,
      buttonCompare: false,
      image: {
        src: "image5a799a0bb3925.webp",
        alt: "image 2",
      },
      numberComment: 12,
      name: "Lenovo IdeaPad 3",
      price: {
        oldPrice: 900,
        newPrice: 790,
      },
      savings: null,
      benefitsId: 2,
    },
    {
      id: 3,
      buttonCompare: true,
      image: {
        src: "image5ba37d1f14d91.webp",
        alt: "image 3",
      },
      numberComment: 90,
      name: "Cooler Master",
      price: {
        oldPrice: 300,
        newPrice: 250,
      },
      savings: null,
      benefitsId: 3,
    },
    {
      id: 4,
      buttonCompare: true,
      image: {
        src: "image5f80561c11ab7.webp",
        alt: "image 4",
      },
      numberComment: 40,
      name: "Marvo game",
      price: {
        oldPrice: 100,
        newPrice: 80,
      },
      savings: null,
      benefitsId: 3,
    },
  ];

  benefits = [
    {
      id: 1,
      name: "Special offer",
      value: "gift of surprise",
    },
    {
      id: 2,
      name: "Special offer",
      value: "great price",
    },
    {
      id: 3,
      name: "Special offer",
      value: "you get a voucher",
    },
  ];

  benefitsText = [
    {
      id: 1,
      text1: "kjdbjlwdnjx",
      text2: "kjdbjlwdnjx",
      text3: "kjdbjlwdnjx",
    },
    {
      id: 2,
      text1: "tttttttt",
      text2: "tttttttt",
      text3: "tttttt",
    },
    {
      id: 3,
      text1: "bbbbbbbbb",
      text2: "bbbbbb",
      text3: "bbbbbbbb",
    },
  ];

  textImage = [
    {
      id: 1,
      img: {
        src: "453361.image1.jpg",
        alt: "comp",
      },
      text: "Our computers are made of the best materials and the most durable parts. We guarantee the quality of our products",
    },
    {
      id: 2,
      img: {
        src: "laptop-336373__340.jpeg",
        alt: "lap top",
      },
      text: "The store was opened 10 years ago and we have more than 1000 satisfied customers who always come back",
    },
    {
      id: 3,
      img: {
        src: "Laptop-computer.jpeg",
        alt: "cortop",
      },
      text: "We offer many models of computers and laptops at the best prices. All models can be viewed in the store",
    },
  ];

  console.log(product);
  console.log(benefits);

  processingProduct(product);
  printTextImage(textImage);

  var modalProduct = document.querySelectorAll("#btnModal");

  for (oneProd of modalProduct) {
    oneProd.addEventListener("click", additionalText);
  }
};
function additionalText() {
  var benef = document.querySelectorAll("#specBenef");
  for (item of benef) {
    for (oneB of benefitsText) {
      item.innerHTML = `<ul class="list-group">
        <li class="list-group-item">${oneB.text1}</li>
        <li class="list-group-item">${oneB.text2}</li>
        <li class="list-group-item">${oneB.text3}</li>
      </ul>`;
    }
  }
}

function processingProduct(list) {
  let print = "";
  for (let oneProduct of list) {
    print += `<div class="col-sm" id="printProduct">
    ${processingCompare(oneProduct.buttonCompare)}
    <img src="${oneProduct.image.src}" alt="${oneProduct.image.alt}"
    class="img-fluid"/>
    <p class="text-center">Komentari: ${oneProduct.numberComment}</p>
    <h1>${oneProduct.name}</h1>
    <span>Stara cena:</span>
    <del>${oneProduct.price.oldPrice}e</del>
    <p class="priceNew">Nova cena: ${oneProduct.price.newPrice}e</p>
    <p class="save">Usteda: ${calculateSavings(oneProduct.price)}e</p>
    <p class="card" id="specBenef">
    ${processingBenefits(oneProduct.benefitsId)}</p>
    <button type="button" class="btn btn-primary" id="btnModal" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
    </div>`;
  }
  $("#mainDiv").html(print);
}

function printTextImage(list) {
  let print = "";
  for (item of list) {
    print += `<div class="col-lg-4">
    <img src="${item.img.src}" class="img-fluid" alt="${item.img.alt}">
     <p>
      ${item.text}
    </p>
    <button type="button" class="btn btn-outline-primary btn-sm">
      Primary
    </button>
  </div>`;
  }
  $("#loremDiv").html(print);
}

function processingCompare(value) {
  let html = "";
  if (value) {
    html += `<input type="checkbox" value="box"> <span>Uporedi</span></input>`;
  } else {
    html += `<span>This product cannot be compared to others</span>`;
  }
  return html;
}

function calculateSavings(value) {
  let calc = value.oldPrice - value.newPrice;

  return calc;
}

function processingBenefits(value) {
  let html = "";
  for (onespec of benefits) {
    if (value == onespec.id) {
      html += `<span>${onespec.name} : ${onespec.value}</span>`;
    }
  }
  return html;
}
