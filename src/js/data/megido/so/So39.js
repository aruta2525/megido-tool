import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So39 = [
    {
        clockType: ClockType.So,
        no: 39,
        id: 1,
        name: 'マルファス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 7461,
        offense: 981,
        defense: 504,
        speed: 499,
        ability: { name: '天駆ける者', text: '自身の攻撃力が15％上昇する' },
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
                name: 'キャプチャー+',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに45％の確率で、積まれているフォトンを1つ奪う',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'レナスリング+',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.75倍のダメージ。さらに80％の確率で、2ターンの間、防御力を60％低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: 'コロッサスレイ+',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1.5倍の2連続ダメージ。さらに味方全体への攻撃を1回無効化する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 2
                    }
                ],
                increment: 0.025
            },
            {
                name: '【専】コロッサスレイ+',
                type: SkillType.Mysteries,
                text: `敵横一列に攻撃力1.5倍の2連続ダメージ。さらに味方全体への攻撃を1回無効化し、レイズギフトを付与する<br>
              【レイズギフト効果】蘇生されたとき、自身のHPを40%回復する。さらに2ターンの間、自身の最大HPの40%以下のダメージを無効化する`,
                levels: [
                    {
                        level: 1,
                        magnification: 1.5,
                        hit: 2
                    }
                ],
                increment: 0.025
            }
        ]
    }
];
//# sourceMappingURL=So39.js.map