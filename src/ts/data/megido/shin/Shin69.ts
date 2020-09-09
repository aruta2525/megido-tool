import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 69,
    id: 1,
    name: 'バールゼフォン',
    classType: ClassType.Burst,
    styleType: StyleType.Sniper,
    hp: 7245,
    offense: 629,
    deffense: 630,
    speed: 643,
    ability: {name: '筆が乗ってきたぜ！', text: '自身の覚醒ゲージが最大の60%以上のとき、チャージフォトン使用時に味方単体にチェインする'},
    skills: [
      {
        name: 'アタック',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 1
          }
        ]
      },
      {
        name: '極彩色の魔術師＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '流浪の胡蝶と空涙＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: '夢描く苦悩の涙＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
