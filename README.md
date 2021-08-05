# Derive TypeScript Interface

Simple functions to derive a TypeScript interface from a JavaScript object example.

## CLI

### derive

This is the main command that accepts parameters of a JavaScript file containing the example object to derive the TypeScript interface from.

#### Arguments

**-n, --interface-name <name>**
Name of the outputted interface')

**-i, --import-name <importNam>**
Name of the object exported from the specified file')

**-o, --output-file <outputFilePath>**
File to save the interface to')

## Example

A JavaScript file has been created called 'example.js' with the following contents:

```javascript 
exports.example = {
  address_components: [
    { long_name: '8035', short_name: '8035', types: ['street_number'] },
    { long_name: 'Market Street', short_name: 'Market St', types: ['route'] },
    { long_name: 'Wilmington', short_name: 'Wilmington', types: ['locality', 'political'] },
  ],
  adr_address:
    '<span class="street-address">8035 Market St</span>, <span class="locality">Wilmington</span>, <span class="region">NC</span> <span class="postal-code">28411</span>, <span class="country-name">USA</span>',
  business_status: 'OPERATIONAL',
  formatted_address: '8035 Market St, Wilmington, NC 28411, USA',
  formatted_phone_number: '(910) 686-2007',

  vicinity: '8035 Market Street, Wilmington',
  website:
    'https://restaurants.subway.com/united-states/nc/wilmington/8035-market-st?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=60848&utm_campaign=evergreen-2020&y_source=1_MTQ4OTUyNzYtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl',
};
```

After running the following command:

```bash
derive-ts derive ./example.js --output-file output.ts --interface-name Test --import-name example
```

The following file is generated 'output.ts' with the contents:

```typescript
export interface Test {
  address_components: {
    long_name: string,
    short_name: string,
    types: string[],
  }[];
  adr_address: string;
  business_status: string;
  formatted_address: string;
  formatted_phone_number: string;
  vicinity: string;
  website: string;
}
```