import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '＜剛＞軽薄なナイフ',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {value: 0, text: 'スキル、覚醒スキル、奥義が変化する。攻撃時、敵を虚弱状態にする（3ターン） 自身状態異常付与時、覚醒ゲージ+1'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 51,
      name: 'バラム'
    }
  }
];

export default sacredTreasureList;
