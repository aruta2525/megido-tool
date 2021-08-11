import {IMegido} from '../../../interface/IMegido';
import {SkillType, Attribute, ClassType, StyleType, ClockType} from '../../../enum/Megido';

const megido: IMegido[] = [
  {
    clockType: ClockType.Shin,
    no: 2,
    id: 1,
    name: 'ニバス',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 6143,
    offense: 1429,
    defense: 406,
    speed: 480,
    ability: {name: 'ムードメーカー', text: '毎ターン終了時、25%の確率で自身以外の覚醒ゲージを+1する'},
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
        name: 'ラブリージャグラー＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 1.25,
            hit: 1,
            text: '敵単体に攻撃力1.25倍のダメージ【使用するごとに連続攻撃数が変化】'
          },
          {
            level: 2,
            magnification: 1.25,
            hit: 2,
            text: '敵単体に攻撃力1.25倍の2連続ダメージ【使用するごとに連続攻撃数が変化】'
          },
          {
            level: 3,
            magnification: 1.25,
            hit: 3,
            text: '敵単体に攻撃力1.25倍の3連続ダメージ【使用するごとに連続攻撃数が変化】'
          },
          {
            level: 4,
            magnification: 1.25,
            hit: 4,
            text: '敵単体に攻撃力1.25倍の4連続ダメージ'
          }
        ]
      },
      {
        name: 'ハッピーカーニバル＋',
        type: SkillType.AwakeningSkill,
        text: '味方単体にいずれかのフォトンを最大2つ追加し、2ターンの間、Lv×5の固定追加ダメージを付与する',
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0
          }
        ]
      },
      {
        name: 'ブレイブドール＋',
        type: SkillType.Mysteries,
        text: '敵単体に攻撃力3.25倍のダメージさらに1ターンの間、自身の全フォトンを強化する',
        levels: [
          {
            level: 1,
            magnification: 3.25,
            hit: 1
          }
        ],
        increment: 0.05
      }
    ]
  },
  {
    clockType: ClockType.Shin,
    no: 2,
    id: 2,
    name: 'ニバス',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 9089,
    offense: 1058,
    defense: 482,
    speed: 420,
    ability: {name: '新ネタ披露の大一番', text: '大協奏中、致死ダメージを受けたとき、35%の確率で踏みとどまる'},
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
        name: 'プリティダンス＋',
        type: SkillType.Skill,
        levels: [
          {
            level: 1,
            magnification: 0,
            hit: 0,
            text: '1ターン後、2ターンの間、味方単体の攻撃力を15%上昇させる。さらに2ターンの間継続する音符を1つ蓄積【使用するごとにスキルLv上昇】'
          },
          {
            level: 2,
            magnification: 0,
            hit: 0,
            text: '1ターン後、2ターンの間、味方単体の攻撃力を30%上昇させる。さらに2ターンの間継続する音符を1つ蓄積【使用するごとにスキルLv上昇】'
          },
          {
            level: 3,
            magnification: 0,
            hit: 0,
            text: '1ターン後、味方単体の状態異常を治癒し、2ターンの間、攻撃力を30%上昇させる。さらに2ターンの間継続する音符を2つ蓄積'
          }
        ]
      },
      {
        name: 'ジョークコースター＋',
        type: SkillType.AwakeningSkill,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 1.75,
            hit: 1,
            text: '敵横一列に攻撃力1.75倍のダメージ。さらに2ターンの間、敵をノックバック状態にする'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 1.75,
            hit: 1,
            attribute: Attribute.Sound,
            text: '敵横一列に攻撃力1.75倍の響撃ダメージ。さらに2ターンの間、敵をノックバック状態にし、敵に掛かっている強化を解除する'
          }
        ]
      },
      {
        name: 'パペットラプソディ＋',
        type: SkillType.Mysteries,
        levels: [
          {
            level: 1,
            label: '通常',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方単体の攻撃力を20%上昇させる。さらにアタック・スキル・チャージをそれぞれ1つずつランダムな順で追加する'
          },
          {
            level: 1,
            label: '大協奏',
            magnification: 0,
            hit: 0,
            text: '2ターンの間、味方単体の攻撃力を40%上昇させる。さらにアタック・スキル・チャージをそれぞれ1つずつランダムな順で追加する'
          }
        ],
        increment: 0
      }
    ]
  }
];

export default megido;
