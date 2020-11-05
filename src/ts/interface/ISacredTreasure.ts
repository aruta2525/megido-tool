import {StyleType, GenealogyType, GenealogyRank, GenealogySize, ClockType} from '../enum/MegidoType';

// 霊宝インターフェース
export interface ISacredTreasure {
  type: GenealogyType; // 系譜
  rank: GenealogyRank; // ランク（金銀青
  size: GenealogySize; // サイズ（大中小
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
  personal?: {
    clockType: ClockType; // 時計タイプ（専用霊宝用）
    megidoNo: number; // メギド番号（専用霊宝用）
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
