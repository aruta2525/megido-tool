import { ClassType, StyleType } from '../../../../enum/Megido';
import { Stage, DifficultyLevel } from '../../../../enum/Stage';
const enemy = [
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.Ex,
        no: 1,
        id: 4,
        name: '輝竜アシュトレト（本体コア）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 15925,
        offense: 1498,
        defense: 5070,
        speed: 510,
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
        name: '輝竜アシュトレト（本体コア）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 12435,
        offense: 1415,
        defense: 3917,
        speed: 488,
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
        name: '輝竜アシュトレト（本体コア）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8936,
        offense: 1017,
        defense: 3217,
        speed: 351,
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
        name: '輝竜アシュトレト（本体コア）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 5744,
        offense: 727,
        defense: 2298,
        speed: 250,
        ability: {
            name: '反撃の牙',
            text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1倍]のダメージを与え、[10%]の確率で2ターンの間、めまい状態にする'
        }
    }
];
export default enemy;
//# sourceMappingURL=AsyutoretoHontaikoa.js.map