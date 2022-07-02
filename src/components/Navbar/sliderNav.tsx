import React from 'react';
import { sliderPics } from '../../assets';

const sliderNav = [
  { text: 'Love' },
  { text: 'Adventure' },
  { text: 'Fun' },
  { text: 'friendship' },
  { text: 'freedom' },
];

const sliderList = sliderNav.map((slide, index) => (
  <li className="sliderList_item">
    <img className="images" alt="" src={sliderPics[index]} />
    <p className="slider_name">{slide.text}</p>
  </li>
));

export const SliderBar = () => <div className="sliderList">{sliderList}</div>;
