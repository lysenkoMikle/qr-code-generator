// function for generate qr code 
function generateQRCode() {
    let url = document.getElementById("qrURL").value;
    if (url){
        let qrcode = document.querySelector('.qr');
        qrcode.innerHTML = '';
        new QRCode(qrcode, url);

        document.querySelector('.qr-img').style.display = 'block';
    } else {
        alert('Please enter a valid URL');
    }
}

function resetQR() {
    document.getElementById("qrURL").value = '';
    document.querySelector('.qr-img').style.display = 'none';
}