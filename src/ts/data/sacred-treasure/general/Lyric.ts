import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '深甚のマスク',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 456,
    offense: 0,
    defense: 7,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが7%上昇する'}
  },
  {
    name: 'ノーブルマント',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 355,
    offense: 0,
    defense: 21,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが6%上昇する'}
  },
  {
    name: 'バーミリオンハート',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 254,
    offense: 0,
    defense: 34,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが5%上昇する'}
  },
  {
    name: 'アピロマスカレード',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 456,
    offense: 0,
    defense: 7,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが7%上昇する'}
  },
  {
    name: '信者のマント',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 355,
    offense: 0,
    defense: 21,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが6%上昇する'}
  },
  {
    name: 'ペリドットウィング',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 254,
    offense: 0,
    defense: 34,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが5%上昇する'}
  },
  {
    name: 'ジェイドマスク',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 456,
    offense: 0,
    defense: 7,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが7%上昇する'}
  },
  {
    name: 'グレースマント',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 355,
    offense: 0,
    defense: 21,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが6%上昇する'}
  },
  {
    name: '大海原の心',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 254,
    offense: 0,
    defense: 34,
    speed: 0,
    type: Type.Lyric,
    ability: {name: '', text: 'HPが5%上昇する'}
  }
];

export default sacredTreasureList;
