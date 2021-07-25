import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const OLD_VERSION = 6
export const PREV_FARM_SYMBOL = 'HEL'
export const CURRENT_FARM_SYMBOL = 'IO'
export const CURRENT_FARM_PAUSED = false
export const NEXT_FARM_SYMBOL = 'LUM'
export const CHEF_MAP = [
  'EL',
  'TIR',
  'NEF',
  'ITH',
  'TAL',
  'RAL',
  'ORT',
  'THUL',
  'AMN',
  'SOL',
  'SHAEL',
  'DOL',
  'HEL',
  'IO',
]
export const REWARD_PER_BLOCK = new BigNumber(0.15) // CHANGE
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const BSC_BLOCK_TIME = 3
export const REWARD_BNB_POOL_PID = 55 // CHANGE
export const BASE_EXCHANGE_URL = 'https://swap.rune.farm'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const CURRENT_GAME_BRANCH_ID = 1
