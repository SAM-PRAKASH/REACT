
import './App.css';
import React, { useState } from 'react';
import { products } from './products';
import { productsCategories } from './productsCategories';

function App() {
    const [cart, setCart] = useState([]);
    const toggleCart = (product) => {
        const productIndex = cart.findIndex((item) => item.productType === product.productType);

        if (productIndex !== -1) {
            const newCart = [...cart];
            newCart.splice(productIndex, 1);
            setCart(newCart);
        } else {
            setCart([...cart, product]);
        }
    };
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand">Shopping Cart</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li class="nav-item"><a class="nav-link active" >Home</a></li>
                            <li class="nav-item"><a class="nav-link">About</a></li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-dark" type="submit">
                                <i class="bi-cart-fill me-1"></i>
                                Cart
                                <span class="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>

            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Shopping Cart</h1>
                        <p class="lead fw-normal text-white-50 mb-0">shop with us </p>
                    </div>
                </div>
            </header>

            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {productsCategories({ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeao3fW9yOhoP-OJhQApTWopk1qGrezjp8gB8bj6akDAtDs5aQ385dpro7mkIvemRL9U4&usqp=CAU', productType: "Beauty Products", priceRange: '$40.00 - $80.00', cart: cart })}
                        {products({ sale: "Sale", src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpApvDMunUFVyavNcewJRhZmP0ZSTVh2ZEw&usqp=CAU', productType: "Facecare kit", reviewPoints: "⭐⭐⭐⭐", originalPrice: '$40.00', sellingPrice: '$80.00', cart: cart, onToggleCart: toggleCart })}
                        {products({ sale: "Sale", src: 'https://www.businessupturn.com/wp-content/uploads/2022/10/Tesla-Model-Pi-5G-mobile-450x300.jpg', productType: "AAA Mobile", reviewPoints: "⭐⭐⭐⭐⭐", originalPrice: '$50.00', sellingPrice: '$20.00', cart: cart, onToggleCart: toggleCart })}
                        {products({ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeEglD5bOl0xZ8HSHGBwlMKgHRmR_oftuwo-YzmV76uLjJKa6KYVGWoMU3_slUve2onc&usqp=CAU', productType: "Popular Camera", reviewPoints: "⭐⭐⭐⭐⭐", sellingPrice: '$40.00', cart: cart, onToggleCart: toggleCart })}
                        {productsCategories({ src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyzJsEvIGZpQFO2Y3X9ZBCm0rFKrhEGSd8e00LB4wDlg&s', productType: "Fancy Products", priceRange: '$40.00 - $80.00', cart: cart })}
                        {products({ sale: "Sale", src: 'https://5.imimg.com/data5/SELLER/Default/2023/7/325950837/SU/DH/TG/61377504/hyundai-109cm-full-hd-smart-led-tv-500x500.jpg', productType: "BBB TV", reviewPoints: "⭐⭐⭐", originalPrice: '$20.00', sellingPrice: '$18.00', cart: cart, onToggleCart: toggleCart })}
                        {products({ src: 'https://cdn.shopify.com/s/files/1/0270/7469/1185/files/233133-450x300-watermelon-pattern-tote_large.jpg?v=1589005034', productType: "Bags", reviewPoints: "⭐⭐⭐⭐⭐", sellingPrice: '$40.00', cart: cart, onToggleCart: toggleCart })}
                    </div>
                </div>
            </section>
            <footer class="py-5 bg-dark">
                <div class="container"><p class="m-0 text-center text-white">Shopping Cart &copy; Your Website 2023</p></div>
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

            <script src="js/scripts.js"></script>
        </div>
    );
}
export default App;
