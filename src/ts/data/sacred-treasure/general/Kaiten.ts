import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '雄々しき勇姿',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Kaiten,
    ability: {name: '', text: '戦闘不能を蘇生するとき、HP割合量が10%上昇する'}
  },
  {
    name: '霊験なる盃',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 0,
    offense: 0,
    defense: 48,
    speed: 5,
    type: Type.Kaiten,
    ability: {name: '', text: '全ての状態異常への耐性が8%上昇する'}
  },
  {
    name: '蠱惑の肉球',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 48,
    defense: 21,
    speed: 0,
    type: Type.Kaiten,
    ability: {name: '', text: '自身が与える回復量が5%上昇する'}
  }
];

export default sacredTreasureList;
