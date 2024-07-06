"use client"
import { ReactLenis } from "lenis/react"

const SmoothScroller = ({children, ...props}) => {
  return (
    <ReactLenis root {...props} options={{
        lerp: 0.15
      }}>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroller