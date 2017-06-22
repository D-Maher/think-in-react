// ES6 modules
// same as const React = require('react'), here we are including all of React
import React from 'react';
// only include render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';
// import other components from js/ directory here:
import FilterableProductTable from './FilterableProductTable'

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

render(<FilterableProductTable products={PRODUCTS}/>, document.getElementById('app'));
