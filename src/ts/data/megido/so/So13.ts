import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

export const So13: IMegido[] = [
  {
    clockType: ClockType.So,
    no: 13,
    id: 1,
    name: 'ベレト',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 5968,
    offense: 1206,
    defense: 411,
    speed: 626,
    ability: {name: '憤怒の瞳', text: '行動開始時、20%の確率でアタックが追加される'},
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
        name: 'レイジスタンプ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.15,
            hit: 1,
            text: '敵単体に攻撃力1.15倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する【攻撃を2回受けるたびにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 1.35,
            hit: 1,
            text: '敵単体に攻撃力1.35倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する【攻撃を2回受けるたびにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 1.55,
            hit: 1,
            text: '敵単体に攻撃力1.55倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する【攻撃を2回受けるたびにスキルLv上昇】'
          },
          {
            level: 4,
            magnification: 1.75,
            hit: 1,
            text: '敵単体に攻撃力1.75倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する'
          }
        ]
      },
      {
        name: '狂喜の怒り＋',
        type: SkillType.AwakeningSkill,
        text: '自身の攻撃力を1ターンの間、50%上昇させる。さらにバーサーク状態にする<br>【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'リアニメイター＋',
        type: SkillType.Mysteries,
        text: '戦闘不能の味方を、最大HPの35%で蘇生させ、2ターンの間、味方全体のアタックを強化するが、呪い状態になる',
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
    no: 13,
    id: 2,
    name: 'ベレト',
    styleType: StyleType.Burst,
    classType: ClassType.Trooper,
    hp: 7097,
    offense: 1354,
    defense: 407,
    speed: 470,
    ability: {name: '憤怒蓄積', text: 'フォトン使用時、チェイン中なら覚醒ゲージが+1される'},
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
        name: '憤怒の号令+',
        type: SkillType.Skill,
        levels: [
          {
            level: 0,
            label: 'Ch0',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。味方単体にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 1,
            label: 'Ch1',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の覚醒ゲージを+1する。味方単体にチェイン。チェイン数に応じて効果が変化	'
          },
          {
            level: 2,
            label: 'Ch2',
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ。さらに自身の覚醒ゲージを+2する。味方単体にチェイン'
          }
        ]
      },
      {
        name: 'レイジアイス+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 0,
            label: 'Ch2以下',
            magnification: 3,
            hit: 1,
            text: '敵単体に攻撃力3倍の防御無視ダメージ。さらに2ターンの間、氷結地形にする。チェイン中、味方単体にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 1,
            label: 'Ch3-4',
            magnification: 3.5,
            hit: 1,
            text: '敵単体に攻撃力3.5倍の防御無視ダメージ。さらに2ターンの間、敵横一列を氷結地形にする。チェイン中、味方単体にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 2,
            label: 'Ch5-6',
            magnification: 7,
            hit: 1,
            text: '敵単体に攻撃力7倍の防御無視ダメージ。さらに2ターンの間、敵全体を氷結地形にする。チェイン中、味方単体にチェイン。チェイン数に応じて効果が変化'
          },
          {
            level: 3,
            label: 'Ch7',
            magnification: 8,
            hit: 1,
            text: '敵単体に攻撃力8倍の防御無視ダメージ'
          }
        ]
      },
      {
        name: '遍在せしは怒り+',
        type: SkillType.Mysteries,
        text: `1ターンの間、リザーブ状態になる。さらに1ターン後、自身のフォトンをスキルに変化させ、2ターンの間、攻撃力を20%上昇させる<br>
              【リザーブ効果】自身以外の味方全体に従属チェイン1回を付与する`,
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
