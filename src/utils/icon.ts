const getSvgIcon = (name: string) =>
  new URL(`../assets/svg/${name}.svg`, import.meta.url).href

export { getSvgIcon }
