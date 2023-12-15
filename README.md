# @bvanderplanck/rollup-plugin-react-remove-lazy-loading

This plug-in is meant for those who would like to replace the Lazy Loading conditionnally for any reason.

## 1. How to use

Import the plugin and simply call it in your rollup config file into the plugins array!

```ts
IgnoreLazyLoad({
    disabled: true|false
})
```

## 2. Requirements

Your lazy loaded component should follow the exact syntax:
```tsx
const MyComponent = lazy(async() => import("path to file"))
```

This will be turned to
```tsx
import MyComponent from "path to file"
```