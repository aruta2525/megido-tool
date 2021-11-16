import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: 'レアメタルサーベル',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 62,
    defense: 7,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが6%上昇する'}
  },
  {
    name: '見せしめのプギオ',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 0,
    offense: 48,
    defense: 21,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが5%上昇する'}
  },
  {
    name: '晦冥の首飾り',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 34,
    defense: 34,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが4%上昇する'}
  },
  {
    name: '名剣マクシミリアン',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 62,
    defense: 7,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが6%上昇する'}
  },
  {
    name: '施しのバゼラード',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 0,
    offense: 48,
    defense: 21,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが5%上昇する'}
  },
  {
    name: '妖光の首飾り',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 34,
    defense: 34,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが4%上昇する'}
  },
  {
    name: '魔影のエストック',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 62,
    defense: 7,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが6%上昇する'}
  },
  {
    name: '艶麗チンクエディア',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 0,
    offense: 48,
    defense: 21,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが5%上昇する'}
  },
  {
    name: '明澄の首飾り',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 34,
    defense: 34,
    speed: 0,
    type: Type.Scenery,
    ability: {name: '', text: '単体攻撃のダメージが4%上昇する'}
  }
];

export default sacredTreasureList;
