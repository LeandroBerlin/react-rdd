import React from 'react';
import ProductList from './ProductList';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('should render a list of products as an unordered list', () => {
    const mockupProducts = [
      {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
      {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
      {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
      {id: 4, name: 'Mock Product 3', brand: 'MockBrandD'}
    ];
    const wrapper = Enzyme.shallow(<ProductList products={mockupProducts}/>);
    expect(wrapper.find('li').length).toEqual(mockupProducts.length); // 3
      });



    it('should display the brand name in each `<li>` element', () => {
        const mockProducts = [
          {id: 1, name: 'Mock Product 1', brand: 'MockBrandA'},
          {id: 2, name: 'Mock Product 2', brand: 'MockBrandB'},
          {id: 3, name: 'Mock Product 3', brand: 'MockBrandC'},
        ];

        const wrapper = Enzyme.shallow(<ProductList products={mockProducts}/>);
        const firstElement = wrapper.find('li').first();
        // Check that the brand name is contained somewhere in this element
        expect(firstElement.contains(mockProducts[0].brand)).toEqual(true);
    });