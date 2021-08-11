import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So21 = [
    {
        clockType: ClockType.So,
        no: 21,
        id: 1,
        name: 'モラクス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 6025,
        offense: 1218,
        defense: 414,
        speed: 614,
        ability: { name: '逆ギレカウンター', text: '攻撃を受けたとき、20%の確率で反撃する' },
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
                name: '巨岩割り＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍の防御無視ダメージ',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '必勝・大炎風＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに2ターンの間、自身のスキルを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ミノスの大戦斧＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力4.25倍のダメージ。2ターンの間、地割れの地形効果で0.75倍の継続ダメージを与え、防御力を低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 4.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
//# sourceMappingURL=So21.js.map