# Citymapper Public Web SDK

### Installation

First install lerna in order to manage all packages and examples

```
npm install -g lerna
```

Now bootstrap all dependencies, this will handle the linking of any package that are locally available:

```
lerna bootstrap
```

```
yarn
```

### Building

We can build all the packages in parallel:

```
yarn build
```

### Running Examples

```
yarn dev:next
```

### Adding scripts to run in parallel

Add a regular script command to each package's package.json, then call it from the root package.json via:

```
scripts: {
  "my-script-name": "lerna run --parallel my-script-name"
}
```

- [Citymapper JS API Client](./packages/api)
