import type { SxProps, Theme } from '@mui/material';

export const paperStyles: SxProps<Theme> = {
  padding: '16px',
  overflowX: 'auto',
};

export const containerStyles: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  fontFamily: 'monospace',
  fontSize: { xs: '12px', sm: '16px' },
  lineHeight: 1.2,
  userSelect: 'text',
  margin: '32px 0',
};

export const charWrapperStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2px',
  borderRadius: '4px',
  minWidth: '24px',
  gap: '2px',
};

export const charBoxBaseStyles: SxProps<Theme> = {
  borderRadius: '4px',
  padding: '2px 4px',
  fontWeight: 'normal',
  color: '#222',
};
