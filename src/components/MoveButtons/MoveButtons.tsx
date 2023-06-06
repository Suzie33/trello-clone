import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from '@mui/icons-material';
import { useStyles } from './style';

interface MoveButtonsProps {
  handleLeftButtonClick: (i: number, colInd?: number) => void;
  handleRightButtonClick: (i: number, colInd?: number) => void;
  elemId: number;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
  columnId?: number;
}

export const MoveButtons = ({
  handleLeftButtonClick,
  handleRightButtonClick,
  showLeftArrow,
  showRightArrow,
  elemId,
  columnId,
}: MoveButtonsProps) => {
  const styles = useStyles();

  return (
    <div>
      {showLeftArrow && (
        <ArrowCircleLeftOutlined
          className={styles.moveBtn}
          onClick={() => handleLeftButtonClick(elemId, columnId)}
        />
      )}
      {showRightArrow && (
        <ArrowCircleRightOutlined
          className={styles.moveBtn}
          onClick={() => handleRightButtonClick(elemId, columnId)}
        />
      )}
    </div>
  );
};
