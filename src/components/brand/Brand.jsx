import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="logos">
    <div className="logos-slide">
      <img src={google} />
      <img src={slack} />
      <img src={atlassian} />
      <img src={dropbox} />
      <img src={shopify} />
      <img src={google} />
      <img src={slack} />
      <img src={atlassian} />
      <img src={dropbox} />
      <img src={shopify} />
    </div>
    <div className="logos-slide">
      <img src={google} />
      <img src={slack} />
      <img src={atlassian} />
      <img src={dropbox} />
      <img src={shopify} />
      <img src={google} />
      <img src={slack} />
      <img src={atlassian} />
      <img src={dropbox} />
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
