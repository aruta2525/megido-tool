import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '魔眼賽ドゥーム（牙鬼の面/暗闇/3）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 315600,
    offense: 2310,
    defense: 591,
    speed: 600,
    ability: {
      name: '牙鬼の面',
      text: '形態変化時、[5ターン]の間、全体化し反撃、暗闇中、状態異常1つ毎に被ダメージ[200%]上昇（[最大800%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '魔眼賽ドゥーム（牙鬼の面/暗闇/3）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 161434,
    offense: 2025,
    defense: 569,
    speed: 548,
    ability: {
      name: '牙鬼の面',
      text: '形態変化時、[3ターン]の間、全体化、暗闇中、状態異常1つ毎に被ダメージ[150%]上昇（[最大600%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '魔眼賽ドゥーム（牙鬼の面/暗闇/3）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 80763,
    offense: 1664,
    defense: 546,
    speed: 499,
    ability: {
      name: '牙鬼の面',
      text: '形態変化時、[2ターン]の間、列化、暗闇中、状態異常1つ毎に被ダメージ[100%]上昇（[最大400%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '魔眼賽ドゥーム（牙鬼の面/暗闇/3）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 40404,
    offense: 1127,
    defense: 390,
    speed: 357,
    ability: {
      name: '牙鬼の面',
      text: '形態変化時、[2ターン]の間、列化、暗闇中、状態異常1つ毎に被ダメージ[50%]上昇（[最大200%]）'
    }
  }
];

export default enemy;
