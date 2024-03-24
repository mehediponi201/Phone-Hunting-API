function loadPhone(searchPhone) {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`)
        .then((response) => response.json())
        .then((data) => displayPhones(data.data));
}

function displayPhones(phones) {
    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.textContent='';
    phones.forEach((phone) => {
        console.log(phone);
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.brand}</h2>
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>${phone.slug}</p>
                      <div class="card-actions">
                        <button onclick="detailsButton('${phone.slug}');" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

//Handle search Button
// const handleSearch = () =>{
//   console.log('clicked button');
// }
document.getElementById('button').addEventListener('click',function(){
  const searchField = document.getElementById('searchBar');
  const searchValue = searchField.value ;
  console.log(searchValue);
  loadPhone(searchValue);
  searchField.value='';
})

// show Details button model show
const detailsButton = (id) =>{
  console.log('show details clicked',id);
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  .then(response => response.json())
  .then(data => showPhoneDetail(data.data));
}

const showPhoneDetail = (phone) =>{ 
  console.log(phone);
  const phoneDetailContainer = document.getElementById('phoneDetailContainer');
  phoneDetailContainer.innerHTML = `
  <h2><span>Name:</span> ${phone.name}</h2>
  <img src="${phone.image}" alt="">
  <h1><span>Release:</span> ${phone.releaseDate}</h1>
  <h1><span>Band:</span> ${phone.brand}</h1>
  <h1><span>Storage:</span> ${phone.mainFeatures.storage}</h1>
  <h1><span>DisplaySize:</span> ${phone.mainFeatures.displaySize}</h1>
  `;
  showDetaiModal.showModal();
}

