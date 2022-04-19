import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'TVS',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x33cdB9F897C58e80622D9F6Faa3666A6122f85a0',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'TVS-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x9D368fCB7Ee2AB10c09BCb4A941fE054e18aDCD0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BUSD-TVS LP',
    lpAddresses: {
      97: '',
      56: '0x8FDa1bdf01accd78Efa1367dEE99ca1657C25696',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x5486F20B942B919ec9A246bb6131878e79D02DfB',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },

  /*{
    pid: 2,
    lpSymbol: 'QUITO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3e0d03A4fA724b5e59cc88996373Cebff300aE7A',
    },
    token: serializedTokens.quito,
    quoteToken: serializedTokens.wbnb,
  },
  /*{
    pid: 5,
    lpSymbol: 'BUSD-QUITO LP',
    lpAddresses: {
      97: '',
      56: '0x27328Ed7779f19535e3d2Da72A7bDf3d3A5D3d9c',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.quito,
  },
  {
    pid: 6,
    lpSymbol: 'BNB-QUITO LP',
    lpAddresses: {
      97: '',
      56: '0x3e0d03A4fA724b5e59cc88996373Cebff300aE7A',
    },
    token: serializedTokens.quito,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'POR ERROR EL MASTERCHEF',
    lpAddresses: {
      97: '',
      56: '0x39e11a85659A69a12453c64A1C1D3bb2D612A12E',
    },
    token: serializedTokens.error,
    quoteToken: serializedTokens.error,
  }
  */
  {
    pid: 8,
    lpSymbol: 'BUSD-TOVA LP',
    lpAddresses: {
      97: '',
      56: '0xA7421cC82e384ebc698aCdd4AD701477aC96fa07',
    },
    token: serializedTokens.tova,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 9,
    lpSymbol: 'BNB-TOVA LP',
    lpAddresses: {
      97: '',
      56: '0x68474D28136354dc6883c670727A096aBA777c32',
    },
    token: serializedTokens.tova,
    quoteToken: serializedTokens.wbnb,
  },
  
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
