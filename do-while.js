/*DO-WHİLE */

let sayac = 1
do{
    console.log("cjort16",sayac);
    sayac++
}while(sayac<=10)





//? ÖRNEK:
let devam ="e"
do{let vize = +prompt("lütfen vize notunu girniz:")
let final = +prompt("lütfen final notunu giriniz:")
let ortalama = vize * 0.3 + final * 0.7

 const sonuç= ortalama >=50 ? "geçti": "kaldı"
 console.log(sonuç);
devam =prompt("hesaplamauya devam etmek ister misiniz? e")
}while(devam==="e"|| devam==="E")
 console.log("uygulama kapanıyır.");

// !ekran görüntüsü aldım ordan düzelterek bak.do while döngüsüne
