import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 41,
        id: 1,
        name: 'アマイモン',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 5997,
        offense: 1354,
        defense: 429,
        speed: 503,
        ability: { name: '死を紡ぐ策王', text: '攻撃を受けたとき、10%の確率で呪い攻撃で反撃する' },
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
                name: '妄執ノ太刀＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '轟竜刃＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ノワールアヴェルス＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 0,
                        magnification: 3.5,
                        hit: 1
                    },
                    {
                        level: 1,
                        magnification: 4,
                        hit: 1
                    },
                    {
                        level: 2,
                        magnification: 4.5,
                        hit: 1
                    },
                    {
                        level: 3,
                        magnification: 5,
                        hit: 1
                    },
                    {
                        level: 4,
                        magnification: 5.5,
                        hit: 1
                    },
                    {
                        level: 5,
                        magnification: 6,
                        hit: 1
                    },
                    {
                        level: 6,
                        magnification: 6.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 41,
        id: 2,
        name: 'アマイモン',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6733,
        offense: 890,
        defense: 538,
        speed: 515,
        ability: { name: '知将の威光', text: 'バレットアーツ中、受けるダメージを20%軽減する' },
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
                name: '魔剣の融合＋',
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
                name: '夜叉突き＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '夜叉突き＋(Bアーツ)',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: '軍神の咆哮＋',
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
    }
];
export default megido;
//# sourceMappingURL=Shin41.js.map