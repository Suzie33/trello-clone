export interface ICard {
  title: string;
}

export interface IColumn {
  columnTitle: string;
  cards: ICard[];
}
