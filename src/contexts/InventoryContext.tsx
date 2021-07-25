import React, { useState, useEffect, useCallback, useRef } from 'react'
import { getWeb3NoAccount } from 'utils/web3'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { decodeItem } from 'utils/decodeItem'
import { ItemSlot } from 'data/items'
import useWeb3 from '../hooks/useWeb3'
import { useBarracks } from '../hooks/useContract'

const InventoryContext = React.createContext({
  harvestYield: 0,
  harvestFeeToken: '',
  harvestFeePercent: 0,
  harvestFees: {},
  chanceToSendHarvestToHiddenPool: 0,
  chanceToLoseHarvest: 0,
  harvestBurn: 0,
  unstakeLocked: false,
  classRequired: 0,
  totalYield: 0,
  feeReduction: 0,
  randomRuneExchange: 0,
  worldstoneShardChance: 0,
  equipment: {},
  items: [],
  refreshEquipment: () => {},
  setUserAddress: (userAddress) => {},
})

let init = false

const InventoryContextProvider = ({ children }) => {
  const tokenIdsRef = useRef([])
  const [tokenIds, setTokenIds] = useState([])
  const web3 = useWeb3()
  const { account } = useWeb3React()
  const barracks = useBarracks()
  const [userAddress, setUserAddress] = useState(account)

  const refreshEquipment = useCallback(async () => {
    console.log('Fetching staked items')

    try {
      const ids = []

      const leftHand = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.LeftHand).call()
      if (leftHand) ids.push([ItemSlot.LeftHand, new BigNumber(leftHand).toString()])

      const rightHand = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.RightHand).call()
      if (rightHand) ids.push([ItemSlot.RightHand, new BigNumber(rightHand).toString()])

      const head = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Head).call()
      if (head) ids.push([ItemSlot.Head, new BigNumber(head).toString()])

      const hands = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Hands).call()
      if (hands) ids.push([ItemSlot.Hands, new BigNumber(hands).toString()])

      const chest = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Chest).call()
      if (chest) ids.push([ItemSlot.Chest, new BigNumber(chest).toString()])

      const feet = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Feet).call()
      if (feet) ids.push([ItemSlot.Feet, new BigNumber(feet).toString()])

      const trinket1 = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Trinket1).call()
      if (trinket1) ids.push([ItemSlot.Trinket1, new BigNumber(trinket1).toString()])

      const trinket2 = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Trinket2).call()
      if (trinket2) ids.push([ItemSlot.Trinket2, new BigNumber(trinket2).toString()])

      const trinket3 = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Trinket3).call()
      if (trinket3) ids.push([ItemSlot.Trinket3, new BigNumber(trinket3).toString()])

      const pet = await barracks.methods.getEquippedItem(userAddress || account, ItemSlot.Pet).call()
      if (pet) ids.push([ItemSlot.Pet, new BigNumber(pet).toString()])

      tokenIdsRef.current = ids
    } catch (e) {
      tokenIdsRef.current = []
    }
    console.log('Gear fetched')
    setTokenIds(tokenIdsRef.current)
  }, [userAddress, account, tokenIdsRef, barracks.methods])

  useEffect(() => {
    if (!account || init || !barracks) return

    init = true

    refreshEquipment()
  }, [web3, account, barracks, refreshEquipment])

  let harvestYield = 0
  let harvestFeeToken = ''
  let harvestFeePercent = 0
  let chanceToSendHarvestToHiddenPool = 0
  let chanceToLoseHarvest = 0
  let harvestBurn = 0
  let harvestFees = {}
  let totalYield = 1
  let feeReduction = 0
  let unstakeLocked = false
  let randomRuneExchange = 0
  let worldstoneShardChance = 0
  let classRequired = 0
  const equipment = {
    [ItemSlot.LeftHand]: undefined,
    [ItemSlot.RightHand]: undefined,
    [ItemSlot.Head]: undefined,
    [ItemSlot.Hands]: undefined,
    [ItemSlot.Chest]: undefined,
    [ItemSlot.Feet]: undefined,
  }

  //   useEffect(() => {
  //     console.log('Updating', tokenIdsRef.current)
  //     // setTokenIds(tokenIdsRef.current)
  //   }, [tokenIdsRef])

  const items = tokenIdsRef.current
    .map((props) => {
      const [slotId, tokenId] = props
      const item = decodeItem(new BigNumber(tokenId + '').toString())

      if (tokenId === '0') return
      if (!item) {
        // console.log('Item not found: ' + tokenId);
        return
      }

      const meta = {
        harvestYield: 0,
        harvestFeePercent: 0,
        harvestFees: {},
        chanceToSendHarvestToHiddenPool: 0,
        chanceToLoseHarvest: 0,
        harvestBurn: 0,
        feeReduction: 0,
        randomRuneExchange: 0,
        worldstoneShardChance: 0,
        ...(item ? item.meta : {}),
      }

      if (item.meta.feeReduction) {
        feeReduction += item.meta.feeReduction
      }
      if (item.meta.harvestYield) {
        harvestYield += item.meta.harvestYield

        totalYield += totalYield * (item.meta.harvestYield / 100)
      }
      if (item.meta.harvestBurn) {
        harvestBurn += item.meta.harvestBurn

        totalYield -= totalYield * (item.meta.harvestBurn / 100)
      }
      if (item.meta.harvestFeeToken) {
        harvestFeeToken = item.meta.harvestFeeToken
      }
      if (item.meta.harvestFeePercent) {
        harvestFeePercent = item.meta.harvestFeePercent
      }
      if (item.meta.randomRuneExchange) {
        randomRuneExchange = item.meta.randomRuneExchange
      }
      if (item.meta.worldstoneShardChance) {
        worldstoneShardChance = item.meta.worldstoneShardChance
      }
      if (item.meta.harvestFees && Object.keys(item.meta.harvestFees).length > 0) {
        harvestFees = item.meta.harvestFees
      }
      if (item.meta.chanceToSendHarvestToHiddenPool) {
        chanceToSendHarvestToHiddenPool += item.meta.chanceToSendHarvestToHiddenPool
      }
      if (item.meta.chanceToLoseHarvest) {
        chanceToLoseHarvest += item.meta.chanceToLoseHarvest
      }
      if (item.meta.unstakeLocked) {
        unstakeLocked = item.meta.unstakeLocked
      }
      if (item.meta.classRequired) {
        classRequired = item.meta.classRequired
      }

      equipment[slotId] = item

      return {
        ...item,
        meta,
      }
    })
    .filter((item) => !!item)

  // feeReduction = feeReduction > 100 ? 100 : feeReduction
  harvestFeePercent =
    feeReduction > 100 ? 0 : parseFloat((harvestFeePercent - harvestFeePercent * (feeReduction / 100)).toFixed(2))

  return (
    <InventoryContext.Provider
      value={{
        harvestYield,
        harvestFees,
        harvestFeeToken,
        harvestFeePercent,
        chanceToSendHarvestToHiddenPool,
        chanceToLoseHarvest,
        unstakeLocked,
        classRequired,
        harvestBurn,
        totalYield,
        equipment,
        feeReduction,
        randomRuneExchange,
        worldstoneShardChance,
        items,
        refreshEquipment,
        setUserAddress,
      }}
    >
      {children}
    </InventoryContext.Provider>
  )
}

export { InventoryContext, InventoryContextProvider }
