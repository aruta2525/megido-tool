import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>断罪の双短剣',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性、覚醒スキルが変化。アタックが火ダメージになり、攻撃力が10%上昇'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 7,
      name: 'アモン',
      megidoAbility: {
        name: '隠密行動',
        text:
          '自身のHPが100%以上あるとき、75%の確率で受ける攻撃をMISSにする（奥義、秘奥義、オーブ攻撃を除く）※暗闇と違い、連撃は全て命中・全て回避の2択になる。回避バフとも別判定'
      }
    }
  }
];

export default sacredTreasureList;
