import React from 'react';
import { navNames } from '../Navbar/Navbar';
import { About } from './components/About/About';
import { HOC } from './components/HOC';

const temArray = navNames.filter((item) => item !== 'home');

const tempObject: any = {
  about: <About />,
  calendar: null,
  membership: null,
  partners: null,
  news: null,
  contact: null,
};

const getSectionsBlocks = temArray.map((name) => (
  <HOC name={name} content={tempObject[name]} key={name} />
));

export const Main = () => <main>{getSectionsBlocks}</main>;
