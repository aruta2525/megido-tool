import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>叡智のアクス',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {
      value: 0,
      text: 'スキルが変化。行動開始時、40%の確率でスキルが追加される'
    },
    personal: {
      clockType: ClockType.So,
      megidoNo: 29,
      name: 'アスタロト'
    }
  }
];

export default sacredTreasureList;
