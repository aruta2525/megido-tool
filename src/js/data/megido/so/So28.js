import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So28 = [
    {
        clockType: ClockType.So,
        no: 28,
        id: 1,
        name: 'ベリト',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 5631,
        offense: 1226,
        defense: 428,
        speed: 623,
        ability: { name: '恥かかすなよ！', text: 'HPが50%以下のとき、攻撃力が30%上昇する' },
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
                name: 'グリムスティンガー＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で、2ターンの間、敵をめまい状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'エンペラーグラブ＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に積まれているフォトンを1つ奪う。さらに2ターンの間、自身の攻撃力を20%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ワールドイズマイン＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力4.75倍のダメージ。ただし反動で、自身が最大HPの50%ダメージを受ける',
                levels: [
                    {
                        level: 1,
                        magnification: 4.75,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 28,
        id: 2,
        name: 'ベリト',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 7942,
        offense: 1053,
        defense: 518,
        speed: 432,
        ability: { name: '帯電体質', text: 'チェイン中、自身のアタックとスキルが雷ダメージになる' },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 0,
                        label: 'Ch0',
                        magnification: 1,
                        hit: 1,
                        attribute: Attribute.None
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 1,
                        hit: 1,
                        attribute: Attribute.Thunder
                    }
                ]
            },
            {
                name: '閃光刃＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 0,
                        label: 'Ch0',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ。チェイン数に応じて倍率変化',
                        attribute: Attribute.None
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 2.25,
                        hit: 1,
                        text: '敵単体に攻撃力2.25倍のダメージ',
                        attribute: Attribute.Thunder
                    }
                ]
            },
            {
                name: '無限の施し＋',
                type: SkillType.AwakeningSkill,
                text: 'ターゲットに関係なく最も攻撃力の高い味方にアタックフォトンを1つ追加しチェイン。さらに2ターンの間、攻撃力を30%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '稲妻の裁断＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 0,
                        label: 'Ch0',
                        magnification: 3.75,
                        hit: 1,
                        text: '敵単体に攻撃力3.75倍の雷ダメージ。チェイン数に応じて倍率変化'
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 4.5,
                        hit: 1,
                        text: '敵単体に攻撃力4.5倍の雷ダメージ。チェイン数に応じて倍率変化'
                    },
                    {
                        level: 2,
                        label: 'Ch2',
                        magnification: 5.25,
                        hit: 1,
                        text: '敵単体に攻撃力5.25倍の雷ダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So28.js.map