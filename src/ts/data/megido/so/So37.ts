import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So37: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 37,
    id: 1,
    name: 'フェニックス',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 7259,
    offense: 967,
    defense: 472,
    speed: 490,
    ability: {name: '断罪', text: '攻撃時、敵の防御力を無視する'},
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
        name: '紅焔剣+',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力1.25倍の火ダメージ。2ターンの間、炎上の地形効果で1.25倍の継続ダメージを与える',
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1
          }
        ]
      },
      {
        name: '処刑剣+',
        type: SkillType.AwakeningSkill,
        text: '敵単体に攻撃力3.5倍ダメージ。さらに30％の確率で、敵を即死させる',
        levels: [
          {
            level: 1,
            magnification: 3.5,
            hit: 1
          }
        ]
      },
      {
        name: '不死鳥の羽ばたき+',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        text: '敵全体に攻撃力2.25倍の火ダメージ。さらに戦闘不能の味方を、最大HPの35％で蘇生させる',
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      },
      {
        name: '【専】不死鳥の羽ばたき+',
        type: SkillType.Mysteries,
        attribute: Attribute.Fire,
        text: '敵全体に攻撃力2.25倍の火ダメージ。さらに炎上地形を狂炎地形にし、戦闘不能の味方を、最大HPの35％で蘇生させる',
        levels: [
          {
            level: 1,
            magnification: 2.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.So,
    no: 37,
    id: 2,
    name: 'フェニックス',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 7571,
    offense: 1144,
    defense: 413,
    speed: 600,
    ability: {name: '悪を断ずる覚悟', text: '自身蘇生時、1ターンの間、自身を無敵状態にする'},
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
        name: '業火剣＋',
        type: SkillType.Skill,
        attribute: Attribute.Fire,
        text: '敵単体に攻撃力1.75倍の火ダメージ。ただし反動で、自身が最大HPの30%ダメージを受ける',
        levels: [
          {
            level: 1,
            magnification: 1.75,
            hit: 1
          }
        ]
      },
      {
        name: '不鎮の炎＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '反撃',
            magnification: 1.25,
            hit: 1,
            attribute: Attribute.Fire,
            text: '自身が戦闘不能時にHP10%で蘇生する状態になり、さらに2ターンの間、攻撃を受けたとき攻撃力1.25倍の火ダメージで反撃する'
          }
        ]
      },
      {
        name: '不死鳥の抱擁＋',
        type: SkillType.Mysteries,
        text: '戦闘不能の味方全体を最大HPの10%で蘇生しHPに応じて効果付与[HP50%以下:アタック1つ追加/15%以下:2ターンの間攻撃力80%上昇]',
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
];
