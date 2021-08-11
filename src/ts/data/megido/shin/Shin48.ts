import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 48,
    id: 1,
    name: 'ウトゥック',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6982,
    offense: 927,
    defense: 479,
    speed: 624,
    ability: {name: '火砲は撃って待て', text: 'バレットアーツ状態時、受けるダメージを20%軽減する'},
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
        name: 'ラウズアップカノン+',
        type: SkillType.Skill,
        text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
              【バレット効果】2ターンの間、攻撃力を20%低下+獣系の対象に2倍ダメージ`,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'チャージボンバード+',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 2,
            hit: 1,
            text: `敵単体に攻撃力2倍のダメージ。さらに、バレットを2個作成する<br>
                  【バレット効果】掛かっている強化を解除+80%の確率で覚醒-1`
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 2.25,
            hit: 1,
            text: `バレットを消費し、敵単体に攻撃力2.25倍のダメージ。さらに、バレットを2個作成する<br>
                  【バレット効果】掛かっている強化を解除+80%の確率で覚醒-1`
          }
        ]
      },
      {
        name: '撃滅の導弾+',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 3.25,
            hit: 1,
            text: '敵単体に攻撃力3.25倍のダメージ。さらに3ターンの間、対象に導を付与する'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 3.75,
            hit: 1,
            text: 'バレットを消費し、敵単体に攻撃力3.75倍のダメージ。さらに3ターンの間、対象に導を付与する'
          }
        ],
        increment: 0.05
      }
    ]
  }
];

export default megido;
