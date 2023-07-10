// Yapılması Gerekenler:
/*
 * arttırma ve eksiltme butonları aracılığıyla
 * ekrandaki sayacaın değerini değiştirebelecğiniz
 * basit bir counter yapın
 * sayacın ilk değeri 0 olsun
 * + ile arttıtırılsın - değer azaltsın
 ? unit test'i de yapınız
*/

import React, { useState } from 'react';

const Counter = () => {
  const [sayac, setSayac] = useState(0);

  return (
    <>
      <div>Sayaç</div>
      <button onClick={() => setSayac(sayac - 1)}>eksi</button>
      <span data-testid="sayac-alanı">{sayac}</span>
      <button onClick={() => setSayac(sayac + 1)}>arti</button>
    </>
  );
};

export default Counter;
