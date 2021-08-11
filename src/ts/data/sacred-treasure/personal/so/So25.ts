import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>偉大なる星球',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: '特性・奥義が変化。物体系のモンスターに2倍のダメージ'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 25,
      name: 'グラシャラボラス',
      megidoAbility: {
        name: '器物破損',
        text:
          '自身が種族に【精霊】か【物体】を持つオーブを装備時、自身が攻撃か反動ダメージを受けたとき、自身に伝説のオーラを1個付与する（連続ダメージは1回としてカウントする）<br>伝説のオーラ：1個につき、ダメージブロック2%。またターン終了時、自身の覚醒ゲージを+1する確率が5%'
      }
    }
  }
];

export default sacredTreasureList;
