import styles from './styles.module.scss';

type Props = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const SoftSkillsCards = ({ title, description, image, alt }: Props) => {
  return (
    <div className={styles.softSkillsCards} role="SkillCard">
      <img src={image} alt={alt} />
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
};

export default SoftSkillsCards;
