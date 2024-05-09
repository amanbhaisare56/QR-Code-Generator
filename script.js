let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");


// document.getElementById("btn").onclick = function() {GenerateQR()};

function GenerateQR(){
  document.getElementById("btn").qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value ;
  imgBox.classList.add("show-img")
}