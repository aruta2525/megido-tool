import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '紺碧の清浄液',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 69,
    defense: 0,
    speed: 0,
    type: Type.Isshin,
    ability: {name: '', text: '自身の点穴の値が高いほど、毎ターン終了時、HPが回復する（最大5%）'}
  },
  {
    name: '黄金色の羽扇子',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Isshin,
    ability: {name: '', text: '点穴によってダメージを与えた際、与えたダメージの1%を吸収する'}
  },
  {
    name: '歓喜の雫',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 76,
    offense: 0,
    defense: 10,
    speed: 12,
    type: Type.Isshin,
    ability: {name: '', text: '自身の点穴の値が高いほど、防御力が上昇する（最大10%）'}
  }
];

export default sacredTreasureList;
