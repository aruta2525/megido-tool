import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So69: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 69,
    id: 1,
    name: 'デカラビア',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 5906,
    offense: 1152,
    defense: 421,
    speed: 642,
    ability: {name: '滅びの美学', text: '植物系のモンスターに2倍のダメージ'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'ヴェノムマイン＋',
        text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵を毒状態にする',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: 'ブリザード＋',
        type: SkillType.AwakeningSkill,
        text: '敵横一列に攻撃力1.5倍のダメージ。さらに60%の確率で、2ターンの間、敵を凍結状態にする',
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1
          }
        ]
      },
      {
        name: 'トランスジャミング＋',
        type: SkillType.Mysteries,
        text: '敵全体の覚醒ゲージを-2し、2ターンの間、素早さを30%低下させる',
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
  },
  {
    clockType: ClockType.So,
    no: 69,
    id: 2,
    name: 'デカラビア',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 6808,
    offense: 886,
    defense: 515,
    speed: 536,
    ability: {name: '災厄をもたらす者', text: '毎ターン終了時、覚醒ゲージが+1される'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: 'イクセイザ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: `味方単体の覚醒ゲージを+1し、レイズギフト(1)を付与する<br>
                  【レイズギフト(1)効果】2ターンの間、敵単体を凍結状態にし、防御力を25%低下させる`
          },
          {
            level: 1,
            label: 'ネクロ',
            magnification: 0,
            hit: 0,
            text: `ソウルを2つ消費し、味方単体の覚醒ゲージを+1し、レイズギフト(2)を付与する<br>
                  【レイズギフト(2)効果】2ターンの間、敵横一列を凍結状態にし、防御力を25%低下させる`
          }
        ]
      },
      {
        name: '蔓延る害悪＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1.5,
            hit: 1,
            text: '敵横一列に攻撃力1.5倍のダメージさらに1ターンの間、毒状態にする【味方が蘇生されるたびにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 1.5,
            hit: 1,
            text: '敵横一列に攻撃力1.5倍のダメージさらに2ターンの間、毒状態にする【味方が蘇生されるたびにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 1.5,
            hit: 1,
            text: '敵横一列に攻撃力1.5倍のダメージさらに3ターンの間、毒状態にする【味方が蘇生されるたびにスキルLv上昇】'
          },
          {
            level: 4,
            magnification: 1.5,
            hit: 1,
            text: '敵横一列に攻撃力1.5倍のダメージさらに4ターンの間、毒状態にする【味方が蘇生されるたびにスキルLv上昇】'
          },
          {
            level: 5,
            magnification: 1.5,
            hit: 1,
            text: '敵横一列に攻撃力1.5倍のダメージさらに5ターンの間、毒状態にする'
          }
        ]
      },
      {
        name: 'アスタ・アンブラ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: `味方単体を戦闘不能時にHP20%で蘇生する状態にし、レイズギフト(1)を付与する<br>
                  【レイズギフト(1)効果】蘇生されたとき、2ターンの間、自身の攻撃力を60%上昇する`
          },
          {
            level: 1,
            label: 'ネクロ',
            magnification: 0,
            hit: 0,
            text: `ソウルを2つ消費し、味方単体を戦闘不能時にHP20%で蘇生する状態にし、レイズギフト(2)を付与する<br>
                  【レイズギフト(2)効果】蘇生されたとき、2ターンの間、自身の攻撃力を110%上昇する`
          }
        ],
        increment: 0
      }
    ]
  }
];
