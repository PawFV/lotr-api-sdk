# SDK Design Overview

The LOTR API SDK is designed to provide a convenient and intuitive way to interact with the LOTR API. This document outlines the key design principles and components of the SDK.

![](https://i.imgur.com/p0XAkcR.png)

## Architecture

The SDK follows a modular architecture to enhance reusability and maintainability. It is organized into separate modules, each responsible for a specific domain of functionality. The main components of the SDK are:

`createLOTRSDK`: This function serves as the entry point for creating an instance of the SDK. It takes the necessary configuration parameters, such as the base URL and authentication token, and initializes the underlying HTTP client.

`Controllers`: The controllers module contains various controllers that encapsulate the API endpoints and provide methods for interacting with the LOTR API. Each controller focuses on a specific resource or functionality, such as movies or quotes.

`HTTP Client`: The SDK utilizes the popular Axios library as the underlying HTTP client for making API requests. Axios provides a simple and flexible interface for handling HTTP requests and responses.

## Language Choice and Developer Experience
The LOTR API SDK is developed using TypeScript. It was chosen for the following reasons:

**Type Safety**: provides static type checking, enabling early detection of errors and enhancing code reliability. It helps catch common mistakes during development and improves overall code quality.

**Better Developer Experience**: Offers enhanced IDE support, including autocompletion, code navigation, and refactoring tools. These features contribute to a smoother development experience, increasing productivity and reducing the likelihood of errors.

Alongside TypeScript, the project utilizes JSDocs to provide comprehensive and structured documentation for the codebase.

![](https://i.imgur.com/natuGCJ.gif)

## CI/CD

The CI/CD process ensures that the LOTR API SDK is thoroughly tested and published to the npm registry only when the tests pass successfully. The process involves the following steps:

### `Test:` 

The CI pipeline starts with the test stage. This stage is responsible for running the SDK unit tests to verify its functionality. 

### `Publish:` 

If the test stage succeeds, the pipeline proceeds to the publish stage. This stage is responsible for packaging and publishing the SDK to the npm registry, it will also tag with the new version and commit the changes as a CI/CD bot.

By following this CI/CD process, the LOTR API SDK ensures that code changes are thoroughly tested before being published, reducing the risk of shipping faulty or unreliable code to users.

![](https://i.imgur.com/NbiVcT8.png)

## Side Notes

I could have improved many things, since I made it this far I'll finish the endpoints and leave this library published to npm since for whatever reason thousands of chinese bots downloaded it already.

What I'll finish/improve:

- [ ] Support with typescript in nodejs using ts-node, currently I only tested this in common frontend frameworks such as Vue/React and Nodejs (only js).
- [x] Finish the rest of endpoints.
- [ ] Adding jsdocs to all code.
- [ ] Setup CI/CD with templates for opening PRs/Issues.
- [ ] Setup CI/CD with branch protection rules, should pass tests from PR to be able to merge to master.
- [ ] Setup CI/CD workflow to publish release in github along with the version tag and npm package.
- [ ] Proper linters and code formatters (prettier, eslint).