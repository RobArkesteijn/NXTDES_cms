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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'country.city-list': CountryCityList;
    }
  }
}
