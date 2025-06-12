import React from 'react';
import { Controller} from 'react-hook-form';
import type { Control, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';
import { aminoAcidError, validateSequence } from '../../utils/validation';

interface FormValues {
  seq1: string;
  seq2: string;
}

interface SequenceInputProps {
  name: 'seq1' | 'seq2';
  label: string;
  control: Control<FormValues>;
  error?: FieldError;
}

export const SequenceInput: React.FC<SequenceInputProps> = ({
  name,
  label,
  control,
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: 'Обязательное поле',
        validate: (value) => validateSequence(value) || aminoAcidError,
      }}
      render={({ field }) => (
        <TextField
        {...field}
        label={label}
        error={!!error}
        helperText={error?.message}
        fullWidth
        margin="normal"
        inputProps={{
            style: { fontFamily: 'monospace' },
            pattern: '[ARNDCEQGHILKMFPSTWYV-]*',
        }}
        onChange={(e) => {
            const cleaned = e.target.value
            .toUpperCase()
            .replace(/[^ARNDCEQGHILKMFPSTWYV-]/gi, '');
            field.onChange(cleaned);
        }}
        />
      )}
    />
  );
};
