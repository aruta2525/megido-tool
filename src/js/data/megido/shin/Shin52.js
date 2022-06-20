import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 52,
        id: 1,
        name: 'ジズ',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 5955,
        offense: 840,
        defense: 494,
        speed: 687,
        ability: { name: '自己防衛本能', text: '戦闘中、徐々に防御力が上昇する（最大値50%）' },
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
                name: '青天のとっぷう＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.8倍のダメージ。1ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 1
                    }
                ]
            },
            {
                name: '大いなる風のしらべ＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '味方全体のHPを25%回復させる'
                    },
                    {
                        level: 2,
                        label: '大協奏',
                        magnification: 0,
                        hit: 0,
                        text: '味方全体のHPを30%回復させる'
                    }
                ]
            },
            {
                name: '終焉のモンスーン＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力3倍のダメージ。2ターンの間、突風の地形効果で0.75倍の継続ダメージを与え、火に弱くする',
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 52,
        id: 2,
        name: 'ジズ',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 7004,
        offense: 1309,
        defense: 397,
        speed: 514,
        ability: { name: '大いなる風の導き', text: '暴奏状態のとき、アタック、スキル、覚醒スキルの効果範囲が敵全体になる' },
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
                name: '風のカンタービレ＋',
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
                        label: '大協奏',
                        magnification: 1.5,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵横一列に攻撃力1.5倍の響撃ダメージ'
                    }
                ]
            },
            {
                name: '魔笛の風音＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.5,
                        hit: 1,
                        text: '敵横一列に攻撃力1.5倍のダメージ。さらに1ターンの間、アタックフォトンを劣化させる'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 1.75,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵横一列に攻撃力1.75倍の響撃ダメージ。さらに1ターンの間、アタックフォトンを劣化させる'
                    }
                ]
            },
            {
                name: '暴魔のソナタ＋',
                type: SkillType.Mysteries,
                text: '3ターンの間、味方全体を暴奏状態にし、毎ターン終了時にHPを15%回復する。さらに味方編成を協奏状態にする',
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
export default megido;
//# sourceMappingURL=Shin52.js.map