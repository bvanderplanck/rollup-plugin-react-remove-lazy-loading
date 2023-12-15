export default function IgnoreLazyLoad({ disabled = false }) {
    return {
      name: 'ignore-lazy-load',
      transform: (source) => {
        if (disabled) {
          return {
            code: source,
            map: null
          }
        }
  
        const matches = Array.from(source.matchAll(/const (.*?) = lazy\(async \(\) => import\((.*?)\)\)/g))
  
        for (const match of matches) {
          source = source.replace(match[0], `import ${match[1]} from ${match[2]}`)
        }
  
        return {
          code: source,
          map: null
        }
      }
  
    }
  }
  