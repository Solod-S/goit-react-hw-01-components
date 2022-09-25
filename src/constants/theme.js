export const theme = {
  colors: {
    white: '#ffffff',
    offline: 'red',
    online: 'green',
    backGroundColor: '#E7ECF2',
    secondaryBackGroundColor: '#F3F6F9',
    primaryText: '#1F3349',
    secondaryText: '#98A4AF',
  },
  spacing: value => `${4 * value}px`,
  // padding: ${props => props.theme.spacing(4)};
  // 4x4
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    btn: 'system-ui, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '32px',
    xl: '64px',
  },
  fontWeight: {
    normal: 400,
    bolt: 700,
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
};
