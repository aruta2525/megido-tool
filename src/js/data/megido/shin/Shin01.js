import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 1,
        id: 1,
        name: 'リリム',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 7342,
        offense: 1198,
        defense: 415,
        speed: 496,
        ability: {
            name: '夢の世界の支配者',
            text: '敵味方合わせて、睡眠状態のキャラクター1人につき、自身の攻撃力、防御力、素早さが10%上昇する（最大値50%）'
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
                name: '白昼夢＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵単体に攻撃力1.35倍のダメージ。40%の確率で、2ターンの間、敵を睡眠状態【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵横一列に攻撃力1.35倍のダメージ。40%の確率で、2ターンの間、敵を睡眠状態【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵全体に攻撃力1.35倍のダメージ。40%の確率で、2ターンの間、敵を睡眠状態'
                    }
                ]
            },
            {
                name: '苦痛のパトス＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、敵単体の攻撃力、防御力、素早さを30%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'メルヘンダービー＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力3.5倍のダメージ。さらに弱体、状態異常が付与されている敵に対して、効果1種類につき倍率が0.1上昇する',
                levels: [
                    {
                        level: 1,
                        magnification: 3.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.Shin,
        no: 1,
        id: 2,
        name: 'リリム',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 6022,
        offense: 814,
        defense: 677,
        speed: 533,
        ability: { name: '正邪の双翼', text: '自身の素早さが30%上昇する' },
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
                name: '探りの夢見＋',
                type: SkillType.Skill,
                text: '2ターンの間、敵単体の防御力を25%低下させる。さらに、味方単体のアタックを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '鬨夢＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に掛かっている強化を解除し、さらに2ターンの間、味方横一列の攻撃にLv×10の固定追加ダメージを付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '魘夢のプフェーアト＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.5倍のダメージ。さらに80%の確率で、覚醒ゲージを-2する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin01.js.map