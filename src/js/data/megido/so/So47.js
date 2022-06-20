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
    },
    {
        clockType: ClockType.So,
        no: 47,
        id: 2,
        name: 'ウヴァル',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8527,
        offense: 1366,
        defense: 388,
        speed: 422,
        ability: { name: 'エッジカウンター', text: '執心状態の敵から攻撃を受けたとき攻撃力2.5倍のダメージで反撃する' },
        skills: [
            {
                name: 'エッジカウンター',
                type: SkillType.Counter,
                text: '執心状態の敵から攻撃を受けたとき攻撃力2.5倍のダメージで反撃する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
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
                name: '淡紅の眼光＋',
                type: SkillType.Skill,
                text: '2ターンの間、敵単体を執心状態にする。さらに自身へのダメージを20%軽減する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '魔獣切り＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.75倍のダメージ。さらに2ターンの間、自身の攻撃力を50%上昇する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.75,
                        hit: 1
                    }
                ]
            },
            {
                name: 'メテオストライク＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        text: '敵単体に攻撃力4.5倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】',
                        magnification: 4.5,
                        hit: 1
                    },
                    {
                        level: 2,
                        text: '敵単体に攻撃力5.5倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】',
                        magnification: 5.5,
                        hit: 1
                    },
                    {
                        level: 3,
                        text: '敵単体に攻撃力6.5倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】',
                        magnification: 6.5,
                        hit: 1
                    },
                    {
                        level: 4,
                        text: '敵単体に攻撃力7.5倍のダメージ',
                        magnification: 7.5,
                        hit: 1
                    },
                ],
                increment: 0.05
            }
        ]
    },
];
//# sourceMappingURL=So47.js.map