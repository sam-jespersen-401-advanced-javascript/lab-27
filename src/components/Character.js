import React, { Component } from 'react';
import styles from './Character.css';
import PropTypes from 'prop-types';

export default class Character extends Component {

  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
  }

  render() {
    const { img, name, species, quote } = this.props;

    return <>
      <div className={styles.Character}>
        <div style={{ backgroundImage: `url('${img}'` }} className={styles.imgContainer}>
          <span className={styles.label}>{name}</span>
        </div>
        <div className={styles.species}>
          Species: {species}
        </div>
        <div className={styles.quote}>
          {quote}
        </div>
      </div>
    </>;

  }
}
