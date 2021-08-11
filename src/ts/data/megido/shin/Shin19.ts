import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 19,
    id: 1,
    name: 'オリエンス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6612,
    offense: 1124,
    defense: 423,
    speed: 558,
    ability: {name: '遅いわねっ！', text: '自身より素早さが低い対象へのダメージが50％上昇する'},
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
        name: '余裕でしょっ！＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0.85,
            hit: 3,
            text: '敵単体に攻撃力0.85倍の3連続ダメージ'
          },
          {
            level: 1,
            label: 'Bアーツ',
            magnification: 0.95,
            hit: 3,
            text: 'バレットを消費し、敵単体に攻撃力0.95倍の3連続ダメージ'
          }
        ]
      },
      {
        name: 'くらいなさいぃぃぃ＋',
        type: SkillType.AwakeningSkill,
        text: 'バレットを消費し、ランダムな敵単体にかばう効果を無視する攻撃力2倍のダメージ。バレットがある場合、この行動を再度行う（行動回数は最大10回）',
        levels: [
          {
            level: 0,
            label: '通常',
            magnification: 2,
            hit: 1,
            text: 'ランダムな敵単体にかばう効果を無視する攻撃力2倍のダメージ'
          },
          {
            level: 1,
            label: 'Bアーツ(1個)',
            magnification: 2,
            hit: 1
          },
          {
            level: 2,
            label: 'Bアーツ(2個)',
            magnification: 2,
            hit: 2
          },
          {
            level: 3,
            label: 'Bアーツ(3個)',
            magnification: 2,
            hit: 3
          },
          {
            level: 4,
            label: 'Bアーツ(4個)',
            magnification: 2,
            hit: 4
          },
          {
            level: 5,
            label: 'Bアーツ(5個)',
            magnification: 2,
            hit: 5
          },
          {
            level: 6,
            label: 'Bアーツ(6個)',
            magnification: 2,
            hit: 6
          },
          {
            level: 7,
            label: 'Bアーツ(7個)',
            magnification: 2,
            hit: 7
          },
          {
            level: 8,
            label: 'Bアーツ(8個)',
            magnification: 2,
            hit: 8
          },
          {
            level: 9,
            label: 'Bアーツ(9個)',
            magnification: 2,
            hit: 9
          },
          {
            level: 10,
            label: 'Bアーツ(10個)',
            magnification: 2,
            hit: 10
          }
        ]
      },
      {
        name: 'コンバットラビット＋',
        type: SkillType.Mysteries,
        text: `バレットを2個作成する。さらに2ターンの間、味方全体の素早さを90%上昇させ、味方編成をBアーツ状態にする<br>
              【バレット効果】攻撃時、ダメージを60%上昇＋掛かっている強化を解除`,
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

export default megido;
