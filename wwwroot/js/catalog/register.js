function Car(make, model, year, price ,cyls, passengers, type, imageUrl, description, fuelType){
    this.make = make; // <- Do the same for all the attributes
    this.model = model;
    this.year = year;
    this.dailyPrice = price;
    this.cyls = cyls;
    this.passengers = passengers;
    this.type = type;
    this.imageUrl = imageUrl;
    this.description = description;
    this.fuelType = fuelType;


}



function saveCar(){
console.log ("i need plenty money");
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var price = $("#txtPrice").val();
    var cyls = $("#txtCyls").val();
    var passengers = $("#txtPassengers").val();
    var type = $("#txtType").val();
    var imageUrl = $("#txtImageUrl").val();
    var description = $("#txtDescription").val();
    var fuelType = $("#txtFuelType").val();
    //DO THE SAME FOR ALL THE CONTROLS ON THE FORM
    //CREATE THE CAR object
    var theNewCar = new Car(make, model, year, price, cyls, passengers, type, imageUrl, description, fuelType);
    console.log(theNewCar);

    //send the object on a POST REQUEST
    $.ajax({
        url: '/catalog/saveCar',
        type: 'POST',
        data: JSON.stringify(theNewCar),
        contentType: 'application/json',
        success: function(res){


            
            console.log("Server says", res);
        },
        error: function(details){
            console.log("Error, details");
        }
        

        
    });
}


function init(){
    console.log("Register car page");
    $("#btnSave").click(saveCar);
}


window.onload = init;

//TODO:
/**
 * LINK js  WITH register html
 * check
 */

