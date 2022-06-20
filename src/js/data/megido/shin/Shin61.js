import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 61,
        id: 1,
        name: 'フィロタヌス',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 6858,
        offense: 764,
        defense: 658,
        speed: 448,
        ability: {
            name: '授業を続けます～',
            text: '毎ターン終了時、HPを15%回復する'
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
                name: '成長促進ヒント＋',
                type: SkillType.Skill,
                text: '味方単体のHPを20%回復させる。さらに2ターンの間、スキルを強化する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '対岸の火事＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0,
                        text: '	2ターンの間、敵横一列を炎上の地形にし、地形効果で1.25倍の継続ダメージを与える。さらに敵の攻撃力を25%低下させる【使用するごとにスキルLvが上昇する】'
                    },
                    {
                        level: 2,
                        magnification: 0,
                        hit: 0,
                        text: '2ターンの間、敵横一列を炎上の地形にし、地形効果で1.5倍の継続ダメージを与える。さらに敵の攻撃力を30%低下させる【使用するごとにスキルLvが上昇する】'
                    },
                    {
                        level: 3,
                        magnification: 0,
                        hit: 0,
                        text: '	2ターンの間、敵横一列を炎上の地形にし、地形効果で1.75倍の継続ダメージを与える。さらに敵の攻撃力を35%低下させる'
                    }
                ]
            },
            {
                name: 'マスオブフレイム＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Fire,
                text: '敵全体に攻撃力1.75倍の火ダメージ。さらに敵に掛かっている強化を解除し、炎上地形を狂炎地形にする	',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin61.js.map