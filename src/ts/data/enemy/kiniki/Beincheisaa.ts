import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: 'ベインチェイサー',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 34580,
    offense: 1449,
    defense: 1248,
    speed: 450,
    ability: {
      name: '終わりなき苦痛',
      text: 'HPが50%を下回ったとき、敵を状態異常にした際のターンが1ターン増加する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: 'ベインチェイサー',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 31986,
    offense: 1371,
    defense: 1102,
    speed: 430,
    ability: {
      name: '終わりなき苦痛',
      text: 'HPが50%を下回ったとき、敵を状態異常にした際のターンが1ターン増加する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: 'ベインチェイサー',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 20896,
    offense: 985,
    defense: 792,
    speed: 309,
    ability: {
      name: '終わりなき苦痛',
      text: 'HPが50%を下回ったとき、敵を状態異常にした際のターンが1ターン増加する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: 'ベインチェイサー',
    styleType: StyleType.Counter,
    classType: ClassType.Trooper,
    hp: 13433,
    offense: 704,
    defense: 566,
    speed: 221,
    ability: {
      name: '終わりなき苦痛',
      text: 'HPが50%を下回ったとき、敵を状態異常にした際のターンが1ターン増加する'
    }
  }
];

export default enemy;
