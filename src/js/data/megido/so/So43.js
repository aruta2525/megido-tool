import { SkillType, ClassType, StyleType, ClockType, ReferralStatus } from '../../../enum/Megido';
export const So43 = [
    {
        clockType: ClockType.So,
        no: 43,
        id: 1,
        name: 'サブナック',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8573,
        offense: 751,
        defense: 682,
        speed: 274,
        ability: { name: '小さな英雄', text: '敵から狙われやすくなり、防御力が20%上昇する' },
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
                name: 'エリアディフェンス＋',
                type: SkillType.Skill,
                text: '2ターンの間、味方全体へのダメージを20%軽減する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'イージスブロー＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.4,
                        hit: 2,
                        text: '敵単体に攻撃力1.4倍の2連続ダメージさらに敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 1,
                        magnification: 1.65,
                        hit: 2,
                        text: '敵単体に攻撃力1.65倍の2連続ダメージ。さらに敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 1,
                        magnification: 1.9,
                        hit: 2,
                        text: '敵単体に攻撃力1.9倍の2連続ダメージ。さらに敵をめまい状態にする【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 1,
                        magnification: 2.15,
                        hit: 2,
                        text: '敵単体に攻撃力2.15倍の2連続ダメージ。さらに敵をめまい状態にする'
                    }
                ]
            },
            {
                name: 'フォートレス＋',
                type: SkillType.Mysteries,
                text: '味方全体への攻撃を2回無効化するさらに2ターンの間、攻撃力を20%上昇させる',
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
    },
    {
        clockType: ClockType.So,
        no: 43,
        id: 2,
        name: 'サブナック',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 8782,
        offense: 740,
        defense: 700,
        speed: 300,
        ability: { name: '守護心', text: '戦闘中、徐々に防御力が上昇する（最大値50%）' },
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
                name: 'イージスの加護＋',
                type: SkillType.Skill,
                text: '2ターンの間、味方単体の防御力を40%上昇させ、積めるフォトンの量を+1する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'シールドフォース＋',
                type: SkillType.AwakeningSkill,
                text: '2ターンの間、味方単体への最大HPの25%以下のダメージを無効化し、素早さを30%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ガーディアンズレイ＋',
                type: SkillType.Mysteries,
                text: '敵横一列に防御力6倍のダメージ。さらに2ターンの間、味方全体の防御力を30%上昇させる',
                referralStatus: ReferralStatus.Defence,
                levels: [
                    {
                        level: 1,
                        magnification: 6,
                        hit: 1
                    }
                ],
                increment: 0
            }
        ]
    }
];
//# sourceMappingURL=So43.js.map