import {TranceType} from '../enum/Megido';
import {IAbility} from './IAbility';

export interface ITranceLevel {
  level: number;
  name: string;
  text?: string;
  ability?: IAbility;
}

export interface ITranceData {
  type: TranceType;
  levels: ITranceLevel[];
}

export const defaultTrances: ITranceData[] = [
  {
    type: TranceType.None,
    levels: [
      {
        level: 1,
        name: 'なし',
        text: ''
      }
    ]
  }
];
