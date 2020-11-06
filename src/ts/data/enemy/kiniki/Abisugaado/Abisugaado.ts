import {IEnemy} from '../../../../interface/IEnemy';
import {ClassType, StyleType} from '../../../../enum/Megido';
import {Stage, DifficultyLevel} from '../../../../enum/Stage';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: 'アビスガード',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 45500,
    offense: 1656,
    defense: 499,
    speed: 450,
    ability: {
      name: 'ダークリヴァイヴ',
      text: '戦闘不能時、一度だけ最大HPの50%、かつ攻撃力が1.5倍の状態で蘇生する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: 'アビスガード',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 42087,
    offense: 1567,
    defense: 441,
    speed: 430,
    ability: {
      name: 'ダークリヴァイヴ',
      text: '戦闘不能時、一度だけ最大HPの50%、かつ攻撃力が1.5倍の状態で蘇生する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: 'アビスガード',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 27495,
    offense: 1126,
    defense: 317,
    speed: 309,
    ability: {
      name: 'ダークリヴァイヴ',
      text: '戦闘不能時、一度だけ最大HPの50%、かつ攻撃力が1.5倍の状態で蘇生する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: 'アビスガード',
    styleType: StyleType.Rush,
    classType: ClassType.Fighter,
    hp: 17675,
    offense: 804,
    defense: 226,
    speed: 221,
    ability: {
      name: 'ダークリヴァイヴ',
      text: '戦闘不能時、一度だけ最大HPの50%、かつ攻撃力が1.5倍の状態で蘇生する'
    }
  }
];

export default enemy;
