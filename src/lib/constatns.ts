export const WETH_MAINNET_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
export const WETH_SEPOLIA_ADDRESS = '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'

export const chainIdToWethAddress: Record<number, `0x${string}`> = {
  1: WETH_MAINNET_ADDRESS,
  11155111: WETH_SEPOLIA_ADDRESS,
}
