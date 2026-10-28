import type { Dict } from './types';
import { EMAIL, WA_LOCAL, waLink } from './site';

const id: Dict = {
  lang: 'id',
  meta: {
    title: 'Asemka · Sistem Pengadaan, Gudang, dan E-commerce untuk Bisnis Indonesia',
    description:
      'Asemka merancang dan membangun sistem pengadaan, gudang, dan marketplace grosir untuk perusahaan dan startup Indonesia. Kirim pesan WhatsApp untuk mulai.',
  },
  nav: { work: 'Proyek', services: 'Layanan', process: 'Proses', faq: 'FAQ', cta: 'Chat WhatsApp', skip: 'Langsung ke isi', label: 'Utama', switchLabel: 'English', switchHref: '/', switchLang: 'en' },
  hero: {
    title: ['Software bisnis,', 'dibuat di Indonesia'],
    lead: 'Sistem pengadaan, gudang, dan toko online untuk perusahaan dan startup Indonesia.',
    cta: 'Kirim lewat WhatsApp',
    promises: ['Balasan dalam satu hari kerja', 'Prototipe yang bisa diklik dalam dua minggu', 'Tersedia dalam Bahasa Indonesia dan Inggris'],
    composer: {
      label: 'Tulis pesan pertama Anda',
      contactName: 'Asemka',
      status: 'Membalas dalam satu hari kerja',
      groups: { need: 'Apa yang Anda butuhkan?', stage: 'Sudah sampai mana?', when: 'Kapan?' },
      need: [
        { id: 'procurement', label: 'Pengadaan dan persetujuan', phrase: 'sistem pengadaan dan persetujuan' },
        { id: 'warehouse', label: 'Gudang dan stok', phrase: 'sistem gudang dan stok' },
        { id: 'shop', label: 'Toko grosir online', phrase: 'toko grosir online' },
        { id: 'website', label: 'Website perusahaan', phrase: 'website perusahaan' },
        { id: 'other', label: 'Lainnya', phrase: 'bantuan untuk proyek software' },
      ],
      stage: [
        { id: 'idea', label: 'Baru ide', phrase: 'Saat ini masih berupa ide' },
        { id: 'designs', label: 'Sudah ada desain', phrase: 'Kami sudah punya desain' },
        { id: 'fix', label: 'Sistem lama perlu diperbaiki', phrase: 'Sistem kami yang sekarang perlu diperbaiki' },
      ],
      when: [
        { id: 'month', label: 'Bulan ini', phrase: 'kami ingin mulai bulan ini' },
        { id: 'quarter', label: '1 sampai 3 bulan', phrase: 'kami ingin mulai dalam 1 sampai 3 bulan' },
        { id: 'exploring', label: 'Masih melihat', phrase: 'kami masih melihat pilihan' },
      ],
      nameLabel: 'Nama Anda',
      namePlaceholder: 'Opsional',
      send: 'Kirim pesan ini lewat WhatsApp',
      template: 'Halo Asemka. Saya sedang mencari {need}. {stage}, dan {when}. Bisa kita ngobrol?',
      templateWithName: 'Halo Asemka, saya {name}. Saya sedang mencari {need}. {stage}, dan {when}. Bisa kita ngobrol?',
    },
  },
  work: {
    heading: 'Sistem yang kami buat',
    projects: [
      {
        id: 'procurement',
        name: 'Pengadaan dan persetujuan',
        category: 'General affair, grup multi perusahaan',
        body: 'Setiap cabang dalam grup multi perusahaan mengirim permintaan pembelian ke satu dashboard. Permintaan naik melalui level persetujuan sesuai jabatan dan nominal, manajer melihat pengeluaran per cabang, dan pesanan yang disetujui langsung tersinkron ke Oracle Financials, jadi tim keuangan tidak perlu mengetik ulang purchase order.',
        link: 'Tanya soal sistem pengadaan',
        message: 'Halo Asemka. Saya melihat sistem pengadaan dan persetujuan Anda. Bisa kita ngobrol soal membuat sistem serupa untuk kami?',
        hint: 'Demo interaktif dengan data contoh. Coba setujui sebuah permintaan.',
      },
      {
        id: 'warehouse',
        name: 'Asemka Operation',
        category: 'Produk kami sendiri, gudang dan stok',
        body: 'Platform gudang yang kami bangun dan jalankan sendiri. Penerimaan, pengambilan, packing, dan pengiriman berjalan dalam satu alur, di ponsel maupun desktop. Stok terbarui begitu barang bergerak, dan peringatan restock terkirim sebelum rak kosong. Bahasa Indonesia sebagai utama, bahasa Inggris tinggal satu ketukan.',
        link: 'Minta demo',
        message: 'Halo Asemka. Saya ingin demo Asemka Operation untuk gudang kami.',
        hint: 'Demo interaktif. Centang setiap barang saat diambil.',
      },
      {
        id: 'wholesale',
        name: 'Marketplace grosir',
        category: 'Marketplace, fashion dan pakaian',
        body: 'Marketplace grosir untuk fashion Indonesia: pakaian wanita dan anak, busana muslim, batik, tas, dan sepatu. Merchant membuka toko sendiri, pembeli mencari berdasarkan kategori atau kota lalu memesan dalam jumlah besar dengan harga Rupiah. Pesanan, stok, dan pembayaran merchant dikelola dari satu admin.',
        link: 'Tanya soal marketplace',
        message: 'Halo Asemka. Saya melihat marketplace grosir Anda. Bisa kita ngobrol soal membuat yang serupa untuk kami?',
        hint: 'Demo interaktif. Pilih kategori lalu tambahkan ke keranjang.',
      },
    ],
  },
  testimonial: {
    heading: 'Kata klien',
    items: [
      {
        quote: 'Mereka bertanya soal gudang kami sebelum anggaran. Enam minggu kemudian tim picking bekerja dari ponsel, dan hitungan stok akhirnya cocok dengan rak.',
        name: 'Rina Hartono',
        role: 'Manajer operasional',
        company: 'PT Sinar Logistik',
      },
      {
        quote: 'Persetujuan yang dulu tertahan berhari hari di inbox kini selesai sebelum makan siang.',
        name: 'Dimas Prasetyo',
        role: 'Kepala general affair',
        company: 'Grup Mitra Sentosa',
      },
      {
        quote: 'Satu pesan WhatsApp hari Jumat. Telepon hari Senin. Dua minggu kemudian prototipe yang bisa diklik merchant kami.',
        name: 'Yuliana Tan',
        role: 'Pendiri',
        company: 'Kain Kita',
      },
    ],
  },
  services: {
    heading: 'Yang kami kerjakan',
    lead: 'Dari sketsa pertama sampai sistem yang dipakai tim Anda setiap hari, termasuk perawatan setelah rilis.',
    items: [
      { name: 'Strategi produk', body: 'Kami ubah masalah Anda menjadi lingkup kerja dan anggaran yang siap disetujui.' },
      { name: 'Desain antarmuka', body: 'Tampilan yang langsung dipahami staf Anda sejak hari pertama.' },
      { name: 'Aplikasi web dan dashboard', body: 'Sistem internal dengan peran, persetujuan, dan laporan.' },
      { name: 'Website perusahaan', body: 'Website cepat, dua bahasa, dan mudah ditemukan di Google.' },
      { name: 'Integrasi sistem', body: 'Kami hubungkan ke ERP, payment gateway, dan alat yang sudah Anda pakai.' },
      { name: 'Perawatan setelah rilis', body: 'Perbaikan, pembaruan, dan fitur baru, ditagih bulanan.' },
    ],
  },
  process: {
    heading: 'Cara kami mulai',
    steps: [
      { name: 'Pesan', body: 'Kirim pesan WhatsApp. Kami membalas dalam satu hari kerja.', time: 'Hari 1' },
      { name: 'Telepon dan prototipe', body: 'Telepon 30 menit, lalu prototipe yang bisa diklik dalam dua minggu.', time: 'Dalam 2 minggu' },
      { name: 'Bangun dan rilis', body: 'Preview setiap minggu. Sebagian besar proyek rilis dalam 4 sampai 8 minggu.', time: 'Minggu 4 sampai 8' },
    ],
  },
  faq: {
    heading: 'Pertanyaan',
    items: [
      { q: 'Berapa biaya sebuah sistem?', a: 'Tergantung lingkup kerjanya. Setelah telepon pertama Anda mendapat penawaran harga tetap, bukan tagihan per jam.' },
      { q: 'Kenapa WhatsApp dulu?', a: 'Lebih cepat untuk Anda. Kirim kebutuhan Anda, dan kami akan menelepon saat ada hal yang perlu dibahas.' },
      { q: 'Bisa memperbaiki sistem kami yang sudah ada?', a: 'Bisa. Kami mengambil alih dan memperbaiki sistem Laravel, PHP, dan JavaScript yang sudah berjalan, dimulai dengan audit singkat.' },
      { q: 'Apakah tampilannya berbahasa Indonesia?', a: 'Ya, atau bahasa Inggris, atau keduanya. Tim Anda yang memilih, dan staf bisa berganti kapan saja.' },
      { q: 'Siapa pemilik kodenya?', a: 'Anda. Anda mendapat seluruh source code, database, dan akses ke setiap server.' },
      { q: 'Bisa terhubung ke ERP kami?', a: 'Bisa. Kami sudah mengintegrasikan Oracle Financials, payment gateway, dan API kurir.' },
      { q: 'Apa yang terjadi setelah rilis?', a: 'Kami tetap mendampingi lewat paket perawatan bulanan, atau menyerahkan semuanya ke tim Anda lengkap dengan dokumentasi.' },
    ],
  },
  contact: {
    heading: 'Ngobrol dengan Asemka',
    rows: [
      { label: 'WhatsApp', value: `WhatsApp ${WA_LOCAL}`, href: waLink('Halo Asemka. Bisa kita ngobrol soal proyek?') },
      { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}?subject=${encodeURIComponent('Pertanyaan proyek')}` },
      { label: 'Kota', value: 'Jakarta, Indonesia' },
      { label: 'Jam kerja', value: 'Senin s.d. Jumat, 08.00 s.d. 17.00 WIB' },
    ],
    greeting: 'Halo',
    greetingAction: 'Buka WhatsApp',
  },
  footer: {
    blurb: 'Studio software di Jakarta. Kami merancang dan membangun sistem pengadaan, gudang, dan commerce untuk perusahaan dan startup Indonesia.',
    pagesLabel: 'Di halaman ini',
    contactLabel: 'Kontak',
    notes: ['Asemka, studio software di Jakarta', 'Senin sampai Jumat, 08.00 sampai 17.00 WIB', 'Sistem pengadaan, gudang, dan commerce'],
    top: 'Kembali ke atas',
    lineLabel: 'Kirim pesan WhatsApp ke Asemka',
    privacy: 'Privasi',
    credits: 'Dirancang dan dibangun oleh Asemka',
    place: 'Jakarta, 2026',
  },
};

export default id;
