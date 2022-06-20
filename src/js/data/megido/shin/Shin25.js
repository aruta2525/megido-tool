import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 25,
        id: 1,
        name: 'ニスロク',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 8840,
        offense: 1226,
        defense: 421,
        speed: 438,
        ability: { name: '飽くなき食への探求', text: '敵の数が少ないほど、攻撃力が上昇する（最大値20%）' },
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
                name: '壱、専心研磨＋',
                type: SkillType.Skill,
                text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
              【バレット効果】攻撃時、与えたダメージの30%を吸収＋攻撃時、ダメージを30%上昇`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '弐、味加減精査＋',
                type: SkillType.AwakeningSkill,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 2,
                        hit: 1,
                        text: '敵単体に攻撃力2倍のダメージさらに、自身のHPを30%回復する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 2.5,
                        hit: 1,
                        text: 'バレットを消費し、敵単体に攻撃力2.5倍のダメージさらに、自身のHPを30%回復する'
                    }
                ]
            },
            {
                name: '参、仕上之一撃＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 0,
                        label: '通常',
                        magnification: 2,
                        hit: 1,
                        text: `敵単体に攻撃力2倍のダメージ。さらに、バレットを2個作成する<br>
                  【バレット効果】攻撃時、与えたダメージの80%を吸収`
                    },
                    {
                        level: 1,
                        label: 'Bアーツ(1個)',
                        magnification: 3.25,
                        hit: 1,
                        text: `	バレットを1個消費し、敵単体に攻撃力3.25倍のダメージ。バレットを2個作成する<br>
                  【バレット効果】攻撃時、与えたダメージの80%を吸収`
                    },
                    {
                        level: 2,
                        label: 'Bアーツ(2個)',
                        magnification: 4.5,
                        hit: 1,
                        text: `バレットを同時に2個消費し、敵単体に攻撃力4.5倍のダメージ。バレットを2個作成する<br>
                  【バレット効果】攻撃時、与えたダメージの80%を吸収`
                    },
                    {
                        level: 3,
                        label: 'Bアーツ(3個)',
                        magnification: 5.75,
                        hit: 1,
                        text: `バレットを同時に3個消費し、敵単体に攻撃力5.75倍のダメージ。さらに、バレットを2個作成する<br>
                  【バレット効果】攻撃時、与えたダメージの80%を吸収`
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin25.js.map