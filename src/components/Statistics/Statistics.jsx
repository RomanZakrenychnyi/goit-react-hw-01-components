import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      {title ? <h2 className={style.title}>{title}</h2> : ''}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={style.item} key={id}>
            <p className={style.label}>{label}</p>
            <p className={style.percentage}>{percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
