// alert("Hello Dünya"); (Sayfayı her actıgında uyarı ekranı cıkar.)

// console.log("DENEMELERR"); // Sitedeki inceleme kısmında console yerine yazdıgımız gelir.
// console.clear(); // Konsolu tamamen temizler.

// console.warn("uyarı kardes");
// console.error("Hata kardess");

// var yas2; diyerek aslında bir tanımlama yapmış oluruz.AMA tanımlamalar sayısal değerle başlayamaz. var 32yas; (olmaz). For while gibi şeylerde olmaz.

// var ad_soyad = "Ahmet Div";
// var adSoyad = "Mert Yasar";

// console.log(ad_soyad);
// console.log(adSoyad);

// JS de büyük harf küçük harf duyarlılığı vardır.

// Referans tipleri (Object tanımlaması: İçerisinde fazla bilgiler içeren nesneleri tanımlarız.)


// let address = {
   // city: "İStanbul",
   // country: "TR"

// }
// console.log(typeof address)

// Array (Dizilerde veri tutma)

// let veriler = ["ALİ","VELİ","MERT",4,null];
// console.log(veriler);
// console.log(typeof veriler);

// Function (Fonksiyon tanmlama)

//var Calculator = function(){
   // return 0
// }

// console.log(typeof Calculator);

// Type Conversion - Tür Dönüşüm Normalde let num1 = "5"; dersek console da bu bir string olacak eğer bunu bir sayıya dönüştürmek istiyorsak

// let num1 = Number("30");
// let num2 = Number("42");

// console.log(num1+num2);

// Yazarsak number türüne dönüştürmüş oluruz. Tam tersi içinde geçerlidir başa "String" gelir.

// Type Conversion 2 - Tür Dönüşümleri 2 Boolean to String

// let val;

// val = String(true);
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// val2 = false;
// console.log(val2);
// console.log(typeof val2);

// Array ler için ise

// val3 = String([1,2,3,4,5,6]);
// console.log(val3);
// console.log(typeof val3);
// console.log(val3.length); (Böylelikle array aslında stringe çevirmiş olduk. Dİrekt array olarak vermek istersek normal düz şekilde yazıcaz.)

// toString komutu ilede bir veriyi stringe çevirebiliriz.

// val = (10).toString();
// console.log(val.length);
// console.log(typeof val);

// Integer = tam sayı , float = ondalıklı sayı. JS de de parseInt ve parseFloat komutları ile olur.

// val1 = parseInt("45");
// val2 = parseInt("43.2");
// val3 = parseFloat(32.55432);

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val2.toFixed(6)); (Yazdıgın sayının yanına o kadar "0" ekler.)

// Bazı istisnalar 

// val = Number(true);
// val1 = Number(false);
// val2 = Number(null);
// val3 = Number("a");
// val4 = Number([1,2,3,4,5,6]);

// console.log(val);
// console.log(typeof val);

// console.log(val1);
// console.log(typeof val1);

// console.log(val2);
// console.log(typeof val2);

// console.log(val3);
// console.log(typeof val3); Console kısmında hata verecek cünkü "a" bir sayı değildir NaN (Nothing number)

// console.log(val4);
// console.log(typeof val4);

// Arithmetic Operators

// let op;

// const a = 9;
// const b = 4;

// op = a+b;
// console.log(op);

// op = a*b;
// console.log(op);

// op = a/b;
// console.log(op);

// op = a%b;
// console.log(op);

// op = ++a;
// console.log(op);

// op = --b;
// console.log(op);


// Operatorler
// let op;
// let op0;
// let op1;
// let op2;

// const a = 9;
// const b = 5;
// const c = 3;
// const f = 3;

// let d = 2;

// // Assigment Operators - Atama Operatorleri

// op += c; // op = op + c anlamına gelir.
// console.log(op);
// op -= c; // op = op - c ""  "".
// console.log(op);

// // Comparion Operators - Karsılastırma Operatorleri
// // "==" sadece değer eşitliği yapar. "===" hem değer hemde veri tipi eşitliği yapar.
// // "!=" değil anlamına gelir.
// // > ve < işaretleride vardır. >= , <= .


// op = a==b;
// console.log(op);

// op = c==f;
// console.log(op);

// op = c===f;
// console.log(op);

// op = 5 ==="5";
// console.log(op);

// op = a != b;
// console.log(op);

// op = 4>= 4,
// console.log(op);

// op = 4 >= 5;
// console.log(op);

// // Logical Operators - Mantıksal Operatorler
// // && (and) ikiside doğru olmalı
// op = (a>b) && (a>c);
// console.log(op);

// // || (or) ikisinden biri doğru olsa yeter
// op = (a>b) || (a<c);
// console.log(op);

// // ! (NOT- Değili)
// op = !(a>b);
// console.log(op);

// Veri Tİpleri - Numbers

// let num;

// num = 19;
// console.log(num);

// num = "19";
// console.log(num);

// num = Number("19");
// console.log(num);

// num = parseInt(10.3)
// console.log(num);

// num = parseFloat(10.321);
// console.log(num);

// num = isNaN("10");
// console.log(num);

// let num1 = 10.32455
// num1 = num1.toPrecision(4); (İçine yazdıgımız sayıya göre sayının ilk o kadar rakamı göüzükür.)

// console.log(num1);

// Veri Tipleri - Math

// num = Math.PI;
// console.log(num);  Pİ sayısı alır.

// num = Math.round(2.4);  Sayıyı yuvarlar.
// console.log(num);

// num = Math.ceil(3.1);   Sayıyı bir üst tam sayıya yuvarlar.
// console.log(num);

// num = Math.floor(5.9);  Sayıyı bir alt tam sayıya yuvarlar.
// console.log(num);

// num = Math.sqrt(25);    Sayının kareköünü alır.
// console.log(num);

// num = Math.pow(2,5);    Sayının üssünü alır.
// console.log(num);

// num = Math.abs(-332);   Sayının mutlak değerini alır.
// console.log(num);

// num = Math.min(2,3,2,1,-4); Girilen sayılar arasında en küçüğünü alır.
// console.log(num);

// num = Math.max(-2,-1,-5,-10,0); Girilen sayılar arasında en büyüğünü alır.
// console.log(num);

// num = Math.random();    Rastgele sayı üretir.
// console.log(num);

// Veri Tipleri - Strings

// const firstname = "Ayhan";
// const lastname = "Işık";
// const age = "36";

// let str;

// // String concatenation (String birleştirme işlemi)

// str = firstname + " " + lastname;
// console.log(str);

// str = "my name is" + firstname + " " + lastname + " " + "my age is" + " "+ age + "Paris\te yaşıyorum";
// console.log(str);

// str2 = firstname.concat(" ", lastname); (Öncekinin daha kısa yazma biçimidir.)
// console.log(str2);

// str = "COk uzun bir metin"; 
// str = str.length; (Verilen metnin karakter sayısını söyler.)
// console.log(str);

// str = "deneme metnidir";
// str = str.toUpperCase(); (Verilen metnin tamamını büyük harfe çevirir.)
// console.log(str);

// str = "DENEMe MetNİDİR";
// str = str.toLowerCase(); (Verilen metnin tamamını küçük harfe çevirir.)
// console.log(str);

// // str =  "Deneme metnidir bu";
// // str = str[4]; (Metindeki istediğimiz indexi verir.)
// // console.log(str);

// // str = str.indexOf("D");   (Aynı mantık..)
// // console.log(str);

// // substring (Verilen metni İstediğmiz yere kadar yazar)

// str = str.substring(0,4);
// console.log(str);

// // Slice (Buda substring ile benzerdir.)

// str = str.slice(0,6);
// console.log(str);

// str = "  John  Wick ."

// // String replace (Stringlerin yerini değiştirir.)

// // str = str.replace("John","Elsa");
// // console.log(str);

// // trim (cümlenin herhangi bir yerinde boşluk var onları silmeye işe yarar.)

// str = str.trim();
// console.log(str);

// split (Aralarında bulunan virgüllere göre listeye ayırır )

// let hobbies = "sinema,gym,film,dizi";

// hobbies = hobbies.split(",");
// console.log(hobbies);


// String -> Template Literal

// const fullname = "Iron man";
// const city = "Paris";
// const birthYear = 1998;

// let str;
// str = "my name is " + fullname + " " + "I live in " + city + " my age is " + (2026-birthYear);
// console.log(str); // Bu bir amele yöntemidir. Bunun daha kolay yolu için Template literal kullancaz.

// str = `my name is ${fullname} I"m ${2026-birthYear} years old and. I live in ${city}`;
// console.log(str); // Böyle yaparak daha profesyonelce yaptık. $ işaretini koymalıyız.

// Veri Tİpleri -Array-

// let names = ["Ahmet","Salim","Mert","Erdogan"];
// let birth = [1994,1996,2000,2004];
// let mix = ["Cem","21","Faruk",23,null,undefined,["spor"]];

// console.log(names);
// console.log(birth);
// console.log(mix);

// console.log(names[1]); // Böyle yaparak names adılı dizindeki 1. indexteki elemanını görmüş olıyoruz. (Get array item)

// names[1]= "Carl"; // Böyle yaparak dizindeki elemanı bir başka elemanla değiştirmiş olduk. Eğer listede olmayan bir index girersek arayı empty olarak algılayıp istediğimiz yere ekleme yapmış olucak.

// console.log(names);

// birth.push(1999); // Buda dizine eleman eklemiş oluruz. EN sona yazılır eklenen eleman.
// console.log(birth);

// birth.unshift(2019); // Buda EN başa eleman ekler.
// console.log(birth);

// names.pop(); // pop ilede EN sondaki elemanı silmiş oluruz.
// console.log(names);

// names.shift(); // shift ilede EN baştaki elemanı silmiş oluruz.
// console.log(names);

// let IndexItem = names.indexOf("Carl"); // Belirtilen index in kaçıncı oldugunu söyler.
// console.log(IndexItem); // !!! Olmayan elemanı yazarsak bize -1 değerini döndürmüş olucaktır.

// // reverse ile dizeyi terst çevirir. 
// // sort ile dizeyi alfabeye göre sıralar.
// // concat ile dizeleri birleştirmiş oluruz.

// let con = birth.concat(names);
// console.log(con);

// Loops (Donugler)

// for(let i=1;i<10;i++){ // (1 den baslatarak 10 dan kücük olan tam sayıları yazdır)
//    console.log(i);
// }

// console.log("ayırıcı");

// for(let a=4;a<14;a++){
//    if(a==6){
//       console.log("EN sevdiğim rakamdır bu." + a)
//       continue // Döngü devam eder
//    }

//    if(a=9){
//       console.log("En sevmediğim rakamdırbu ." + "9")
//       break // DÖngü sonlanır.
//    }
//    console.log(a);
// }

// let a = 0;
// while(a<12){
//    console.log(a);
//    a++;
// }

// let i = 0;
// do{
//    console.log(i);
//    i++
// }while(i<15)

// let toplam = 0;
// for (let i =10;i>0;i--){ // Burada da toplama işlemini yaptık
//    toplam += i 
// }
// console.log(toplam);

// let val = "";
// for(let i=0;i<5;i++){

//    for (let j=0;j<5;j++){
//       console.log(`i : $(i) j : $(j)`)
//    }
// }


// window object - DOM
// Console a window yazarak window objectine ulasabiliriz.

// let val;

// var a = 10;

// val = window
// console.log(val) // Bunu yazarak aslında yukarda tanımladımız "a" değerini console daki window un icine entegre etmiş olduk.

// let val2;
// function Hi(){
//    return 0;
// }
// val2 = window
// console.log(val2)

// // var accept = prompt("Kabul ediyor musun"); // Ekrana bir prompt metni yazmış oluruz.
// // console.log(accept);

//  onay = confirm("Are you sure ?"); 

// if(onay){
//    console.log("Kullanıcı onayladı")
// }else{
//    console.log("Kullanıcı reddetti")
// }
// console.log(onay); // BUda yine soru kutucugu yapar.

// val1 = window.location; // ÖNEMLİ!!! XSS saldırılarında bu location bilgileri bizim icin önemlidir.
// console.log(val1);

// val1 = window.location.href; // Tarayıcıdaki adresi cekmis oluruz.
// console.log(val1);

// window.location.xxxxx bu kısma protocol , hostname , host gibi verileri ekleyerek istediğimiz bilgileri çekebiliriz.

// window.location.href="https://www.linkedin.com/in/ahmet-dvli/" // BU ise web sayfası yönlendirmedir.

// window.location.reLoad() // İle de sayfayı aralıksız yenilemiş oluruz

// val = window.navigator; // Tarayıcı ile ilgil bilgilere ulaasır.
// console.log(val)

// val2 = window.document; // Sayfanın html kodlarını falan cookie leri görebiliyoruz.
// console.log(val2);

// val3 = window.document.getElementById("header"); // Burda da html kodunda belrili bir id yi arıyorsak bunu yazarak o kişinin bilgilerini çekmiş oluruz.
// console.log(val3);

// Scoped (Global)

// var username = "MErt";
// console.log(username);
// console.log(window);

// var surname = "Işık";
// function printSurname(){
//    console.log(surname);
// }
// printSurname();

// // Scoped (Local) Globale göre daha öncelikli olurlar. Dışarıdan müdahele edilemezler.

// function localName(){
//    var username = "Yaren";
//    console.log(username)
// }
// localName();

// function localUsername(){
//    var username = "İlkkan";
//    var age = "35";
//    console.log(username,age);
// }
// localUsername();

// console.log(username); // Bunu denediğimizde hata alıcaz. Çünkü dışarıdan çağırılamazlar.(Local)

// Scoped (Block)

// var username2 = "Martin";
// var age = "24";

// if(true){
//    var age = "30";
//    console.log("block scope: ", username2,age); // Bunu konsola böyle çağırırsak önceki yazdığımız age i saymayacaktır , fonskiyonun içinde yazana bakacaktır.  
// }
// console.log(age); // Bakın burada da yine kabul etmedi.

// if(true){
//    var product = "disko kek";
//    let skt = "2028";
//    const colour = "brown";
//    console.log("block scope: ", product,skt,colour); // Yine buradan erişebiliriz.
// }
// console.log(colour); // Erişemedik
// console.log(skt); // Yİne erişemedik. Çünkü sadece "var" komutuyla tanımlananlar erişelebilir. "let", "const" gibi ifadelerle erişemeyiz.

// Function (Fonksiyonlar)

// function ageCalculate(birtDate, currentYear){
//    currentYear = new Date().getFullYear(); // Şuanki yıl bilgisini çeker.Uzantıya yazdıgınıza baglı olarak saat gün bilgilerinide alabilirsiniz.
//    console.log("Şuanki yıl: " + currentYear);
//    return currentYear - birtDate
// }
// let age = ageCalculate(2007);
// console.log("yaşınız: " + age);