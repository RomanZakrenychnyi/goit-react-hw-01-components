import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : ''}

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="item column" key={id}>
            <p className="label">{label}</p>
            <p className="percentage">{percentage}%</p>
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
