import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So57 = [
    {
        clockType: ClockType.So,
        no: 57,
        id: 1,
        name: 'オセ',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7351,
        offense: 1152,
        defense: 283,
        speed: 614,
        ability: { name: '豹の化身', text: '自身の攻撃力が15%上昇する' },
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
                name: 'ポイズンクロー＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵を毒状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'マッハクロー＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力0.75倍の4連続ダメージ。さらに自身にアタックフォトンを1つ追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 4
                    }
                ]
            },
            {
                name: '猛りの暴獣爪＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力1.1倍の3連続ダメージ。さらに2ターンの間、自身のアタックを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.1,
                        hit: 3
                    }
                ],
                increment: 0.0166
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 57,
        id: 2,
        name: 'オセ',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 7619,
        offense: 1073,
        defense: 415,
        speed: 610,
        ability: { name: '二兎を追う獣', text: '怒闘状態時、アタックでの攻撃が0.75倍の全体攻撃に変化する' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1,
                        hit: 1
                    },
                    {
                        level: 1,
                        label: '怒闘',
                        magnification: 0.75,
                        hit: 1
                    }
                ]
            },
            {
                name: '駆け抜ける影＋',
                type: SkillType.Skill,
                text: '敵横一列に攻撃力1.15倍のダメージ。さらに2ターンの間、自身の攻撃力を30%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.15,
                        hit: 1
                    }
                ]
            },
            {
                name: '氷樹の密林＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1,
                        text: '敵横一列に攻撃力1.75倍のダメージ。さらに2ターンの間、自身のスキルを強化する【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 2,
                        hit: 1,
                        text: '敵横一列に攻撃力2倍のダメージ。さらに2ターンの間、自身のスキルを強化する【使用するごとにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 2,
                        hit: 1,
                        text: '敵全体に攻撃力2倍のダメージ。さらに2ターンの間、自身のスキルを強化する'
                    }
                ]
            },
            {
                name: '饗宴への供物＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2,
                        hit: 1,
                        text: `敵全体に攻撃力2倍のダメージ。さらに1ターンの間、自身の攻撃力を50%上昇させ、バーサーク状態にする【バーサーク時、性能変化】<br>
                  【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける`
                    },
                    {
                        level: 1,
                        label: 'バーサーク',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵全体に攻撃力2.25倍のダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So57.js.map