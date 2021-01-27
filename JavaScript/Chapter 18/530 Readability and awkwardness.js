// Page 531

function generateReport(products) {
  return reduce(products, "", function(report, product) {
    return report + product.name + " " + product.price + "\n";
  });
}

var productsLastYear = db.fetchProducts('last year');
var reportLastYear = generateReport(productsLastYear);



function generateReport(products) {
  return reduce(products, "", function(report, product) {
    return report + product.name + " " + product.price + "\n";
  });
}

var productsLastYear = db.fetchProducts('last year');
var productsWithDiscounts = map(productsLastYear, function(product) {
  if(!product.discountID)
    return product;
  return objectSet(product, 'discount', db.fetchDiscount(product.discountID));
});

var reportLastYear = generateReport(productsWithDiscounts);