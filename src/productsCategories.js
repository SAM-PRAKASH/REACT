import React from 'react';

export function productsCategories(props) {
    const { src, productType, priceRange } = props;
    return (
        <div class="col mb-5">
            <div class="card h-100">

                <img class="card-img-top" src={src} alt="..." />

                <div class="card-body p-4">
                    <div class="text-center">

                        <h5 class="fw-bolder">{productType}</h5>

                        {priceRange}
                    </div>
                </div>

                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View Option</a></div>
                </div>
            </div>
        </div>
    );
}
