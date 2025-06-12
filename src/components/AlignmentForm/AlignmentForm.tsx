import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box, Typography } from '@mui/material';
import { validateEqualLength } from '../../utils/validation';
import { formStyles, errorTextStyles, submitButtonStyles } from './AlignmentFormStyles';
import { SequenceInput } from '../SequenceInput/SequenceInput';

interface FormValues {
  seq1: string;
  seq2: string;
}

interface Props {
  onSubmit: (seq1: string, seq2: string) => void;
}

export const AlignmentForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: { seq1: '', seq2: '' },
  });

  const seq1 = watch('seq1');
  const seq2 = watch('seq2');
  
  const isLengthMismatch = seq1 && seq2 && !validateEqualLength(seq1, seq2);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(({ seq1, seq2 }) =>
        onSubmit(seq1.toUpperCase(), seq2.toUpperCase())
      )}
      noValidate
      sx={formStyles}
    >
      <SequenceInput
        name="seq1"
        label="Последовательность 1"
        control={control}
        error={errors.seq1}
      />

      <SequenceInput
        name="seq2"
        label="Последовательность 2"
        control={control}
        error={errors.seq2}
      />

      {isLengthMismatch && (
        <Typography color="error" variant="body2" sx={errorTextStyles}>
          Длины последовательностей должны совпадать
        </Typography>
      )}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!seq1 || !seq2 || !!isLengthMismatch}
        sx={submitButtonStyles}
      >
        Выравнить
      </Button>
    </Box>
  );
};
