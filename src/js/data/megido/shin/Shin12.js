import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 12,
        id: 1,
        name: 'ジニマル',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 5904,
        offense: 859,
        defense: 612,
        speed: 538,
        ability: { name: '蒼海の滅王', text: '攻撃時、5%の確率で敵を束縛状態にする' },
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
                name: 'トーテンタンツ＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1倍のダメージ。さらに40%（束縛状態の敵の場合70%）の確率で2ターンの間、敵を病気状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '【専】トーテンタンツ＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1倍のダメージ。さらにそれぞれ80%（状態異常の敵の場合100%）の確率で2ターンの間、敵を病気、ゾンビ状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ギフトヴィアベル＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.5倍のダメージ。さらに50%（束縛状態の敵の場合100%）の確率で2ターンの間、敵を毒状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '【専】ギフトヴィアベル＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.5倍のダメージ。さらに50%（状態異常の敵の場合100%）の確率で2ターンの間、敵を毒状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ティーフゼヴォーゲ＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.5倍のダメージ。さらに2ターンの間、ターン終了時に敵味方全体のHPが35%回復する',
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
//# sourceMappingURL=Shin12.js.map