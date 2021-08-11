import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So49 = [
    {
        clockType: ClockType.So,
        no: 49,
        id: 1,
        name: 'クロケル',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 5688,
        offense: 1197,
        defense: 287,
        speed: 703,
        ability: { name: 'リズムに乗るのです！', text: '戦闘中、徐々に素早さが上昇する（最大値50%）' },
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
                name: '応援です！＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 0,
                        hit: 0,
                        text: '味方後列の覚醒ゲージを+1し、2ターンの間、攻撃力を10%上昇させる'
                    },
                    {
                        level: 2,
                        label: '大協奏',
                        magnification: 0,
                        hit: 0,
                        text: '味方後列の覚醒ゲージを+1し、2ターンの間、攻撃力を15%上昇させる'
                    }
                ]
            },
            {
                name: 'ぶっ飛ぶのです！＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 3,
                        hit: 1,
                        attribute: Attribute.None,
                        text: '敵単体に攻撃力3倍のダメージ。3ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 3,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵単体に攻撃力3倍の響撃ダメージ。3ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする'
                    }
                ]
            },
            {
                name: 'ロイヤルスワール＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力5.25倍のダメージ。さらに2ターンの間、ターン終了時に味方全体のHPが20%回復する',
                levels: [
                    {
                        level: 1,
                        magnification: 5.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 49,
        id: 2,
        name: 'クロケル',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 5835,
        offense: 1164,
        defense: 476,
        speed: 500,
        ability: { name: 'ポジティブスコア', text: 'アタック時、2ターンの間、継続する音符を1つ付与する' },
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
                name: '容赦しないです！＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.5,
                        hit: 1,
                        attribute: Attribute.None,
                        text: '敵単体に攻撃力1.5倍のダメージ。さらに味方編成を協奏状態にする'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 1.5,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵単体に攻撃力1.5倍の響撃ダメージ。さらに80%の確率で、敵に積まれているフォトンを1つ破壊する'
                    }
                ]
            },
            {
                name: 'コテンパンです！＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.75,
                        hit: 1,
                        attribute: Attribute.None,
                        text: '敵単体に攻撃力1.75倍のダメージ'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 1.75,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵単体に攻撃力1.75倍の響撃ダメージ。さらに自身にアタックフォトンを1つ追加する'
                    }
                ]
            },
            {
                name: 'デュナミスクリーヴ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.75,
                        hit: 1,
                        attribute: Attribute.None,
                        text: '敵単体に攻撃力1.75倍のダメージ。さらに与えたダメージの20%を吸収する'
                    },
                    {
                        level: 1,
                        label: '大協奏',
                        magnification: 1.75,
                        hit: 1,
                        attribute: Attribute.Sound,
                        text: '敵横一列に攻撃力1.75倍の響撃ダメージ。さらに与えたダメージの20%を吸収する'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So49.js.map