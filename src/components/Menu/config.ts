import { MenuEntry } from '@arcanefinance/uikit'

import info from '../../../package.json'

const config: MenuEntry[] = [
  {
    label: `App`,
    icon: 'HomeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Dashboard',
        href: '/app',
      },
      {
        label: 'Getting Started',
        href: '/guide',
      },
      {
        label: 'Farm Raid',
        href: '/farms',
      },
      {
        label: 'Pool Raid',
        href: '/pools',
      },
      // {
      //   label: 'Characters',
      //   href: '/characters',
      // },
      {
        label: 'Guilds',
        href: '/guilds',
      },
    ],
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Item Marketplace',
        href: '/market',
      },
      {
        label: 'Swap Tokens',
        href: 'https://swap.rune.farm',
      },
      {
        label: 'Add Liquidity',
        href: 'https://swap.rune.farm/#/pool',
      },
    ],
  },
  {
    label: 'Games',
    icon: 'SunIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Rune Evolution',
        href: '/evolution',
      },
      {
        label: 'Rune Infinite',
        href: '/infinite',
      },
      {
        label: 'Arcane Sanctuary',
        href: '/arcane',
      },
    ],
  },
  {
    label: 'Account',
    icon: 'NftIcon',
    initialOpenState: true,
    items: [
      {
        label: 'My Inventory',
        href: '/me',
      },
      {
        label: 'My Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Crafting',
    icon: 'PoolIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Runewords',
        href: '/runewords',
      },
      {
        label: 'Runes',
        href: '/runes',
      },
      {
        label: 'Transmute',
        href: '/crafting',
      },
      // {
      //   label: 'Leaderboard',
      //   href: '/leaderboard?tab=0&subtab=0',
      // },
    ],
  },
  // {
  //   label: 'My Profile',
  //   icon: 'TicketIcon',
  //   href: '/profile',
  // },
  {
    label: 'Leaderboard',
    icon: 'InfoIcon',
    href: '/leaderboard',
  },
  // {
  //   label: 'Runes',
  //   icon: 'NftIcon',
  //   items: [
  //     {
  //       label: 'EL',
  //       href: '/runes/el',
  //     },
  //     {
  //       label: 'ELD',
  //       href: '/runes/eld',
  //     },
  //     {
  //       label: 'TIR',
  //       href: '/runes/tir',
  //     },
  //     {
  //       label: 'NEF',
  //       href: '/runes/nef',
  //     },
  //     {
  //       label: 'ITH',
  //       href: '/runes/ith',
  //     },
  //     {
  //       label: 'TAL',
  //       href: '/runes/tal',
  //     },
  //     {
  //       label: 'RAL',
  //       href: '/runes/ral',
  //     },
  //     {
  //       label: 'ORT',
  //       href: '/runes/ort',
  //     },
  //     {
  //       label: 'THUL',
  //       href: '/runes/thul',
  //     },
  //     {
  //       label: 'AMN',
  //       href: '/runes/amn',
  //     },
  //     {
  //       label: 'SOL',
  //       href: '/runes/sol',
  //     },
  //     {
  //       label: 'SHAEL',
  //       href: '/runes/shael',
  //     },
  //     {
  //       label: 'DOL',
  //       href: '/runes/dol',
  //     },
  //     {
  //       label: 'HEL',
  //       href: '/runes/hel',
  //     },
  //     {
  //       label: 'IO',
  //       href: '/runes/io',
  //     },
  //     {
  //       label: 'LUM',
  //       href: '/runes/lum',
  //     },
  //     {
  //       label: 'KO',
  //       href: '/runes/ko',
  //     },
  //     {
  //       label: 'FAL',
  //       href: '/runes/fal',
  //     },
  //     {
  //       label: 'LEM',
  //       href: '/runes/lem',
  //     },
  //     {
  //       label: 'PUL',
  //       href: '/runes/pul',
  //     },
  //     {
  //       label: 'UM',
  //       href: '/runes/um',
  //     },
  //     {
  //       label: 'MAL',
  //       href: '/runes/mal',
  //     },
  //     {
  //       label: 'IST',
  //       href: '/runes/ist',
  //     },
  //     {
  //       label: 'GUL',
  //       href: '/runes/gul',
  //     },
  //     {
  //       label: 'VEX',
  //       href: '/runes/vex',
  //     },
  //     {
  //       label: 'OHM',
  //       href: '/runes/ohm',
  //     },
  //     {
  //       label: 'LO',
  //       href: '/runes/lo',
  //     },
  //     {
  //       label: 'SUR',
  //       href: '/runes/sur',
  //     },
  //     {
  //       label: 'BER',
  //       href: '/runes/ber',
  //     },
  //     {
  //       label: 'JAH',
  //       href: '/runes/jah',
  //     },
  //     {
  //       label: 'CHAM',
  //       href: '/runes/cham',
  //     },
  //     {
  //       label: 'ZOD',
  //       href: '/runes/zod',
  //     },
  //   ],
  // },
  // {
  //   label: 'RuneWords',
  //   icon: 'NftIcon',
  //   items: [
  //     {
  //       label: 'Steel',
  //       href: '/crafting/steel',
  //     },
  //     {
  //       label: 'Fury',
  //       href: '/crafting/fury',
  //     },
  //     {
  //       label: 'Lorekeeper',
  //       href: '/crafting/lorekeeper',
  //     },
  //   ],
  // },
  // {
  //   label: 'Marketplace',
  //   icon: 'NftIcon',
  //   href: '/marketplace',
  // },
  // {
  //   label: 'Links',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Trade: RuneSwap',
  //       href: 'https://swap.rune.farm/#/swap',
  //     },
  //     {
  //       label: 'Trade: PancakeSwap',
  //       href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xa9776b590bfc2f956711b3419910a5ec1f63153e',
  //     },
  //     // {
  //     //   label: 'CoinGecko (TODO)',
  //     //   href: 'https://www.coingecko.com/en/coins/rune-farm',
  //     // },
  //     // {
  //     //   label: 'CoinMarketCap (TODO)',
  //     //   href: 'https://coinmarketcap.com/currencies/rune-farm/',
  //     // },
  //     {
  //       label: 'Chart: AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0xf9444c39bbdcc3673033609204f8da00d1ae3f52',
  //     },
  //     {
  //       label: 'Chart: Swapp',
  //       href: 'https://goswapp-bsc.web.app/0xa9776b590bfc2f956711b3419910a5ec1f63153e',
  //     },
  //     {
  //       label: 'Chart: Poo',
  //       href: 'https://poocoin.app/tokens/0xa9776b590bfc2f956711b3419910a5ec1f63153e',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Governance',
      //   href: '/governance',
      // },
      {
        label: `Patch Notes v${info.version}`,
        href: '/updates',
      },
      {
        label: 'Wiki',
        href: 'https://arcanesanctuary.miraheze.org/wiki/Main_Page',
      },
      {
        label: 'Documentation',
        href: 'https://docs.rune.farm/',
      },
      {
        label: 'Tokenomics',
        href: 'https://docs.rune.farm/tokenomics/rune',
      },
      {
        label: 'Polls',
        href: '/polls',
      },
      {
        label: 'Risks',
        href: '/risks',
      },
      {
        label: 'Github',
        href: 'https://github.com/runefarm',
      },
      {
        label: 'Blog',
        href: 'https://runefarm.medium.com',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/4c2DEPWEfn',
      },
      {
        label: 'FAQ',
        href: 'https://docs.rune.farm/resources/faq',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/rune',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/rune/',
      },
      {
        label: 'Chart: AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xf9444c39bbdcc3673033609204f8da00d1ae3f52',
      },
      {
        label: 'Chart: Swapp',
        href: 'https://goswapp-bsc.web.app/0xa9776b590bfc2f956711b3419910a5ec1f63153e',
      },
      {
        label: 'Chart: Poo',
        href: 'https://poocoin.app/tokens/0xa9776b590bfc2f956711b3419910a5ec1f63153e',
      },
    ],
  },
  // {
  //   label: `V${info.version}`,
  //   icon: 'SunIcon',
  //   href: '/',
  // },
]

export default config
