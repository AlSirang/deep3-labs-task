export const shortenAddress = (address: string | undefined) => {
  if (!address) return null

  return `${address.slice(0, 5)}...${address.slice(-5)}`
}
