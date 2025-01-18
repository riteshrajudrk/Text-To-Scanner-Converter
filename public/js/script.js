let imgBox = document.querySelector("#imgBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let button = document.querySelector("#button");

button.addEventListener("click",() => {
    generateQR();
})

function generateQR(){
    if(qrText.value){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        alert("Enter any text ou URL");
    }
}

