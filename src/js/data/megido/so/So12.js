import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So12 = [
    {
        clockType: ClockType.So,
        no: 12,
        id: 1,
        name: 'シトリー',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 5667,
        offense: 1176,
        defense: 494,
        speed: 476,
        ability: { name: 'ハルマニアの槍', text: '覚醒ゲージが多いほど攻撃力が上昇する(最大値25%)' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 2
                    }
                ]
            },
            {
                name: 'ジャスティスライト+',
                type: SkillType.Skill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力0.75倍の3連続雷ダメージ。2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる。',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 3
                    }
                ]
            },
            {
                name: 'エクスプロージョン+',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Thunder,
                text: '敵全体に攻撃力1.45倍の雷ダメージ。さらに2ターンの間、自身のスキルを強化する。',
                levels: [
                    {
                        level: 1,
                        magnification: 1.45,
                        hit: 1
                    }
                ]
            },
            {
                name: 'エアリアルグロー+',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力5.25倍の雷ダメージ。さらに2ターンの間、敵を感電状態にする。',
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
        no: 12,
        id: 2,
        name: 'シトリー',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 8547,
        offense: 1001,
        defense: 487,
        speed: 421,
        ability: { name: '変幻自在の槍', text: '敵全体にHボムが付与されているほど、攻撃力が上昇する（最大45%）' },
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
                name: '水天彷彿戟＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに0.5倍で3ターン後に弾けるハイドロボム速を付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '水落魚竜ノ夜＋',
                type: SkillType.AwakeningSkill,
                text: '自身の覚醒ゲージを全て消費し、敵単体に4.5倍で7ターン後に弾けるハイドロボム重を付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '【専】水落魚竜ノ夜＋',
                type: SkillType.AwakeningSkill,
                text: '自身の覚醒ゲージを全て消費し、敵単体に5.5倍で7ターン後に弾けるハイドロボム重を付与し、付与されているハイドロボムのダメージを40%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ハイドロブラスト＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力2倍のダメージ。さらに敵にHボムが付与されているとき、ダメージが2倍になる',
                levels: [
                    {
                        level: 1,
                        magnification: 2,
                        hit: 1
                    }
                ],
                increment: 0.05
            },
            {
                name: '【専】ハイドロブラスト＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力2倍のダメージ。さらに敵にHボムが付与されているとき、ダメージが3倍になる',
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
    }
];
//# sourceMappingURL=So12.js.map