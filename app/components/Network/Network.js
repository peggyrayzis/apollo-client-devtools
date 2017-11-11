import React from 'react';

export default class Network extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    chrome.runtime.sendMessage({
      type: 'OPEN_TAB',
      tabId: chrome.devtools.inspectedWindow.tabId,
      activeTab: 'network',
    });

    if (ga) ga('send', 'pageview', 'Network');
  }

  render() {
    console.log(this.props);
    return (
      <div className="network body">{JSON.stringify(this.props.data)}</div>
    );
  }
}
