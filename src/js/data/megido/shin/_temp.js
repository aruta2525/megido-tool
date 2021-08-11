import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 1,
        id: 1,
        name: '',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 7342,
        offense: 1198,
        defense: 415,
        speed: 496,
        ability: {
            name: '',
            text: ''
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
                name: 'スキル',
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
                name: '覚醒スキル',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '奥義',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=_temp.js.map