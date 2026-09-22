const fs = require('fs');
const path = require('path');

const logos = {
  'hrs.webp': 'https://www.scalosoft.com/wp-content/uploads/2020/10/hrs.png.webp',
  'santander.webp': 'https://www.scalosoft.com/wp-content/uploads/2020/09/santander-logo-scalo-clients.png.webp',
  'ing.webp': 'https://www.scalosoft.com/wp-content/uploads/2020/09/ing_scalo-clients.png.webp',
  'bnp.webp': 'https://www.scalosoft.com/wp-content/uploads/2020/10/bnp.png.webp',
  'asseco.webp': 'https://www.scalosoft.com/wp-content/uploads/2020/10/asseco.png.webp',
  'change_donations.webp': 'https://www.scalosoft.com/wp-content/uploads/2021/02/Change_Donations.png.webp',
  'bitpanda.webp': 'https://www.scalosoft.com/wp-content/uploads/2023/09/bitpanda.webp',
  'vodeno.webp': 'https://www.scalosoft.com/wp-content/uploads/2022/10/vodeno-logo.png.webp'
};

async function run() {
  for (const [name, url] of Object.entries(logos)) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(__dirname, name), buf);
      console.log(`Saved ${name}, size: ${buf.length}`);
    } catch(e) {
      console.error(`Error ${name}:`, e);
    }
  }
}
run();
