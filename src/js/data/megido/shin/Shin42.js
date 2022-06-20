import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 42,
        id: 1,
        name: 'ルキフゲス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 7270,
        offense: 1133,
        defense: 468,
        speed: 483,
        ability: {
            name: '見出す付加価値',
            text: '装備しているオーブが種族に【精霊】を持つ場合、自身の攻撃力を20%上昇する'
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
                name: '遺物はかく語りき＋',
                type: SkillType.Skill,
                text: '2ターンの間、味方横一列の攻撃力を15%上昇する。さらに種族に【精霊】を持つオーブを装備している対象に勇猛のオーラを1個付与する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '地も割れば光る＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2.75,
                        hit: 1,
                        text: '敵単体に攻撃力2.75倍のダメージ。3ターンの間、地割れの地形効果で0.75倍の継続ダメージを与え、防御力を低下させる'
                    },
                    {
                        level: 1,
                        label: 'オーラ',
                        magnification: 2.75,
                        hit: 1,
                        text: '【自身のオーラを2個消費】敵単体に攻撃力2.75倍ダメージ/3ターンの間、0.75倍継続ダメージの地割れ地形/【精霊】を持つオーブを装備する自身以外に勇猛のオーラを3個付与	'
                    }
                ]
            },
            {
                name: '無価値の代償＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Break,
                text: '敵単体に攻撃力4.5倍の破断ダメージ。さらに2ターンの間、敵単体の攻撃力を30%低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 4.5,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin42.js.map