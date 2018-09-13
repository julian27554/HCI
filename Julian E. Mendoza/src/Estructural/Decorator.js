function productPaella(name){
  this.name = name;
}

function decoratorNameProduct(){
  this.products = products;
  this.description = description;
  var allName = this.products.name +" "+description;
}


function executeDecorator(item){
  var itemDecorate=[];

  for(var i=0; i<item.length; i++){
    var productName = productPaella(item[i]);
    var decorated = new decoratorNameProduct(productName, "Pizza y no pendejada");
    itemDecorate.push(decorated);
    console.log(item);
  }
  return itemDecorate;
}
