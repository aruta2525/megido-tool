import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞封じられし槍',
    styleType: StyleType.Rush,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '自身のHPが少ないほど攻撃力が上昇する(最大200%) 致死ダメージを受けたとき、6%の確率で踏みとどまる'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 20,
      name: 'プルソン'
    }
  }
];

export default sacredTreasureList;
