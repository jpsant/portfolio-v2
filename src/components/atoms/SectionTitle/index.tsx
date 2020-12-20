import './styles.scss';

type Props = {
  title: string;
  img: string;
  theme: string;
};

const SectionTitle = ({ title, img, theme }: Props) => {
  return (
    <div className={`sectionTitle ${theme}`}>
      <h1 className="sectionTitle-h1">{title}</h1>
      <img className="sectionTitle-img" src={img} alt={title + ' image'} />
    </div>
  );
};

export default SectionTitle;
