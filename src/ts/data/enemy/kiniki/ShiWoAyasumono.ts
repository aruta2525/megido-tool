import {IEnemy} from '../../../interface/IEnemy';
import {SkillType, Attribute, ClassType, StyleType, Stage, DifficultyLevel} from '../../../enum/MegidoType';

const enemy: IEnemy[] = [
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 4,
    name: '死をあやす者',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 34580,
    offense: 1311,
    defense: 593,
    speed: 720,
    ability: {
      name: '冥府への誘い',
      text: 'HPが50%を下回ったとき、敵を弱体化させた際の継続ターンが1ターン増加する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.VH,
    no: 1,
    id: 3,
    name: '死をあやす者',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 20896,
    offense: 891,
    defense: 376,
    speed: 495,
    ability: {
      name: '冥府への誘い',
      text: 'HPが50%を下回ったとき、敵を弱体化させた際の継続ターンが1ターン増加する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.H,
    no: 1,
    id: 2,
    name: '死をあやす者',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 13433,
    offense: 637,
    defense: 269,
    speed: 354,
    ability: {
      name: '冥府への誘い',
      text: 'HPが50%を下回ったとき、敵を弱体化させた際の継続ターンが1ターン増加する'
    }
  },
  {
    stage: Stage.Kiniki,
    difficultyLevel: DifficultyLevel.N,
    no: 1,
    id: 1,
    name: '死をあやす者',
    styleType: StyleType.Burst,
    classType: ClassType.Sniper,
    hp: 10454,
    offense: 441,
    defense: 157,
    speed: 248,
    ability: {
      name: '冥府への誘い',
      text: 'HPが50%を下回ったとき、敵を弱体化させた際の継続ターンが1ターン増加する'
    }
  }
];

export default enemy;
