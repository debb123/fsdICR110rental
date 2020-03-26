
function fetchCatalog() {
    console.log("Fetching catalog");

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function (res) {
            console.log("From server", res);

            //TODO: Sort the cars (res array)to be cheapest first
            var sortedList = res.sort((left, right) => left.dailyPrice - right.dailyPrice);
                // This is for a single mathematical instruction where we use just integers(int function)

            for (var i = 0; i < sortedList.length; i++) {
                displayCar(sortedList[i]);
            }
            // if we want it as using both str and int(multiple) then
            /* var sorted = [];
            sorted = res.sort(function(left, right){
                if(left.dailyPrice < right.dailyPrice){
                    return -1; //the first param goes first
                }
                else if(right.dailyPrice < left.dailyPrice){
                    return 1;
                }
                return 0;


            });

            for(var i=0; i<res.length; i++){
                displayCar(res[i]);
            } */

        },
        error: function (details) {
            console.log("Error:", details);
        }
    })
}

function displayCar(car) {
    var template =

        `<div class ="col-5 item">
            <div class="row">
        
                <div class="col-7">
                <img src='${car.imageUrl}'>
                </div>
                <div class="col-5">
                <label class="info-title">Year:</label>
                <label class="info-value">${car.year}</label>
                <br>
                <br>

                <label class="info-title">Make:</label>
                <label class="info-value">${car.make}</label>
                <br>
                <br>

                <label class="info-title">Model:</label>
                <label class="info-value">${car.model}</label>
                <br>
                <br>

                <label class="info-title">Price:</label>
                <label class="info-value">${car.dailyPrice}</label>
            </div>
                                  
               
            <div>
                
                <label class="description">${car.description}</label>
            </div>
            <div>
            <button class="btn btn-outline-primary rent">Rent Now</button>
    </div>  
            
        </div>`;

    var container = $("#catalog");
    container.append(template);

}


function init() {
    console.log("Catalog page!");

    fetchCatalog();
}

window.onload = init;