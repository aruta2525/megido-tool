import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: 'ポルターガイスト(コア)',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 490000,
    offense: 1459,
    defense: 7020,
    speed: 540,
    ability: {
      name: '冥界の艦',
      text: '受けるダメージを95%軽減し、全状態異常を無効にするが、毎ターン、最大HPの25%のダメージを受ける'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: 'ポルターガイスト(コア)',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 382609,
    offense: 1379,
    defense: 6198,
    speed: 517,
    ability: {
      name: '冥界の艦',
      text: '受けるダメージを95%軽減し、全状態異常を無効にするが、毎ターン、最大HPの25%のダメージを受ける'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: 'ポルターガイスト(コア)',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 274948,
    offense: 991,
    defense: 4454,
    speed: 371,
    ability: {
      name: '冥界の艦',
      text: '受けるダメージを95%軽減し、全状態異常を無効にするが、毎ターン、最大HPの25%のダメージを受ける'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: 'ポルターガイスト(コア)',
    styleType: StyleType.Rush,
    classType: ClassType.Trooper,
    hp: 176751,
    offense: 708,
    defense: 3182,
    speed: 265,
    ability: {
      name: '冥界の艦',
      text: '受けるダメージを95%軽減し、全状態異常を無効にするが、毎ターン、最大HPの25%のダメージを受ける'
    }
  }
];

export default enemy;
