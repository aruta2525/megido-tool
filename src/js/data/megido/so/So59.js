import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So59 = [
    {
        clockType: ClockType.So,
        no: 59,
        id: 1,
        name: 'オリアス',
        styleType: StyleType.Burst,
        classType: ClassType.Sniper,
        hp: 5947,
        offense: 1191,
        defense: 278,
        speed: 711,
        ability: { name: '不死の予言者', text: '次に出現するフォトンが亀裂の色でわかるようになる' },
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
                name: '変化の魔法＋',
                type: SkillType.Skill,
                text: '2ターンの間、60%の確率で、敵をねずみにする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '冬の大三角＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体に攻撃力1.35倍のダメージ。2ターンの間、氷結の地形効果で0.75倍の継続ダメージを与え、攻撃力を低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.35,
                        hit: 1
                    }
                ]
            },
            {
                name: 'ヘイルキャノン＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力4.25倍のダメージ。さらに2ターンの間、敵を凍結状態にする',
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
    },
    {
        clockType: ClockType.So,
        no: 59,
        id: 2,
        name: 'オリアス',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 7486,
        offense: 750,
        defense: 610,
        speed: 502,
        ability: { name: '雪華の予言者', text: '次に出現するフォトンが亀裂の色でわかるようになる' },
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
                name: 'ブリザードコフィン＋',
                type: SkillType.Skill,
                text: '敵単体に攻撃力1.25倍のダメージ。2ターンの間、氷結の地形効果で0.75倍の継続ダメージを与え、攻撃力を低下させる',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'アイオブプリザーブ＋',
                type: SkillType.AwakeningSkill,
                text: '敵全体を2ターンの間、それぞれ40%の確率で、めまい、呪い状態にする。さらに2ターン繰り返すリザーブ状態になる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '占星なる聖域＋',
                type: SkillType.Mysteries,
                text: '3ターンの間、味方全体の状態異常命中率を30%上昇させ、防御力を40%上昇させる',
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
//# sourceMappingURL=So59.js.map