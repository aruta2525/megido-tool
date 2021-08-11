import { SkillType, ClassType, StyleType, ClockType } from '../../../enum/Megido';
export const So53 = [
    {
        clockType: ClockType.So,
        no: 53,
        id: 1,
        name: 'カイム',
        styleType: StyleType.Counter,
        classType: ClassType.Sniper,
        hp: 9032,
        offense: 615,
        defense: 472,
        speed: 636,
        ability: { name: '傲岸不遜', text: '受けるダメージを15%軽減する' },
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
                name: 'マインドクラッシュ+',
                type: SkillType.Skill,
                text: '敵単体に1.25倍のダメージ。さらに80%の確率で、覚醒ゲージを-1する',
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: '【専】マインドクラッシュ+',
                type: SkillType.Skill,
                text: `敵単体に攻撃力1.25倍のダメージ。さらに覚醒ゲージを-1し、自身をアタックブレイク状態にする<br>
              【アタックブレイク】80%の確率で、1ターンの間、敵単体を封印状態にする`,
                levels: [
                    {
                        level: 1,
                        magnification: 1.25,
                        hit: 1
                    }
                ]
            },
            {
                name: 'オブリビオン+',
                type: SkillType.AwakeningSkill,
                text: '敵単体に攻撃力2.5倍のダメージ。さらに積まれているフォトンを1つ破壊する',
                levels: [
                    {
                        level: 1,
                        magnification: 2.5,
                        hit: 1
                    }
                ]
            },
            {
                name: 'トリックスター+',
                type: SkillType.Mysteries,
                text: '80%の確率で、2ターンの間、敵全体に積めるフォトンの量を-2する',
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
//# sourceMappingURL=So53.js.map