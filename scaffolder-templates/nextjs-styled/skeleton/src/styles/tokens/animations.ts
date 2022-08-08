import { keyframes } from 'styled-components'
import { transitions } from './transitions'

export const animations = {
  skeleton: keyframes`
  0% {
    border-color: rgb(237,242,247);
    background: rgb(237,242,247);
  }
  100% {
    border-color: rgb(160,174,192);
    background: rgb(160,174,192);
  }
  `,
  loading: keyframes`
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  `,
  slideDown: keyframes`
    0% { height: 0 }
    100% { height: var(--radix-accordion-content-height) }
  `,
  slideUp: keyframes`
    0% { height: var(--radix-accordion-content-height) }
    100% { height: 0 }
  `,
  show: keyframes`
    0% { opacity: 0 }
    100% { opacity: 1 }
  `,
} as const

export const animationTimings = {
  transition: {
    default: `${transitions.duration[300]} ${transitions.timing['ease-in-out']}`,
    fast: `${transitions.duration[150]} ${transitions.timing['ease-in-out']}`,
    infinite: `${transitions.duration[300]} ${transitions.timing['infinite']}`,
    slow: `${transitions.duration[500]} ${transitions.timing['ease-in-out']}`,
  },
} as const
