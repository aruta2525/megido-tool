import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 61,
        id: 1,
        name: 'フィロタヌス',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 6858,
        offense: 764,
        defense: 658,
        speed: 448,
        ability: {
            name: '授業を続けます～',
            text: '毎ターン終了時、HPを15%回復する'
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
                name: '成長促進ヒント＋',
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
                name: '対岸の火事＋',
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
                name: 'マスオブフレイム＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin61.js.map