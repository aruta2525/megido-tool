import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So38 = [
    {
        clockType: ClockType.So,
        no: 38,
        id: 1,
        name: 'ハルファス',
        styleType: StyleType.Burst,
        classType: ClassType.Fighter,
        hp: 6022,
        offense: 1400,
        defense: 643,
        speed: 269,
        ability: { name: '形見の大斧', text: 'HPが100%のとき、毎ターン終了時、覚醒ゲージが+2される' },
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
                name: '地裂斬＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        magnification: 1.05,
                        hit: 1,
                        text: '敵全体に攻撃力1.05倍のダメージ【使用するごとにスキルLvが上昇し、Lv4で地割れ付与】'
                    },
                    {
                        level: 2,
                        magnification: 1.15,
                        hit: 1,
                        text: '敵全体に攻撃力1.15倍のダメージ【使用するごとにスキルLvが上昇し、Lv4で地割れ付与】'
                    },
                    {
                        level: 3,
                        magnification: 1.25,
                        hit: 1,
                        text: '敵全体に攻撃力1.25倍のダメージ【使用するごとにスキルLvが上昇し、Lv4で地割れ付与】'
                    },
                    {
                        level: 4,
                        magnification: 1.35,
                        hit: 1,
                        text: '敵全体に攻撃力1.35倍のダメージ。2ターンの間、地割れの地形効果で0.75倍の継続ダメージを与え、防御力を低下させる'
                    }
                ]
            },
            {
                name: 'ギガントアクス＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.75倍の防御無視ダメージ。さらに自身への攻撃を1回無効化する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.75,
                        hit: 1
                    }
                ]
            },
            {
                name: 'アニマルボンバー＋',
                type: SkillType.Mysteries,
                text: '敵横一列に攻撃力1.75倍の2連続ダメージ。さらに味方前列にスキルフォトンを1つ追加する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.75,
                        hit: 2
                    }
                ],
                increment: 0.025
            }
        ]
    }
];
//# sourceMappingURL=So38.js.map