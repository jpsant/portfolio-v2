// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles.module.scss';

type Props = {
  reverse?: boolean;
  skillName: string;
  skillImg: string;
  skillTitle: string;
  skillDescription: string;
};

const HardSkillsCards = ({ skillName, skillImg, skillTitle, skillDescription, reverse }: Props) => {
  return (
    <div role="SkillCard" className={styles.hardSkillsCard} style={{ flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div className={styles.hardSkillsCard__imgCard} style={{ borderRadius: reverse ? '0px 10px 10px 0px' : '' }}>
        <h1>{skillName}</h1>
        <img src={skillImg} alt={`${skillName}-image`} />
      </div>
      <div className={styles.hardSkillsCard__textCard} style={{ borderRadius: reverse ? '10px 0px 0px 10px' : '' }}>
        <h2>{skillTitle}</h2>
        <h3>{skillDescription}</h3>
      </div>
    </div>
  );
};

export default HardSkillsCards;
