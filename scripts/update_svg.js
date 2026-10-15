const fs = require('fs');
const path = require('path');

const emblemBase64 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'icons', 'madinet-masr-emblem.png')).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 140" width="520" height="140" fill="none">
  <!-- Official Madinet Masr Red Emblem -->
  <image href="data:image/png;base64,${emblemBase64}" x="10" y="16" width="90" height="90" />

  <!-- Typography: MADINET MASR -->
  <text x="118" y="54" font-family="'Cinzel', 'Playfair Display', serif" font-size="34" font-weight="700" letter-spacing="4" fill="#1A202C">
    MADINET MASR
  </text>

  <!-- Bilingual Arabic Sub-line & Heritage -->
  <text x="120" y="78" font-family="'Cairo', 'Segoe UI', Tahoma, sans-serif" font-size="14" font-weight="600" letter-spacing="3" fill="#4A5568">
    مـديـنـة مـصـر • EST. 1959
  </text>

  <!-- Elegant 1px Divider -->
  <line x1="118" y1="90" x2="480" y2="90" stroke="#CBD5E1" stroke-width="1" />

  <!-- Global Sub-Branding: By properties-z.com -->
  <text x="118" y="110" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="12" font-weight="700" letter-spacing="5" fill="#2D3748">
    BY PROPERTIES-Z.COM
  </text>
</svg>`;

fs.writeFileSync(path.join(__dirname, '..', 'assets', 'icons', 'madinet-masr-logo.svg'), svg);
console.log('Updated madinet-masr-logo.svg with official emblem!');
