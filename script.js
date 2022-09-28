let oyuncular=["Shane Larkin - 0","Metecan Birsen - 1","Şehmus Hazer - 2","Yiğitcan Saybir - 3","Onur Alp Bitim - 5","Cedi Osman - 6","Melih Mahmutoğlu - 10","Sadık Emir Kabaca - 12","Sertaç Şanlı - 15","Buğrahan Tuncer - 19","Furkan Korkmaz - 22","Alperen Şengün - 23","Ercan Osmani - 24"];
let resimler=["images/sl","images/mb","images/şh","images/ys","images/oab","images/co","images/mm","images/sek","images/sş","images/bt","images/fk","images/aş","images/eo"];
let bilgiler=["DeShane Davis Larkin, ABD asıllı Türk millî basketbolcu. Türkiye millî takımı ve Türkiye Basketbol Süper Ligi ile Turkish Airlines EuroLeague ekiplerinden Anadolu Efes forması giymektedir. Miami Üniversitesi için kolej basketbol oynadı.","Metecan James Birsen, eskiden Basketbol Süper Ligi takımlarından Fenerbahçe Beko takımında oynamış Türk basketbolcu. 2.05 boyundaki oyuncu uzun forvet ve kısa forvet pozisyonlarında görev almaktadır.","Şehmus Hazer, şutör guard pozisyonunda görev alan ve Fenerbahçe Beko'da forma giyen Türk basketbolcudur.","Yiğitcan Saybir, Türk basketbolcudur. Türkiye Basketbol Ligi takımlarından Anadolu Efes'te oynamaktadır. Uzun forvet pozisyonunda görev almaktadır.","Onuralp Bitim, Basketbol Süper Ligi'nde Frutti Extra Bursaspor takımında kısa forvet rolünde oynayan Türk profesyonel basketbol oyuncusudur.","Cedi Osman, NBA takımlarından Cleveland Cavaliers forması giyen Makedonya Asıllı Türk profesyonel basketbolcu. 2.01 boyundaki basketbolcu kısa forvet pozisyonunda görev alsa da gerektiğinde şutör gard ve uzun forvet pozisyonlarında da oynayabilmektedir.","Melih Mahmutoğlu, Türk profesyonel basketbolcudur. Basketbol Süper Ligi ve EuroLeague takımlarından Fenerbahçe'de oynamaktadır. 1.91 boyundaki oyuncu Şutör gard pozisyonunda görev almaktadır.","Sadık Emir Kabaca, Galatasaray'da uzun forvet olarak görev alan basketbolcudur.","Sertaç Şanlı Türk basketbolcu. İspanya Basketbol Ligi ve Euroleague takımlarından Barcelona'da oynamaktadır. Pivot pozisyonunda görev almaktadır.","Buğrahan Tuncer, Türk basketbolcu. Türkiye Basketbol Süperlig ve Eruoleague takımı olan Anadolu Efes'te oynamaktadır.","Furkan Korkmaz, NBA takımlarından Philadelphia 76ers forması giyen Türk profesyonel basketbolcudur. 2,04 metre boyundaki oyuncu şutör gard ve kısa forvet pozisyonlarında oynamaktadır.","Alperen Şengün, Türk profesyonel basketbolcudur. Pivot ve uzun forvet pozisyonlarında görev almaktadır. NBA ekiplerinden Houston Rockets forması giymektedir. Beşiktaş forması ile 2020-21 Basketbol Süper Ligi'nde normal sezonunun En Değerli Oyuncusu seçildi ve ligde MVP seçilen en genç basketbolcu oldu.","Ercan Osmani, Darüşşafaka Basketbol Takımı'nda uzun forvet olarak görev alan Arnavut asıllı basketbolcudur."];
let logo=["images/ae","images/fbb","images/fbb","images/ae","images/febs","images/c","images/fbb","images/gs","images/fcb","images/ae","images/p76e","images/hr","images/db"];
let oynadigiMac=["60","14","40","42","31","327","38","37","21","6","256","72","21"];
let button=document.getElementById("btnDegistir");
let sayi=Math.floor(Math.random()*13);
let resim=document.getElementById("resim");
let isim=document.getElementById("isim");
let bilgi=document.getElementById("bilgi");
let logoResim=document.getElementById("logoResim");
let oynadigiMacSayisi=document.getElementById("oynadigiMacSayisi");

isim.innerHTML=oyuncular[sayi];
bilgi.innerHTML=bilgiler[sayi];
resim.setAttribute("src",resimler[sayi]);
logoResim.setAttribute("src",logo[sayi]);
oynadigiMacSayisi.innerHTML=oynadigiMac[sayi];

button.addEventListener("click", ()=>{
    sayi=Math.floor(Math.random()*13);
    isim.innerHTML=oyuncular[sayi];
    bilgi.innerHTML=bilgiler[sayi];
    oynadigiMacSayisi.innerHTML=oynadigiMac[sayi];
    resim.setAttribute("src",resimler[sayi]);
    logoResim.setAttribute("src",logo[sayi]);
});
