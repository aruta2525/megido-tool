import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 9,
        id: 1,
        name: 'インキュバス',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6209,
        offense: 1177,
        defense: 489,
        speed: 497,
        ability: { name: '傲慢たる夢魔', text: 'めまい、混乱、悪夢のいずれかの状態異常が付与されている敵へのダメージが20%上昇する(効果は重複可能/最大60%上昇)' },
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
                name: 'ファスキナーレ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 2,
                        text: '敵単体に攻撃力0.9倍の2連続ダメージ。さらに対象が女性のとき、2ターンの間、めまいにする'
                    }
                ]
            },
            {
                name: 'ヒュプノインパーケ＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 3,
                        text: '敵単体に攻撃力0.9倍の3連続ダメージ。さらに与えたダメージの30%を吸収し、対象が女性のとき、覚醒ゲージを-3する'
                    }
                ]
            },
            {
                name: 'ドゥルケソムニウム＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 2.25,
                        hit: 1,
                        text: '敵横一列に攻撃力2.25倍のダメージ。敵編成の女性1体につき倍率が0.2上昇し、対象の女性を2ターンの間、悪夢状態にする'
                    }
                ],
                increment: 0.05
            },
            {
                name: '【専】ドゥルケソムニウム＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.25倍のダメージ。敵味方の女性1体につき倍率が0.35上昇、対象の敵女性を2ターンの間、悪夢状態にし、自身の両隣の女性を魅了状態にする',
                levels: [
                    {
                        level: 0,
                        label: '女性0体',
                        magnification: 2.25,
                        hit: 1
                    },
                    {
                        level: 1,
                        label: '女性1体',
                        magnification: 2.6,
                        hit: 1
                    },
                    {
                        level: 2,
                        label: '女性2体',
                        magnification: 2.95,
                        hit: 1
                    },
                    {
                        level: 3,
                        label: '女性3体',
                        magnification: 3.3,
                        hit: 1
                    },
                    {
                        level: 4,
                        label: '女性4体',
                        magnification: 3.65,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 9,
        id: 2,
        name: 'インキュバスC',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8527,
        offense: 1370,
        defense: 302,
        speed: 449,
        ability: { name: '反逆の夢魔', text: '自身のHPが33.3%以下のとき、奥義使用時、覚醒ゲージの消費が0になる' },
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
                name: 'インクブスドルミーレ＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに、自身のHPが75%以下のとき、60%の確率で2ターンの間、悪夢状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'フェルムプロピーナ＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵単体に攻撃力2.25倍のダメージ。さらに覚醒ゲージを-2する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 2.25,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力2.25倍のダメージ。さらに覚醒ゲージを-2し、減少した覚醒ゲージを自身に加算する'
                    }
                ]
            },
            {
                name: 'グランフィニス＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 4,
                        hit: 1,
                        text: '敵単体に攻撃力4倍のダメージ【使用するごとにスキルLvが上昇し、ターン経過でリセット】'
                    },
                    {
                        level: 2,
                        magnification: 5,
                        hit: 1,
                        text: '敵単体に攻撃力5倍のダメージ【使用するごとにスキルLvが上昇し、ターン経過でリセット】'
                    },
                    {
                        level: 3,
                        magnification: 6,
                        hit: 1,
                        text: '敵単体に攻撃力6倍のダメージ【ターン経過でリセット】'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin09.js.map