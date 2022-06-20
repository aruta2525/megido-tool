import { SkillType, ClassType, StyleType, ClockType, ReferralStatus } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 35,
        id: 1,
        name: 'ブリフォー',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6889,
        offense: 1080,
        defense: 439,
        speed: 622,
        ability: {
            name: 'テンポアップ',
            text: 'コロッセオ状態中、自身の素早さが50%上昇する'
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
                name: '突劫掌＋',
                type: SkillType.Skill,
                referralStatus: ReferralStatus.Speed,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.75,
                        hit: 1,
                        text: '敵単体に素早さ1.75倍のダメージ。さらに45%の確率で、積まれているフォトンを1つ奪う'
                    },
                    {
                        level: 1,
                        label: 'コロッセオ',
                        magnification: 2.5,
                        hit: 1,
                        text: '敵単体に素早さ2.5倍のダメージ。さらに70%の確率で、積まれているフォトンを1つ奪う'
                    }
                ]
            },
            {
                name: '天昇旋蹴＋',
                type: SkillType.AwakeningSkill,
                referralStatus: ReferralStatus.Speed,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 4,
                        hit: 1,
                        text: '敵単体に素早さ4倍のダメージ。さらに2ターンの間、自身を回避状態(30%)にする'
                    },
                    {
                        level: 1,
                        label: 'コロッセオ',
                        magnification: 4.75,
                        hit: 1,
                        text: '敵単体に素早さ4.75倍のダメージ。さらに2ターンの間、自身を回避状態(50%)にする	'
                    }
                ]
            },
            {
                name: '開戦演舞＋',
                type: SkillType.Mysteries,
                text: '3ターンの間、敵と味方の編成をコロッセオ状態にする（効果ターン終了時まで持続）。さらに3ターンの間、味方全体の素早さを110%上昇する	',
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
//# sourceMappingURL=Shin35.js.map