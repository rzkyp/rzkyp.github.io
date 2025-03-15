const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

const createTrail = (x, y) => {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
    
    // Atur posisi awal
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    
    // Animasi ekor
    setTimeout(() => {
        trail.style.opacity = '1';
        trail.style.transform = `translate(-50%, -50%) scale(1.5)`;
    }, 0);
    
    // Hapus ekor setelah animasi selesai
    setTimeout(() => {
        trail.style.opacity = '0';
        trail.style.transform = `translate(-50%, -50%) scale(0.5)`;
        setTimeout(() => {
            trail.remove();
        }, 500); // Waktu untuk menghapus elemen
    }, 300); // Waktu untuk menunggu sebelum menghapus
};

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
    
    // Buat ekor setiap kali mouse bergerak
    createTrail(e.pageX, e.pageY);
});

  function sendwhatsapp(){
       var phonenumber = "+6282280462726";

       var name = document.querySelector(".name").value;
       var email = document.querySelector(".email").value;
       var nohp = document.querySelector(".nohp").value;
       var message = document.querySelector(".message").value;

       var url = "https://wa.me/" + phonenumber + "?text="
       +"*Hello Admin!!*"
       +"%0a%0a"
       +"*Name :* "+name+"%0a"
       +"*Email :* "+email+"%0a"
       +"*Nomor Handphone:* "+nohp+"%0a"
       +"*Message :* "+message
       +"%0a%0a"
       +"Terimakasih Assalamualaikum wr wb";

       window.open(url, '_blank').focus();
     }