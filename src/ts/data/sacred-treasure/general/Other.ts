import {ISacredTreasure} from '../../../interface/ISacredTreasure';
import {StyleType} from '../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../enum/SacredTreasure';

const sacredTreasureList: ISacredTreasure[] = [
  {
    name: 'スウィートポップ',
    styleType: StyleType.Rush | StyleType.Counter | StyleType.Burst,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 28,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '「カカオの森の黒い犬」のクエストでのみHPが10%上昇する'}
  },
  {
    name: 'ハブ・ア・バイト',
    styleType: StyleType.Rush | StyleType.Counter | StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 0,
    offense: 15,
    defense: 35,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '「カカオの森の黒い犬」のクエストでのみ攻撃力が100%上昇する'}
  },
  {
    name: 'プチボヌール',
    styleType: StyleType.Rush | StyleType.Counter | StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Medium,
    hp: 110,
    offense: 0,
    defense: 35,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: '「カカオの森の黒い犬」のクエストでのみHPが100%上昇する'}
  },
  {
    name: 'プレシャスタイム',
    styleType: StyleType.Rush | StyleType.Counter | StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Big,
    hp: 51,
    offense: 48,
    defense: 7,
    speed: 2,
    type: Type.None,
    ability: {value: 0, text: '毎ターン終了時、HPが3%回復する'}
  }
];

export default sacredTreasureList;
