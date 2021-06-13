const modules = import.meta.globEager('./*/index.ts')

const components = []

Object.keys(modules).forEach((key: string) => {
  const name = key.replace(/\.\/(.*)\/index\.ts/, '$1')
//   const 
  components[name] = modules[key]?.default || modules[key]
})    