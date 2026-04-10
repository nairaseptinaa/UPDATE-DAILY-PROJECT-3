function prosesPelacakan() {
    const nama = document.getElementById('inputNama').value;
    const container = document.getElementById('containerHasil');
    const totalCount = document.getElementById('totalAlumni');
    
    if (!nama) {
        alert("Mohon masukkan nama alumni!");
        return;
    }

    // Animasi Loading (Simulasi Scheduler)
    container.innerHTML = `
        <div class="flex flex-col items-center justify-center py-20">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700 mb-4"></div>
            <p class="text-red-700 font-medium">Mengekstrak Sinyal Identitas: ${nama}...</p>
        </div>
    `;

    setTimeout(() => {
        const generateRandomScore = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        // Logika Dinamis Prodi
        const inputLower = nama.toLowerCase();
        let prodi = "Informatika"; 
        if (inputLower.includes("ilkom") || inputLower.includes("komputer")) {
            prodi = "Ilmu Komputer";
        }

        const mockResults = [
            { sumber: 'PDDIKTI', posisi: `Alumni ${prodi}`, instansi: 'Univ. Muhammadiyah Malang', score: generateRandomScore(90, 99) },
            { sumber: 'LinkedIn', posisi: 'Software Engineer', instansi: 'Tech Industry', score: generateRandomScore(75, 88) },
            { sumber: 'Google Scholar', posisi: 'Researcher', instansi: 'Academic Publication', score: generateRandomScore(40, 65) }
        ];

        container.innerHTML = ''; 

        mockResults.forEach(res => {
            // Klasifikasi Skor (Fungsi 6)
            let labelStatus = "Tidak Valid";
            let colorStatus = "text-red-600";
            let borderColor = "border-red-200";

            if (res.score >= 85) {
                labelStatus = "Sangat Akurat";
                colorStatus = "text-green-600";
                borderColor = "border-green-500";
            } else if (res.score >= 60) {
                labelStatus = "Butuh Verifikasi";
                colorStatus = "text-yellow-600";
                borderColor = "border-yellow-500";
            }

            // Link Jejak Bukti (Simulasi Fungsi 7)
            const queryUrl = `https://www.google.com/search?q=${encodeURIComponent(nama + ' ' + res.sumber + ' ' + res.instansi)}`;

            container.innerHTML += `
                <div class="border-l-4 ${borderColor} bg-white p-5 rounded-r-xl shadow-sm border-t border-r border-b border-gray-100 flex justify-between items-center hover:shadow-md transition duration-300">
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="font-bold text-gray-800 text-lg">${nama}</h4>
                            <span class="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 uppercase font-bold tracking-widest">${res.sumber}</span>
                        </div>
                        <p class="text-sm text-gray-500 font-medium">${res.posisi} — ${res.instansi}</p>
                        
                        <a href="${queryUrl}" target="_blank" class="mt-3 inline-flex items-center text-[11px] text-blue-600 font-bold hover:text-blue-800 transition">
                            <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.827a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.1 1.1"></path></svg>
                            SIMPAN JEJAK BUKTI
                        </a>
                    </div>
                    <div class="text-right bg-slate-50 p-3 rounded-lg min-w-[100px]">
                        <div class="text-3xl font-black ${colorStatus}">${res.score}%</div>
                        <div class="text-[9px] font-black uppercase tracking-tighter text-gray-400">${labelStatus}</div>
                    </div>
                </div>
            `;
        });

        totalCount.innerText = "1";
    }, 1200);
}