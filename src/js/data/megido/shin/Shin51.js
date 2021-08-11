import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 51,
        id: 1,
        name: 'プルフラス',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7528,
        offense: 1209,
        defense: 414,
        speed: 498,
        ability: { name: '心眼', text: '自身への暗闇が無効になる' },
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
                name: 'ラピエル・フルーリ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: 'クゥ・デグラース＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 2.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ヴォロンテ・ド・フ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 51,
        id: 2,
        name: 'プルフラス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 7771,
        offense: 1219,
        defense: 419,
        speed: 450,
        ability: { name: 'めげない心', text: '自身がチェイン4以上の奥義を発動直後、アタックフォトンが1つ以上積まれていれば自身を覚醒状態にする' },
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
                name: 'リス・ブロン＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 0,
                        magnification: 0.6,
                        hit: 2
                    },
                    {
                        level: 0,
                        magnification: 0.6,
                        hit: 2
                    },
                    {
                        level: 0,
                        magnification: 0.6,
                        hit: 2
                    }
                ]
            },
            {
                name: 'グリサッド＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 2.25,
                        hit: 1
                    },
                    {
                        level: 2,
                        magnification: 2.25,
                        hit: 1
                    },
                    {
                        level: 3,
                        magnification: 2.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'アフェクシオン＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 3,
                        magnification: 3.5,
                        hit: 1
                    },
                    {
                        level: 4,
                        magnification: 3.5,
                        hit: 1
                    },
                    {
                        level: 5,
                        magnification: 4,
                        hit: 1
                    },
                    {
                        level: 6,
                        magnification: 6,
                        hit: 1
                    },
                    {
                        level: 7,
                        magnification: 8.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin51.js.map