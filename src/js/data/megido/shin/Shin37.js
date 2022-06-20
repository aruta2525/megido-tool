import { SkillType, Attribute, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 37,
        id: 1,
        name: 'ネビロス',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 7593,
        offense: 1154,
        defense: 438,
        speed: 480,
        ability: {
            name: '帯電弾倉',
            text: '	バレット消費数が多いほど、雷ダメージ上昇(最大50%)'
        },
        skills: [
            {
                name: 'アタック',
                type: SkillType.Attack,
                levels: [
                    {
                        level: 1,
                        magnification: 0.75,
                        hit: 2
                    }
                ]
            },
            {
                name: 'ハンドロード＋',
                type: SkillType.Skill,
                text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
              【バレット効果】80%の確率で2ターンの間、めまい＋物体系の対象に2倍のダメージ`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'クイックドロウ＋	',
                type: SkillType.AwakeningSkill,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.75,
                        hit: 1,
                        text: '敵単体に攻撃力1.75倍の雷ダメージ。さらに、対象の素早さが自身より高い場合、ダメージが50%上昇する'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ',
                        magnification: 2.25,
                        hit: 1,
                        text: 'バレットを1個消費し、敵単体に攻撃力2.25倍の雷ダメージ。さらに、対象の素早さが自身より高い場合、ダメージが50%上昇する'
                    }
                ]
            },
            {
                name: 'バスタートニトルス＋',
                type: SkillType.Mysteries,
                attribute: Attribute.Thunder,
                levels: [
                    {
                        level: 1,
                        label: '通常',
                        magnification: 1.5,
                        hit: 2,
                        text: `	敵単体に攻撃力1.5倍の2連続雷ダメージ。さらにバレットを2個作成する<br>
                  【バレット効果】2ターンの間、受ける雷ダメージを40%上昇＋攻撃時、単体ダメージを15%上昇`
                    },
                    {
                        level: 2,
                        label: 'Bアーツ(1個)',
                        magnification: 1.65,
                        hit: 2,
                        text: `	バレットを1個消費し、敵単体に攻撃力1.65倍の2連続雷ダメージ。さらにバレットを2個作成する<br>
                  【バレット効果】2ターンの間、受ける雷ダメージを40%上昇＋攻撃時、単体ダメージを15%上昇`
                    },
                    {
                        level: 3,
                        label: 'Bアーツ(2個)',
                        magnification: 1.8,
                        hit: 2,
                        text: `バレットを同時に2個消費し、敵単体に攻撃力1.8倍の2連続雷ダメージ。さらにバレットを2個作成する<br>
                  【バレット効果】2ターンの間、受ける雷ダメージを40%上昇＋攻撃時、単体ダメージを15%上昇`
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin37.js.map