import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Hook to detect if the current viewport is mobile (width < 768px).
 * Also exported as useIsMobile for compatibility.
 */
export function useMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)

    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Set initial value
    setIsMobile(window.innerWidth < breakpoint)

    // Listen for resize changes
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [breakpoint])

  return !!isMobile
}

// Alias to match use-isMobile naming convention
export { useMobile as useIsMobile }
