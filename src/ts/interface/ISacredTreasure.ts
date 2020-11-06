import {StyleType, ClockType} from '../enum/Megido';
import {GenealogyType, SacredTreasureRank, SacredTreasureSize} from '../enum/SacredTreasure';

// 霊宝インターフェース
export interface ISacredTreasure {
  type: GenealogyType; // 系譜
  rank: SacredTreasureRank; // ランク（金銀青
  size: SacredTreasureSize; // サイズ（大中小
  styleType: StyleType; // 装備可能スタイル
  name: string; // 名前
  hp: number; // hp
  offense: number; // 攻撃力
  defense: number; // 防御力
  speed: number; // 素早さ
  // 能力
  ability?: {
    type?: number;
    value: number; // 数値
    text: string; // 説明文
  };
}

// 系譜インターフェース
export interface IGenealogy {
  type: GenealogyType; // 系譜
  ability: {
    type?: number;
    value: number; // 数値
    text: string; // 説明文
  };
}
