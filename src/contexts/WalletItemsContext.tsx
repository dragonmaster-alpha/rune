import React, { useState, useEffect, useCallback, useRef } from 'react'
import { getWeb3NoAccount } from 'utils/web3'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { decodeItem } from 'utils/decodeItem'
import { getArcaneItemContract } from 'utils/contractHelpers'
import makeBatchRequest from 'utils/makeBatchRequest'
import useInterval from 'hooks/useInterval'
import useWeb3 from '../hooks/useWeb3'

const arcaneItemsContract = getArcaneItemContract()

export type NftMap = {
  [key: number]: {
    tokenUri: string
    tokenIds: number[]
  }
}

const WalletItemsContext = React.createContext({
  nfts: {},
  refresh: () => {},
})

const WalletItemsContextProvider = ({ children }) => {
  const { account } = useWeb3React()
  const [nfts, setNfts] = useState({})
  const [currentAccount, setCurrentAccount] = useState({})
  const [lastUpdatedTime, setLastUpdatedTime] = useState(0)

  useEffect(() => {
    if (!account || (new Date().getTime() - lastUpdatedTime < 10 * 1000 && account === currentAccount)) return

    setLastUpdatedTime(new Date().getTime())
    setCurrentAccount(account)
    // dispatch({ type: 'refresh', state, timestamp: Date.now() })

    const fetchNfts = async () => {
      console.log('Fetching items')

      try {
        const balanceOf = await arcaneItemsContract.methods.balanceOf(account).call()

        if (balanceOf > 0) {
          let fetchedNfts: NftMap = {}
          console.log('Item total: ', balanceOf)

          // const getTokenIdAndItemId = async (index: number) => {
          //   try {
          //     const { tokenOfOwnerByIndex, getItemId, tokenURI } = arcaneItemsContract.methods
          //     const tokenId = await tokenOfOwnerByIndex(account, index).call()
          //     const itemId = parseInt(tokenId.slice(4, 9))
          //     // const [itemId, tokenUri] = await makeBatchRequest([getItemId(tokenId).call, tokenURI(tokenId).call])

          //     return [itemId, tokenId]
          //   } catch (error) {
          //     return null
          //   }
          // }

          let tokenIdPromises = []
          let tokenIdsOwnedByWallet = []

          for (let i = 0; i < balanceOf; i++) {
            const { tokenOfOwnerByIndex, getItemId, tokenURI } = arcaneItemsContract.methods
            tokenIdPromises.push(tokenOfOwnerByIndex(account, i).call)

            if (tokenIdPromises.length > 1000) {
              // @ts-ignore
              tokenIdsOwnedByWallet = [
                ...tokenIdsOwnedByWallet,
                // @ts-ignore
                ...(await makeBatchRequest(tokenIdPromises)).map((tokenId: string) => {
                  return [parseInt(tokenId.slice(4, 9)), tokenId]
                }),
              ]

              tokenIdPromises = []
            }
          }

          tokenIdsOwnedByWallet = [
            ...tokenIdsOwnedByWallet,
            // @ts-ignore
            ...(await makeBatchRequest(tokenIdPromises)).map((tokenId: string) => {
              return [parseInt(tokenId.slice(4, 9)), tokenId]
            }),
          ]

          // const tokenIdsOwnedByWallet = await Promise.all(tokenIdPromises)

          fetchedNfts = tokenIdsOwnedByWallet.reduce((accum, association) => {
            if (!association) {
              return accum
            }

            const [itemId, tokenId] = association

            return {
              ...accum,
              [itemId]: {
                tokenIds: accum[itemId] ? [...accum[itemId].tokenIds, tokenId] : [tokenId],
              },
            }
          }, {})

          if (window && window.location.hostname === 'localhost') {
            // const fakeTokens1 = []

            // for (let i = 0; i < 999; i++) {
            //   fakeTokens1.push('100301200142040003200100420130202001' + i + '000000000000000000000000000000000' + i)
            // }

            // fetchedNfts['1200'] = {
            //   tokenIds: fakeTokens1,
            // }
            // const fakeTokens2 = []
            // for (let i = 0; i < 999; i++) {
            //   fakeTokens2.push('100301201142040003200100420130202001' + i + '000000000000000000000000000000000' + i)
            // }

            // fetchedNfts['1201'] = {
            //   tokenIds: fakeTokens2,
            // }
            // const fakeTokens3 = []
            // for (let i = 0; i < 999; i++) {
            //   fakeTokens3.push('100301202142040003200100420130202001' + i + '000000000000000000000000000000000' + i)
            // }

            // fetchedNfts['1202'] = {
            //   tokenIds: fakeTokens3,
            // }
            // const fakeTokens4 = []
            // for (let i = 0; i < 999; i++) {
            //   fakeTokens4.push('100301030142040003200100420130202001' + i + '000000000000000000000000000000000' + i)
            // }

            // fetchedNfts['1030'] = {
            //   tokenIds: fakeTokens4,
            // }
            // const fakeTokens5 = []
            // for (let i = 0; i < 999; i++) {
            //   fakeTokens5.push('100301006142040003200100420130202001' + i + '000000000000000000000000000000000' + i)
            // }

            // fetchedNfts['1006'] = {
            //   tokenIds: fakeTokens5,
            // }
            // const fakeTokens6 = []
            // for (let i = 0; i < 999; i++) {
            //   fakeTokens6.push('100301005142040003200100420130202001' + i + '000000000000000000000000000000000' + i)
            // }

            // fetchedNfts['1005'] = {
            //   tokenIds: fakeTokens6,
            // }

            // fetchedNfts['14'] = {
            //   tokenIds: ['1003000140120010052019004201301020110042002002200301020390082021006001'],
            // }
            // fetchedNfts['15'] = {
            //   tokenIds: ['1003000150320080102012004201301020110012047010203900320210052055005001', '1003000150320080022012001201300520110042047002203900320210052055005001'],
            // }
            // fetchedNfts['16'] = {
            //   tokenIds: ['1003000160120010052007040201300220110042002002200301020390112021007001'],
            // }
            fetchedNfts['1000'] = {
              tokenIds: ['1003010000920010032008050200910000000000000000000000000000000000000000000853'],
            }
            fetchedNfts['1001'] = {
              tokenIds: ['1003010001920010032008050200910000000000000000000000000000000000000000000853'],
            }
            fetchedNfts['1002'] = {
              tokenIds: ['1003010002920010032008050200910000000000000000000000000000000000000000000853'],
            }
            fetchedNfts['1003'] = {
              tokenIds: ['1003010003920010032008050200910000000000000000000000000000000000000000000853'],
            }
            fetchedNfts['1004'] = {
              tokenIds: ['1003010004920010032008050200910000000000000000000000000000000000000000000853'],
            }
            fetchedNfts['1005'] = {
              tokenIds: ['1003010005920010032008050200910000000000000000000000000000000000000000000853'],
            }
            fetchedNfts['1006'] = {
              tokenIds: ['1003010006920010032008050200910000000000000000000000000000000000000000000853'],
            }
            // fetchedNfts['19'] = {  tokenIds: [ '100300019050002000300940000000000000000000000000000000000000000000000000406'] }
            fetchedNfts['1030'] = {
              tokenIds: ['1003010030920010032008050200910000000000000000000000000000000000000000000853'],
            }
            // fetchedNfts['1200'] = {
            //   tokenIds: [
            //     '1003012001420400032001004201302000000000000000000000000000000000000000000001',
            //     '1003012001420400042001003201301500000000000000000000000000000000000000000001',
            //     '1003012001420400052001002201301000000000000000000000000000000000000000000001',
            //     '1003012001420400062001001201300500000000000000000000000000000000000000000001',
            //   ],
            // }
            // fetchedNfts['1201'] = {
            //   tokenIds: [
            //     '1003012011420400032001005201302000000000000000000000000000000000000000000001',
            //     '1003012011420400042001004201301500000000000000000000000000000000000000000001',
            //     '1003012011420400052001003201301000000000000000000000000000000000000000000001',
            //     '1003012011420400062001002201300500000000000000000000000000000000000000000001',
            //   ],
            // }
            fetchedNfts['3000'] = {
              tokenIds: [
                '100303000202040003200101020130802034010204700520080052039012000000000000001',
                '100303000202040004200100720130602034007204700420080042039012000000000000001',
                '100303000202040005200100520130402034005204700320080032039012000000000000001',
                '100303000202040006200100320130202034003204700220080022039012000000000000001',
              ],
            }
            fetchedNfts['3001'] = {
              tokenIds: [
                '100303001202040003200101020130052034010204700520080502039013000000000000001',
                '100303001202040004200100720130042034007204700420080402039013000000000000001',
                '100303001202040005200100520130032034005204700320080302039013000000000000001',
                '100303001202040006200100320130022034003204700220080202039013000000000000001',
              ],
            }
            fetchedNfts['3002'] = {
              tokenIds: [
                '100303002202040003200101020130052034010204702020080052039014000000000000001',
                '100303002202040004200100720130042034007204701620080042039014000000000000001',
                '100303002202040005200100520130032034005204701220080032039014000000000000001',
                '100303002202040006200100320130022034003204700820080022039014000000000000001',
              ],
            }
            fetchedNfts['3003'] = {
              tokenIds: [
                '100303003202040003200101020130202034005204700520080052039015000000000000001',
                '100303003202040004200100720130162034004204700420080042039015000000000000001',
                '100303003202040005200100520130122034003204700320080032039015000000000000001',
                '100303003202040006200100320130082034002204700220080022039015000000000000001',
              ],
            }
            fetchedNfts['3004'] = {
              tokenIds: [
                '100303004202040003200101020130202034005204700520080052039016000000000000001',
                '100303004202040004200100720130162034004204700420080042039016000000000000001',
                '100303004202040005200100520130122034003204700320080032039016000000000000001',
                '100303004202040006200100320130082034002204700220080022039016000000000000001',
              ],
            }
            fetchedNfts['3005'] = {
              tokenIds: [
                '100303005202040003200101020130202034005204700520080052039017000000000000001',
                '100303005202040004200100720130162034004204700420080042039017000000000000001',
                '100303005202040005200100520130122034003204700320080032039017000000000000001',
                '100303005202040006200100320130082034002204700220080022039017000000000000001',
              ],
            }
            fetchedNfts['3006'] = {
              tokenIds: [
                '100303006202040003200101020130202034005204700520080052039018000000000000001',
                '100303006202040004200100720130162034004204700420080042039018000000000000001',
                '100303006202040005200100520130122034003204700320080032039018000000000000001',
                '100303006202040006200100320130082034002204700220080022039018000000000000001',
              ],
            }
            fetchedNfts['3007'] = {
              tokenIds: [
                '100303007202040003200101020130202034005204700520080052039019000000000000001',
                '100303007202040004200100720130162034004204700420080042039019000000000000001',
                '100303007202040005200100520130122034003204700320080032039019000000000000001',
                '100303007202040006200100320130082034002204700220080022039019000000000000001',
              ],
            }
          }
          // console.log(account, fetchedNfts)
          setNfts(fetchedNfts)
        } else {
          // Reset it in case of wallet change
          setNfts([])
        }
      } catch (error) {
        //dispatch({ type: 'reset', state })
      }
    }

    fetchNfts()
  }, [account, currentAccount, lastUpdatedTime])

  const refresh = () => {
    setLastUpdatedTime(0)
  } //dispatch({ type: 'refresh', state, timestamp: Date.now() })

  useInterval(() => {
    refresh()
  }, 15 * 1000)

  return (
    <WalletItemsContext.Provider
      value={{
        nfts,
        refresh,
      }}
    >
      {children}
    </WalletItemsContext.Provider>
  )
}

export { WalletItemsContext, WalletItemsContextProvider }
