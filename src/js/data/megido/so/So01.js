import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So01 = [
    {
        clockType: ClockType.So,
        no: 1,
        id: 1,
        name: 'バエル',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 4570,
        offense: 943,
        defense: 487,
        speed: 689,
        ability: { name: '超感電', text: '海洋生物系のモンスターに2倍のダメージ' },
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
                name: 'マジックリリース＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、味方単体のチャージを強化し、ダメージを10%軽減する'
                    }
                ]
            },
            {
                name: 'コラプスサンダー＋',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        magnification: 1.55,
                        hit: 1,
                        text: '敵全体に攻撃力1.55倍の雷ダメージ。2ターンの間、帯電の地形効果で0.75倍の継続ダメージを与え、確率で感電させる'
                    }
                ]
            },
            {
                name: 'インクルードデス＋',
                type: SkillType.Mysteries,
                increment: 0.05,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        magnification: 6.25,
                        hit: 1,
                        text: '敵単体に攻撃力6.25倍の雷ダメージ。さらに味方後列にチャージフォトンを1つ追加する'
                    }
                ]
            }
        ]
    }
];
//# sourceMappingURL=So01.js.map