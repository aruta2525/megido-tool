import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 16,
        id: 1,
        name: 'タナトス',
        styleType: StyleType.Counter,
        classType: ClassType.Trooper,
        hp: 7120,
        offense: 1215,
        defense: 424,
        speed: 458,
        ability: {
            name: '死への関心',
            text: 'HP50%以上の対象に1.5倍のダメージ'
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
                name: 'ネクロエッジ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 0.7,
                        hit: 2,
                        text: '敵横一列に攻撃力0.7倍の2連続ダメージ。さらに味方編成をネクロ状態にする【味方が戦闘不能になるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 0.9,
                        hit: 2,
                        text: '敵横一列に攻撃力0.9倍の2連続ダメージ。さらに味方編成をネクロ状態にする【味方が戦闘不能になるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 1.1,
                        hit: 2,
                        text: '敵横一列に攻撃力1.1倍の2連続ダメージ。さらに味方編成をネクロ状態にする【味方が戦闘不能になるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 1.3,
                        hit: 2,
                        text: '敵横一列に攻撃力1.3倍の2連続ダメージ。さらに味方編成をネクロ状態にする'
                    }
                ]
            },
            {
                name: 'ソウルディーリング＋',
                type: SkillType.AwakeningSkill,
                text: `戦闘不能の味方単体を、最大HPの20%で蘇生させる。さらにデスギフトを付与する<br>
              【デスギフト効果】戦闘不能時、敵全体に攻撃力1.75倍のダメージ。さらに、敵を煉獄の炎状態にする（永続）`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'トーデストリープ＋',
                type: SkillType.Mysteries,
                text: `敵単体に攻撃力5.25倍のダメージ。さらに、味方全体にデスギフトを付与する<br>
              【デスギフト効果】戦闘不能時、自身以外の味方にスキルフォトンを1つ追加し、2ターンの間、スキルを強化する`,
                levels: [
                    {
                        level: 1,
                        magnification: 5.25,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin16.js.map