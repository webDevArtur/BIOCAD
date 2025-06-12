import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { AlignmentForm } from './components/AlignmentForm/AlignmentForm';
import { SequenceVisualizer } from './components/SequenceVisualizer/SequenceVisualizer';

const App: React.FC = () => {
  const [seq1, setSeq1] = useState('');
  const [seq2, setSeq2] = useState('');

  const handleSeqSubmit = (s1: string, s2: string) => {
    setSeq1(s1);
    setSeq2(s2);
  };

  return (
    <Container sx={{ p: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Выравнивание аминокислотных последовательностей
      </Typography>

      <AlignmentForm onSubmit={handleSeqSubmit} />

      {seq1 && seq2 && <SequenceVisualizer seq1={seq1} seq2={seq2} />}
    </Container>
  );
};

export default App;
