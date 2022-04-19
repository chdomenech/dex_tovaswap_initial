import { MenuItemsType, DropdownMenuItemType } from '@tovaswapui/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    href: '../',
    showItemsOnMobile: false,
    items: [      
    ],
  },
  {
    label: t('Exchange'),
    href: '/swap',
    showItemsOnMobile: false,
    items: [      
    ],
  },
  {
    label: t('Liquidity'),
    href: '/liquidity',
    showItemsOnMobile: false,
    items: [      
    ],
  },
  {
    label: t('Farms'),
    href: '/farms',
    showItemsOnMobile: false,
    items: [      
    ],
  },
  {
    label: t('Pools'),
    href: '/pools',
    showItemsOnMobile: false,
    items: [      
    ],
  },
  {
    label: '',
    href: '',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Docs'),
        href: 'https://info.tovaswap.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
