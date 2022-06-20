import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 38,
        id: 1,
        name: 'アガリアレプト',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 7702,
        offense: 968,
        defense: 276,
        speed: 811,
        ability: { name: '軽快なステップ', text: '戦闘中、徐々に素早さが上昇する(最大値50％)' },
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
                name: 'メテオレイド+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 3,
                        text: '敵単体に攻撃力0.8倍の3連続ダメージ【3ターン目にLv2】'
                    },
                    {
                        level: 2,
                        magnification: 0.85,
                        hit: 3,
                        text: '	敵単体に攻撃力0.85倍の3連続ダメージ。さらに80%の確率で覚醒ゲージを-1する【6ターン目にLv3】'
                    },
                    {
                        level: 3,
                        magnification: 0.9,
                        hit: 3,
                        text: '敵単体に攻撃力0.9倍の3連続ダメージ。さらに80%の確率で覚醒ゲージを-1し、80%の確率で、フォトンを1つ破壊する'
                    }
                ]
            },
            {
                name: 'ディストード+',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.4,
                        hit: 2,
                        text: '敵横一列に攻撃力1.4倍の2連続ダメージ【3ターン目にLv2】'
                    },
                    {
                        level: 2,
                        magnification: 1.4,
                        hit: 2,
                        text: '敵横一列に攻撃力1.4倍の2連続ダメージ。80％の確率で、2ターンの間、敵を感電状態にする【6ターン目にLv3】'
                    },
                    {
                        level: 3,
                        magnification: 1.4,
                        hit: 2,
                        text: '敵横一列に攻撃力1.4倍の2連続ダメージ。さらに80%の確率で、2ターンの間、敵を感電とめまい状態にする'
                    }
                ]
            },
            {
                name: 'ツインアブソーブ+',
                type: SkillType.Mysteries,
                text: '敵全体に攻撃力2倍のダメージ、2ターンの間、攻撃力と防御力を20％低下させ自身の攻撃力と防御力を50％上昇する',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 38,
        id: 2,
        name: 'アガリアレプト',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6390,
        offense: 1100,
        defense: 271,
        speed: 706,
        ability: { name: '因果律崩壊', text: '自身が励起状態のとき、攻撃力が30％上昇する' },
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
                name: 'プリズムノヴァ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.2,
                        hit: 2,
                        text: '敵単体に攻撃力1.2倍の2連続ダメージ。2ターン自身の攻撃力を5％上昇（最大25％）【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 1.2,
                        hit: 2,
                        text: '敵単体に攻撃力1.2倍の2連続ダメージ。2ターン自身の攻撃力を10％上昇（最大25％）【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 1.2,
                        hit: 2,
                        text: '敵単体に攻撃力1.2倍の2連続ダメージ。2ターン自身の攻撃力を15％上昇（最大25％）【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 1.2,
                        hit: 2,
                        text: '敵単体に攻撃力1.2倍の2連続ダメージ。2ターン自身の攻撃力を20％上昇（最大25％）【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 5,
                        magnification: 1.2,
                        hit: 2,
                        text: '敵単体に攻撃力1.2倍の2連続ダメージ。2ターン自身の攻撃力を25％上昇（最大25％）'
                    }
                ]
            },
            {
                name: 'クロノスシフト＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵横一列に攻撃力1.35倍のダメージ【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 1.45,
                        hit: 1,
                        text: '敵横一列に攻撃力1.45倍のダメージ【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 1.55,
                        hit: 1,
                        text: '敵横一列に攻撃力1.55倍のダメージ【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 1.65,
                        hit: 1,
                        text: '敵横一列に攻撃力1.65倍のダメージ'
                    }
                ]
            },
            {
                name: 'タキオンステップ＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、自身を励起状態にしダメージを15%軽減する。ただし2ターンの間、封印状態となる',
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
//# sourceMappingURL=Shin38.js.map