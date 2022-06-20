import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 28,
        id: 1,
        name: 'アザゼル',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 7098,
        offense: 1222,
        defense: 409,
        speed: 497,
        ability: { name: '翳なる者', text: '25%の確率で、受ける攻撃をMISSにする（奥義、秘奥義、オーブによる攻撃を除く）' },
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
                name: '暗器投げ＋',
                type: SkillType.Skill,
                levels: [
                    {
                        level: 0,
                        label: '通常',
                        magnification: 1.25,
                        hit: 1,
                        text: '敵単体に攻撃力1.25倍のダメージ'
                    },
                    {
                        level: 1,
                        label: 'Bアーツ(1個)',
                        magnification: 1.5,
                        hit: 1,
                        text: '	バレットを消費し、敵単体に攻撃力1.5倍のダメージ'
                    },
                    {
                        level: 2,
                        label: 'Bアーツ(2個)',
                        magnification: 1.75,
                        hit: 1,
                        text: 'バレットを同時に2個消費し、敵単体に攻撃力1.75倍のダメージ'
                    },
                    {
                        level: 3,
                        label: 'Bアーツ(3個)',
                        magnification: 2.25,
                        hit: 1,
                        text: 'バレットを同時に3個消費し、敵単体に攻撃力2.25倍のダメージ'
                    }
                ]
            },
            {
                name: '暗器調整＋',
                type: SkillType.AwakeningSkill,
                text: `味方編成をバレットアーツ状態にし、バレットを2個作成する<br>
              【バレット効果】攻撃時、60%の確率でフォトンを1個破壊＋2ターンの間、束縛`,
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '個にして全＋',
                type: SkillType.Mysteries,
                levels: [
                    {
                        level: 1,
                        magnification: 0.8,
                        hit: 6,
                        text: '敵単体に攻撃力0.8倍の6連続ダメージ【自身がバレット2個消費ごとにLv上昇】'
                    },
                    {
                        level: 2,
                        magnification: 1.2,
                        hit: 6,
                        text: `敵単体に攻撃力1.2倍の6連続ダメージ。さらに対象のフォトンが0のときダメージが1.3倍になる<br>
                  使用後にスキルLvがリセット【自身がバレット2個消費ごとにLv上昇】`
                    },
                    {
                        level: 3,
                        magnification: 1.6,
                        hit: 6,
                        text: `	敵単体に攻撃力1.6倍の6連続ダメージ。さらに対象のフォトンが0のときダメージが1.4倍になる<br>
                  使用後にスキルLvがリセット【自身がバレット2個消費ごとにLv上昇】`
                    },
                    {
                        level: 4,
                        magnification: 2,
                        hit: 6,
                        text: `敵単体に攻撃力2倍の6連続ダメージ。さらに対象のフォトンが0のときダメージが1.5倍になる<br>
                  使用後にスキルLvがリセット`
                    }
                ],
                increment: 0.00833
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin28.js.map