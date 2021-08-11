import { ClassType, StyleType } from '../../../../enum/Megido';
import { Stage, DifficultyLevel } from '../../../../enum/Stage';
const enemy = [
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.Ex,
        no: 1,
        id: 4,
        name: 'ポルターガイスト(砲台)',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 12250,
        offense: 4608,
        defense: 702,
        speed: 600,
        ability: {
            name: '可燃性素材',
            text: '火ダメージを受けた際、被ダメージが2倍になる'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.VH,
        no: 1,
        id: 3,
        name: 'ポルターガイスト(砲台)',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 9565,
        offense: 4356,
        defense: 620,
        speed: 574,
        ability: {
            name: '可燃性素材',
            text: '火ダメージを受けた際、被ダメージが2倍になる'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.H,
        no: 1,
        id: 2,
        name: 'ポルターガイスト(砲台)',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 6874,
        offense: 3130,
        defense: 445,
        speed: 412,
        ability: {
            name: '可燃性素材',
            text: '火ダメージを受けた際、被ダメージが2倍になる'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.N,
        no: 1,
        id: 1,
        name: 'ポルターガイスト(砲台)',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 4419,
        offense: 2236,
        defense: 318,
        speed: 295,
        ability: {
            name: '可燃性素材',
            text: '火ダメージを受けた際、被ダメージが2倍になる'
        }
    }
];
export default enemy;
//# sourceMappingURL=PorutaagaisutoHoudai.js.map