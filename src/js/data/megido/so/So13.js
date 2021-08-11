import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So13 = [
    {
        clockType: ClockType.So,
        no: 13,
        id: 1,
        name: 'ベレト',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 5968,
        offense: 1206,
        defense: 411,
        speed: 626,
        ability: { name: '憤怒の瞳', text: '行動開始時、20%の確率でアタックが追加される' },
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
                name: 'レイジスタンプ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.15,
                        hit: 1,
                        text: '敵単体に攻撃力1.15倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵単体に攻撃力1.35倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 1.55,
                        hit: 1,
                        text: '敵単体に攻撃力1.55倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 1.75,
                        hit: 1,
                        text: '敵単体に攻撃力1.75倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する'
                    }
                ]
            },
            {
                name: '狂喜の怒り＋',
                type: SkillType.AwakeningSkill,
                text: '自身の攻撃力を1ターンの間、50%上昇させる。さらにバーサーク状態にする<br>【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '【専】狂喜の怒り＋',
                type: SkillType.AwakeningSkill,
                text: '自身の攻撃力を1ターンの間、50%上昇。毎ターン最大HPの10%ダメージを受け、攻撃力が最大150%上昇するバーサーク状態にする【バーサーク時、性能変化】<br>【バーサーク時】味方編成を怒闘状態にし2ターンの間、自身の攻撃力70%上昇',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'リアニメイター＋',
                type: SkillType.Mysteries,
                text: '戦闘不能の味方を、最大HPの35%で蘇生させ、2ターンの間、味方全体のアタックを強化するが、呪い状態になる',
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
//# sourceMappingURL=So13.js.map