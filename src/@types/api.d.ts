import { IWinner } from "./../entities/winner";
export interface IGetToken {
  Token: string;
}

export interface IGetWinners {
  winners: IWinner[];
}
