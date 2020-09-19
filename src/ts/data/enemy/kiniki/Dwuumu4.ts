import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '魔眼賽ドゥーム（邪蛇の面/のろい/4）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 315600,
    offense: 1421,
    defense: 1014,
    speed: 600,
    ability: {
      name: '邪蛇の面',
      text: '形態変化時、[5ターン]の間、自然回復[20%]しチャージ強化、のろい中、状態異常1つ毎に被ダメージ[200%]上昇（[最大800%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '魔眼賽ドゥーム（邪蛇の面/のろい/4）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 161434,
    offense: 1312,
    defense: 975,
    speed: 548,
    ability: {
      name: '邪蛇の面',
      text: '形態変化時、[3ターン]の間、自然回復[20%]、のろい中、状態異常1つ毎に被ダメージ[150%]上昇（[最大600%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '魔眼賽ドゥーム（邪蛇の面/のろい/4）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 80763,
    offense: 1024,
    defense: 937,
    speed: 499,
    ability: {
      name: '邪蛇の面',
      text: '形態変化時、[2ターン]の間、自然回復[10%]、のろい中、状態異常1つ毎に被ダメージ[100%]上昇（[最大400%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '魔眼賽ドゥーム（邪蛇の面/のろい/4）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 40404,
    offense: 693,
    defense: 669,
    speed: 357,
    ability: {
      name: '邪蛇の面',
      text: '形態変化時、[2ターン]の間、自然回復[10%]、のろい中、状態異常1つ毎に被ダメージ[50%]上昇（[最大200%]）'
    }
  }
];

export default enemy;
