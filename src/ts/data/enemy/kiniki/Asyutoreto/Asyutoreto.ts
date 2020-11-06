import {IEnemy} from '../../../../interface/IEnemy';
import {ClassType, StyleType} from '../../../../enum/Megido';
import {Stage, DifficultyLevel} from '../../../../enum/Stage';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '輝竜アシュトレト',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 18375,
    offense: 1267,
    defense: 5070,
    speed: 570,
    ability: {
      name: '反撃の牙',
      text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1.3倍]のダメージを与え、[30%]の確率で2ターンの間、めまい状態にする'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '輝竜アシュトレト',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 14348,
    offense: 1198,
    defense: 3917,
    speed: 545,
    ability: {
      name: '反撃の牙',
      text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1.2倍]のダメージを与え、[20%]の確率で2ターンの間、めまい状態にする'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '輝竜アシュトレト',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 10311,
    offense: 861,
    defense: 3217,
    speed: 392,
    ability: {
      name: '反撃の牙',
      text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1.1倍]のダメージを与え、[150%]の確率で2ターンの間、めまい状態にする'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '輝竜アシュトレト',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 6628,
    offense: 615,
    defense: 2298,
    speed: 280,
    ability: {
      name: '反撃の牙',
      text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1倍]のダメージを与え、[10%]の確率で2ターンの間、めまい状態にする'
    }
  }
];

export default enemy;
