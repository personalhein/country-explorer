const loader = document.getElementById('loader');
const countriesGrid = document.getElementById('countriesGrid');
const searchInput = document.getElementById('searchInput');
const errorMessage = document.getElementById('errorMessage');

// စစချင်း Grid List View ကို ဖျောက်ထားပြီး Loader ကို ပြမယ်
countriesGrid.style.display = 'none';
loader.style.display = 'block';
errorMessage.style.display = 'none';

let allCountriesData = [];

// 1. API ကနေ Data တွေကို လှမ်းယူခြင်း
const fetchCountries = async () => {
    try {

        const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,maps');
        
        if (!res.ok) throw new Error('Something went wrong!');

        const data = await res.json();
        
        allCountriesData = data;
        displayCountries(data);

        // Success ဖြစ်ရင် Loader ဖျောက်၊ Grid ပြ၊ Error ဖျောက်
        loader.style.display = 'none';
        countriesGrid.style.display = 'grid';
        errorMessage.style.display = 'none';

    } catch (error) {
        console.error(error); // Developer အတွက် Console မှာပြမယ်
        errorMessage.textContent = "Failed to load data. Please try again later.";
        errorMessage.style.display = 'block';
        loader.style.display = 'none';
    }
};

// 2. Data တွေကို UI မှာ ပြသခြင်း
const displayCountries = (countries) => {
    // Search Result မတွေ့ရင် ပြမည့် Message
    if (countries.length === 0) {
        countriesGrid.innerHTML = '<p>No countries found matching your search.</p>';
        // Grid layout ပျက်မသွားအောင် styling ချိန်ညှိ
        countriesGrid.style.display = 'block'; 
        return;
    } else {
        countriesGrid.style.display = 'grid';
    }

    const countriesHTML = countries.map(country => `
        <div class="card">
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" loading="lazy">
            <div class="card-body">
                <h3>${country.name.common}</h3>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <a href="${country.maps.googleMaps}" target="_blank" rel="noopener noreferrer">View Map</a>
            </div>
        </div>
    `).join('');
    
    countriesGrid.innerHTML = countriesHTML;
};

// 3. Search လုပ်ခြင်း
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    const filteredCountries = allCountriesData.filter(country => 
        country.name.common.toLowerCase().includes(searchTerm)
    );

    displayCountries(filteredCountries);
});

// App စစချင်း run တာနဲ့ Data ယူမယ်
fetchCountries();