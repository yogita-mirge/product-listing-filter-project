const products = [
  { name: "Mobile", category: "Electronics", price: 15000, image: "images/mobile.jpg" },
  { name: "Laptop", category: "Electronics", price: 55000, image: "images/laptop.jpg" },
  { name: "T-Shirt", category: "Clothing", price: 800, image: "images/tshirt.jpg" },
  { name: "Jeans", category: "Clothing", price: 2000, image: "images/jeans.jpg" },
  { name: "Book", category: "Books", price: 500, image: "images/book.jpg" }
];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p class='no-data'>No products found</p>";
    return;
  }

  list.forEach(p => {
    container.innerHTML += `
  <div class="product">
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Category: ${p.category}</p>
    <p>Price: ₹${p.price}</p>
  </div>    `;
  });
}

function applyFilters() {
  const category = document.getElementById("categoryFilter").value;
  const price = document.getElementById("priceFilter").value;

  let filtered = products;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (price) {
    filtered = filtered.filter(p => p.price <= price);
  }

  displayProducts(filtered);
}

displayProducts(products);
