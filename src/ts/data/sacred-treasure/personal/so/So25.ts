import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
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
      ability: {
        name: '器物破損',
        text: `自身が種族に【精霊】か【物体】を持つオーブを装備時、自身が攻撃か反動ダメージを受けたとき、自身に伝説のオーラを1個付与する（連続ダメージは1回としてカウントする）<br>
          伝説のオーラ：1個につき、ダメージブロック2%。またターン終了時、自身の覚醒ゲージを+1する確率が5%`
      },
      skills: [
        {
          name: '【専】ピリオドの向こうへ＋',
          type: SkillType.Mysteries,
          text: '敵全体に攻撃力3倍のダメージ。ただし反動で、自身が戦闘不能になる',
          levels: [
            {
              level: 0,
              label: '通常',
              magnification: 3,
              hit: 1,
              text: '敵全体に攻撃力3倍のダメージ。ただし反動で、自身が戦闘不能になる'
            },
            {
              level: 5,
              label: 'オーラ(5個)',
              magnification: 6,
              hit: 1,
              text: '自身のオーラを5個消費し、敵全体に攻撃力6倍のダメージ。ただし反動で、50%の確率で、自身が戦闘不能になる'
            },
            {
              level: 10,
              label: 'オーラ(10個)',
              magnification: 8,
              hit: 1,
              text: '自身のオーラを10個消費し、敵全体に攻撃力8倍のダメージ'
            }
          ],
          increment: 0.05
        }
      ]
    }
  }
];

export default sacredTreasureList;
