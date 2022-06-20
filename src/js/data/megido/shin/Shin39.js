import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 39,
        id: 1,
        name: 'ウコバク',
        styleType: StyleType.Burst,
        classType: ClassType.Trooper,
        hp: 7272,
        offense: 739,
        defense: 523,
        speed: 535,
        ability: {
            name: '炎還',
            text: '1ターンの間に味方が与えた火ダメージの回数分、ターン終了時に種族に【龍】を持つオーブを装備している味方に気炎のオーラを付与する	'
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
                name: '藍蝶＋',
                type: SkillType.Skill,
                attribute: Attribute.Fire,
                text: '	敵単体に攻撃力1.25倍の火ダメージ。さらに80%の確率で、2ターンの間、攻撃力を20%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '舞炎の鱗粉＋',
                type: SkillType.AwakeningSkill,
                text: '味方横一列のHPを20%回復させる。さらに2ターンの間、スキルを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '藍炎蝶燦燦火＋',
                type: SkillType.Mysteries,
                text: '2ターンの間、味方前列の攻撃力を60%上昇する。さらに種族に【龍】を持つオーブを装備している対象に気炎のオーラを4個付与する',
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
export default megido;
//# sourceMappingURL=Shin39.js.map