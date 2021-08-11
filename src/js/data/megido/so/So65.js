import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So65 = [
    {
        clockType: ClockType.So,
        no: 65,
        id: 1,
        name: 'アンドレアルフス',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 9087,
        offense: 988,
        defense: 285,
        speed: 637,
        ability: { name: 'クロスカウンター', text: '攻撃を受けたとき、20%の確率で反撃する' },
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
                name: 'コンビネーション＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力0.7倍の4連続ダメージ。さらに80%の確率で、積まれているフォトンを1つ破壊する',
                levels: [
                    {
                        level: 1,
                        magnification: 0.7,
                        hit: 4
                    }
                ]
            },
            {
                name: 'レックレスラッシュ＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力0.8倍の6連続ダメージ。さらに2ターンの間、敵をめまい状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 6
                    }
                ]
            },
            {
                name: 'フェザーシールド＋',
                type: SkillType.Mysteries,
                text: '3ターンの間、味方横一列へのダメージを30%軽減し、Lv×10の固定追加ダメージを付与する',
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
//# sourceMappingURL=So65.js.map