/* main.js — giriş noktası
   ------------------------------------------------------------
   Her sayfa bu tek modülü yüklüyor. Buradan diğer modüller
   içeri aktarılıyor. Brief'in istediği "JavaScript modules"
   kriteri, type="module" + import/export ile karşılanıyor.
   ------------------------------------------------------------ */

import { initNav } from './nav.js';

initNav();


/* ------------------------------------------------------------
   BURADAN SONRASI SENİN YAZACAĞIN KISIM

   Sırayla ekleyeceğiz:

   1) storage.js  → favorileri localStorage'a yazma/okuma
                    export: getFavourites(), toggleFavourite(id)

   2) destinations.js → destinasyon verisi (dizi) + kartları
                    DOM'a render eden fonksiyon + filtreleme

   3) validation.js → contact formunda blur/submit doğrulaması

   Sonra buraya şöyle bağlanacaklar:

     import { initFavourites } from './storage.js';
     initFavourites();

   ------------------------------------------------------------ */
