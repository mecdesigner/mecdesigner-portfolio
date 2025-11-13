// src/lib/useMegaPosition.ts
import { RefObject, useLayoutEffect } from 'react'

export function useMegaPosition(ref: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    // Match your grid breakpoint (~992px). Keep in sync with CSS (62em).
    const mq = window.matchMedia('(min-width: 991px)')
    const reset = () => { el.removeAttribute('style') }

    const update = () => {
      // If mobile / menu collapsed → let CSS handle stacking
      if (!mq.matches) {
        reset()
        return
      }

      // Anchor: <li> that wraps the dropdown container
      const anchor = el.parentElement as HTMLElement | null
      // Full-width grid container inside the nav bar
      const bar = el.closest('.bar') as HTMLElement | null
      const grid = bar?.querySelector('.container') as HTMLElement | null
      if (!anchor || !grid) { 
        reset(); 
        return 
    }

      // If the menu module is collapsed (mobile), bail out
      const module = el.closest('.nav-menu-module') as HTMLElement | null
      if (module && module.classList.contains('toggled-class') && window.matchMedia('(max-width: 990px)').matches) {
        reset()
        return
      }

      const a = anchor.getBoundingClientRect()
      const g = grid.getBoundingClientRect()

      // Align dropdown left edge to grid left, regardless of which column the menu sits in
      const left = g.left - a.left

      el.style.position = 'absolute'
      el.style.top = `${anchor.offsetHeight}px`
      el.style.left = `${left}px`
      el.style.right = 'auto'
      el.style.width = `${g.width}px`
      el.style.transform = 'none'
      el.style.zIndex = '1000'
    }

    // Initial + observers
    update()

    const ro = new ResizeObserver(update)
    ro.observe(document.body)
    // also watch the bar/container widths more directly
    const bar = el.closest('.bar') as HTMLElement | null
    if (bar) ro.observe(bar)
    const container = bar?.querySelector('.container') as HTMLElement | null
    if (container) ro.observe(container)

    // react to breakpoint changes & scroll
    const onMQ = () => update()
    mq.addEventListener?.('change', onMQ)
    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('scroll', update, { passive: true })

    return () => {
      ro.disconnect()
      mq.removeEventListener?.('change', onMQ)
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
    }
  }, [ref])
}
