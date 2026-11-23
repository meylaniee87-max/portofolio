# Portofolio Adilia Meylani (HTML, CSS, JavaScript native, tema gelap)

Tanpa framework dan tanpa instalasi. Buka foldernya di VS Code, lalu klik kanan `index.html` > **Open with Live Server**
(atau klik dua kali file-nya di browser).

## Struktur
```
index.html     kerangka halaman (hero, tentang, portofolio, kontak)
css/style.css  tampilan; warna utama ada di :root paling atas (--g1, --g2, --gd)
js/data.js     SEMUA ISI: proyek, buku, keahlian, pengalaman. Edit di sini.
js/main.js     loader, latar bintang, tab, popup detail proyek, form kontak
img/           foto, screenshot, sampul buku
```

## Cara mengubah isi
- **Link demo aplikasi:** di `js/data.js`, isi `"link": ""` dengan URL demo. Kosong = tombol "Demo menyusul".
- **Menambah proyek:** salin satu objek di array `PROJECTS`, isi `c` dengan `Web`, `Android`, atau `Desktop`, dan taruh gambarnya di `img/`.
- **Mengubah teks Tentang Saya / Hero:** edit langsung di `index.html`.
- **LinkedIn / GitHub:** tambahkan satu `<a>` di blok `.soc` (hero) dan `.ln` (kontak) di `index.html`.

## Hosting gratis (web statis)
GitHub Pages, Netlify, atau Vercel. Aplikasi PHP/Laravel butuh hosting yang mendukung PHP dan MySQL.
