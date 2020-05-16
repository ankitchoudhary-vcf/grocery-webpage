const radios = document.querySelectorAll('input[type=radio]');
const pouchSizeTextElement = document.querySelector('#pouch-size-text');
const priceTagElement = document.querySelector('#product-price');
/**
 * Loop and  bind listener
 */
for (radio of radios) {
    radio.addEventListener('change', function (event) {
        const radio = this;
        /**
         * GEt value of pouch size from `data-size` attribute
        */
        const pouchSize = radio.dataset.size;
        const price = radio.value;
        pouchSizeTextElement.innerText = ` ${pouchSize} Pouch`;
        priceTagElement.innerText = `Rs. ${price}`;
    });
    /**
    * Trigger change on radio to update 
    * product name  if its checked
    */
    if (radio.checked) {
        radio.dispatchEvent(new Event('change'));
    }
}

/**
 * Quantity increment and decrement buttons
 */
const quantityInput = document.getElementById('quantity-number');

function increment() {
    const inputValue = Number(quantityInput.value);
    quantityInput.value = inputValue + 1;
}
function decrement() {
    const inputValue = Number(quantityInput.value);
    const newValue = inputValue - 1;
    if (newValue < 1) {
        return;
    }
    quantityInput.value = newValue;
}
/**
 * payable amount calculator
 */

const payableTextElement = document.querySelector('#payable-amount');
function topay() {
    const quantity = quantityInput.value;
    if (document.getElementById('qun-1').checked) {
        var pouchvalue = document.getElementById('qun-1').value;
        payableTextElement.innerText = `= Rs. ${pouchvalue * quantity}`;
    }
    else {
        var pouchvalue = document.getElementById('qun-2').value;
        payableTextElement.innerText = `= Rs. ${pouchvalue * quantity}`;
    }
}