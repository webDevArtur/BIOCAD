import React from 'react';
import { Box, Paper, Tooltip } from '@mui/material';
import {
  paperStyles,
  containerStyles,
  charWrapperStyles,
  charBoxBaseStyles,
} from './SequenceVisualizerStyles';
import { getAminoAcidColor, getAminoAcidCategoryLabel } from '../../utils/aminoAcidColors';

type Props = {
  seq1: string;
  seq2: string;
};

export const SequenceVisualizer: React.FC<Props> = ({ seq1, seq2 }) => {
  const length = Math.max(seq1.length, seq2.length);

  return (
    <Paper elevation={3} sx={paperStyles}>
      <Box sx={containerStyles}>
        {Array.from({ length }).map((_, i) => {
            const char1 = (seq1[i] ?? '-').toUpperCase();
            const char2 = (seq2[i] ?? '-').toUpperCase();
            const isDiff = char1 !== char2;

            return (
            <Box key={i} sx={charWrapperStyles}>
                <Tooltip title={getAminoAcidCategoryLabel(char1)} arrow placement="top">
                <Box
                    component="span"
                    sx={{
                    ...charBoxBaseStyles,
                    backgroundColor: getAminoAcidColor(char1),
                    }}
                >
                    {char1}
                </Box>
                </Tooltip>

                <Tooltip title={getAminoAcidCategoryLabel(char2)} arrow placement="top">
                <Box
                    component="span"
                    sx={{
                    ...charBoxBaseStyles,
                    backgroundColor: isDiff ? '#ffe6e6' : '#c8e6c9',
                    }}
                >
                    {char2}
                </Box>
                </Tooltip>
            </Box>
            );
        })}
        </Box>
    </Paper>
  );
};
