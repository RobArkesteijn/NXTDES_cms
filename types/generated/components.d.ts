import type { Struct, Schema } from '@strapi/strapi';

export interface HomeHiglightedCountries extends Struct.ComponentSchema {
  collectionName: 'components_home_higlighted_countries';
  info: {
    displayName: 'HiglightedCountries';
  };
  attributes: {
    country: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeHighlighted extends Struct.ComponentSchema {
  collectionName: 'components_home_highlighteds';
  info: {
    displayName: 'Highlighted';
    description: '';
  };
  attributes: {
    headline: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText;
    countries: Schema.Attribute.Component<'home.higlighted-countries', true>;
  };
}

export interface CountryAttractions extends Struct.ComponentSchema {
  collectionName: 'components_country_attractions';
  info: {
    displayName: 'Attractions';
    description: '';
  };
  attributes: {
    attraction: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.higlighted-countries': HomeHiglightedCountries;
      'home.highlighted': HomeHighlighted;
      'country.attractions': CountryAttractions;
    }
  }
}
