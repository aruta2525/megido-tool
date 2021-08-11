import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>終焉の毒蠍',
    styleType: StyleType.Counter,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {name: '', text: 'スキル、覚醒スキルが変化。'},
    personal: {
      clockType: ClockType.So,
      megidoNo: 63,
      name: 'アンドラス',
      skills: [
        {
          name: '【専】ゼクチオンメッサー＋',
          type: SkillType.Skill,
          text: '敵横一列に攻撃力1倍のダメージ。さらに80%の確率で、2ターンの間、敵を暗闇状態にする',
          levels: [
            {
              level: 1,
              magnification: 1,
              hit: 1
            }
          ]
        },
        {
          name: '【専】デリリアントブロー＋',
          type: SkillType.AwakeningSkill,
          levels: [
            {
              level: 1,
              label: '通常',
              magnification: 0,
              hit: 0,
              text: '2ターンの間、味方単体の効果範囲を列化し、攻撃力を30%上昇させる【戦闘不能の味方がいる場合、効果が変化】'
            },
            {
              level: 1,
              label: '戦闘不能者有',
              magnification: 0,
              hit: 0,
              text: '自身の覚醒ゲージを全て消費し、戦闘不能の味方単体を、最大HPの10%で蘇生させる。さらに2ターンの間、効果範囲を列化し、攻撃力を30%上昇させる'
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
