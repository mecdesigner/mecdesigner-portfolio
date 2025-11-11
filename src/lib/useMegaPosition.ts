import { RefObject, useLayoutEffect } from 'react'

export function useMegaPosition(ref: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      // anchor = the <li> (parent of the dropdown container)
      const anchor = el.parentElement as HTMLElement | null
      // navBox = the full-width grid container inside the bar
      const navBox = el.closest('.bar')?.querySelector('.container') as HTMLElement | null
      if (!anchor || !navBox) return

      const a = anchor.getBoundingClientRect()
      const n = navBox.getBoundingClientRect()

      // Move the dropdown so its left edge matches the grid left,
      // even when the menu sits in the right column.
      const left = n.left - a.left

      el.style.position = 'absolute'
      el.style.top = `${anchor.offsetHeight}px`
      el.style.left = `${left}px`
      el.style.right = 'auto'
      el.style.width = `${n.width}px`
      el.style.transform = 'none'
      el.style.zIndex = '1000'
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(document.body)
    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
    }
  }, [ref])
}
