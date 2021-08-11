import { ClassType, StyleType } from '../../../../enum/Megido';
import { Stage, DifficultyLevel } from '../../../../enum/Stage';
const enemy = [
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.Ex,
        no: 1,
        id: 4,
        name: '魔眼賽ドゥーム（癒盾の面/病気/2）',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 315600,
        offense: 1243,
        defense: 1098,
        speed: 600,
        ability: {
            name: '癒盾の面',
            text: '形態変化時、[5ターン]の間、防御力[100%]上昇し攻撃3回無効、病気中、状態異常1つ毎に被ダメージ[200%]上昇（[最大800%]）'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.VH,
        no: 1,
        id: 3,
        name: '魔眼賽ドゥーム（癒盾の面/病気/2）',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 161434,
        offense: 1090,
        defense: 1056,
        speed: 548,
        ability: {
            name: '癒盾の面',
            text: '形態変化時、[3ターン]の間、防御力[100%]上昇、病気中、状態異常1つ毎に被ダメージ[150%]上昇（[最大600%]）'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.H,
        no: 1,
        id: 2,
        name: '魔眼賽ドゥーム（癒盾の面/病気/2）',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 80763,
        offense: 896,
        defense: 1015,
        speed: 499,
        ability: {
            name: '癒盾の面',
            text: '形態変化時、[2ターン]の間、防御力[55%]上昇、病気中、状態異常1つ毎に被ダメージ[100%]上昇（[最大400%]）'
        }
    },
    {
        stage: Stage.Kiniki,
        difficultyLevel: DifficultyLevel.N,
        no: 1,
        id: 1,
        name: '魔眼賽ドゥーム（癒盾の面/病気/2）',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 40404,
        offense: 606,
        defense: 725,
        speed: 357,
        ability: {
            name: '癒盾の面',
            text: '形態変化時、[2ターン]の間、防御力[25%]上昇、病気中、状態異常1つ毎に被ダメージ[50%]上昇（[最大200%]）'
        }
    }
];
export default enemy;
//# sourceMappingURL=Dwuumu2.js.map