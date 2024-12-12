
        const addToCartButton = document.getElementById('addToCartButton');
        const quantityInput = document.getElementById('quantityInput');
        const productPrice = 9.99; 

       
        addToCartButton.addEventListener('click', function () {
            
            const quantity = parseInt(quantityInput.value);

       
            if (isNaN(quantity) || quantity <= 0) {
                alert("Please enter a valid quantity.");
                return;
            }

     
            const totalPrice = (quantity * productPrice).toFixed(2);

           
            alert(`${quantity} orders have been received! The total price is $${totalPrice}`);

         
        });