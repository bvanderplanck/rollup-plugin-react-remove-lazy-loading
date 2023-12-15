declare module '@bvanderplanck/rollup-plugin-react-remove-lazy-loading' {
    export interface IgnoreLazyLoadOptions {
        disabled?: boolean
    }

    export default function IgnoreLazyLoad<T extends any>(options: IgnoreLazyLoadOptions): T
}