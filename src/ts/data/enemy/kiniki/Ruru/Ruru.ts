import {IEnemy} from '../../../../interface/IEnemy';
import {ClassType, StyleType} from '../../../../enum/Megido';
import {Stage, DifficultyLevel} from '../../../../enum/Stage';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '真珠姫ルゥルゥ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 30000,
    offense: 1920,
    defense: 522,
    speed: 522,
    ability: {
      name: 'くつろぎタイム',
      text: 'ターン終了時に、自身の覚醒ゲージを+1 自身への雷攻撃ダメージが50%上昇し、雷以外の攻撃ダメージを50%軽減する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '真珠姫ルゥルゥ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 25884,
    offense: 1765,
    defense: 500,
    speed: 500,
    ability: {
      name: 'くつろぎタイム',
      text: 'ターン終了時に、自身の覚醒ゲージを+1 自身への雷攻撃ダメージが50%上昇し、雷以外の攻撃ダメージを50%軽減する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '真珠姫ルゥルゥ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 22008,
    offense: 1616,
    defense: 478,
    speed: 478,
    ability: {
      name: 'くつろぎタイム',
      text: 'ターン終了時に、自身の覚醒ゲージを+1 自身への雷攻撃ダメージが50%上昇し、雷以外の攻撃ダメージを50%軽減する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '真珠姫ルゥルゥ',
    styleType: StyleType.Rush,
    classType: ClassType.Sniper,
    hp: 13838,
    offense: 1101,
    defense: 344,
    speed: 344,
    ability: {
      name: 'くつろぎタイム',
      text: 'ターン終了時に、自身の覚醒ゲージを+1 自身への雷攻撃ダメージが50%上昇し、雷以外の攻撃ダメージを50%軽減する'
    }
  }
];

export default enemy;
