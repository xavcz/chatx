import { Meteor } from 'meteor/meteor'; 
import { ServiceConfiguration } from 'meteor/service-configuration';

const { consumerKey, secret } = Meteor.settings;

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  { $set: {
      consumerKey,
      secret
    }
  }
);