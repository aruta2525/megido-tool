import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So52 = [
    {
        clockType: ClockType.So,
        no: 52,
        id: 1,
        name: 'アロケル',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 7110,
        offense: 1199,
        defense: 500,
        speed: 427,
        ability: { name: '天才的センス', text: 'HPが20%上昇する' },
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
                name: 'あとは任せた！＋',
                type: SkillType.Skill,
                text: '2ターンの間、自身が睡眠状態になり、自身以外の攻撃力を35%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '少し本気出す！＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力3倍のダメージ。さらに敵が覚醒状態のとき、ダメージが2倍になる',
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1
                    }
                ]
            },
            {
                name: '復讐剣バルムンク＋',
                type: SkillType.Mysteries,
                text: '敵単体に自身のHPが少ないほど威力の高いダメージ（最大で攻撃力の11.5倍のダメージ）',
                levels: [
                    {
                        level: 1,
                        magnification: 11.5,
                        hit: 1
                    }
                ],
                increment: 0.1
            }
        ]
    }
];
//# sourceMappingURL=So52.js.map