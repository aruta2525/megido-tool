import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 31,
        id: 1,
        name: 'フルーレティ',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 7716,
        offense: 1004,
        defense: 421,
        speed: 611,
        ability: { name: 'ノベリスターズハイ', text: '状態異常が付与されている敵1体につき、自身の攻撃力が8%上昇する' },
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
                name: '目眩く観察＋',
                type: SkillType.Skill,
                text: '2ターンの間、敵単体をめまい状態にし、対象がめまい状態の場合、束縛状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '紙上の暴走＋',
                type: SkillType.AwakeningSkill,
                text: 'それぞれ60%の確率で、敵横一列を2ターンの間、病気、毒状態にする。さらに自身の攻撃力を40%上昇する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'ブックカース＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1,
                        text: '敵横一列に攻撃力2.5倍のダメージ【自身が状態異常を1回付与するたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 3,
                        hit: 1,
                        text: '敵横一列に攻撃力3倍のダメージ【自身が状態異常を1回付与するたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 3.5,
                        hit: 1,
                        text: '敵横一列に攻撃力3.5倍のダメージ【自身が状態異常を1回付与するたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 4,
                        hit: 1,
                        text: '敵横一列に攻撃力4倍のダメージ【自身が状態異常を1回付与するたびにスキルLv上昇】'
                    },
                    {
                        level: 5,
                        magnification: 4.5,
                        hit: 1,
                        text: '敵横一列に攻撃力4.5倍のダメージ'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin31.js.map