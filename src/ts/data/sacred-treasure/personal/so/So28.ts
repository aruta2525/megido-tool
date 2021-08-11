import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞シルバーエペ',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性、奥義が変化する。HPが10%上昇する'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 28,
      name: 'ベリト',
      megidoAbility: {
        name: '恥かかすなよ！',
        text: 'HPが50%以下のとき、攻撃力が50%上昇する'
      }
    }
  }
];

export default sacredTreasureList;
