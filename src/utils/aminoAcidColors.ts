export type AminoAcidCategory =
  | 'hydrophobic'
  | 'polar'
  | 'acidic'
  | 'basic'
  | 'cysteine'
  | 'glycine'
  | 'gap';

export const aminoAcidColorMap: Record<AminoAcidCategory, string> = {
  hydrophobic: '#67E4A6',
  polar: '#80BFFF',
  acidic: '#FC9CAC',
  basic: '#BB99FF',
  cysteine: '#FFEA00',
  glycine: '#C4C4C4',
  gap: '#F0F0F0',
};

export const aminoAcidCategoryMap: Record<string, AminoAcidCategory> = {
  A: 'hydrophobic',
  I: 'hydrophobic',
  L: 'hydrophobic',
  M: 'hydrophobic',
  F: 'hydrophobic',
  W: 'hydrophobic',
  Y: 'hydrophobic',
  V: 'hydrophobic',
  P: 'hydrophobic',

  S: 'polar',
  T: 'polar',
  H: 'polar',
  Q: 'polar',
  N: 'polar',

  D: 'acidic',
  E: 'acidic',

  K: 'basic',
  R: 'basic',

  C: 'cysteine',
  G: 'glycine',

  '-': 'gap',
};

export const aminoAcidCategoryLabels: Record<AminoAcidCategory, string> = {
  hydrophobic: 'Неполярные (гидрофобные)',
  polar: 'Полярные незаряженные',
  acidic: 'Отрицательно заряженные',
  basic: 'Положительно заряженные',
  cysteine: 'Цистеин',
  glycine: 'Глицин',
  gap: 'Пробел',
};

export const getAminoAcidColor = (aa: string): string =>
  aminoAcidColorMap[aminoAcidCategoryMap[aa.toUpperCase()] ?? 'gap'];

export const getAminoAcidCategoryLabel = (aa: string): string => {
  const category = aminoAcidCategoryMap[aa.toUpperCase()] ?? 'gap';
  return aminoAcidCategoryLabels[category];
};
