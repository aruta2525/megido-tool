import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So44 = [
    {
        clockType: ClockType.So,
        no: 44,
        id: 1,
        name: 'シャックス',
        styleType: StyleType.Counter,
        classType: ClassType.Fighter,
        hp: 7581,
        offense: 954,
        defense: 478,
        speed: 501,
        ability: { name: '暴走少女', text: '自身の素早さが30%上昇する' },
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
                name: 'びりびり斬り+',
                type: SkillType.Skill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力1.25倍の雷ダメージ。さらに80%の確率で、2ターンの間、敵を感電状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'もっとびりびり斬り+',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力1.25倍の2連続雷ダメージ。2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 2
                    }
                ]
            },
            {
                name: '電電ぴよ祭り！+',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        magnification: 3.25,
                        hit: 1,
                        text: '敵単体に攻撃力3.25倍の雷ダメージ【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 4.25,
                        hit: 1,
                        text: '敵単体に攻撃力4.25倍の雷ダメージ【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 5.25,
                        hit: 1,
                        text: '敵単体に攻撃力5.25倍の雷ダメージ【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 6.25,
                        hit: 1,
                        text: '敵単体に攻撃力6.25倍の雷ダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 44,
        id: 2,
        name: 'シャックス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 7327,
        offense: 1157,
        defense: 428,
        speed: 478,
        ability: { name: '鳥頭少女', text: '自身がチェインを行うとき、次の行動のチェイン数を+1する' },
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
                name: 'バリバリ斬り＋',
                type: SkillType.Skill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力0.5倍の4連続雷ダメージ。チェイン中、味方単体にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 0.5,
                        hit: 4
                    }
                ]
            },
            {
                name: 'イナズマアタック＋',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Thunder,
                text: '敵単体に攻撃力1.75倍の雷ダメージ。さらに2ターンの間、味方全体の攻撃力を20%上昇させ、ターゲットに関係なく最も素早さの低い味方にチェイン',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ピヨピヨフェス＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 0,
                        label: 'Ch0',
                        magnification: 3.75,
                        hit: 1,
                        text: '敵単体に攻撃力3.75倍の雷ダメージ。チェイン数に応じて効果範囲変化'
                    },
                    {
                        level: 1,
                        label: 'Ch1',
                        magnification: 3.75,
                        hit: 1,
                        text: '敵横一列に攻撃力3.75倍の雷ダメージ'
                    },
                    {
                        level: 2,
                        label: 'Ch2',
                        magnification: 3.75,
                        hit: 1,
                        text: '敵全体に攻撃力3.75倍の雷ダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So44.js.map