import {IEnemy} from '../../../../interface/IEnemy';
import {ClassType, StyleType} from '../../../../enum/Megido';
import {Stage, DifficultyLevel} from '../../../../enum/Stage';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '大樹ユグドラシル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 53900,
    offense: 1920,
    defense: 780,
    speed: 150,
    ability: {
      name: '世界樹の加護',
      text: '自身の受けるダメージを25%軽減 フォトン容量-1 毎ターン終了時、覚醒ゲージが+1される'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '大樹ユグドラシル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 42086,
    offense: 1815,
    defense: 603,
    speed: 143,
    ability: {
      name: '世界樹の加護',
      text: '自身の受けるダメージを25%軽減 フォトン容量-1 毎ターン終了時、覚醒ゲージが+1される'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '大樹ユグドラシル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 30239,
    offense: 1304,
    defense: 495,
    speed: 103,
    ability: {
      name: '世界樹の加護',
      text: '自身の受けるダメージを25%軽減 フォトン容量-1 毎ターン終了時、覚醒ゲージが+1される'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '大樹ユグドラシル',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 19437,
    offense: 932,
    defense: 354,
    speed: 74,
    ability: {
      name: '世界樹の加護',
      text: '自身の受けるダメージを25%軽減 フォトン容量-1 毎ターン終了時、覚醒ゲージが+1される'
    }
  }
];

export default enemy;
