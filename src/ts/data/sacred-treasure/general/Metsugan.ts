import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '撃手の鉄兜',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 152,
    offense: 48,
    defense: 0,
    speed: 0,
    type: Type.Metsugan,
    ability: {value: 0, text: '単体ダメージが4%上昇する'}
  },
  {
    name: '銃歩兵の鎧',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 0,
    offense: 34,
    defense: 34,
    speed: 0,
    type: Type.Metsugan,
    ability: {value: 0, text: '与えたダメージの4%を吸収する'}
  },
  {
    name: 'ラメールの筒',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 101,
    offense: 0,
    defense: 55,
    speed: 0,
    type: Type.Metsugan,
    ability: {value: 0, text: '行動開始時、5%の確率で スキルフォトンが追加される'}
  }
];

export default sacredTreasureList;
