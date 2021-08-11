import { ClassType, StyleType } from '../../../../enum/Megido';
import { Stage, DifficultyLevel } from '../../../../enum/Stage';
const enemy = [
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.Ex,
        no: 1,
        id: 4,
        name: '魔法猫オスカー',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 80000,
        offense: 1255,
        defense: 3510,
        speed: 480,
        ability: {
            name: 'モフモフボディ',
            text: '防御貫通と地形の効果を受けない。ねずみへのダメージが3倍になる。HPが75%以下になると全能力が変化する'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.VH,
        no: 1,
        id: 3,
        name: '魔法猫オスカー',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 60000,
        offense: 1157,
        defense: 1876,
        speed: 439,
        ability: {
            name: 'モフモフボディ',
            text: '防御貫通と地形の効果を受けない。ねずみへのダメージが3倍になる。HPが75%以下になると全能力が変化する'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.H,
        no: 1,
        id: 2,
        name: '魔法猫オスカー',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 40000,
        offense: 1064,
        defense: 901,
        speed: 399,
        ability: {
            name: 'モフモフボディ',
            text: '防御貫通と地形の効果を受けない。ねずみへのダメージが3倍になる。HPが75%以下になると全能力が変化する'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.N,
        no: 1,
        id: 1,
        name: '魔法猫オスカー',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 20000,
        offense: 720,
        defense: 515,
        speed: 285,
        ability: {
            name: 'モフモフボディ',
            text: '防御貫通と地形の効果を受けない。ねずみへのダメージが3倍になる。HPが75%以下になると全能力が変化する'
        }
    }
];
export default enemy;
//# sourceMappingURL=Osukaa.js.map