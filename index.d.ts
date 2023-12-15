declare module '@bvanderplanck/rollup-plugin-react-remove-lazy-loading' {
    export interface IgnoreLazyLoadOptions {
        disabled?: boolean
    }

    export default function IgnoreLazyLoad(options: IgnoreLazyLoadOptions): { name: string, transform: Function }
}