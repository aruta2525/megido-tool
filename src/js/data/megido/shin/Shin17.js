import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 17,
        id: 1,
        name: 'ティアマト',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 7349,
        offense: 1155,
        defense: 621,
        speed: 280,
        ability: {
            name: '乙女の恋心',
            text: '自身にフォトンが与えられなかった場合ターン終了時、1ターンの間自身の攻撃力を25%上昇させ、バーサーク状態になる（攻撃力最大125%上昇　HP10%ダメージ）'
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
                name: '栄養満点スープ＋/憎悪のポタージュ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '味方前列の覚醒ゲージを+1し、2ターンの間、防御力を20%上昇させる'
                    },
                    {
                        level: 1,
                        label: 'シフト',
                        magnification: 1.5,
                        hit: 1,
                        text: '敵単体に攻撃力1.5倍のダメージ'
                    }
                ]
            },
            {
                name: '快復マル秘レシピ＋/念入りの下処理＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '戦闘不能の味方単体を、最大HPの20%で蘇生させ、さらに2ターンの間、防御力を25%上昇させる'
                    },
                    {
                        level: 1,
                        label: 'シフト',
                        magnification: 0.85,
                        hit: 6,
                        text: '敵単体に攻撃力0.85倍の6連続ダメージ'
                    }
                ]
            },
            {
                name: '重量級の愛＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 4.25,
                        hit: 1,
                        text: '敵単体に攻撃力4.25倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 5.25,
                        hit: 1,
                        text: '敵単体に攻撃力5.25倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 6.25,
                        hit: 1,
                        text: '敵単体に攻撃力6.25倍のダメージ【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 7.25,
                        hit: 1,
                        text: '敵単体に攻撃力7.25倍のダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin17.js.map