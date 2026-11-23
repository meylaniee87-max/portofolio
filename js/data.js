// Data portofolio. Ubah isi di sini, halaman akan ikut berubah.
// link: isi dengan URL demo aplikasi jika sudah di-hosting (kosong = "Demo menyusul").
const SITE = {"yt": "https://youtube.com/@mmylnni", "ig": "https://www.instagram.com/meylnmystique_", "tt": "https://www.tiktok.com/@_mmylnni", "mail": "mailto:meylaniee87@gmail.com", "wa": "https://wa.me/6287837004739", "vthumb": "img/vthumb.jpg"};
const PROJECTS = [
 {
  "t": "INV-TECH",
  "s": "Inventaris & Peminjaman Barang",
  "c": "Web",
  "img": "img/inv_sipas.jpg",
  "link": "",
  "lt": "Lihat demo",
  "d": "Sistem untuk UPTD Puskesmas Kenduruan: katalog barang, pengajuan peminjaman aset, dan uji kelayakan. Dikembangkan dengan metode RAD dan ditulis menjadi artikel jurnal SINTA 3 (tahap revisi).",
  "f": [
   "Login berbasis peran (Admin Utama, Staf Medis)",
   "Peminjaman multi-unit",
   "Uji kelayakan aset dan sarana kesehatan"
  ],
  "tech": [
   "Web",
   "Metode RAD"
  ]
 },
 {
  "t": "SIPASS",
  "s": "Administrasi Keuangan Syahriyah Pesantren",
  "c": "Web",
  "img": "img/sipass_dash.jpg",
  "link": "",
  "lt": "Lihat demo",
  "d": "Sistem keuangan untuk Pondok Pesantren Assalam Bangilan dengan peran Bendahara: tagihan, verifikasi pembayaran, dan laporan keuangan.",
  "f": [
   "Dashboard: pemasukan, tunggakan, laporan harian",
   "Log aktivitas harian (transfer dan tunai)",
   "Cetak laporan keuangan"
  ],
  "tech": [
   "Web"
  ]
 },
 {
  "t": "SIKAP",
  "s": "Kegiatan & Kehadiran Pegawai",
  "c": "Web",
  "img": "img/sikap.jpg",
  "link": "https://youtube.com/@mmylnni",
  "lt": "Tonton video implementasinya",
  "d": "Aplikasi web pemantau aktivitas dan kehadiran pegawai secara real-time, dengan beranda publik yang transparan. Studi kasus Kementerian Agama Tuban.",
  "f": [
   "Daftar pegawai izin hari ini",
   "Statistik kehadiran",
   "Login pegawai"
  ],
  "tech": [
   "Web"
  ]
 },
 {
  "t": "Website SDN Sokogunung 1",
  "s": "Profil Sekolah & Portal PPDB",
  "c": "Web",
  "img": "img/sdn_home.jpg",
  "link": "",
  "lt": "Lihat demo",
  "d": "Portal resmi sekolah dengan profil, guru, berita, dan informasi PPDB: jadwal gelombang, jalur, kuota, serta tombol pendaftaran online.",
  "f": [
   "Informasi PPDB lengkap",
   "Sambutan dan ekstrakurikuler",
   "Prototipe berfungsi, belum di-hosting"
  ],
  "tech": [
   "Web",
   "PPDB"
  ]
 },
 {
  "t": "Apotekin",
  "s": "Manajemen Apotek (Desktop)",
  "c": "Desktop",
  "img": "img/apotekin.jpg",
  "link": "",
  "lt": "Lihat demo",
  "d": "Aplikasi desktop Java (NetBeans) untuk mengelola data obat, pelanggan, dan transaksi, dibuat sebagai proyek semester 2.",
  "f": [
   "CRUD data obat: nama, jenis, harga, stok",
   "Transaksi dan detail transaksi",
   "Cetak laporan"
  ],
  "tech": [
   "Java",
   "NetBeans"
  ]
 },
 {
  "t": "A.M Smart",
  "s": "Absensi, Laporan & Mapel Les (Android)",
  "c": "Android",
  "img": "img/am2.jpg",
  "link": "https://youtube.com/@mmylnni",
  "lt": "Tonton tutorialnya",
  "d": "Aplikasi Android untuk mengelola les privat saya sendiri: jadwal, data siswa, modul materi, dan rekap nilai.",
  "f": [
   "Jadwal Les dan Data Siswa",
   "Modul Materi",
   "Rekap Nilai"
  ],
  "tech": [
   "Android",
   "Android Studio"
  ]
 },
 {
  "t": "E-Kos",
  "s": "Pengelolaan Kos Digital",
  "c": "Web",
  "img": "img/kos_info.jpg",
  "link": "",
  "lt": "Lihat demo",
  "d": "Sistem informasi kos: pembayaran digital, informasi fasilitas, dan laporan. Berawal dari prototipe Figma di semester 3.",
  "f": [
   "Pembayaran sewa digital",
   "Informasi fasilitas",
   "Cetak laporan"
  ],
  "tech": [
   "Web",
   "Figma"
  ]
 }
];
const BOOKS = [
 {
  "img": "img/book1.jpg",
  "t": "Perencanaan Strategis Sistem Informasi pada Perusahaan Farmasi",
  "m": "Semester 1, buku cetak"
 },
 {
  "img": "img/book2.jpg",
  "t": "Tuban dalam Cerita: Eksplorasi Ongkek dan Centhak yang Tak Terlupakan",
  "m": "Semester 2, karya kelompok"
 },
 {
  "img": "img/book3.jpg",
  "t": "They Talk About Mom",
  "m": "Kelas 1 MA, antologi santriwati KMI Assalam"
 }
];
const HARD = [["HTML / CSS / JavaScript", "</>"], ["PHP", "PHP"], ["MySQL", "SQL"], ["Java (NetBeans)", "Jv"], ["Android", "An"], ["UML", "UML"], ["ERD", "ERD"], ["Flowchart", "Fc"], ["Metode RAD", "RAD"], ["Figma", "Fg"], ["Penulisan Teknis", "Doc"], ["Microsoft Office", "Of"], ["MC & Public Speaking", "MC"]];
const SOFT = ["Kerja sama tim", "Kepemimpinan", "Komunikasi", "Manajemen waktu", "Pemecahan masalah", "Mengajar"];
const EXP = [
 {
  "g": "Mengajar & Kerja",
  "w": "2025 – sekarang",
  "t": "Guru Les Privat",
  "d": "Mengajar bahasa Inggris dan seluruh mata pelajaran SD/MI, serta mengaji. Mengelola jadwal, absensi, dan laporan belajar lewat aplikasi A.M Smart."
 },
 {
  "g": "Mengajar & Kerja",
  "w": "Beberapa kali",
  "t": "MC (Pembawa Acara)",
  "d": "Acara Rumah Sholawatan Sokogunung, Kenduruan, dan beberapa acara lain di Tuban."
 },
 {
  "g": "Mengajar & Kerja",
  "w": "2023 – 2024",
  "t": "Guru Seni Budaya & Penanggung Jawab Koperasi",
  "d": "Pondok Pesantren Assalam Bangilan. Mengajar Seni Budaya kelas 7, les siang bahasa Inggris kelas 10, dan mengelola koperasi pondok."
 },
 {
  "g": "Organisasi & Kepanitiaan",
  "w": "Sekarang",
  "t": "Sekretaris (BPH) HIMA Sistem Informasi",
  "d": "ITB Tuban. Mengelola surat-menyurat, notulen, dan dokumentasi."
 },
 {
  "g": "Organisasi & Kepanitiaan",
  "w": "Sekarang",
  "t": "Sekretaris (BPH) UKM Seni",
  "d": "ITB Tuban. Mengelola administrasi dan dokumentasi kegiatan."
 },
 {
  "g": "Organisasi & Kepanitiaan",
  "w": "8 Maret 2026",
  "t": "Panitia Divisi Acara, MUSMAS",
  "d": "Acara MUSMAS yang diselenggarakan Program Studi Sistem Informasi ITB Tuban."
 },
 {
  "g": "Organisasi & Kepanitiaan",
  "w": "2026",
  "t": "Anggota PKM Wisata Nganget",
  "d": "Program Kreativitas Mahasiswa (PKM) di Wisata Nganget, Kenduruan, Tuban."
 },
 {
  "g": "Organisasi & Kepanitiaan",
  "w": "Sekarang",
  "t": "Anggota Karang Taruna",
  "d": "Aktif dalam kegiatan kepemudaan di lingkungan tempat tinggal."
 },
 {
  "g": "Masa Pesantren",
  "w": "Kelas 3 MA",
  "t": "Ketua Kamar",
  "d": "Memimpin dan mengoordinasi santri dalam kegiatan harian asrama selama satu semester."
 },
 {
  "g": "Masa Pesantren",
  "w": "Kelas 1 – 2 MA",
  "t": "Seksi Koperasi",
  "d": "Membantu pengelolaan koperasi pondok."
 },
 {
  "g": "Masa Pesantren",
  "w": "Kelas 3 MTs – 1 MA",
  "t": "Pengajar Kaligrafi (Khat) & Tata Rias Meja",
  "d": "KORSAMA (Kolaborasi Seni Ma’had Assalam). Mengajar kaligrafi dan tata rias meja."
 },
 {
  "g": "Masa Pesantren",
  "w": "Kelas 1 MA (semester 2)",
  "t": "Sekretaris KORSAMA",
  "d": "Kolaborasi Seni Ma’had Assalam. Mengelola administrasi dan dokumentasi organisasi."
 },
 {
  "g": "Masa Pesantren",
  "w": "Pesantren",
  "t": "Sekretaris Panitia Zakat Fitrah",
  "d": "Menyusun administrasi dan pencatatan kegiatan."
 },
 {
  "g": "Masa Pesantren",
  "w": "Pesantren",
  "t": "Seksi Panggung & Konsumsi Haflah",
  "d": "Menyiapkan panggung dan konsumsi acara Haflah."
 }
];
// Sertifikat & kepanitiaan. Tambah satu objek baru di CERTS untuk sertifikat berikutnya (r: Peserta / Panitia / Juara).
// Contoh: { t: "Nama Sertifikat", by: "Penerbit", y: "2026", img: "img/sertifikat1.jpg", link: "" }
const CERTS = [
 {
  "t": "Panitia Divisi Acara, MUSMAS Prodi Sistem Informasi",
  "by": "Program Studi Sistem Informasi, ITB Tuban",
  "y": "8 Maret 2026",
  "r": "Panitia",
  "img": "img/s1.jpg"
 },
 {
  "t": "Webinar Nasional: Kuasai Seminar Proposal Skripsi & Raih ACC Pertamamu",
  "by": "Educativa Indonesia",
  "y": "23 Mei 2025",
  "r": "Peserta",
  "img": "img/s2.jpg"
 },
 {
  "t": "Talk Show GEMILANG: Seni Berbicara di Depan Umum dengan Percaya Diri",
  "by": "HIMA Bisnis Digital, ITB Tuban",
  "y": "8 Mei 2025",
  "r": "Peserta",
  "img": "img/s3.jpg"
 },
 {
  "t": "Webinar Nasional Public Speaking: Delivery Mastery",
  "by": "Speaking Official",
  "y": "23 Januari 2025",
  "r": "Peserta",
  "img": "img/s4.jpg"
 },
 {
  "t": "Bisnis Digital Talks 2025: Strategi Finansial untuk Startup Digital",
  "by": "FEB Universitas Muhammadiyah Purwokerto",
  "y": "18 Januari 2025",
  "r": "Peserta",
  "img": "img/s5.jpg"
 },
 {
  "t": "Webinar Nasional Public Speaking: Delivery Mastery",
  "by": "Speaking Official",
  "y": "17 Januari 2025",
  "r": "Peserta",
  "img": "img/s6.jpg"
 },
 {
  "t": "Fun Day Change Maker (FDCM) 2024",
  "by": "Institut Teknologi dan Bisnis Tuban",
  "y": "12–13 September 2024",
  "r": "Peserta",
  "img": "img/s7.jpg"
 }
];
const JOURNEY = [
 {
  "s": "Semester 1",
  "m": "fondasi",
  "items": [
   "Buku cetak: Perencanaan Strategis Sistem Informasi pada Perusahaan Farmasi"
  ]
 },
 {
  "s": "Semester 2",
  "m": "mulai membangun",
  "items": [
   "Apotekin: aplikasi desktop manajemen apotek",
   "Naskah jurnal aplikasi desktop (tidak diterbitkan)",
   "Buku: Tuban dalam Cerita (karya kelompok)",
   "Mulai mengajar les privat"
  ]
 },
 {
  "s": "Semester 3",
  "m": "merancang sistem nyata",
  "items": [
   "E-Kos: prototipe Figma pembayaran kos",
   "SIPASS: administrasi keuangan pesantren",
   "INV-TECH: prototipe inventaris Puskesmas"
  ]
 },
 {
  "s": "Semester 4",
  "m": "naik skala",
  "items": [
   "SIKAP: monitoring kehadiran pegawai (studi kasus Kemenag Tuban)",
   "Website SDN Sokogunung 1 dan portal PPDB",
   "A.M Smart: aplikasi Android untuk les privat",
   "Naskah jurnal untuk TEKNOSI (tidak diterbitkan)"
  ]
 },
 {
  "s": "Semester 5",
  "m": "dari prototipe ke produk",
  "items": [
   "INV-TECH versi web untuk UPTD Puskesmas Kenduruan",
   "Artikel jurnal JIPI (SINTA 3), tahap revisi",
   "Sistem Presensi Digital untuk organisasi mahasiswa",
   "Anggota PKM 2026 dan panitia MUSMAS"
  ]
 }
];
