import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 5,
        id: 1,
        name: 'フリアエ',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 6079,
        offense: 771,
        defense: 635,
        speed: 647,
        ability: { name: '司法の番人', text: '行動開始時、20%の確率でスキルが追加される' },
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
                name: '秩序の障壁＋',
                type: SkillType.Skill,
                text: '味方前列への攻撃を1回無効化する さらに2ターンの間、攻撃力を10%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '判決『氷結の刑』＋',
                type: SkillType.AwakeningSkill,
                text: '敵横一列に攻撃力1.75倍のダメージ。2ターンの間、氷結の地形効果で0.75倍の継続ダメージを与え、攻撃力を低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ]
            },
            {
                name: '焼べる浄化の蒼炎＋',
                type: SkillType.Mysteries,
                text: '味方横一列のHPを40%回復させる。さらに2ターンの間、攻撃力を30%上昇させる',
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
//# sourceMappingURL=Shin05.js.map