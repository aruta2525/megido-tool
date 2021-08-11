import {IPersonalSacredTreasure} from '../../../../interface/IPersonalSacredTreasure';
import {StyleType, SkillType} from '../../../../enum/Megido';
import {SacredTreasureRank as Rank} from '../../../../enum/SacredTreasure';
import {SacredTreasureSize as Size} from '../../../../enum/SacredTreasure';
import {GenealogyType as Type} from '../../../../enum/SacredTreasure';
import {ClockType} from '../../../../enum/Megido';

const sacredTreasureList: IPersonalSacredTreasure[] = [
  {
    name: '<剛>叡智のアクス',
    styleType: StyleType.Burst,
    rank: Rank.Gold,
    size: Size.Small,
    hp: 0,
    offense: 0,
    defense: 0,
    speed: 0,
    type: Type.None,
    ability: {
      name: '',
      text: 'スキルが変化。行動開始時、40%の確率でスキルが追加される'
    },
    personal: {
      clockType: ClockType.So,
      megidoNo: 29,
      name: 'アスタロト',
      skills: [
        {
          name: '【専】一汗かこうヨ+',
          type: SkillType.Skill,
          levels: [
            {
              level: 1,
              magnification: 0,
              hit: 0,
              text: '2ターンの間、自身のアタックを強化し、雷ダメージを25%上昇させる【使用するごとにスキルLv上昇】'
            },
            {
              level: 2,
              magnification: 0,
              hit: 0,
              text: '2ターンの間、自身のアタックを強化し、雷ダメージを50%上昇させる【使用するごとにスキルLv上昇】'
            },
            {
              level: 3,
              magnification: 0,
              hit: 0,
              text: '2ターンの間、自身のアタックを強化し、雷ダメージを75%上昇させる【使用するごとにスキルLv上昇】'
            },
            {
              level: 4,
              magnification: 0,
              hit: 0,
              text: '3ターンの間、自身のアタックを強化し、雷ダメージを100%上昇させ、攻撃力を100%上昇させる'
            }
          ]
        }
      ]
    }
  }
];

export default sacredTreasureList;
