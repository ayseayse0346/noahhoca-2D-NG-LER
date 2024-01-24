/* ----for  loop------- */
// eğer döngü false ise içeriye yani döngüye hiç girmez .
// !for döngüüsnde == veya != değildir operatörlerini genelde kullnamayız. sonsuz döngüye girme olasılığı yüksek.bu nedenle < ,<=,>,>=  işlemleri kullanırız. koşul olmazsada soznuz döngüye girer. eğer false ve falsy değerlerden biriyse şart kısmı döngüye girer.

// ? örnek: 5 kişinin notunu girerek ortlamasını hesaplayan kodu yazınız.

// for ( let i=1; i<=5; i++){
//     console.log(i);
// }
let toplam = 0 
let i =0
for ( let i=1; i<=5; i++){
        let not =+prompt(`${i} . notu giriniz:`)
        toplam+=not
}
console.log(toplam);
console.log(`ortalama :${toplam /(i) }`);

// ? örnek 2: ondan geri saymak ,geri yönde değişim

for (let i =10 ; i>=0; i--){
    console.log(i);
}

// ? örnek3: Aralık verme.

const n1 = 15
const n2 = 25
let sum = 0
if (n1>n2){
    console.log("n2 should be bigger than n1");
}
else{
    for ( let i = n1 ; i<=n2 ; i++){
sum = sum + i
    }
    console.log("Sum:" , sum);
}

// ! break gerektiğinde döngüden çıkmak için kullanırız. iflerle falan .

// ! continue seçtiğimiz yerleri durduru. orları teğet geçince devam eder. pas geçer yani seçtiğimiz yerleri. break ise döngüyü tamamen kırar.

// ? BREAK-CONTİNUE

for ( let i = 0 ; i<=10 ; i++){
    console.log(i);
    if ( i % 3){
        continue
    }
    if (i===7){
        break
    }
}