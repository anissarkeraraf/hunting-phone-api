const loadPhone = async (inputFieldTex) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${inputFieldTex}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent =``;
    console.log(phones)
    phones.forEach(phone => {
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card p-3 mt-20 bg-base-100 shadow-xl'
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
        alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);

    })
}

const searchLoadedPhone = () =>{
    const inputField = document.getElementById('input-field');
    const inputFieldTex = inputField.value;
    console.log(inputFieldTex)
    loadPhone(inputFieldTex);
}


