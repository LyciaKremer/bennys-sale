// https://www.figma.com/community/plugin/1143464892862229742/Color%2C-Tint-%26-Shade-Generator

const theme = {
  colors: {
    backgroundLight: '#0d0d0d',
    backgroundButton: '#5873FF',
    gray: {
      0: '#FFFFFF',
      100: '#F1F1F1',
      150: '#DEDEDE',
      200: '#DCDCDC',
      300: '#C8C8C8',
      400: '#B3B3B3',
      500: '#9F9F9F',
      550: '#9D9D9D',
      560: '#979A9C',
      600: '#8B8B8B',
      700: '#767676',
      800: '#626262',
      900: '#393939'
    },
    primary: {
      0: '#FFE8E9',
      100: '#FFBFC3',
      200: '#FF969C',
      300: '#FF6D76',
      400: '#FF4550',
      500: '#DE3F4D',
      600: '#E30613',
      700: '#BA000B',
      800: '#910009',
      900: '#690006'
    },
    secondary: {
      50: '#E8F1FF',
      100: '#B6D3FF',
      200: '#84B5FF',
      300: '#5197FF',
      400: '#1F78FF',
      450: '#0B7BFF',
      500: '#0E61DD',
      600: '#014BBB',
      700: '#003D99',
      800: '#003077',
      900: '#002255'
    },
    success: {
      0: '#EFFFF8',
      100: '#CCFFEA',
      200: '#A8FFDB',
      300: '#85FFCC',
      400: '#62FFBE',
      500: '#47E0A0',
      600: '#2FBE83',
      700: '#1C9C67',
      800: '#0E7A4D',
      900: '#045835'
    },
    danger: {
      0: '#FFECEC',
      100: '#FFC2C2',
      200: '#FF9999',
      300: '#FF6F6F',
      400: '#FB4444',
      500: '#D93030',
      600: '#B72020',
      700: '#951212',
      800: '#730909',
      900: '#510202'
    },
    warning: {
      0: '#FFF9EB',
      100: '#FFEDC0',
      200: '#FFE194',
      300: '#FFD569',
      400: '#FFC93E',
      500: '#DDAB2A',
      600: '#BB8E1A',
      700: '#99720E',
      800: '#775705',
      900: '#553D00'
    }
  },
  typography: {
    xs_2: '0.75rem',
    xs: '0.813rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.5rem',
    xl: '1.875',
    xl_2: '2.5rem'
  },
  fonts: {
    default: 'Montserrat, sans-serif'
  },
  effects: {
    transition: 'all 0.5s ease',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)'
  }
}

export default theme
