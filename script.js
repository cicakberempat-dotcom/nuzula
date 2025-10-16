// 1.pilih tombolberdasarkan ID-nya
cons tombolsapa =document.getelemenByid('sapaButton');
//2.   tambahkan 'even listener' untuk aksi 'click'
tombolsapa.addEvetListener('clik' , function() {
      // 3. jalankan kode ini ketika tombol di -klik
        alert('Halo! terima kasih sudah berkunjung...');
});
