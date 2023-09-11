import React from 'react';

export function products(props) {
    const { sale, src, productType, reviewPoints, originalPrice, sellingPrice, onToggleCart, cart } = props;
    const isInCart = cart.some((item) => item.productType === productType);


    return (
        <div class="col mb-5">
            <div class="card h-100">
                {sale && <div class="badge bg-dark text-white position-absolute" style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', }}>{sale}</div>}
                <img class="card-img-top" src={src} alt="..." />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">{productType}</h5>
                        <div class="d-flex justify-content-center small text-warning mb-2">
                            <div class="bi-star-fill">{reviewPoints}</div>
                        </div>
                        {originalPrice && <span class="text-muted text-decoration-line-through">{originalPrice}</span>}
                        {sellingPrice}
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"> <button
                        class={`btn ${isInCart ? 'btn-danger' : 'btn-outline-dark'} mt-auto`}
                        onClick={() => onToggleCart(props)}
                    >
                        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button></div>
                </div>
            </div>
        </div>
    );
}
