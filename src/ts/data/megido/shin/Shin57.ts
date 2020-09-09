import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

const megido: ICharacter[] = [
  {
    clockType: ClockType.Shin,
    no: 57,
    id: 1,
    name: 'ベヒモス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 7450,
    offense: 1350,
    deffense: 273,
    speed: 499,
    ability: {name: '野生本能', text: '獣形態のとき、行動開始時、自身にアタックが追加される'},
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
        name: 'アタック(獣形態)',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 0.65,
            hit: 6
          }
        ]
      },
      {
        name: '疾風迅雷+',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 3
          }
        ]
      },
      {
        name: '七転八起+(獣形態)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.8,
            hit: 3
          }
        ]
      },
      {
        name: '大声疾呼+',
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
        name: '豺狼咆哮+(獣形態)',
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
        name: '迅狼轟襲爪+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 1.2,
            hit: 4
          }
        ],
        increment: 0.0125
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 57,
    id: 2,
    name: 'ベヒモス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 8003,
    offense: 1183,
    deffense: 387,
    speed: 496,
    ability: {name: '', text: ''},
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
        name: 'アタック(獣形態)',
        type: SkillType.Atack,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 2
          }
        ]
      },
      {
        name: '月下変転＋',
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
        name: '狂狼の太刀風＋(獣形態)',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '剛破狼迅＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ]
      },
      {
        name: '爪牙狂乱＋(獣形態)',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0.75,
            hit: 6
          }
        ]
      },
      {
        name: '狼牙爪葬裂迅＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 5.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
