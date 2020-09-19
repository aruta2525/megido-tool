import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '魔眼賽ドゥーム（氷花の面/感電/5）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 315600,
    offense: 1777,
    defense: 760,
    speed: 660,
    ability: {
      name: '氷花の面',
      text: '形態変化時、[5ターン]の間、素早さ[50%]上昇しスキル強化、感電中、状態異常1つ毎に被ダメージ[200%]上昇（[最大800%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '魔眼賽ドゥーム（氷花の面/感電/5）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 161434,
    offense: 1558,
    defense: 731,
    speed: 602,
    ability: {
      name: '氷花の面',
      text: '形態変化時、[3ターン]の間、素早さ[50%]上昇、感電中、状態異常1つ毎に被ダメージ[150%]上昇（[最大600%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '魔眼賽ドゥーム（氷花の面/感電/5）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 80763,
    offense: 1280,
    defense: 702,
    speed: 548,
    ability: {
      name: '氷花の面',
      text: '形態変化時、[2ターン]の間、素早さ[25%]上昇、感電中、状態異常1つ毎に被ダメージ[100%]上昇（[最大400%]）'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '魔眼賽ドゥーム（氷花の面/感電/5）',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 40404,
    offense: 867,
    defense: 502,
    speed: 392,
    ability: {
      name: '氷花の面',
      text: '形態変化時、[2ターン]の間、素早さ[25%]上昇、感電中、状態異常1つ毎に被ダメージ[50%]上昇（[最大200%]）'
    }
  }
];

export default enemy;
