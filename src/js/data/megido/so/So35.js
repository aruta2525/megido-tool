import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So35 = [
    {
        clockType: ClockType.So,
        no: 35,
        id: 1,
        name: 'マルコシアス',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 7701,
        offense: 1152,
        defense: 431,
        speed: 473,
        ability: { name: '悪魔狩り', text: '悪魔系のモンスターに2倍のダメージ' },
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
                name: 'デュアルショット＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0.9,
                        hit: 2,
                        text: '敵単体に攻撃力0.9倍の2連続ダメージ。さらに80%の確率で、2ターンの間、敵が積めるフォトンの量を-1する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 0.9,
                        hit: 2,
                        text: 'バレットを消費し、敵単体に攻撃力0.9倍の2連続ダメージ。さらに90%の確率で、2ターンの間、敵が積めるフォトンの量を-1する'
                    }
                ]
            },
            {
                name: 'ラピッドファイア＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.75,
                        hit: 1,
                        text: '敵横一列に攻撃力1.75倍のダメージ。さらに80%の確率で、2ターンの間、敵をめまい状態にする'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 1.75,
                        hit: 1,
                        text: 'バレットを消費し、敵横一列に攻撃力1.75倍のダメージ。さらに90%の確率で2ターンの間、敵をめまい状態にする'
                    }
                ]
            },
            {
                name: 'ライトジャベリン＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 4.25,
                        hit: 1,
                        text: '敵単体に攻撃力4.25倍のダメージ。さらに積まれているフォトンを1つ破壊する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 4.75,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力4.75倍のダメージ。さらに積まれているフォトンを1つ破壊する'
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 35,
        id: 2,
        name: 'マルコシアス',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 6761,
        offense: 1338,
        defense: 465,
        speed: 462,
        ability: { name: '正義の執行者', text: 'アタックフォトン使用時、50%の確率で味方単体にチェイン' },
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
                name: 'サプレスファイア＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵横一列に攻撃力1.25倍のダメージ'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 1.75,
                        hit: 1,
                        text: 'バレットを消費し、敵横一列に攻撃力1.75倍のダメージ'
                    }
                ]
            },
            {
                name: 'レイジングブル＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 0,
                        label: 'Ch0',
                        magnification: 1.25,
                        hit: 2,
                        text: '敵単体に攻撃力1.25倍の2連続ダメージ。チェイン数に応じて連続攻撃数が変化。味方単体にチェイン'
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 1.25,
                        hit: 4,
                        text: '敵単体に攻撃力1.25倍の4連続ダメージ。チェイン数に応じて連続攻撃数が変化。味方単体にチェイン'
                    },
                    {
                        level: 2,
                        label: 'Ch2',
                        magnification: 1.25,
                        hit: 6,
                        text: '敵単体に攻撃力1.25倍の6連続ダメージ。味方単体にチェイン'
                    }
                ]
            },
            {
                name: 'スターバースト＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 0,
                        label: 'Ch0',
                        magnification: 5,
                        hit: 1,
                        text: '敵単体に攻撃力5倍のダメージ。チェイン数に応じて倍率が変化'
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 5.5,
                        hit: 1,
                        text: '敵単体に攻撃力5.5倍のダメージ。チェイン数に応じて倍率が変化'
                    },
                    {
                        level: 2,
                        label: 'Ch2',
                        magnification: 6.5,
                        hit: 1,
                        text: '敵単体に攻撃力6.5倍のダメージ。チェイン数に応じて倍率が変化'
                    },
                    {
                        level: 3,
                        label: 'Ch3',
                        magnification: 8,
                        hit: 1,
                        text: '敵単体に攻撃力8倍のダメージ。チェイン数に応じて倍率が変化'
                    },
                    {
                        level: 4,
                        label: 'Ch4',
                        magnification: 10,
                        hit: 1,
                        text: '敵単体に攻撃力10倍のダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So35.js.map