import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 14,
        id: 1,
        name: 'サラ',
        styleType: StyleType.Rush,
        classType: ClassType.Fighter,
        hp: 9190,
        offense: 638,
        defense: 615,
        speed: 503,
        ability: { name: 'ここどこだろ～？', text: '毎ターン終了時に、自身の点穴を+5する' },
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
                name: '急に風が…！＋',
                type: SkillType.Skill,
                text: 'ラッシュの味方単体の点穴を+15する。さらに2ターンの間、味方単体の防御力を10%上昇させる',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '髪が傷んでるよ～＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに与えたダメージの30%を吸収する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: '牧歌の癒光＋',
                type: SkillType.Mysteries,
                text: '味方全体のHPを30%回復させる。さらに2ターンの間、ダメージを15%軽減する',
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
//# sourceMappingURL=Shin14.js.map