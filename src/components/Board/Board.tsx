import { createContext, useCallback, useContext, useState } from 'react';
import { boardColumnsData } from '../../data/boardColumns';
import { IColumn } from '../../types';
import { Column } from '../Column';
import { useStyles } from './style';

const BoardContext = createContext({
  moveColumnLeft: (_i: number) => {},
  moveColumnRight: (_i: number) => {},
  moveCardLeft: (_i: number, _colId: number) => {},
  moveCardRight: (_i: number, _colId: number) => {},
  deleteColumn: (_i: number) => {},
  deleteCard: (_i: number, _colId: number) => {},
});

export const useBoardContext = () => useContext(BoardContext);

export const Board = () => {
  const styles = useStyles();
  const [boardColumns, setBoardColumns] = useState<IColumn[]>(boardColumnsData);

  const moveColumnLeft = useCallback(
    (colInd: number) => {
      const newBoardColumns = [...boardColumns];
      [newBoardColumns[colInd - 1], newBoardColumns[colInd]] = [
        newBoardColumns[colInd],
        newBoardColumns[colInd - 1],
      ];

      setBoardColumns(newBoardColumns);
    },
    [boardColumns]
  );

  const moveColumnRight = useCallback(
    (colInd: number) => {
      const newBoardColumns = [...boardColumns];
      [newBoardColumns[colInd], newBoardColumns[colInd + 1]] = [
        newBoardColumns[colInd + 1],
        newBoardColumns[colInd],
      ];

      setBoardColumns(newBoardColumns);
    },
    [boardColumns]
  );

  const moveCardLeft = useCallback(
    (cardId: number, columnId: number) => {
      const newBoardColumns = [...boardColumns];
      const movingCard = newBoardColumns[columnId].cards.splice(cardId, 1);
      newBoardColumns[columnId - 1].cards.push(movingCard[0]);

      setBoardColumns(newBoardColumns);
    },
    [boardColumns]
  );

  const moveCardRight = useCallback(
    (cardId: number, columnId: number) => {
      const newBoardColumns = [...boardColumns];
      const movingCard = newBoardColumns[columnId].cards.splice(cardId, 1);
      newBoardColumns[columnId + 1].cards.push(movingCard[0]);

      setBoardColumns(newBoardColumns);
    },
    [boardColumns]
  );

  const deleteColumn = (columnId: number) => {
    const newBoardColumns = [...boardColumns];
    newBoardColumns.splice(columnId, 1);

    setBoardColumns(newBoardColumns);
  };

  const deleteCard = (cardId: number, columnId: number) => {
    const newBoardColumns = [...boardColumns];
    newBoardColumns[columnId].cards.splice(cardId, 1);

    setBoardColumns(newBoardColumns);
  };

  const boardContextValue = {
    moveColumnLeft,
    moveColumnRight,
    moveCardLeft,
    moveCardRight,
    deleteColumn,
    deleteCard,
  };

  const renderColumn = (column: IColumn, columnInd: number, colsAmount: number) => {
    if (columnInd === 0) {
      return <Column columnData={column} columnInd={columnInd} showLeftArrow={false} />;
    } else if (columnInd === colsAmount - 1) {
      return <Column columnData={column} columnInd={columnInd} showRightArrow={false} />;
    }

    return <Column columnData={column} columnInd={columnInd} />;
  };

  return (
    <BoardContext.Provider value={boardContextValue}>
      <div className={styles.board}>
        {boardColumns.map((column, columnInd, columns) => (
          <section key={columnInd} className={styles.column}>
            {renderColumn(column, columnInd, columns.length)}
          </section>
        ))}
      </div>
    </BoardContext.Provider>
  );
};
