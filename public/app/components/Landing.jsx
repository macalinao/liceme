var React = require('react');

var Landing = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="col-md-12">
              <h1>It's {(new Date).getFullYear()}. Update your licenses.</h1>
              <p>LiceMe is the easiest way to update all of your license dates in one go.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>How does it work?</h2>
              <p>Using GitHub's API, we search your repository for a <code>LICENSE</code> or <code>LICENSE.txt</code> to fix.</p>
              <p>We then search your license file for incorrect dates, then replace them with a commit under your name.</p>
            </div>
            <div className="col-md-6">
              <h2>Is it safe?</h2>
              <p>Yes. We don't store your OAuth token; it's put in your cookies so we can't mess with your account. Also, it's open source: <a href="https://github.com/simplyianm/liceme">view it here on GitHub</a>.</p>
            </div>
          </div>
          <div className="row text-center footer">
            <div className="col-md-12">
              <p>Made by <a href="http://twitter.com/simplyianm" target="_blank">@simplyianm</a> | <a href="https://github.com/simplyianm/liceme" target="_blank">View on GitHub</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Landing;
