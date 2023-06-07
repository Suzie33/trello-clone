import { useState } from 'react';
import { useBoardContext } from '../Board';

interface CardFormProps {
  columnInd: number;
}

export const CardForm = ({ columnInd }: CardFormProps) => {
  const [inputValue, setInputValue] = useState('');
  const { createCard } = useBoardContext();

  const handleCardFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCard(inputValue, columnInd);
    setInputValue('');
  };

  return (
    <form onSubmit={handleCardFormSubmit}>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <input type='submit' value='Create card' />
    </form>
  );
};
