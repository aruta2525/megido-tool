import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜改＞アルブケース',
    styleType: StyleType.All,
    rank: Rank.Blue,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 66,
      name: 'マモン'
    }
  },
  {
    name: '＜真＞ブルーミスト',
    styleType: StyleType.All,
    rank: Rank.Silver,
    size: Size.Small,
    hp: 146,
    offense: 15,
    defense: 15,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 66,
      name: 'マモン'
    }
  }
];

export default sacredTreasureList;
