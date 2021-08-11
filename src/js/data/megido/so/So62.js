import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So62 = [
    {
        clockType: ClockType.So,
        no: 62,
        id: 1,
        name: 'ウァラク',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7703,
        offense: 943,
        defense: 502,
        speed: 490,
        ability: { name: '天上の踊り子', text: '戦闘中、徐々に防御力が上昇する（最大値50%）' },
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
                name: '南風の舞+',
                type: SkillType.Skill,
                text: '2ターンの間、味方全体の素早さを30%上昇させ、ターン終了時にHPが15%回復する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '音響の槍+',
                type: SkillType.AwakeningSkill,
                text: '敵単体に3.5倍のダメージさらに味方前列の覚醒ゲージを+1する',
                levels: [
                    {
                        level: 1,
                        magnification: 3.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'サイコウェイブ+',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵全体に攻撃力2.25倍のダメージ。さらに70%の確率で、2ターンの間、敵を混乱状態にする'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 2.25,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵全体に攻撃力2.25倍の響撃ダメージ。さらに70%の確率で、3ターンの間、敵を混乱状態にする'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So62.js.map