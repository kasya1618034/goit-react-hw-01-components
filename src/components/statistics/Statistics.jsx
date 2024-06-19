import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => (
  <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
        <span className="label">{ stats.label}</span>
        <span className="percentage">{ stats.percentage }</span>
    </li>
  </ul>
</section>
)

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}
