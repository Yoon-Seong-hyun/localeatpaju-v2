// Campsite Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Set minimum date to today
    const dateInput = document.getElementById('campsite-date-select');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Image gallery functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-campsite-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
            // Update main image
            if (mainImage) {
                const newImageSrc = this.getAttribute('data-image');
                mainImage.src = newImageSrc;
            }
        });
    });

    // Quantity controls
    const quantityInput = document.getElementById('campsite-quantity');
    const quantityMinus = document.getElementById('campsite-quantity-minus');
    const quantityPlus = document.getElementById('campsite-quantity-plus');
    const totalAmount = document.getElementById('campsite-total-amount');
    const basePrice = 40000; // Base price per person

    if (quantityMinus) {
        quantityMinus.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 2) {
                quantityInput.value = currentValue - 1;
                updateTotalPrice();
            }
        });
    }

    if (quantityPlus) {
        quantityPlus.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue < 8) {
                quantityInput.value = currentValue + 1;
                updateTotalPrice();
            }
        });
    }

    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (value < 2) this.value = 2;
            if (value > 8) this.value = 8;
            updateTotalPrice();
        });
    }

    function updateTotalPrice() {
        if (totalAmount && quantityInput) {
            const quantity = parseInt(quantityInput.value);
            const total = basePrice * quantity;
            totalAmount.textContent = total.toLocaleString('ko-KR') + '원';
        }
    }

    // Reserve button handler
    const reserveBtn = document.getElementById('campsite-reserve-btn');
    if (reserveBtn) {
        reserveBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const dateInput = document.getElementById('campsite-date-select');
            if (!dateInput || !dateInput.value) {
                alert('날짜를 선택해주세요.');
                return;
            }
            alert('캠핑장 예약이 완료되었습니다! 확인 메일을 발송해드렸습니다.');
        });
    }
});

