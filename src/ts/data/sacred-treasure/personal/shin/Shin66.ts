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
    ability: {name: '', text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 66,
      name: 'マモン',
      skills: []
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
    ability: {name: '', text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 66,
      name: 'マモン',
      skills: []
    }
  },
  {
    name: '＜剛＞アーラデュオ',
    styleType: StyleType.All,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 203,
    offense: 21,
    defense: 21,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'サブマスエフェクトを発生させる'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 66,
      name: 'マモン',
      skills: []
    }
  }
];

export default sacredTreasureList;
