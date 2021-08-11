import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So24 = [
    {
        clockType: ClockType.So,
        no: 24,
        id: 1,
        name: 'ナベリウス',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 7544,
        offense: 948,
        defense: 501,
        speed: 503,
        ability: { name: '調教師', text: 'オーブの使用可能までのターンを-1する' },
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
                name: 'ムーンサルト＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力0.9倍の2連続ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 2
                    }
                ]
            },
            {
                name: 'ブレイクスナップ＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに積まれているフォトンを1つ破壊する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '番犬の咆哮＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、味方全体のアタックを強化し、素早さを30%上昇させる',
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
    },
    {
        clockType: ClockType.So,
        no: 24,
        id: 2,
        name: 'ナベリウス',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7261,
        offense: 1080,
        defense: 438,
        speed: 506,
        ability: { name: 'リーヴイット', text: 'オーブ使用時、オーブの技を発動するために必要なターン数分、覚醒ゲージが増加する' },
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
                name: 'スピニングバーン＋',
                type: SkillType.Skill,
                attribute: Attribute.Fire,
                text: '敵横一列に攻撃力0.8倍の2連続火ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 2
                    }
                ]
            },
            {
                name: 'エクステンドカラー＋',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Fire,
                text: '自身の覚醒ゲージを全て消費し、1ターン後、敵単体に0.75倍の火ダメージ<br>※遅延行動時、直前ターンの自身が与えた火ダメージ回数が2回以上の場合、この行動を同じ相手に同じ回数分行う(行動回数は最大10回)',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 1
                    },
                    {
                        level: 2,
                        magnification: 0.75,
                        hit: 2
                    },
                    {
                        level: 3,
                        magnification: 0.75,
                        hit: 3
                    },
                    {
                        level: 4,
                        magnification: 0.75,
                        hit: 4
                    },
                    {
                        level: 5,
                        magnification: 0.75,
                        hit: 5
                    },
                    {
                        level: 6,
                        magnification: 0.75,
                        hit: 6
                    },
                    {
                        level: 7,
                        magnification: 0.75,
                        hit: 7
                    },
                    {
                        level: 8,
                        magnification: 0.75,
                        hit: 8
                    },
                    {
                        level: 9,
                        magnification: 0.75,
                        hit: 9
                    },
                    {
                        level: 10,
                        magnification: 0.75,
                        hit: 10
                    }
                ]
            },
            {
                name: '喝采火の輪くぐり＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、味方全体へのダメージを35%軽減し、素早さを110%上昇させる',
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
//# sourceMappingURL=So24.js.map