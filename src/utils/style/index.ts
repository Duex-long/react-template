export const joinCssList = (cssList: string[]) => {
  return cssList.join(' ').trim()
}

export const scaleText = (element: HTMLElement | undefined, diff = 0.02) => {
  if (element instanceof HTMLElement) {
    element.style.transform = `scale(1)`
    let parentWidth = document.body.clientWidth
    const parent = element.parentElement
    const elementWidth = element.clientWidth
    if (parent) {
      parentWidth = parent.clientWidth
    }
    if (elementWidth > parentWidth) {
      const scale = parentWidth / elementWidth - diff
      element.style.transform = `scale(${scale.toFixed(2)})`
    }
  }
}
