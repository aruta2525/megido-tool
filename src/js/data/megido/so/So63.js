import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So63 = [
    {
        clockType: ClockType.So,
        no: 63,
        id: 1,
        name: 'アンドラス',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 9109,
        offense: 849,
        defense: 490,
        speed: 481,
        ability: { name: '特製プロテイン', text: '自身の防御力が30%上昇する' },
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
                name: '接続治療＋',
                type: SkillType.Skill,
                text: '味方単体の状態異常を治癒する。さらにHPを25%回復させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '死毒の縄＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2倍のダメージ。さらに2ターンの間、敵を毒状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ]
            },
            {
                name: 'インジェクトバイオ＋',
                type: SkillType.Mysteries,
                text: '味方単体のHPを45%回復させる。さらにスキルを追加する',
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
    },
    {
        clockType: ClockType.So,
        no: 63,
        id: 2,
        name: 'アンドラス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 7535,
        offense: 639,
        defense: 618,
        speed: 609,
        ability: { name: '毒をもって毒を制す', text: '状態異常耐性50%上昇' },
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
                name: 'ゼクチオンメッサー＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1倍のダメージ。さらに60%の確率で、2ターンの間、敵を暗闇状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '【専】ゼクチオンメッサー＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1倍のダメージ。さらに80%の確率で、2ターンの間、敵を暗闇状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: 'デリリアントブロー＋',
                type: SkillType.AwakeningSkill,
                text: '1ターンの間、味方単体の効果範囲を列化し、カウンターの場合、攻撃力を30%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '【専】デリリアントブロー＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方単体の効果範囲を列化し、攻撃力を30%上昇させる【戦闘不能の味方がいる場合、効果が変化】'
                    },
                    {
                        level: 1,
                        label: '戦闘不能者有',
                        magnification: 0,
                        hit: 0,
                        text: '自身の覚醒ゲージを全て消費し、戦闘不能の味方単体を、最大HPの10%で蘇生させる。さらに2ターンの間、効果範囲を列化し、攻撃力を30%上昇させる'
                    }
                ]
            },
            {
                name: 'ターヘルアナトミア＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.25倍のダメージさらにそれぞれ70%の確率で、2ターンの間、敵を病気、毒状態にする',
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
//# sourceMappingURL=So63.js.map