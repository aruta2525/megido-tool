import {ICharacter} from '../../../interface/ICharacter';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/MegidoType';

export const So22: ICharacter[] = [
  {
    clockType: ClockType.So,
    no: 22,
    id: 1,
    name: 'イポス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 9320,
    offense: 984,
    deffense: 286,
    speed: 646,
    ability: {name: '歴戦の兵', text: 'クエストでの獲得経験値が50％上昇する'},
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
        name: '追撃態勢＋',
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
        name: 'トライピアシング＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 1,
            hit: 3
          }
        ]
      },
      {
        name: 'ヴォジャノーイの渦＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 2,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 22,
    id: 2,
    name: 'イポス',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 8705,
    offense: 617,
    deffense: 630,
    speed: 489,
    ability: {name: '闘争の探求者', text: '怒闘状態時、毎ターン開始時にアタックフォトンを1つ追加する'},
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
        name: 'レオエスコビージャ＋',
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
        name: '魔獅子の宣誓＋',
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
        name: 'レオンオブシャウト＋',
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
