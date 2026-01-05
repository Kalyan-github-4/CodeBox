import 'framer-motion'

declare module 'framer-motion' {
  export interface HTMLMotionProps<T extends keyof React.JSX.IntrinsicElements> {
    animate?: any
    initial?: any
    exit?: any
    whileHover?: any
    whileTap?: any
    transition?: any
  }
}
