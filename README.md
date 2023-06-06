# @pawfv/lotr-api-sdk

This package provides a client SDK for interacting with the LOTR (Lord of the Rings) API.

npm page: https://www.npmjs.com/package/@pawfv/lotr-api-sdk

## Installation

To install the package, run the following command:

```shell
npm install @pawfv/lotr-api-sdk
```

## Configuration

The `createLOTRSDK` function expects an object with the following configuration parameters:

`baseURL`: The base URL of the LOTR API. Because it could change from time to time, please check the [main site](https://the-one-api.dev/).

`authToken`: The authentication token to be included in the request headers. You must [create an account](https://the-one-api.dev/account) to get a valid token.

Usage
To use the SDK, you need to create an instance by calling the `createLOTRSDK` function and passing the required configuration parameters:

```javascript
import { createLOTRSDK } from '@pawfv/lotr-api-sdk';

const sdk = createLOTRSDK({
  baseURL: 'https://the-one-api.dev/v2/',
  authToken: 'YOUR_AUTH_TOKEN'
});

// Now you can use the SDK methods
sdk.movie.getById('movieId')
  .then((movie) => {
    console.log('Movie:', movie);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Methods

The SDK provides the following methods for interacting with the LOTR API:

```js
// Fetches a movie by its ID.
movie.getById(movieId: string, filterOptions?: FilterOptions)
// Fetches all movies.
movie.getAll(filterOptions?: FilterOptions) 
// Fetches quotes for a specific movie.
movie.getQuotesById(movieId: string, filterOptions?: FilterOptions) 
// Fetches a quote by its ID.
quote.getById(quoteId: string, filterOptions?: FilterOptions)
// Fetches all quotes.
quote.getAll(filterOptions?: FilterOptions) 
```

Please refer to the [api documentation](https://the-one-api.dev/documentation) for detailed information about the available options and response types.

## Example

Here's an example of how to use the SDK to fetch a movie by its ID:

```javascript
sdk.movie.getById('5cd95395de30eff6ebccde5c')
  .then((movie) => {
    console.log('Movie:', movie);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

## Support and Issues

For any issues or support, please create an issue on the GitHub repository: https://github.com/PawFV/lotr-api-sdk

## License

This package is licensed under the MIT license.

If you have any questions or feedback, please don't hesitate to reach out.
