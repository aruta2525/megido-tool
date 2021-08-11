import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So06 = [
    {
        clockType: ClockType.So,
        no: 6,
        id: 1,
        name: 'ウァレフォル',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 5855,
        offense: 1150,
        defense: 287,
        speed: 678,
        ability: { name: '弱肉強食', text: '獣人系のモンスターに2倍のダメージ' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 2
                    }
                ]
            },
            {
                name: 'ワイルドハント＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.75倍の4連続ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 4
                    }
                ]
            },
            {
                name: '行くよ、野郎ども！＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、味方全体の攻撃にLv×10の固定追加ダメージを付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ロウオブザサバンナ＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力1.2倍の4連続ダメージ。さらに2ターンの間、敵を毒状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.2,
                        hit: 4
                    }
                ],
                increment: 0.0125
            }
        ]
    }
];
//# sourceMappingURL=So06.js.map