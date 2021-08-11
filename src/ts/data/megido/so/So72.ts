import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So72: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 72,
    id: 1,
    name: 'アンドロマリウス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 7094,
    offense: 752,
    defense: 472,
    speed: 643,
    ability: {name: '臆病者', text: 'HPが50%以下のとき、30%の確率で攻撃を無効化する'},
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
        name: '飴玉シャワー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方単体のスキルを強化し、攻撃力を20%上昇させる'
          }
        ]
      },
      {
        name: '雪玉スコール＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 2.5,
            hit: 1,
            text: '敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、敵を凍結状態にする'
          }
        ]
      },
      {
        name: 'ウィズダムスペル＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '味方全体にスキルフォトンを1つ追加し、2ターンの間、ダメージを20%軽減する'
          }
        ],
        increment: 0
      }
    ]
  }
];
