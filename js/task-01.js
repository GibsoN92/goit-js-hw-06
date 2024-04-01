const categoriesItems = document.querySelectorAll("#categories .item");

const categoriesCount = categoriesItems.length;
console.log("Number of categories:", categoriesCount);

categoriesItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
