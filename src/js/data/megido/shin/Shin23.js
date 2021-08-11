import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 23,
        id: 1,
        name: 'ネフィリム',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 8966,
        offense: 1098,
        defense: 483,
        speed: 270,
        ability: { name: '庇護の心', text: '自身が巨大化のとき、自身の「かばう」の効果が「全域かばう」の効果になる' },
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
                name: '私が守ります！＋',
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
                name: 'みんなに力を＋',
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
                name: '暴走コンプレクス＋(巨大化)',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1
                    }
                ]
            },
            {
                name: '昇華せし自我＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin23.js.map