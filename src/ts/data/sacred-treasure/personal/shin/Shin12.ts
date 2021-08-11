import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞深海の捕食者',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性、スキル、覚醒スキルが変化する'},
    personal: {
      clockType: ClockType.Shin,
      megidoNo: 12,
      name: 'ジニマル',
      megidoAbility: {
        name: '蒼海の滅王',
        text: '行動開始時、40%の確率でスキルが追加される'
      }
    }
  }
];

export default sacredTreasureList;
