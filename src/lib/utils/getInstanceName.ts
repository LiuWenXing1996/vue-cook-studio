import path from 'path-browserify';
import { ComponentInternalInstance } from 'vue'

export function getInstanceName(instance: any) {
    const name = getComponentTypeName(instance.type || {})
    if (name) return name
    if (instance.root === instance) return 'Root'
    for (const key in instance.parent?.type?.components) {
        if (instance.parent.type.components[key] === instance.type) key
    }
    for (const key in instance.appContext?.components) {
        if (instance.appContext.components[key] === instance.type) return key
    }
    return 'Anonymous Component'
}

function getComponentTypeName(options: any) {
    const name = options.name || options._componentTag
    if (name) {
        return name
    }
    const file = options.__file // injected by vue-loader
    if (file) {
        return classify(basename(file, '.vue'))
    }
}

const classifyRE = /(?:^|[-_/])(\w)/g
export const classify = cached((str: any) => {
    return str && str.replace(classifyRE, toUpper)
})

function cached(fn: Function) {
    const cache = Object.create(null)
    return function cachedFn(str: any) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    }
}

function toUpper(_: any, c: any) {
    return c ? c.toUpperCase() : ''
}


export function basename(filename: any, ext: any) {
    return path.basename(
        filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/'),
        ext
    )
}