const COUNTRY_DATA = [
  { name: "Egypt", code: "EG", dial_code: "+20", flag: "🇪🇬", priority: true },
  { name: "Saudi Arabia", code: "SA", dial_code: "+966", flag: "🇸🇦", priority: true },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971", flag: "🇦🇪", priority: true },
  { name: "Kuwait", code: "KW", dial_code: "+965", flag: "🇰🇼", priority: true },
  { name: "Qatar", code: "QA", dial_code: "+974", flag: "🇶🇦", priority: true },
  { name: "Oman", code: "OM", dial_code: "+968", flag: "🇴🇲", priority: true },
  { name: "Bahrain", code: "BH", dial_code: "+973", flag: "🇧🇭", priority: true },
  { name: "Jordan", code: "JO", dial_code: "+962", flag: "🇯🇴", priority: true },
  { name: "Lebanon", code: "LB", dial_code: "+961", flag: "🇱🇧" },
  { name: "United Kingdom", code: "GB", dial_code: "+44", flag: "🇬🇧", priority: true },
  { name: "United States", code: "US", dial_code: "+1", flag: "🇺🇸", priority: true },
  { name: "Canada", code: "CA", dial_code: "+1", flag: "🇨🇦", priority: true },
  { name: "Germany", code: "DE", dial_code: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dial_code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "IT", dial_code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "ES", dial_code: "+34", flag: "🇪🇸" },
  { name: "Switzerland", code: "CH", dial_code: "+41", flag: "🇨🇭" },
  { name: "Netherlands", code: "NL", dial_code: "+31", flag: "🇳🇱" },
  { name: "Australia", code: "AU", dial_code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "AT", dial_code: "+43", flag: "🇦🇹" },
  { name: "Belgium", code: "BE", dial_code: "+32", flag: "🇧🇪" },
  { name: "Cyprus", code: "CY", dial_code: "+357", flag: "🇨🇾" },
  { name: "Greece", code: "GR", dial_code: "+30", flag: "🇬🇷" },
  { name: "Iraq", code: "IQ", dial_code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "IE", dial_code: "+353", flag: "🇮🇪" },
  { name: "Libya", code: "LY", dial_code: "+218", flag: "🇱🇾" },
  { name: "Morocco", code: "MA", dial_code: "+212", flag: "🇲🇦" },
  { name: "Norway", code: "NO", dial_code: "+47", flag: "🇳🇴" },
  { name: "Russia", code: "RU", dial_code: "+7", flag: "🇷🇺" },
  { name: "Sweden", code: "SE", dial_code: "+46", flag: "🇸🇪" },
  { name: "Tunisia", code: "TN", dial_code: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "TR", dial_code: "+90", flag: "🇹🇷" }
];

function initCountrySelector() {
  const toggleBtn = document.getElementById('countryCodeToggle');
  const dropdown = document.getElementById('countryDropdown');
  const selectedFlag = document.getElementById('selectedFlag');
  const selectedDialCode = document.getElementById('selectedDialCode');
  const countryCodeInput = document.getElementById('countryCodeInput');
  const countrySearchInput = document.getElementById('countrySearchInput');
  const countryList = document.getElementById('countryList');

  if (!toggleBtn || !dropdown || !countryList) return;

  let currentCountry = COUNTRY_DATA[0]; // Egypt (+20)

  function renderList(filter = '') {
    countryList.innerHTML = '';
    const query = filter.toLowerCase().trim();
    const filtered = COUNTRY_DATA.filter(c => 
      c.name.toLowerCase().includes(query) || 
      c.dial_code.includes(query) || 
      c.code.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      const emptyItem = document.createElement('div');
      emptyItem.className = 'country-item country-empty';
      emptyItem.textContent = 'No country found';
      countryList.appendChild(emptyItem);
      return;
    }

    filtered.forEach(country => {
      const item = document.createElement('div');
      item.className = `country-item ${country.code === currentCountry.code ? 'active' : ''}`;
      item.innerHTML = `
        <span class="country-flag">${country.flag}</span>
        <span class="country-name">${country.name}</span>
        <span class="country-dial">${country.dial_code}</span>
      `;
      item.addEventListener('click', () => {
        selectCountry(country);
        closeDropdown();
      });
      countryList.appendChild(item);
    });
  }

  function selectCountry(country) {
    currentCountry = country;
    selectedFlag.textContent = country.flag;
    selectedDialCode.textContent = country.dial_code;
    countryCodeInput.value = country.dial_code;
  }

  function openDropdown() {
    dropdown.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    countrySearchInput.value = '';
    renderList();
    setTimeout(() => countrySearchInput.focus(), 50);
  }

  function closeDropdown() {
    dropdown.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropdown.classList.contains('open')) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  countrySearchInput.addEventListener('input', (e) => {
    renderList(e.target.value);
  });

  countrySearchInput.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
      closeDropdown();
    }
  });

  // Initialize with Egypt (+20)
  selectCountry(currentCountry);
  renderList();
}

window.initCountrySelector = initCountrySelector;
