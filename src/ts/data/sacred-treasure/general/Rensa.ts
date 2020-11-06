import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: 'フロイデ・ハット',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 0,
    offense: 69,
    defense: 0,
    speed: 0,
    type: Type.Rensa,
    ability: {value: 0, text: 'チェイン中、攻撃力が4%上昇する'}
  },
  {
    name: '紅蓮の祭服',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 431,
    offense: 0,
    defense: 10,
    speed: 0,
    type: Type.Rensa,
    ability: {value: 0, text: '毎ターン終了時、HPが3%回復する'}
  },
  {
    name: '生命のチョーカー',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 17,
    type: Type.Rensa,
    ability: {value: 0, text: 'チェイン中、ステータス弱体の命中率が8%上昇する'}
  }
];

export default sacredTreasureList;
