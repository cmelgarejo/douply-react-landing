import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Feature extends Component {
  render() {
    const { title, content, feature_image, feature_image_alt } = this.props
    return (
      <div className="feature">
        <div className="circle margin-auto">
          <div className="icon"> <img src={feature_image} alt={feature_image_alt} height="84"/></div>
        </div>
        <h4 className="shade-darkblue">{title}</h4>
        <p>{content}</p>
      </div>
    )
  }
}
Feature.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  feature_image: PropTypes.string.isRequired,
  feature_image_alt: PropTypes.string.isRequired,
}
export default Feature