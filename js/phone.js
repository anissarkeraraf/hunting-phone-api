const loadPhone = async (inputFieldTex, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputFieldTex}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ``;
    console.log(phones)

    const showAllButton = document.getElementById('show-all-button')
    if(phones.length > 12 && !isShowAll){
        showAllButton.classList.remove('hidden')
    }else{
        showAllButton.classList.add('hidden')
    }
    console.log('is show all button', isShowAll)
    
// show 15 phones
    if(!isShowAll){
        phones = phones.slice(0, 12);
    }


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

    });

    // hide loading section
    traggleLoading(false)
}

const searchLoadedPhone = (isShowAll) => {
    traggleLoading(true);
    const inputField = document.getElementById('input-field');
    const inputFieldTex = inputField.value;
    console.log(inputFieldTex)
    loadPhone(inputFieldTex, isShowAll);
}

// const searchLoadedPhone2 = () => {
//     traggleLoading(true);
//     const inputField = document.getElementById('input-field2');
//     const inputFirldTex = inputField.value;
//     loadPhone(inputFirldTex);
// }

const traggleLoading = (isLoading) =>{
    const loading = document.getElementById('loading');
    if(isLoading){
        loading.classList.remove('hidden');
    }
    else{
        loading.classList.add('hidden');
    }
}

const showAllButton = () =>{
    searchLoadedPhone(true);
}


