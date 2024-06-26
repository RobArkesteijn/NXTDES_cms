import type { Schema, Attribute } from '@strapi/strapi';

export interface CountryAttractions extends Schema.Component {
  collectionName: 'components_country_attractions';
  info: {
    displayName: 'Attractions';
    description: '';
  };
  attributes: {
    attraction: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface HomeHighlighted extends Schema.Component {
  collectionName: 'components_home_highlighteds';
  info: {
    displayName: 'Highlighted';
    description: '';
  };
  attributes: {
    headline: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
    countries: Attribute.Component<'home.higlighted-countries', true>;
  };
}

export interface HomeHiglightedCountries extends Schema.Component {
  collectionName: 'components_home_higlighted_countries';
  info: {
    displayName: 'HiglightedCountries';
  };
  attributes: {
    country: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'country.attractions': CountryAttractions;
      'home.highlighted': HomeHighlighted;
      'home.higlighted-countries': HomeHiglightedCountries;
    }
  }
}
