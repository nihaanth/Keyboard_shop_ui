document.addEventListener('DOMContentLoaded', function() {
    
    const priceFilter = document.getElementById('price-filter');
    const products = document.querySelectorAll('.product');

    priceFilter.addEventListener('change', function() {
        const selectedPrice = parseInt(priceFilter.value); 

        products.forEach(product => {
            const productPrice = parseInt(product.querySelector('.price').innerText.replace('$', '')); 
            if (selectedPrice === 0 || (productPrice > (selectedPrice - 10) && productPrice <= selectedPrice)) {
                product.style.display = 'block'; 
            } else {
                product.style.display = 'none'; 
            }
           
            
        });
      
        
    });
    
});
