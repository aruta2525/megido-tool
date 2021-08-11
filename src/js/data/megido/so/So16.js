import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So16 = [
    {
        clockType: ClockType.So,
        no: 16,
        id: 1,
        name: 'ゼパル',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 6210,
        offense: 1209,
        defense: 271,
        speed: 693,
        ability: { name: '結婚願望', text: '男性キャラクターがパーティに居る場合、攻撃力が20%上昇する' },
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
                name: '三枚下ろし＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.85倍の3連続ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.85,
                        hit: 3
                    }
                ]
            },
            {
                name: '微塵切り＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力0.7倍の6連続ダメージ。さらに自身にスキルフォトンを1つ追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.7,
                        hit: 6
                    }
                ]
            },
            {
                name: 'タービュランス＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力0.85倍の5連続ダメージ。さらに2ターンの間、自身のスキルを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.85,
                        hit: 5
                    }
                ],
                increment: 0.0125
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 16,
        id: 2,
        name: 'ゼパル',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 6210,
        offense: 1150,
        defense: 409,
        speed: 642,
        ability: { name: '過激エンパシー', text: 'バーサーク状態の味方の数が多いほど、受けるダメージを軽減する（最大50%）' },
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
                name: '四枚下ろし+',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.75倍の4連続ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 4
                    }
                ]
            },
            {
                name: 'アングリーオーダー+',
                type: SkillType.AwakeningSkill,
                text: 'バーサーク状態の味方全体にアタックフォトンを1つ追加し、さらに2ターンの間、状態異常と弱体を無効化する状態になる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '伝播する情動+',
                type: SkillType.Mysteries,
                text: `味方単体のHPを20%回復する。さらにカウンターの場合、1ターンの間、攻撃力50%上昇させ、バーサーク状態にする<br>
          【バーサークの詳細】1ターン目:攻撃力75%UP。毎ターン25%ずつ上昇。最大150%。毎ターン、最大HPの10%ダメージを受ける`,
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
//# sourceMappingURL=So16.js.map