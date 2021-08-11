import { ClassType, StyleType } from '../../../../enum/Megido';
import { Stage, DifficultyLevel } from '../../../../enum/Stage';
const enemy = [
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.Ex,
        no: 1,
        id: 4,
        name: '輝竜アシュトレト（目）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 20825,
        offense: 1421,
        defense: 5070,
        speed: 450,
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
        name: '輝竜アシュトレト（目）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 16261,
        offense: 1343,
        defense: 3917,
        speed: 430,
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
        name: '輝竜アシュトレト（目）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 11685,
        offense: 965,
        defense: 3217,
        speed: 309,
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
        name: '輝竜アシュトレト（目）',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 7512,
        offense: 689,
        defense: 2298,
        speed: 221,
        ability: {
            name: '反撃の牙',
            text: 'ダメージを受けたとき、20%の確率で敵単体に攻撃力[1倍]のダメージを与え、[10%]の確率で2ターンの間、めまい状態にする'
        }
    }
];
export default enemy;
//# sourceMappingURL=AsyutoretoMe.js.map