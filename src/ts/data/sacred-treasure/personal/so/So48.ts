import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>幸運の熊手',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキル・奥義が変化。'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 48,
      name: 'ハーゲンティ',
      skills: [
        {
          name: '【専】来て！フレンズ+',
          type: SkillType.Skill,
          levels: [
            {
              level: 0,
              label: 'CH0',
              magnification: 1,
              hit: 1,
              text:
                '敵単体に攻撃力1倍のダメージ。さらに80%の確率で、覚醒ゲージを-1し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
            },
            {
              level: 1,
              label: 'CH1',
              magnification: 1.5,
              hit: 1,
              text:
                '敵単体に攻撃力1.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-2し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
            },
            {
              level: 2,
              label: 'CH2',
              magnification: 2,
              hit: 1,
              text:
                '敵単体に攻撃力2倍のダメージ。さらに80%の確率で、覚醒ゲージを-3し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
            },
            {
              level: 3,
              label: 'CH3',
              magnification: 2.5,
              hit: 1,
              text:
                '敵単体に攻撃力2.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-4し、自身に加算する。味方単体にチェイン。チェイン数に応じて倍率と覚醒減少数変化'
            },
            {
              level: 4,
              label: 'CH4',
              magnification: 3,
              hit: 1,
              text: '敵単体に攻撃力3倍のダメージ。さらに80%の確率で、覚醒ゲージを-5し、自身に加算する。味方単体にチェイン。'
            }
          ]
        },
        {
          name: '【専】色褪せない宝物！+',
          type: SkillType.Mysteries,
          text: '2ターンの間、味方全体の攻撃力を50%上昇させる。味方単体にチェイン',
          levels: [
            {
              level: 1,
              magnification: 0,
              hit: 0
            }
          ],
          increment: 0
        }
      ]
    }
  }
];

export default sacredTreasureList;
