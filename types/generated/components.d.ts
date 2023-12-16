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

export interface SidemenuCities extends Schema.Component {
  collectionName: 'components_sidemenu_cities';
  info: {
    displayName: 'Cities';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/countries/[country]/'>;
  };
}

export interface SidemenuCountries extends Schema.Component {
  collectionName: 'components_sidemenu_countries';
  info: {
    displayName: 'Countries';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/countries/'>;
    cities: Attribute.Component<'sidemenu.cities', true>;
  };
}

export interface SidemenuTravelInfo extends Schema.Component {
  collectionName: 'components_sidemenu_travel_infos';
  info: {
    displayName: 'Travel Info';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/travel-mistakes/'>;
  };
}

export interface SidemenuUpcomingDestination extends Schema.Component {
  collectionName: 'components_sidemenu_upcoming_destinations';
  info: {
    displayName: 'Upcoming Destination';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'/upc-destination/'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'country.city-list': CountryCityList;
      'sidemenu.cities': SidemenuCities;
      'sidemenu.countries': SidemenuCountries;
      'sidemenu.travel-info': SidemenuTravelInfo;
      'sidemenu.upcoming-destination': SidemenuUpcomingDestination;
    }
  }
}
