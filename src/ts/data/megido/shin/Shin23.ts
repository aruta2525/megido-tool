import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 23,
    id: 1,
    name: 'ネフィリム',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 8966,
    offense: 1098,
    defense: 483,
    speed: 270,
    ability: {name: '庇護の心', text: '自身が巨大化のとき、自身の「かばう」の効果が「全域かばう」の効果になる'},
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
        name: '私が守ります！＋',
        type: SkillType.Skill,
        text: '	2ターンの間、すべての単体攻撃を受け持ち自身の防御力を40%上昇する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'みんなに力を＋/暴走コンプレクス＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '自身以外の覚醒ゲージを+1し、さらに2ターンの間、ターン終了時にHPを15%回復する'
          },
          {
            level: 1,
            label: '巨大化',
            magnification: 1.35,
            hit: 1,
            text: '敵全体に攻撃力1.35倍のダメージさらに、与えたダメージの30%を吸収する'
          }
        ]
      },
      {
        name: '昇華せし自我＋',
        type: SkillType.Mysteries,
        text:
          '2ターンの間、自身が巨大化状態になり、最大HP/攻撃力/防御力を40%ずつ上昇させ、さらに自身以外の攻撃力を30%上昇させる。ただし2ターンの間、自身が封印状態になる	',
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
  },
  {
    clockType: ClockType.Shin,
    no: 23,
    id: 2,
    name: 'ネフィリム',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 7733,
    offense: 882,
    defense: 488,
    speed: 523,
    ability: {name: '宵界のトップモデル', text: '自身が巨大化中、スキルが強化される'},
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
        name: '癒しのコスメ＋/魅惑の熱視線＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方単体のHPを25%回復させ、覚醒ゲージを+1する'
          },
          {
            level: 1,
            label: '巨大化',
            magnification: 2,
            hit: 1,
            text: '敵全体に攻撃力2倍の防御無視ダメージ。さらに与えたダメージの15%を味方全体に吸収する'
          }
        ]
      },
      {
        name: '慈悲の煌めき＋/聖母の鉄槌＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '味方横一列の状態異常を治癒する。さらにHPを20%回復させる'
          },
          {
            level: 1,
            label: '巨大化',
            magnification: 2.5,
            hit: 1,
            text: '敵全体に無敵と回数バリアの効果を無視する攻撃力2.5倍の防御無視ダメージ'
          }
        ]
      },
      {
        name: '美巨人のランウェイ＋',
        type: SkillType.Mysteries,
        text:
          '2ターンの間、自身が巨大化状態になり、最大HP/攻撃力/防御力を40%ずつ上昇させ、ターン終了時に自身以外のHPを20%回復。ただし2ターンの間、自身が封印状態になる',
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
