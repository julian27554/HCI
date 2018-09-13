function shoppingCar(typePaella){
    this.typePaella = typePaella;
    var arrayElements = [];

/*
    this.compositeProto = function(){
      var objectComposite = {

      add: function(products){
        arrayElements.push(products);
    },

      remove: function (products){

        arrayElements.split(0, this.arrayElements.length);
        arrayElements.add(arrayElements);

        return arrayElements;
      }
    }
    return objectComposite;
}
}
*/

shoppingCar.prototype={
  add: function(TheProducts){
    this.arrayElements.push(TheProducts);
  },
  remove: function(TheProducts){
    this.arrayElements.splice(0,this.arrayElements.length);
    this.arrayElements.push(TheProducts);
  },
}

    function buildShoppingCar(typeProduct,products){
      var Car = new shoppingCar(typeProduct);

      for (var i=product.length-1; i>=0; i++){
      resultCar=Car.compositeProto().add(products);
      }

      return resultCar;
    }
