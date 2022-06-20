import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So30 = [
    {
        clockType: ClockType.So,
        no: 30,
        id: 1,
        name: 'フォルネウス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 8521,
        offense: 635,
        defense: 487,
        speed: 616,
        ability: { name: '自信過剰', text: '受けるダメージを15%軽減する' },
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
                name: '偽りの加護＋',
                type: SkillType.Skill,
                text: '2ターンの間、味方単体へのスキルフォトンからのダメージを60%軽減する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '一時の虚脱＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、敵が積めるフォトンの量を-1する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '紫霧のブレス＋',
                type: SkillType.Mysteries,
                text: '味方横一列のHPを40%回復させる。さらに2ターンの間、スキルを強化する',
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
        no: 30,
        id: 2,
        name: 'フォルネウス',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7642,
        offense: 1201,
        defense: 404,
        speed: 487,
        ability: { name: '六根清浄', text: '味方が即死で戦闘不能になったとき、自身を覚醒状態にする' },
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
                name: '鎮魂の儀＋',
                type: SkillType.Skill,
                text: `2ターンの間、80%の確率で敵単体のアタックフォトンを劣化させる。さらに、味方単体にデスギフトを付与する<br>
              【デスギフト効果】敵単体に攻撃力1倍のダメージ。さらに積まれている全てのフォトンをペインフォトンに転換する`,
                levels: [
                    {
                        level: 1,
                        magnification: 1,
                        hit: 1
                    }
                ]
            },
            {
                name: '魂への礼拝＋',
                type: SkillType.AwakeningSkill,
                text: `味方全体にレイズギフトを付与し、味方編成をネクロ状態にする<br>
              【レイズギフト効果】敵全体に攻撃力1.75倍のダメージ。さらに積まれているフォトンを1つ奪う`,
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: '深淵の戦慄＋',
                type: SkillType.Mysteries,
                text: '',
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2,
                        hit: 1,
                        text: '敵全体に攻撃力2倍のダメージ。さらに味方単体を即死させ、50%の確率で、2ターンの間、敵全体を凍結状態にする'
                    },
                    {
                        level: 2,
                        label: 'ネクロ',
                        magnification: 6,
                        hit: 1,
                        text: 'ソウルを4つ消費し、敵全体に攻撃力6倍のダメージ。さらに味方単体を即死させ、2ターンの間、敵全体を凍結状態にする'
                    }
                ],
                increment: 0
            }
        ]
    }
];
//# sourceMappingURL=So30.js.map