import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '輝竜アシュトレト（鼻先の目）',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 35525,
    offense: 1882,
    defense: 5070,
    speed: 300,
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
    name: '輝竜アシュトレト（鼻先の目）',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 27739,
    offense: 1779,
    defense: 3917,
    speed: 287,
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
    name: '輝竜アシュトレト（鼻先の目）',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 19934,
    offense: 1278,
    defense: 3217,
    speed: 206,
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
    name: '輝竜アシュトレト（鼻先の目）',
    styleType: StyleType.Counter,
    classType: ClassType.Fighter,
    hp: 12814,
    offense: 913,
    defense: 2298,
    speed: 147,
    ability: {
      name: '反撃の牙',
      text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1倍]のダメージを与え、[10%]の確率で2ターンの間、めまい状態にする'
    }
  }
];

export default enemy;
