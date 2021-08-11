import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
const megido = [
    {
        clockType: ClockType.Shin,
        no: 13,
        id: 1,
        name: 'バフォメット',
        styleType: StyleType.Rush,
        classType: ClassType.Sniper,
        hp: 6898,
        offense: 1180,
        defense: 369,
        speed: 645,
        ability: { name: '魔術の心得', text: '50%の確率で、ターン終了時に自身にかかっている状態異常を治癒する' },
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
                name: '風の紡ぎ唄＋',
                type: SkillType.Skill,
                text: '自身の点穴を+15する。さらに、覚醒ゲージを+1する',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: '封邪のコントラクト＋',
                type: SkillType.AwakeningSkill,
                text: '敵単体に掛かっている強化を解除する。さらに2ターンの間、束縛状態にする',
                levels: [
                    {
                        level: 1,
                        magnification: 0,
                        hit: 0
                    }
                ]
            },
            {
                name: 'タブー・マジック＋',
                type: SkillType.Mysteries,
                text: '敵単体に攻撃力3倍のダメージ。さらに、自身の点穴を+25する',
                levels: [
                    {
                        level: 1,
                        magnification: 3,
                        hit: 1
                    }
                ],
                increment: 0.05
            }
        ]
    }
];
export default megido;
//# sourceMappingURL=Shin13.js.map