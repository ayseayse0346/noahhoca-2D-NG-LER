/* <!--! WHİLE DÖNGÜSÜ-----
    let sayac=1 sayacın -whilen dışında- dışarda tanımlanması gerekir.
    while (koşul){
-
-
-
-
-
sayac++ içerde bir yerde döngü değerini güncellemmiz gerekir.
} -->

<!-- ? NOT =for adetli yerlerde yani tekrarlarda  
while ise komplex şartlarda     (a>b && a<c gibi)kullanılır. 
--> */


// ?ÖRNEK1:
let i = 1

while(i<=10){
    console.log(i,"chort16");
i++
}
console.log("döngü bitti");

for (let i = 1; i<=10; i++){
    console.log(i,"chort16");
}
console.log("döngü finish");


// ?ÖRNEK2:
//? Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

// let sayı = prompt("0-100 arasında bir sayı giriniz:")

// if (sayı<0 || sayı>100){
//     alert("sayı 0-100 arasında değil")
// } //tek başına karar yapıları ile tekrarlama işlemi yapılamaz.tekrar varsa döngü vardır. karar yapısı kontrol eder ve duruma göre programın akışını yönlendiri. ama tekrar yaptırmaz.

//   let sayı1 = +prompt ("0-100 arasında bir sayı giriniz:")

//   while (sayı1<0 || sayı1>100){
// console.log("girilen sayı 0-100 arasında olmalıdır.");
// sayı1 = +prompt ("0-100 arasında bir sayı giriniz:")
// if (sayı1==="q"){
//     break
// } bunu yaptığımızda q bas çık anlamında burdaki promtun başındaki + silmelisin.
//   }

//   console.log("girilen sayı:",sayı1);


//   aynı örneği for ile de yaptık:
  let sayı2 = +prompt ("0-100 arasında bir sayı giriniz:")

  for ( ;sayı2<0 || sayı2>100 ;){
console.log("girilen sayı 0-100 arasında olmalıdır.");
sayı2 = +prompt ("0-100 arasında bir sayı giriniz:")
  }

console.log("girilen sayı:",sayı2);




