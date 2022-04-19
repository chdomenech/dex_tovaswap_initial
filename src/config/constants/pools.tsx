import React from 'react'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { CHAIN_ID } from './networks'
import tokens, { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

export const vaultPoolConfig = {
  [VaultKey.CakeVault]: {
    name: <Trans>Auto TVS</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${tokens.cake.address}.svg`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0x1d32c2945C8FDCBc7156c553B7cEa4325a17f4f9',
      56: '0x39e11a85659A69a12453c64A1C1D3bb2D612A12E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 262,
    stakingToken: serializedTokens.tova,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      56: '0xE72F8F2AF4Ec181BDe2B2CbC26FD5beffC0743c9',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '3',
    deployedBlockNumber: 16062143,
    isFinished: false,
  },
  {
    sousId: 263,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.tova,
    contractAddress: {
      97: '',
      56: '0xeF65A5A841acC1DA73d8Ea3C779eEB47eC7c48cc',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.0055',
    deployedBlockNumber: 16089143,
    isFinished: false,
  },
  /*{
    sousId: 261,
    stakingToken: serializedTokens.quito,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '',
      56: '0xD5d8Ba8d7F5964732F5208891152D19276aE2F6a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '5',
    deployedBlockNumber: 15954080,
    isFinished: false,
  },*/
  
].filter((p) => !!p.contractAddress[CHAIN_ID])

export default pools
