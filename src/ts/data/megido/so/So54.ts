import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So54: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 54,
    id: 1,
    name: 'ムルムル',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 5901,
    offense: 990,
    defense: 501,
    speed: 626,
    ability: {name: '鳥落とし', text: '飛行系のモンスターに2倍のダメージ'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Attack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: 'ツイストシュート＋',
        type: SkillType.Skill,
        text: '敵単体に攻撃力0.9倍の2連続ダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する',
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 2
          }
        ]
      },
      {
        name: '魅惑の舞＋',
        type: SkillType.AwakeningSkill,
        text: '2ターンの間、味方全体の攻撃力を30%上昇させ、積めるフォトンの量を+1する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '豊穣の角笛＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方全体にアタックフォトンを1つ追加し、2ターンの間、ターン終了時にHPが15%回復する'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '味方全体にアタックフォトンを1つ追加し、さらに20%の確率で、追加数が2つになる。2ターンの間、ターン終了時にHPが15%回復'
          }
        ],
        increment: 0
      }
    ]
  }
];
