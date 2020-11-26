import {IEnemy} from '../../../../interface/IEnemy';
import {ClassType, StyleType} from '../../../../enum/Megido';
import {Stage, DifficultyLevel} from '../../../../enum/Stage';

const enemy: IEnemy[] = [
  {
    stage: Stage.Shinshinken,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 1,
    name: 'ドン・ザブンブン(シフト1)',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 630542,
    offense: 1068,
    defense: 200,
    speed: 496,
    ability: {
      name: '大冠水瀑布',
      text: '戦闘開始時味方全体を1ターンの間、滞水地形にする。毎ターン終了時、味方全体を1ターンの間、滞水地形にする。自身のHP30%以下のときシフトする'
    }
  },
  {
    stage: Stage.Shinshinken,
    difficultyLevel: DifficultyLevel.Ex,
    no: 1,
    id: 1,
    name: 'ドン・ザブンブン(シフト2)',
    styleType: StyleType.Counter,
    classType: ClassType.Sniper,
    hp: 630542,
    offense: 1068,
    defense: 200,
    speed: 496,
    ability: {
      name: '大冠水瀑布',
      text: '毎ターン終了時、味方全体を1ターンの間、滞水地形にする。自身より素早さが高い対象へのダメージが100%上昇する。フォトン容量を+2する'
    }
  }
];

export default enemy;
