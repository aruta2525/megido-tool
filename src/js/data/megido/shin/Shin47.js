import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 47,
        id: 1,
        name: 'ヴェルドレ',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 6442,
        offense: 1366,
        defense: 438,
        speed: 405,
        ability: {
            name: '幻惑の舞曲',
            text: '音符の個数が多いほど防御力上昇(最大30% 音符数×6%)。ただし1ターン音符が2ターン音符より多い時防御力ではなく攻撃力が上昇する'
        },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ベンダバール＋',
                type: SkillType.Skill,
                text: '自身の覚醒ゲージを+1する。さらに2ターンの間、攻撃力が30%上昇し味方編成に蓄積されている2ターン音符の継続ターンを最大3個まで-1する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '陽炎のサパテアール＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方全体を回避状態(10%)にしターン終了時にHPが30%回復する。さらに味方編成を協奏状態にする	'
                    },
                    {
                        level: 1,
                        label: '協奏(2T音符3個以上）',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方全体を回避状態(30%)にしターン終了時にHPが30%回復する'
                    }
                ]
            },
            {
                name: '魔踊アルディエンテ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1,
                        hit: 2,
                        text: '敵全体に攻撃力1倍の2連続ダメージ'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 1,
                        hit: 5,
                        text: '敵全体に攻撃力1倍の5連続響撃ダメージ。さらに味方編成に蓄積されている1ターン音符1つにつき倍率が0.07上昇する'
                    }
                ],
                increment: 0.03
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin47.js.map