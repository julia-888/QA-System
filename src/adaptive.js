export const adpt = (val) => {
  if (document.documentElement.clientWidth < 1920) {
    return val * 1024 / 1920 + (val - val * 1024 / 1920) * ((document.documentElement.clientWidth - 1024) / (1920 - 1024))
  } else return val
}