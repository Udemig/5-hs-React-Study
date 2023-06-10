# Vite ile Proje

- npx create-react-app yerine
- npm create vite@latest

- Oluşturduktan sonra:
- - cd klasörismi
- - npm i
- - npm start yerine
- - npm run dev
- - gelen linke tıkla

# Redux

# Redux Toolkit

Faydaları:

- Redux'a göre çok daha az kod içeriyor
- Gömülü middleware mevcut
- Eksatra işlem yapmadan thunku kullanabiliyoruz
- Devtools eklentisi sayesinde store daha rahat izlenebiliyor
- veri yönetimi daha kolay olacak

# # Kurulum

- Kütüphaneler:
- - redux
- - react-redux
- - @reduxjs/toolkit

- store.js oluştur
- - `createStore` yerine `configureStore` kullanılcak
- - store' u export et
- - store'u projeye main.js'de tanıt(provider)

- slice oluştur(hem reducerları hem action'ları kapsar)
- slice için yönerge `app/counterSlice` içerisinde

# CRUD Projesi

- Edit İşleminde İzlenecek Yol:
- Modal içerisine düzenlenicek olan elmanın bütün verileri aktarılır
- formstatin içerisine eğer düzenlenicek eleman varsa onun değerleri girilir yoksa değerler boş bırakılır
- inputlara value ataması yapılır
