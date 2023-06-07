import { Paper } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';
import { useStyles } from './style';
import { IColumn } from '../../types';
import { BoardCard } from '../Card';
import { useBoardContext } from '../Board';
import { MoveButtons } from '../MoveButtons';
import { CardForm } from '../CardForm';

interface ColumnProps {
  columnData: IColumn;
  columnInd: number;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
}

export const Column = ({
  columnData,
  columnInd,
  showLeftArrow = true,
  showRightArrow = true,
}: ColumnProps) => {
  const styles = useStyles();
  const { moveColumnLeft, moveColumnRight, deleteColumn } = useBoardContext();
  const [isAddingCardMode, setIsAddingCardMode] = useState(false);

  const toggleAddingCardMode = () => {
    setIsAddingCardMode(isAddingCardMode => !isAddingCardMode);
  };

  return (
    <Paper className={styles.column} classes={{ root: styles.column }}>
      <div className={styles.columnHeader}>
        <h2>{columnData.columnTitle}</h2>
        <div className={styles.controls}>
          <MoveButtons
            elemId={columnInd}
            showLeftArrow={showLeftArrow}
            showRightArrow={showRightArrow}
            handleLeftButtonClick={moveColumnLeft}
            handleRightButtonClick={moveColumnRight}
          />
          <DeleteOutlineIcon className={styles.deleteBtn} onClick={() => deleteColumn(columnInd)} />
        </div>
      </div>

      <button onClick={toggleAddingCardMode}>{isAddingCardMode ? '-' : '+'}</button>

      {isAddingCardMode && <CardForm columnInd={columnInd} />}

      {columnData.cards.map((card, ind) => (
        <div key={ind} className={styles.card}>
          <BoardCard
            cardData={card}
            cardId={ind}
            columnId={columnInd}
            showLeftArrow={showLeftArrow}
            showRightArrow={showRightArrow}
          />
        </div>
      ))}
    </Paper>
  );
};
