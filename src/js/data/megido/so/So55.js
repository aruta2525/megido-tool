import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So55 = [
    {
        clockType: ClockType.So,
        no: 55,
        id: 1,
        name: 'オロバス',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 8990,
        offense: 1207,
        defense: 483,
        speed: 284,
        ability: { name: '禁呪', text: '戦闘不能時、敵全体に攻撃力の1.5倍のダメージ' },
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
                name: '原初の魔法『零』＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに2ターンの間、敵を束縛状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '原初の魔法『結』＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵を呪い状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'グランドリープ＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力2.25倍のダメージ。さらに覚醒ゲージを-2する',
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
        no: 55,
        id: 2,
        name: 'オロバス',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 6133,
        offense: 1345,
        defense: 446,
        speed: 482,
        ability: {
            name: '禁忌の魔術',
            text: 'ネクロ状態時、自身が戦闘不能になったとき、自身に付与されているデスギフトの数が多いほど、ソウルが増加する【2つにつき+1、最大2】'
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
                name: '原初の魔法『魂』＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: `2ターンの間、味方単体のスキルを強化し、攻撃力を10%上昇させる。さらにデスギフト(1)を付与する<br>
                  【デスギフト(1)効果】戦闘不能時、敵単体の覚醒ゲージを-2する`
                    },
                    {
                        level: 1,
                        label: 'ネクロ',
                        magnification: 0,
                        hit: 0,
                        text: `ソウルを2つ消費し、2ターンの間、味方単体のスキルを強化し、攻撃力を10%上昇させる。さらにデスギフト(2)を付与する<br>
                  【デスギフト(2)効果】戦闘不能時、敵全体の覚醒ゲージを-2する`
                    }
                ]
            },
            {
                name: '原初の魔法『魄』＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: `自身以外の味方にデスギフト(1)を付与し、2ターンの間自身以外の攻撃力を、味方全体のデスギフト数×5%上昇させる【最大100%】<br>
                  【デスギフト(1)効果】戦闘不能時、敵単体に攻撃力1.5倍のダメージ 対象の覚醒ゲージが0の場合、ダメージが1.2倍`
                    },
                    {
                        level: 1,
                        label: 'ネクロ',
                        magnification: 0,
                        hit: 0,
                        text: `ソウルを2つ消費し、自身以外の味方にデスギフト(2)を付与し、2ターンの間自身以外の攻撃力を、味方全体のデスギフト数×5%上昇させる【最大100%】<br>
                  【デスギフト(2)効果】戦闘不能時、敵単体に攻撃力1.5倍のダメージ 対象の覚醒ゲージが0の場合、ダメージが1.5倍`
                    }
                ]
            },
            {
                name: '我これに報いん＋',
                type: SkillType.Mysteries,
                text: '1ターンの間、敵全体を執心状態。2ターンの間自身以外の味方が受けるダメージを20%軽減。自身以外の味方に付与されているデスギフトを、最大10個まで自身に移す',
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
//# sourceMappingURL=So55.js.map