import type { Schema, Attribute } from '@strapi/strapi';

export interface CountryCityList extends Schema.Component {
  collectionName: 'components_country_city_lists';
  info: {
    displayName: 'City List';
  };
  attributes: {
    city: Attribute.String & Attribute.Required;
  };
}

export interface HomeHighlighted extends Schema.Component {
  collectionName: 'components_home_highlighteds';
  info: {
    displayName: 'Highlighted';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    headline: Attribute.String;
    title: Attribute.String & Attribute.Required;
    description: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'country.city-list': CountryCityList;
      'home.highlighted': HomeHighlighted;
    }
  }
}
