import { Card } from '@mui/material';
import { ICard } from '../../types';
import { useStyles } from './style';
import { MoveButtons } from '../MoveButtons';
import { useBoardContext } from '../Board';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface cardProps {
  cardData: ICard;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
  cardId: number;
  columnId: number;
}

export const BoardCard = ({ cardData, showLeftArrow, showRightArrow, cardId, columnId }: cardProps) => {
  const styles = useStyles();
  const { moveCardLeft, moveCardRight, deleteCard } = useBoardContext();

  return (
    <Card className={styles.card} style={{ backgroundColor: 'silver' }}>
      {cardData?.title}
      <div className={styles.controls}>
        <MoveButtons
          elemId={cardId}
          handleLeftButtonClick={() => moveCardLeft(cardId, columnId)}
          handleRightButtonClick={() => moveCardRight(cardId, columnId)}
          showLeftArrow={showLeftArrow}
          showRightArrow={showRightArrow}
        />
        <DeleteOutlineIcon className={styles.deleteBtn} onClick={() => deleteCard(cardId, columnId)} />
      </div>
    </Card>
  );
};
