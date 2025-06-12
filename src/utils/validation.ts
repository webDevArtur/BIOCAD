const validAminoAcidsRegex = /^[ARNDCEQGHILKMFPSTWYV-]+$/i;

export const validateSequence = (seq: string): boolean =>
  validAminoAcidsRegex.test(seq.trim());

export const validateEqualLength = (seq1: string, seq2: string): boolean =>
  seq1.trim().length === seq2.trim().length;

export const aminoAcidError =
  'Допустимы только символы A, R, N, D, C, E, Q, G, H, I, L, K, M, F, P, S, T, W, Y, V или -';
