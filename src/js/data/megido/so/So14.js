import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So14 = [
    {
        clockType: ClockType.So,
        no: 14,
        id: 1,
        name: 'レラジェ',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 5980,
        offense: 1386,
        defense: 424,
        speed: 475,
        ability: { name: 'ビーストハンター', text: '獣系のモンスターに2倍のダメージ' },
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
                name: 'シャープショット＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ。さらに60%の確率で、自身にアタックフォトンを1つ追加する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 1.25,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力1.25倍のダメージ。さらに80%の確率で自身にアタックフォトンを1つ追加する'
                    }
                ]
            },
            {
                name: 'クランブルアロー＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージ。さらに積まれているフォトンを1つ破壊する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 2.5,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力2.5倍のダメージ。さらに積まれているフォトンを1つ破壊する'
                    }
                ]
            },
            {
                name: 'パワースナイプ＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 2.75,
                        hit: 1,
                        text: '敵単体に攻撃力2.75倍のダメージ。さらに55%の確率で、敵を即死させる【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 3.75,
                        hit: 1,
                        text: '敵単体に攻撃力3.75倍のダメージ。さらに55%の確率で、敵を即死させる【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 3,
                        magnification: 4.75,
                        hit: 1,
                        text: '敵単体に攻撃力4.75倍のダメージ。さらに55%の確率で、敵を即死させる【攻撃を2回受けるたびにスキルLv上昇】'
                    },
                    {
                        level: 4,
                        magnification: 5.75,
                        hit: 1,
                        text: '敵単体に攻撃力5.75倍のダメージ。さらに55%の確率で、敵を即死させる'
                    }
                ],
                increment: 0.05
            }
        ]
    },
    {
        clockType: ClockType.So,
        no: 14,
        id: 2,
        name: 'レラジェ',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 6116,
        offense: 1210,
        defense: 644,
        speed: 430,
        ability: { name: '手堅い一手', text: '自身の点穴が69以下のとき、攻撃時に点穴の効果発動と消費がされない' },
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
                name: '凛然の一矢＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.5,
                        hit: 1,
                        text: '敵単体に攻撃力1.5倍のダメージ。さらに敵が悪魔のときダメージが2倍になる'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 1.5,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力1.5倍のダメージ。敵が悪魔のときダメージが2倍になる。さらに、自身の点穴を+20する'
                    }
                ]
            },
            {
                name: '不失正鵠之舞＋',
                type: SkillType.AwakeningSkill,
                text: '自身の点穴を+25する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'この矢外させ給ふな＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージ。さらに自身の点穴を+20する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 2,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力2倍のダメージ。さらに自身の点穴を+35する'
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
/*
 */
//# sourceMappingURL=So14.js.map