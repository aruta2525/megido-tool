import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So47 = [
    {
        clockType: ClockType.So,
        no: 47,
        id: 1,
        name: 'ウヴァル',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7585,
        offense: 1404,
        defense: 275,
        speed: 501,
        ability: { name: 'キリングマシーン', text: '敵の数が少ないほど、攻撃力が上昇する（最大値20%）' },
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
                name: 'クレセントスライス＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに敵に掛かっている強化効果を解除する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ラウンドスレイヤー＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力0.7倍の6連続ダメージ。さらに2ターンの間、敵が積めるフォトンの量を-1する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.7,
                        hit: 6
                    }
                ]
            },
            {
                name: 'ランページビート＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力2.25倍のダメージ。さらに2ターンの間、自身の攻撃にLv×10の固定追加ダメージを付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So47.js.map