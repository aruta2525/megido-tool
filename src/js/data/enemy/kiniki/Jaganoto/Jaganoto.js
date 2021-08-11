import { ClassType, StyleType } from '../../../../enum/Megido';
import { Stage, DifficultyLevel } from '../../../../enum/Stage';
const enemy = [
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.Ex,
        no: 1,
        id: 4,
        name: 'ジャガーノート',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 95000,
        offense: 2091,
        defense: 390,
        speed: 690,
        ability: {
            name: '戦魔の御位',
            text: '火と雷ダメージを[100%軽減]。自身に付与されたHボムが2つ以上で被ダメージが200%上昇。攻撃を受けると[強化解除、攻撃力4倍の反撃]'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.VH,
        no: 1,
        id: 3,
        name: 'ジャガーノート',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 62147,
        offense: 1736,
        defense: 337,
        speed: 631,
        ability: {
            name: '戦魔の御位',
            text: '火と雷ダメージを[100%軽減]。自身に付与されたHボムが2つ以上で被ダメージが200%上昇。攻撃を受けると[強化解除、攻撃力2倍の反撃]'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.H,
        no: 1,
        id: 2,
        name: 'ジャガーノート',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 42137,
        offense: 1507,
        defense: 288,
        speed: 574,
        ability: {
            name: '戦魔の御位',
            text: '火と雷ダメージを[80%軽減]。自身に付与されたHボムが2つ以上で被ダメージが200%上昇。攻撃を受けると[攻撃力1.5倍の反撃]'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.N,
        no: 1,
        id: 1,
        name: 'ジャガーノート',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 21958,
        offense: 1020,
        defense: 180,
        speed: 410,
        ability: {
            name: '戦魔の御位',
            text: '火と雷ダメージを[50%軽減]。自身に付与されたHボムが2つ以上で被ダメージが200%上昇。攻撃を受けると[攻撃力1.5倍の反撃]'
        }
    }
];
export default enemy;
//# sourceMappingURL=Jaganoto.js.map