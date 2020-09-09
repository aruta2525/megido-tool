import {StyleType, GenealogyType, GenealogyRank, GenealogySize} from '../enum/MegidoType';

export interface ISacredTreasure {
  type: GenealogyType; // 系譜
  rank: GenealogyRank; // ランク（金銀青
  size: GenealogySize; // サイズ（大中小
  styleType: StyleType; // 装備可能スタイル
  name: string;
  hp: number;
  offense: number;
  defense: number;
  speed: number;
  ability?: {
    type?: number;
    value: number;
    text: string;
  };
}

export interface IGenealogy {
  type: GenealogyType;
  ability: {
    type?: number;
    value: number;
    text: string;
  };
}
