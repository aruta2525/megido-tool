import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So19 = [
    {
        clockType: ClockType.So,
        no: 19,
        id: 1,
        name: 'サレオス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 8474,
        offense: 945,
        defense: 490,
        speed: 424,
        ability: { name: '後光アタック', text: '攻撃を受けたとき、10%の確率で暗闇攻撃で反撃する' },
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
                name: '臨兵闘者皆陣列在前+',
                type: SkillType.Skill,
                text: '味方全体の状態異常を治癒する。さらにHPを10%回復させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '三途の川渡し+',
                type: SkillType.AwakeningSkill,
                text: '敵全体に攻撃力1.35倍のダメージ2ターンの間、滞水の地形効果で0.75倍の継続ダメージを与え、雷に弱くする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1
                    }
                ]
            },
            {
                name: '腐食のブレス+',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力2.5倍のダメージさらに80%の確率で、2ターンの間、敵を呪い状態にする',
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
    },
    {
        clockType: ClockType.So,
        no: 19,
        id: 2,
        name: 'サレオス',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 8330,
        offense: 881,
        defense: 525,
        speed: 479,
        ability: {
            name: '仏の顔も三度まで',
            text: '自身が攻撃でダメージを3回受けたとき1ターンの間自身の攻撃力を25%上昇させ、バーサーク状態になる（最大125%上昇）'
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
                name: '水神の怒り＋',
                type: SkillType.Skill,
                text: '味方単体への攻撃を1回無効化し、2ターンの間、スキルを強化する。さらに味方編成を怒闘状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'マントラ＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '味方前列の状態異常を治癒する。さらにHPを20%回復する【攻撃を2回受けるとスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 0,
                        hit: 0,
                        text: '味方前列の状態異常を治癒する。さらにHPを30%回復する'
                    }
                ]
            },
            {
                name: '三途の濁流＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1.25倍ダメージ。さらに2ターンの間、滞水地形（0.5倍ダメージ）。味方単体、カウンターの場合1ターンの間攻撃力50%上昇、バーサーク状態にする<br>【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So19.js.map