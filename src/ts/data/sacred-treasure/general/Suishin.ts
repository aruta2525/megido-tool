import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: '蒼霊水の水時計',
    styleType: StyleType.Rush | StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 431,
    offense: 0,
    defense: 0,
    speed: 3,
    type: Type.Suishin,
    ability: {value: 0, text: 'ハイドロボムを付与したとき、HPを5%回復する'}
  },
  {
    name: '修羅の仮面',
    styleType: StyleType.Rush | StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Medium,
    hp: 152,
    offense: 0,
    defense: 48,
    speed: 0,
    type: Type.Suishin,
    ability: {value: 0, text: 'ハイドロボムのダメージが3%上昇する'}
  },
  {
    name: '紺碧の魔塔ドーム',
    styleType: StyleType.Rush | StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 48,
    defense: 21,
    speed: 0,
    type: Type.Suishin,
    ability: {value: 0, text: 'ハイドロボムの命中率が5%上昇する'}
  }
];

export default sacredTreasureList;
