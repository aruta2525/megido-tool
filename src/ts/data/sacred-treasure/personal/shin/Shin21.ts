import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜改＞漣のアンクレット',
    styleType: StyleType.Burst,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 21,
      name: 'リヴァイアサン'
    }
  },
  {
    name: '＜真＞海光のリボン',
    styleType: StyleType.Burst,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 183,
    offense: 0,
    defense: 25,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 21,
      name: 'リヴァイアサン'
    }
  },
  {
    name: '＜剛＞溟渤の胸当て',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 254,
    offense: 0,
    defense: 34,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 21,
      name: 'リヴァイアサン'
    }
  }
];

export default sacredTreasureList;
