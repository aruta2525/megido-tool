import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So02 = [
    {
        clockType: ClockType.So,
        no: 2,
        id: 1,
        name: 'アガレス',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 10712,
        offense: 971,
        defense: 418,
        speed: 427,
        ability: { name: '運命の導き', text: '致死ダメージを受けたとき、20%の確率で踏みとどまる' },
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
                name: 'ダブルトマホーク＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0.6,
                        hit: 2,
                        text: '敵単体に攻撃力0.6倍の防御無視2連続ダメージ'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 0.6,
                        hit: 2,
                        text: 'バレットを消費し、敵単体に攻撃力0.6倍の防御無視2連続ダメージ。さらに50%の確率で自身にスキルフォトンを1つ追加する'
                    }
                ]
            },
            {
                name: 'モータルハチェット＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 2.15,
                        hit: 2,
                        text: '1ターン後、敵単体に攻撃力2.15倍の2連続ダメージ。さらに敵を即死させる'
                    }
                ]
            },
            {
                name: 'プラネットフォース＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 5.25,
                        hit: 1,
                        text: '敵単体に攻撃力5.25倍のダメージ。さらに2ターンの間、自身の効果範囲を列化させる'
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 2,
        id: 2,
        name: 'アガレス',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 6106,
        offense: 1218,
        defense: 394,
        speed: 616,
        ability: { name: '運命の裁き', text: '神系のモンスターに2倍のダメージ' },
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
                name: 'ハチェットスライス+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0.55,
                        hit: 2,
                        text: '敵横一列に攻撃力0.55倍の防御無視2連続ダメージ'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 0.7,
                        hit: 2,
                        text: 'バレットを消費し、敵横一列に攻撃力0.7倍の防御無視2連続ダメージ'
                    }
                ]
            },
            {
                name: 'オーバーソウル+',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: `バレットを2個作成する。さらに2ターンの間、味方全体の攻撃力を30%上昇させ、味方編成をBアーツ状態にする<br>
              【バレット効果】攻撃時、防御力80%無視＋80%の確率で2ターンの間、感電`
                    }
                ]
            },
            {
                name: '星砕き+',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力3.5倍のダメージ。さらに弱体、状態異常が付与されている敵に対して、効果1種類につき倍率が0.5上昇する',
                levels: [
                    {
                        level: 1,
                        magnification: 3.5,
                        hit: 1
                    },
                    {
                        level: 2,
                        magnification: 4,
                        hit: 1
                    },
                    {
                        level: 3,
                        magnification: 4.5,
                        hit: 1
                    },
                    {
                        level: 4,
                        magnification: 5,
                        hit: 1
                    },
                    {
                        level: 5,
                        magnification: 5.5,
                        hit: 1
                    },
                    {
                        level: 6,
                        magnification: 6,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So02.js.map