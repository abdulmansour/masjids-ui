import { Timing } from './Timing';

export class Masjid {
  id: number;
  name: string;
  address: string;
  addressLine: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phoneNumber: string;
  zoneId: string;
  latitude: number;
  longitude: number;
  website: string;
  facebook: string;
  instagram: string;
  timings: Timing[];
  subscribed: boolean;


  constructor(name: string, addressLine: string, city: string, state: string, zip: string, country: string, phoneNumber: string, zoneId: string, latitude: number, longitude: number, website: string, facebook: string, instagram: string, timings: Timing[]) {
    this.name = name;
    this.addressLine = addressLine;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
    this.phoneNumber = phoneNumber;
    this.zoneId = zoneId;
    this.latitude = latitude;
    this.longitude = longitude;
    this.website = website;
    this.facebook = facebook;
    this.instagram = instagram;
    this.timings = timings;
  }
}
