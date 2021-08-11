import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So64 = [
    {
        clockType: ClockType.So,
        no: 64,
        id: 1,
        name: 'フラウロス',
        styleType: StyleType.Rush,
        classType: ClassType.Trooper,
        hp: 7308,
        offense: 1184,
        defense: 405,
        speed: 483,
        ability: { name: 'ソードブレイカー', text: '近接攻撃を受けたとき、20%の確率で反撃し、2ターンの間、攻撃力を15%低下させる' },
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
                name: '蛇腹剣＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.9倍の2連続ダメージ。さらに80%の確率で、2ターンの間、敵をめまい状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 2
                    }
                ]
            },
            {
                name: 'リベンジストライク＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力0.75倍の5連続ダメージ。さらに敵の覚醒ゲージが多いほど威力上昇(1つにつき倍率に0.15加算)',
                levels: [
                    {
                        level: 0,
                        magnification: 0.75,
                        hit: 5
                    },
                    {
                        level: 1,
                        magnification: 0.9,
                        hit: 5
                    },
                    {
                        level: 2,
                        magnification: 1.05,
                        hit: 5
                    },
                    {
                        level: 3,
                        magnification: 1.2,
                        hit: 5
                    },
                    {
                        level: 4,
                        magnification: 1.35,
                        hit: 5
                    },
                    {
                        level: 5,
                        magnification: 1.5,
                        hit: 5
                    }
                ]
            },
            {
                name: 'レオパルドブロー＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Fire,
                text: '敵単体に攻撃力3.25倍の火ダメージ。さらに90%の確率で、積まれているフォトンを1つ奪う',
                levels: [
                    {
                        level: 1,
                        magnification: 3.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 64,
        id: 2,
        name: 'フラウロス',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7702,
        offense: 1005,
        defense: 504,
        speed: 485,
        ability: { name: '天邪鬼', text: '攻撃を受けたとき、10%の確率で反撃し、2ターンの間、防御力を25%低下させる' },
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
                name: '水砕剣＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力0.65倍の2連続ダメージ。さらに80%の確率で、0.5倍で3ターン後に弾けるハイドロボム速を付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.65,
                        hit: 2
                    }
                ]
            },
            {
                name: 'スタグナントビロー＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力0.65倍のダメージ。さらに80%の確率で、3.5倍で7ターン後に弾けるハイドロボム重を付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.65,
                        hit: 1
                    }
                ]
            },
            {
                name: 'フォールフラッド＋',
                type: SkillType.Mysteries,
                text: '敵全体に攻撃力2倍のダメージ。2ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
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
//# sourceMappingURL=So64.js.map