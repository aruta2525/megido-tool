import {IEnemy} from '../../../../interface/IEnemy';
import {ClassType, StyleType} from '../../../../enum/Megido';
import {Stage, DifficultyLevel} from '../../../../enum/Stage';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '氷龍帝オロチ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 308560,
    offense: 2174,
    defense: 585,
    speed: 450,
    ability: {
      name: '氷霧の鎧【氷の龍鱗】',
      text:
        '自身への攻撃ダメージを[100%]軽減し、ターン終了時にHPが[5%]回復する。地形が突風になると、シフトする。【ターン終了時に、HPが[5%]回復し、自身への火攻撃ダメージが[400%]上昇する。地形が突風でなくなると、シフトする】'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '氷龍帝オロチ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 152662,
    offense: 1697,
    defense: 500,
    speed: 370,
    ability: {
      name: '氷霧の鎧【氷の龍鱗】',
      text:
        '自身への攻撃ダメージを[60%]軽減し、ターン終了時にHPが[4%]回復する。地形が突風になると、シフトする。【ターン終了時に、HPが[4%]回復し、自身への火攻撃ダメージが[300%]上昇する。地形が突風でなくなると、シフトする】'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '氷龍帝オロチ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 52952,
    offense: 1347,
    defense: 420,
    speed: 299,
    ability: {
      name: '氷霧の鎧【氷の龍鱗】',
      text:
        '自身への攻撃ダメージを[40%]軽減し、ターン終了時にHPが[3%]回復する。地形が突風になると、シフトする。【ターン終了時に、HPが[3%]回復し、自身への火攻撃ダメージが[200%]上昇する。地形が突風でなくなると、シフトする】'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '氷龍帝オロチ',
    styleType: StyleType.Burst,
    classType: ClassType.Fighter,
    hp: 20378,
    offense: 912,
    defense: 257,
    speed: 214,
    ability: {
      name: '氷霧の鎧【氷の龍鱗】',
      text:
        '自身への攻撃ダメージを[20%]軽減し、ターン終了時にHPが[2%]回復する。地形が突風になると、シフトする。【ターン終了時に、HPが[2%]回復し、自身への火攻撃ダメージが[100%]上昇する。地形が突風でなくなると、シフトする】'
    }
  }
];

export default enemy;
