// DATABASE ARTIKEL
const articlesData = [
    {
        id: 1,
        title: "Penerapan Pembelajaran Berbasis Proyek Dalam Mengembangkan Keterampilan Siswa",
        author: "Mercy Vero Dita, Vina Ayu Marsela, Muhammad Miftahul Faiz",
        prodi: "Manajemen Rekayasa", // Contoh 2 Prodi
        year: "2025",
        category: "Artikel", // Jenis
        file_url: "assets/DimasAnsari.pdf", 
        abstract: "Artikel ini melihat masalah dengan pembelajaran konvensional di sekolah, yang sering membuat siswa menjadi pasif. Akibatnya, ini menghambat siswa untuk belajar berpikir kritis, kreatif, dan fleksibel, yang sangat penting dalam kehidupan modern. Pembelajaran berbasis proyek, memungkinkan siswa berpartisipasi secara aktif dalam proyek kontekstual yang berkaitan dengan masalah dunia nyata. Metode ini melibatkan siswa dalam proses perencanaan, pelaksanaan, dan evaluasi. Ini menggabungkan teori dengan praktik sehari-hari untuk mendukung pembelajaran berkelanjutan. Hasilnya, siswa belajar lebih banyak tentang tanggung jawab, kreativitas, komunikasi, dan kerja sama, yang meningkatkan kualitas pendidikan secara keseluruhan. Menurut artikel ini, metode ini adalah alternatif kreatif untuk pendidikan yang lebih relevan dan responsif.",
        references: "Bell, S. (2010). Project-based learning for the 21st century: Skills for the future. The Clearing<br>House: A Journal of Educational Strategies, Issues and Ideas, 83(2), 39–43. <br><br>Bell, S. (2010). Project-based learning for the 21st century: Skills for the future. The Clearing<br>House: A Journal of Educational Strategies, Issues and Ideas, 83(2), 39–43."
    },
    {
        id: 2,
        title: "Evaluasi Kerusakan Hutan dan Kontribusinya Terhadap Peristiwa Banjir dan Longsor di Sumatera 2025",
        author: "Nadira Wulan Arista, Nurtaza, Bagas Satriantono",
        prodi: "Matematika & Manajemen Rekayasa", // 1 Prodi
        year: "2025",
        category: "Artikel", // Jenis
        file_url: "assets/BagasSatriantono.pdf",
        abstract: "Akhir November 2025 menjadi momen paling kelam bagi masyarakat Sumatera. Menurut Badan Nasional Penanggulangan Bencana (BNPB), banjir bandang dan tanah longsor melanda Aceh, Sumatera Utara, dan Sumatera Barat pada 25-27 November, menewaskan 1.068 orang, 190 orang hilang, dan 7.000 warga mengalami luka-luka. Ribuan rumah hancur atau terendam air, jalan-jalan putus, listrik mati, dan kehidupan sehari-hari lumpuh total.",
        references: "-"
    },
    {
        id: 3,
        title: "Pengaruh Teknologi Digital Terhadap Proses dan Hasil Belajar Peserta Didik",
        author: "Mutiara Surya Lestari, Juraidah Gultom, Fadila Dwi Rahmadani",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel",
        file_url: "assets/MutiaraSuryaLestari.pdf", // Pastikan file ada
        abstract: "Kolaborasi antara dua kekuatan utama generasi dewasa yang matang dan generasi muda yang kaya akan inovasi dan ide masa depan sangat penting untuk kemajuan Indonesia dalam menghadapi perubahan zaman. Dengan kombinasi kedua komponen ini, Indonesia akan memiliki basis yang kuat untuk transformasi.",
        references: "-"
    },
    {
        id: 4,
        title: "Dampak Pembelajaran Daring tehadap Motivasi Belajar Mahasiswa",
        author: "Luthfiyah Shofi, Tri Aprilyani, Eki Sardiawan",
        prodi: "Manajemen Rekayasa", // Contoh 2 Prodi
        year: "2025",
        category: "Artikel", // Jenis
        file_url: "assets/LuthfiyahShof.pdf", 
        abstract: "Artikel ini melihat masalah dengan pembelajaran konvensional di sekolah, yang sering membuat siswa menjadi pasif. Akibatnya, ini menghambat siswa untuk belajar berpikir kritis, kreatif, dan fleksibel, yang sangat penting dalam kehidupan modern. Pembelajaran berbasis proyek, memungkinkan siswa berpartisipasi secara aktif dalam proyek kontekstual yang berkaitan dengan masalah dunia nyata. Metode ini melibatkan siswa dalam proses perencanaan, pelaksanaan, dan evaluasi. Ini menggabungkan teori dengan praktik sehari-hari untuk mendukung pembelajaran berkelanjutan. Hasilnya, siswa belajar lebih banyak tentang tanggung jawab, kreativitas, komunikasi, dan kerja sama, yang meningkatkan kualitas pendidikan secara keseluruhan. Menurut artikel ini, metode ini adalah alternatif kreatif untuk pendidikan yang lebih relevan dan responsif.",
        references: "-"
    },
    {
        id: 5,
        title: "Memperkuat Pendidikan Indonesia Di Era Transformasi Digital",
        author: "Adiniya Nur Atiqah, Rena Thereeana Putri, Arum Yulia Khansa",
        prodi: "Matematika & Manajemen Rekayasa", // 1 Prodi
        year: "2025",
        category: "Artikel", // Jenis
        file_url: "assets/AdiniyaNurAtiqah.pdf",
        abstract: "Pendidikan memainkan peran yang sangat penting dalam membentuk kualitas individu dan menentukan arah kemajuan suatu bangsa. Di Indonesia, pendidikan tidak hanya dianggap sebagai penyebaran pengetahuan, tetap juga sebagai alat untuk membangun karakter, mengembangkan potensi, dan menyiapkan generasi yang mampu menghadapi tantangan di seluruh dunia. Sistem pendidikan harus terus berubah agar tetap relevan dan bermakna di tengah perkembangan teknologi dan perubahan sosial yang cepat.",
        references: "-"
    },
    {
        id: 6,
        title: "Pemanfaatan Gamifikasi untuk Mengurangi Ketergantungan Gadget pada Siswa",
        author: "Asinah Fitria & Azty Auror Amellia Ferryana",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel",
        file_url: "assets/AsinahFitria.pdf", // Pastikan file ada
        abstract: "Ketergantungan siswa terhadap gadget merupakan masalah yang semakin serius seiring dengan kemajuan teknologi digital yang cepat, dan hal ini berpotensi memberikan dampak buruk pada kemampuan berkonsentrasi saat belajar, kesehatan mental, serta hasil akademik. Penelitian ini bertujuan untuk meneliti penggunaan gamifikasi sebagai metode pembelajaran inovatif guna mengurangi penggunaan gadget yang tidak produktif pada siswa. Metode yang digunakan adalah pendekatan deskriptif kualitatif dengan desain implementatif, melalui kajian literatur dan penerapan pembelajaran berbasis gamifikasi. Subjek penelitian adalah siswa Sekolah Menengah Pertama (SMP) yang memiliki tingkat penggunaan gadget yang cukup tinggi. Data dikumpulkan melalui observasi, kuesioner sebelum dan setelah penerapan gamifikasi, serta dokumentasi kegiatan pembelajaran. Gamifikasi diterapkan dengan menyisipkan unsur permainan seperti poin, tingkatan, tantangan, dan penghargaan ke dalam aktivitas belajar. Hasil penelitian menunjukkan bahwa penerapan gamifikasi dapat meningkatkan motivasi belajar, partisipasi aktif siswa, serta membantu mereka mengelola penggunaan gadget secara lebih terarah dan produktif. Oleh karena itu, gamifikasi bisa menjadi alternatif strategi yang efektif untuk mengurangi ketergantungan gadget pada siswa, asalkan didukung oleh peran aktif dari guru dan orang tua. ",
        references: "-"
    },
    {
        id: 7,
        title: "Resistensi Antibiotik : Ancaman Serius bagi Kesehatan",
        author: "M.Nizar Aditya, Siti Rahmah, Siti Azira Sari",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/SitiRahmah.pdf", 
        abstract: "Dalam dunia medis, antibiotik adalah penemuan penting yang sangat membantu dalam pengobatan infeksi bakteri. Namun, keberhasilan antibiotik saat ini diancam oleh resistensi antibiotik, yaitu kondisi ketika bakteri mengalami perubahan genetik sehingga menjadi kebal terhadap antibiotik yang sebelumnya efektif. Dalam artikel ini, resistensi antibiotik dibahas sebagai masalah kesehatan global dan nasional, dengan menyoroti luasnya masalah, penyebab utamanya, dampaknya terhadap pelayanan kesehatan, dan upaya pengendaliannya di Indonesia. Data dari World Health Organization (WHO) menunjukkan bahwa resistensi antibiotik telah menyebabkan jutaan kematian di seluruh dunia, baik secara langsung maupun tidak langsung. Studi global memperkirakan tren ini akan meningkat di masa depan. Faktor utama penyebab resistensi adalah penggunaan antibiotik yang tidak rasional, seperti penggunaan tanpa resep, dosis yang tidak tepat, dan durasi terapi yang tidak sesuai. Peraturan Menteri Kesehatan Nomor 28 Tahun 2021 tentang Pedoman Penggunaan Antibiotik dibuat oleh pemerintah Indonesia sebagai tanggapan atas ancaman ini. Artikel ini menegaskan bahwa pengendalian resistensi antibiotik memerlukan pendekatan holistik yang melibatkan kebijakan yang kuat, praktik klinis yang bertanggung jawab, dan edukasi masyarakat untuk menjaga efektivitas antibiotik dan kualitas pelayanan kesehatan.",
        references: "-."
    },
    {
        id: 8,
        title: "Generasi Z Bukan Lagi Pengguna AI, Tapi 'Melek AI'",
        author: "Khoinrunnas, Annisa Salsabila, Harfina Nur Chamara",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/Khoirunnas.pdf", 
        abstract: "Perkembangan kecerdasan buatan (Artificial Intelligence/AI) telah membawa perubahan signifikan dalam berbagai aspek kehidupan manusia, termasuk cara belajar, bekerja, dan berinteraksi sosial. Generasi Z, sebagai generasi yang lahir dan tumbuh di tengah pesatnya kemajuan teknologi digital, tidak lagi berperan hanya sebagai pengguna AI, tetapi mulai memahami cara kerja, keterbatasan, serta implikasi sosial dari teknologi tersebut. Artikel ini bertujuan untuk mengkaji pergeseran peran Generasi Z dari pengguna pasif menjadi generasi yang melek AI, dengan menekankan pada konsep literasi AI, karakteristik Generasi Z, serta peran mereka dalam inovasi berbasis AI. Selain itu, artikel ini juga membahas peluang dan tantangan yang dihadapi Generasi Z, khususnya terkait isu etika, privasi, dan tanggung jawab sosial dalam pemanfaatan AI. Melalui kajian konseptual dan analitis, artikel ini menegaskan pentingnya penguatan literasi AI sebagai kompetensi masa depan agar Generasi Z mampu memanfaatkan kecerdasan buatan secara kritis, bijak, dan berkelanjutan.",
        references: "-"
    },
    {
        id: 9,
        title: "Analisis Kesantunan Berbahasa Mahasiswa dalam Kolom Komentar Media Sosial",
        author: "Andani Syahira Maharani, Silva Zuleika, Muhammad Ihsan Nabawy",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/SilvaZuleika.pdf", 
        abstract: "Perkembangan media sosial telah mengubah cara mahasiswa berkomunikasi dan mengekspresikan pendapat di ruang publik. Kolom komentar menjadi tempat interaksi yang terbuka dan cepat, namun sering kali diwarnai penggunaan bahasa yang kurang santun. Kondisi ini menunjukkan adanya pergeseran norma berbahasa dalam komunikasi daring yang cenderung lebih bebas dibandingkan komunikasi langsung. Kesantunan berbahasa merupakan aspek penting dalam menjaga etika dan keharmonisan komunikasi, terutama bagi mahasiswa sebagai kelompok terdidik. Penggunaan bahasa yang tidak santun di media sosial dapat menimbulkan konflik dan mencerminkan rendahnya kesadaran berbahasa. Oleh karena itu, diperlukan kajian untuk memahami bagaimana bentuk dan tingkat kesantunan berbahasa mahasiswa dalam kolom komentar media sosial.",
        references: "-"
    },
    {
        id: 10,
        title: "Rapor Pendidikan Nasional 2025 sebagai Instrumen Penilaian Mutu Pendidikan Indonesia",
        author: "YOSINA ANTHONETA PATTIKAWA, NABILA PUSPANINGRUM, SINA CHURNIAWAN",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/NabilaPuspa.pdf", 
        abstract: "Mutu pendidikan merupakan aspek fundamental dalam pembangunan nasional karena berperan langsung dalam membentuk sumber daya manusia yang berkualitas, berkarakter, dan mampu bersaing secara global. Untuk menjamin mutu pendidikan, diperlukan sistem evaluasi yang objektif, komprehensif, dan berbasis data. Evaluasi pendidikan tidak hanya berfungsi untuk mengukur hasil belajar peserta didik, tetapi juga untuk menilai proses pembelajaran, lingkungan belajar, serta efektivitas kebijakan pendidikan yang diterapkan (OECD, 2023).",
        references: "-"
    },
    {
        id: 11,
        title: "Ilmu Pengetahuan sebagai Landasan Inovasi di Masa Depan",
        author: "Dewaty & Alya Oktafia",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/AlyaOktafia.pdf", 
        abstract: "Ilmu pengetahuan merupakan penentu utama arah pembangunan negara. Dalam konteks globalisasi berupa peningkatan teknologi, persaingan ekonomi, dan berbagai isu multidimensi, Indonesia perlu memperkuat basis pengetahuannya sebagai sumber utama inovasi. Kemampuan negara untuk secara strategis mengendalikan, mengembangkan, dan mengintegrasikan ilmu pengetahuan dan teknologi sesuai dengan kebutuhan strategis nasional sangat terkait dengan pembangunan nasional berkelanjutan. Tuntutan pemberdayaan sumber daya manusia, peningkatan transformasi ekonomi, mewujudkan swasembada teknologi, dan pemenuhan visi Indonesia Emas 2045 menjadikan ilmu pengetahuan sebagai salah satu pilar utama dalam konteks Indonesia. Pengembangan inovasi berdasarkan penelitian dan temuan ilmiah yang ketat merupakan persyaratan penting untuk meningkatkan daya saing negara baik di tingkat regional maupun global.",
        references: "-"
    },
    {
        id: 12,
        title: "Pengembangan program studi di institut teknologi Batam prodi manajemen rekayasa dalam menghadapi tantangan industri global",
        author: "Bojesman",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/Bojesman.pdf", 
        abstract: "Pengembangan pendidikan tinggi menjadi faktor penting dalam menyiapkan sumber daya manusia yang mampu bersaing di tengah dinamika industri global. Institut Teknologi Batam (ITEBA) sebagai perguruan tinggi berbasis teknologi berupaya menjawab tantangan tersebut melalui pengembangan Program Studi Manajemen Rekayasa. Program studi ini dirancang untuk mengintegrasikan keilmuan teknik dan manajemen guna menghasilkan lulusan yang kompeten, adaptif, dan berdaya saing global. Artikel ini bertujuan untuk mengkaji pengembangan Program Studi Manajemen Rekayasa di ITEBA dalam menghadapi tantangan industri global, ditinjau dari aspek kurikulum, kompetensi lulusan, prestasi akademik, akreditasi, serta kolaborasi internasional. Hasil kajian menunjukkan bahwa Program Studi Manajemen Rekayasa ITEBA memiliki komitmen kuat dalam meningkatkan kualitas pendidikan melalui penerapan kurikulum berbasis Outcome Based Education (OBE), pencapaian akreditasi “Baik Sekali”, serta keterlibatan aktif dalam kegiatan akademik dan kerja sama internasional. Upaya tersebut diharapkan mampu menghasilkan lulusan yang siap menghadapi persaingan industri global dan berkontribusi dalam pembangunan nasional.",
        references: "-"
    },
    {
        id: 13,
        title: "Inovasi Pendidikan Tinggi: Mengapa Program Manajemen Rekayasa Semakin Dibutuhkan?",
        author: "Nasywa Nathaniela, Nabila Husnaya, Ersa Ramadhani Irawan",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/NasywaNathaniela.pdf", 
        abstract: "Pendidikan tinggi mengalami perubahan besar karena kemajuan teknologi digital, termasuk kebutuhan akan program studi yang menggabungkan keterampilan teknis dan manajemen. Tujuan dari penelitian ini adalah untuk melihat bagaimana mahasiswa melihat Program Studi Manajemen Rekayasa (MR) di era digital, serta bagaimana metode pembelajaran telah berkembang. Penelitian ini menggunakan pendekatan kuantitatif deskriptif dan menggunakan Google Form untuk membuat survei online. Mahasiswa MR di Institut Teknologi Batam (ITEBA) menerima angket. Jumlah responden adalah 20 siswa dari tahun akademik 2022–2025. Data dianalisis dengan menggunakan statistik deskriptif seperti distribusi frekuensi dan persentase. Hasil penelitian menunjukkan bahwa sembilan puluh persen responden menganggap Program MR semakin penting di era digital, dan sebagian besar menganggap metode pembelajaran saat ini sangat inventif. Kompetensi yang paling dianggap penting adalah manajemen proyek, berpikir sistem, analisis data, dan literasi teknologi. Temuan ini mengimplikasikan perlunya penguatan kurikulum berbasis proyek nyata, integrasi teknologi digital, serta pengembangan soft skills untuk meningkatkan daya saing lulusan.",
        references: "-"
    },
    {
        id: 14,
        title: "Pengaruh Media Sosial Terhadap Kesehatan Mental Mahasiswa Indonesia",
        author: "Laura Deska Putri, Cut Sarah Nursyakira, Pasya Gunanta",
        prodi: "Manajemen Rekayasa",
        year: "2025",
        category: "Artikel", 
        file_url: "assets/LauraDeskaPutri.pdf", 
        abstract: "Penggunaan media sosial telah menjadi bagian penting dalam kehidupan mahasiswa di Indonesia. Media sosial dimanfaatkan untuk hiburan, komunikasi, dan memperoleh informasi, namun penggunaan yang berlebihan dapat berdampak negatif terhadap kesehatan mental. Penelitian ini bertujuan untuk menganalisis pengaruh penggunaan media sosial terhadap kesehatan mental mahasiswa Indonesia. Penelitian menggunakan metode kuantitatif dengan pendekatan survei. Data dikumpulkan melalui kuesioner daring menggunakan skala Likert lima poin yang mengukur intensitas penggunaan media sosial serta aspek kesehatan mental, meliputi kepercayaan diri, stres, dan kecemasan. Responden penelitian adalah mahasiswa aktif di Indonesia yang menggunakan media sosial minimal dua jam per hari, dengan teknik purposive sampling. Hasil penelitian menunjukkan bahwa penggunaan media sosial yang berlebihan meningkatkan tingkat stres dan kecemasan serta menurunkan kepercayaan diri mahasiswa. Faktor utama yang memengaruhi kesehatan mental adalah perbandingan sosial dan paparan konten dengan standar kehidupan ideal. Oleh karena itu, diperlukan pengelolaan penggunaan media sosial secara bijak untuk menjaga kesehatan mental mahasiswa.",
        references: "-."
    },
];