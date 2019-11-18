global.$ = require("jquery");

import axios from 'axios';
import NTCTable from './js/NTCTable';
import moneyFormatter from './js/moneyFormatter';
import writtenMoney from './js/writtenMoney';

import './styles/NTCUIKit.css';
import './styles/index.scss';

axios.get('./assets/ntc-sample-data.json')
  .then(function (response) {
    const source = {
      data: response.data,
    };
    const header = ['Ürün Kodu', 'Ürün Adı', 'Birim Fiyat (TL)', 'Adet', 'Fiyat (TL)'];
    const table = new NTCTable(source, header);

    /**
     * Ürünlerin fiyatlarını ve toplam fiyatı hesaplar.
     */
    let totalCost = 0;
    for (const [key] of Object.entries(table.dataSource)) {
      table.dataSource[key].forEach(row => {
        row.total = moneyFormatter((row.productPrice * row.qnty).toFixed(2));
        totalCost += row.productPrice * row.qnty;
      });
    }
    totalCost = totalCost.toFixed(2);

    /**
     * Hesaplanan tüm işlemleri ekrana yazdırma, render etme görevi
     */
    $('.js-app-table').html(table.generateInnerHtmlCode());

    $('.js-total-price').html(moneyFormatter(totalCost));

    $('.js-total-price-text').html(writtenMoney(totalCost));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });