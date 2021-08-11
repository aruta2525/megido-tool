import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So05 = [
    {
        clockType: ClockType.So,
        no: 5,
        id: 1,
        name: 'マルバス',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 7262,
        offense: 628,
        defense: 489,
        speed: 719,
        ability: { name: '私すごーい☆', text: '毎ターン終了時、覚醒ゲージが+1される' },
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
                name: 'マジカルヒール+',
                type: SkillType.Skill,
                text: '味方単体のHPを30%回復させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ミスティック+',
                type: SkillType.AwakeningSkill,
                text: '味方単体のHPを40%回復させ、覚醒ゲージを+2する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'クルーエルラブ+',
                type: SkillType.Mysteries,
                text: '味方全体のHPを25%回復させ、2ターンの間、防御力を40%上昇させる【攻撃を2回受けるたびにスキルLv上昇】',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 5,
        id: 2,
        name: 'マルバス',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 7730,
        offense: 597,
        defense: 586,
        speed: 657,
        ability: { name: '空気読みなさいよ☆', text: '行動開始時、20%の確率でスキルが追加される' },
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
                name: 'チアフルリリィ＋',
                type: SkillType.Skill,
                text: 'ラッシュの味方前列の点穴を+5する。さらに2ターンの間、味方前列の防御力を20%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ミスティックマター＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体に攻撃力1.35倍のダメージ。さらに50%の確率で、フォトンを1つ破壊',
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1
                    }
                ]
            },
            {
                name: '夢見る乙女＋',
                type: SkillType.Mysteries,
                text: 'ラッシュの味方前列の点穴を+20する。さらに2ターンの間、ターン終了時に味方前列のHPが15%回復する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So05.js.map