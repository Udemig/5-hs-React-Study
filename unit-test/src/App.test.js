import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Counter';

// Test yazma yöntemleri
// 1 - Test Driven Development (TDD) | RED-to-Green
// 2 - Behaviour Driven Development (BDD)

//! test methodu icolorBtnki parametre alır
// 1. neyi test test ettiğimizin açıklaması
// 2. kontrollleri yapıcağımız fonksiyon
test('learn react yazan link ekrana basilir', () => {
  // testi yapıcağımız bileşeni ekrana basma (sanal ortamda gerçekleşir)
  render(<App />);

  // testi yapıcağımız bileşeni çağırma
  const linkElement = screen.getByText(/learn react/i); // büyük küçük harfe dikkat etme

  // çağrılan elemanı test etme
  expect(linkElement).toBeInTheDocument();
});

// buton ilk başta kırmızı olucak ve içinde  "change to blue" yazıcak
// üzreinde tıklandıktan sonra
// mavi olucak ve  üstünde "Change to red yazıcak"

test('buton doğru renge ve yazıya sahip', () => {
  render(<App />);

  // test ediceğimiz elementi seçme
  const colorBtn = screen.getByRole('button', {
    name: 'Change to blue',
  });

  console.log(colorBtn);

  // buton ilk ekrana geldiğinde kırmızı mı?
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

  // jsx elemanı üzrende kullanıcı etkileşimi tanımlama
  fireEvent.click(colorBtn);

  // tıklandıktan sonta arkaplanı mavi mi?
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  // tıklandıktan sonra içindeki yazı Change to red mi ?
  expect(colorBtn).toHaveTextContent('Change to red');
});

// checkbox tiklendiğinde butonun inaktif olamsını kontrol etme
test("checbox'a göre buton aktifliği", () => {
  render(<App />);

  // test elemanın çağırma
  const colorBtn = screen.getByRole('button', {
    name: /change to blue/i,
  });

  // butonun aktif olduğunu kontrol etme
  expect(colorBtn).toBeEnabled();

  // checboxı çağırma
  const checbox = screen.getByRole('checkbox');

  // checboxa tıklanma olayını gerçekleştirme
  fireEvent.click(checbox);

  // buton inaktif mi ? kontrol etme
  expect(colorBtn).toBeDisabled();
});

//! sayacı test etme
// butonları getByRole ile çekilecek
// sayaç getByText ile çağrılsın
// sayacın değeri 0 mı kontrol edilsin toHaveTestId
// + butonun tıklansın sayacın değeri 1 mi kontrol edislin
// iki kere - butonuna tıklanılsın sayacaın -1 mi kontrol edilsin

// describe aynı özellik / bileşen ile alaklaı olan
// testleri bir araya toplamamızı sağlar
describe('Counter bileşeni testler,', () => {
  // her testten önce yapılcak ortak işlemleri belirle
  // beforEach: her testten önce ona verdiğimiz kodu çalıştırır
  // beforAll: ilk başta sadece bir kere önce ona verdiğimiz kodu çalıştırır

  test('Başlangıç değeri 0 olmalı', () => {
    render(<Counter />);
    const counter = screen.getByTestId('sayac-alanı');
    expect(counter).toHaveTextContent('0');
  });

  test('+ dügmesine tıklanınca değer 1 artmalı', () => {
    render(<Counter />);
    const counter = screen.getByTestId('sayac-alanı');

    const incraseBtn = screen.getByRole('button', { name: 'arti' });

    fireEvent.click(incraseBtn);

    expect(counter).toHaveTextContent('1');
  });

  test('- dügmesine tıklanınca değer 1 azmalı', () => {
    render(<Counter />);
    const counter = screen.getByTestId('sayac-alanı');

    const decreaseBtn = screen.getByRole('button', { name: 'eksi' });

    fireEvent.click(decreaseBtn);

    fireEvent.click(decreaseBtn);

    expect(counter.textContent).toBe('-2');
  });
});
