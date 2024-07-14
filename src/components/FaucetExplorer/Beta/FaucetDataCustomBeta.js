import React from 'react';
import axios from 'axios';

export default class transactionList extends React.Component {
  state = {
    transactions: [],
    cycle: [],
    cycleFrom: [],
    cycleTo: [],
  }

  componentDidMount() {
    axios.get(`https://explorer-sphinx.shardeum.org/api/cycleinfo?count=1`).then(res => {
      const cycle = res.data;
      this.setState({cycle});
      const currentCycle = this.state.cycle.cycles[0].counter;
      const cycleFrom = Math.max(0,currentCycle - this.props.timestampFrom);
      const cycleTo = currentCycle - this.props.timestampTo;
      this.setState({cycleFrom});
      this.setState({cycleTo});
      axios.get(`https://explorer-sphinx.shardeum.org/api/transaction?address=0x1f1545eb7ee5c3c1c4784ee9dde5d26a9f76f77c&startCycle=${cycleFrom}&endCycle=${cycleTo}`).then(res => {
        const transactions = res.data.totalTransactions;
        this.setState({transactions});
      })
    })
  }

  componentWillReceiveProps() {
    axios.get(`https://explorer-sphinx.shardeum.org/api/cycleinfo?count=1`).then(res => {
      const cycle = res.data;
      this.setState({cycle});
      const currentCycle = this.state.cycle.cycles[0].counter;
      const cycleFrom = Math.max(0,currentCycle - this.props.timestampFrom);
      const cycleTo = currentCycle - this.props.timestampTo;
      this.setState({cycleFrom});
      this.setState({cycleTo});
      axios.get(`https://explorer-sphinx.shardeum.org/api/transaction?address=0x1f1545eb7ee5c3c1c4784ee9dde5d26a9f76f77c&startCycle=${cycleFrom}&endCycle=${cycleTo}`).then(res => {
        const transactions = res.data.totalTransactions;
        this.setState({transactions});
      })
    })
  }

  render() {
    if(this.state.transactions === undefined){
    return (<div>Faucet Claims: 0 </div>)
  }
  else {
    return (<div>
      <p>Faucet Claims: {this.state.transactions}</p>
      <p>SHM Issued: {this.state.transactions *15} (15 SHM per claim)</p>
      <p>Cycle Range: {this.state.cycleFrom} - {this.state.cycleTo}  </p>

    </div>)
  }
}
}
