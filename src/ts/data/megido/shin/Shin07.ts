import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 7,
    id: 1,
    name: 'ヒュトギン',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7616,
    offense: 784,
    defense: 493,
    speed: 619,
    ability: {name: '巧みな交渉術', text: '行動開始時、20%の確率でチャージが追加される'},
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
        name: 'ラ・フォンターナ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 1,
            text: '敵横一列に攻撃力0.9倍のダメージ。さらに80%の確率で、0.5倍で3ターン後に弾けるハイドロボム速を付与する'
          }
        ]
      },
      {
        name: 'サルーテ！＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '味方全体の状態異常を治癒する。さらにHPを15%回復させる'
          }
        ]
      },
      {
        name: 'ヴァンタジオルチェ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '敵全体に付与されているハイドロボムのダメージを40%上昇させる。さらに2ターンの間攻撃力を15%低下させる'
          }
        ],
        increment: 0
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 7,
    id: 2,
    name: 'ヒュトギン',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 6178,
    offense: 852,
    defense: 619,
    speed: 621,
    ability: {name: '理論武装', text: '50%の確率で、ターン終了時に自身にかかっている状態異常を治癒する'},
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
        name: 'プレパラツィオーネ＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0.9,
            hit: 1,
            text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
                  【バレット効果】2ターンの間、フォトン容量を-1＋海洋生物系の対象に2倍のダメージ`
          }
        ]
      },
      {
        name: 'アッバットノ＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: "通常(Lv1)",
            magnification: 2,
            hit: 1,
            text: `敵横一列に攻撃力2倍のダメージ。さらに、バレットを2個作成する【使用するごとにスキルLv上昇】<br>
            【バレット効果】攻撃時、ダメージを30%上昇＋2ターンの間、素早さを30%低下させる`
          },
          {
            level: 1,
            label: "通常(Lv2)",
            magnification: 2,
            hit: 1,
            text: `敵横一列に攻撃力2倍のダメージ。さらに、バレットを3個作成する【使用するごとにスキルLv上昇】<br>
            【バレット効果】攻撃時、ダメージを30%上昇＋2ターンの間、素早さを30%低下させる`
          },
          {
            level: 1,
            label: "通常(Lv3)",
            magnification: 2,
            hit: 1,
            text: `敵横一列に攻撃力2倍のダメージ。さらに、バレットを4個作成する【使用するごとにスキルLv上昇】<br>
            【バレット効果】攻撃時、ダメージを30%上昇＋2ターンの間、素早さを30%低下させる`
          },
          {
            level: 1,
            label: "Bアーツ(Lv1)",
            magnification: 2.25,
            hit: 1,
            text: `敵横一列に攻撃力2.25倍のダメージ。さらに、バレットを2個作成する【使用するごとにスキルLv上昇】<br>
            【バレット効果】攻撃時、ダメージを30%上昇＋2ターンの間、素早さを30%低下させる`
          },
          {
            level: 1,
            label: "Bアーツ(Lv2)",
            magnification: 2.25,
            hit: 1,
            text: `敵横一列に攻撃力2.25倍のダメージ。さらに、バレットを3個作成する【使用するごとにスキルLv上昇】<br>
            【バレット効果】攻撃時、ダメージを30%上昇＋2ターンの間、素早さを30%低下させる`
          },
          {
            level: 1,
            label: "Bアーツ(Lv3)",
            magnification: 2.25,
            hit: 1,
            text: `敵横一列に攻撃力2.25倍のダメージ。さらに、バレットを4個作成する【使用するごとにスキルLv上昇】<br>
            【バレット効果】攻撃時、ダメージを30%上昇＋2ターンの間、素早さを30%低下させる`
          },
        ]
      },
      {
        name: 'チェ・リ・ソーレ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方後列のスキルを強化し、最大HPの30%以下のダメージを無効化する'
          }
        ],
        increment: 0
      }
    ]
  },
];

export default megido;
