import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Package extends Component {
  render() {
    const { title, title_shade, qty_banner, qty_report, qty_users, qty_platforms, price } = this.props
    return (
      <div className="packageContainer">
        <div className={`text-center pkgTx ${title_shade}`}>{title}</div>
        <div className="text-center pkgBanner">{qty_banner} clients</div>
        <div className="text-center margin-top-10">
          <p>{qty_report} reports</p>
          <p>{qty_users} users</p>
          <p>{qty_platforms} platforms</p>
        </div>
        <div className="text-center pkgPricing margin-top-10"> 
          <span className="currencyText">${price}</span>monthly 
          <br/>
          <span className="shade-4"></span>
        </div>
        <div className="text-center margin-top-50">
          <a href="https://reports.douply.com/access/sign_up" id="btn-bora-bora" className="btn btn-signup-pkg shade-4">Sign up free</a>
        </div>
      </div>
    )
  }
}

Package.propTypes = {
  title: PropTypes.string.isRequired,
  title_shade: PropTypes.string.isRequired,
  qty_report: PropTypes.string.isRequired,
  qty_users: PropTypes.string.isRequired,
  qty_platforms: PropTypes.string.isRequired,
  qty_banner: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default Package