import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜改＞グアルベルト',
    styleType: StyleType.Counter,
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
      megidoNo: 65,
      name: 'ベルフェゴール',
      skills: []
    }
  },
  {
    name: '＜真＞トラウコート',
    styleType: StyleType.Counter,
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
      megidoNo: 65,
      name: 'ベルフェゴール',
      skills: []
    }
  },
  {
    name: '＜剛＞此方と彼方',
    styleType: StyleType.Counter,
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
      megidoNo: 65,
      name: 'ベルフェゴール',
      skills: []
    }
  }
];

export default sacredTreasureList;
