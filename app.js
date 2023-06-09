let tutulanSayi = Math.trunc(Math.random() * 10);
console.log(tutulanSayi);
// random ile 0-0.99 arasında bir sayı veriyor trnc metodu ile tam sayı yapılıyor


const input = document.querySelector("#input");
const button = document.getElementById("button");
const pWrite = document.querySelector("#write");
const hakkim = document.querySelector("#hak");
let counter = 3;         
 let eski = "0";
 let yeni = "10"
 button.addEventListener("click", (e) => {
   counterr();
   if (input.value > 10 || input.value < 0) {
     alert("İstenilen Aralıkta Sayı Giriniz");
   } else if (input.value == tutulanSayi) {
     alert("TEBRİKLER KAZANDINIZ");
    //  ........kazandıktan sonra işlemin durması için ise disabled yapıyoruz.................
     input.disabled = true;
   } else if (input.value > tutulanSayi) {
       yeni = input.value            
     pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
   } else if (input.value < tutulanSayi) {
       eski = input.value
     pWrite.innerHTML = `${eski} ile ${yeni} arasında bir sayı giriniz`;
   }
   input.value = "";
 });
 

const counterr = () => {
  counter--;
  if (counter > 0) {
    hakkim.innerHTML = `${counter} Hakkınız Kaldı`;
    input.focus();
  } else {
    hakkim.innerHTML = `Hakkınız Kalmadı Yeniden Oynamak İçin Sayfayı Yenileyiniz`;
    input.disabled = true;
  }
};

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    button.click();
  }
  input.value = "";
});
