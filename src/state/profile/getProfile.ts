import Cookies from 'js-cookie'
import { getProfileContract, getArcaneCharacterContract } from 'utils/contractHelpers'
import { Nft } from 'config/constants/types'
import { Profile } from 'state/types'
import nfts from 'config/constants/nfts'
import { transformProfileResponse } from './helpers'

const profileContract = getProfileContract()
const rabbitContract = getArcaneCharacterContract()
const profileApi = process.env.REACT_APP_API_PROFILE

export interface GetProfileResponse {
  hasRegistered: boolean
  profile?: Profile
}

export const getUserAddressByUsername = async (name: string): Promise<string> => {
  try {
    const response = await fetch(`${profileApi}/users/${name}`).catch(() => {})

    if (!response || !response.ok) {
      return ''
    }

    // @ts-ignore
    const username = await response.text()

    return username
  } catch (error) {
    return ''
  }
}

export const getUsername = async (address: string): Promise<string> => {
  try {
    const response = await fetch(`${profileApi}/users/${address}`)

    if (!response.ok) {
      return ''
    }

    const { username = '' } = await response.json()

    return username
  } catch (error) {
    return ''
  }
}

const getProfile = async (address: string): Promise<GetProfileResponse> => {
  let hasRegistered = false
  try {
    hasRegistered = (await profileContract.methods.hasRegistered(address).call()) as boolean

    if (!hasRegistered) {
      return { hasRegistered, profile: null }
    }

    const profileResponse = await profileContract.methods.getUserProfile(address).call()
    const { userId, points, teamId, tokenId, nftAddress, isActive } = transformProfileResponse(profileResponse)
    const username = await getUsername(address)

    // If the profile is not active the tokenId returns 0, which is still a valid token id
    // so only fetch the nft data if active
    let nft: Nft
    if (isActive) {
      const characterId = await rabbitContract.methods.getCharacterId(tokenId).call()
      nft = nfts.find((nftItem) => nftItem.characterId === Number(characterId))

      // Save the preview image in a cookie so it can be used on the exchange
      Cookies.set(
        `profile_${address}`,
        {
          username,
          avatar: `https://rune.farm/images/nfts/${nft.images.sm}`,
        },
        { domain: 'rune.farm', secure: true, expires: 30 },
      )
    }

    const profile = {
      userId,
      points,
      teamId,
      tokenId,
      username,
      nftAddress,
      isActive,
      nft,
    } as Profile

    return { hasRegistered, profile }
  } catch (error) {
    return { hasRegistered, profile: null }
  }
}

export default getProfile
