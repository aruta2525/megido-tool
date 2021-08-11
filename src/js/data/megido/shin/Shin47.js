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
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '魔踊アルディエンテ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 2
                    }
                ],
                increment: 0.03
            },
            {
                name: '魔踊アルディエンテ＋(大協奏)',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 5
                    }
                ],
                increment: 0.03
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin47.js.map