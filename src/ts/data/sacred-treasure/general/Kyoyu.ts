import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '逆境の蛮角',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 152,
    offense: 48,
    defense: 0,
    speed: 0,
    type: Type.Kyoyu,
    ability: {name: '', text: '自身のHPが50%以下のとき、攻撃力が5%上昇する'}
  },
  {
    name: '血潮の頑強',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 355,
    offense: 10,
    defense: 10,
    speed: 0,
    type: Type.Kyoyu,
    ability: {name: '', text: '防御力が6%上昇する'}
  },
  {
    name: '穿孔の首飾り',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 152,
    offense: 0,
    defense: 0,
    speed: 12,
    type: Type.Kyoyu,
    ability: {name: '', text: '攻撃時、敵の防御力を1%無視する'}
  }
];

export default sacredTreasureList;
