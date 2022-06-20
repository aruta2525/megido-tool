import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 71,
        id: 1,
        name: 'アクィエル',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 8024,
        offense: 857,
        defense: 425,
        speed: 681,
        ability: { name: 'ファルサグロリア', text: '自身以外の味方の行動で、対象が1体以上状態異常になった場合、自身の覚醒ゲージが+1される' },
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
                name: 'アニムスの目+',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方単体の状態異常命中率を20%上昇させ、防御力を10%上昇させる【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 0,
                        hit: 0,
                        text: '	2ターンの間、味方単体の状態異常命中率を40%上昇させ、防御力を15%上昇させる【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 0,
                        hit: 0,
                        text: '	2ターンの間、味方単体の状態異常命中率を60%上昇させ、防御力を20%上昇させる【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方単体の状態異常命中率を100%上昇させ、防御力を25%上昇させる【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 5,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方単体の状態異常命中率を150%上昇させ、防御力を30%上昇させる'
                    }
                ]
            },
            {
                name: '異端のシュンボルム+',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '3種未満',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方全体の攻撃力を25%上昇させ、敵全体に付与されている状態異常の種類数に応じてさらに味方全体に効果を付与する'
                    },
                    {
                        level: 1,
                        label: '3種以上',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方全体の攻撃力を25%上昇させ、ダメージを20%軽減する'
                    },
                    {
                        level: 1,
                        label: '5種以上',
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方全体の攻撃力を25%上昇させ、ダメージを20%軽減し、自身以外の味方全体にスキルフォトンを1つ追加'
                    }
                ]
            },
            {
                name: 'レナトゥスメルム+',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.5倍のダメージ。それぞれ80%の確率で、特定の状態異常の中から最大2つ付与する(未付与のものを優先)',
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
//# sourceMappingURL=Shin71.js.map