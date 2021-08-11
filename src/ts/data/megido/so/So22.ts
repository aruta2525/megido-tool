import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So22: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 22,
    id: 1,
    name: 'イポス',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 9320,
    offense: 984,
    defense: 286,
    speed: 646,
    ability: {name: '歴戦の兵', text: 'クエストでの獲得経験値が50％上昇する'},
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
        name: '追撃態勢＋',
        type: SkillType.Skill,
        text: '2ターンの間、味方のアタックに対して自身が追撃する状態になり、攻撃力が20%上昇する',
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
        text: '敵単体に攻撃力1倍の3連続ダメージ。さらに2ターンの間、自身の攻撃力を50%上昇させる',
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
        text: '敵横一列に攻撃力2倍のダメージ。2ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
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
    defense: 630,
    speed: 489,
    ability: {name: '闘争の探求者', text: '怒闘状態時、毎ターン開始時にアタックフォトンを1つ追加する'},
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
        name: 'レオエスコビージャ＋',
        type: SkillType.Skill,
        text: '味方単体の覚醒ゲージを+1し、2ターンの間毎ターン終了時にHPを20%回復するさらに味方編成を怒闘状態にする',
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
        text: '味方全体のHPを15%回復する バーサークの場合、2ターンの間、自身のアタックに加勢する状態にする',
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
        text:
          '味方単体にスキルを1つ追加し2ターンの間スキルダメージを40%軽減する。さらにカウンターの場合1ターンの間攻撃力を50%上昇、バーサーク状態にする<br>【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける',
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
