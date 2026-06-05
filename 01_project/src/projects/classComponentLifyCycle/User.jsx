import { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    console.log("1 constructor calling");

    this.state = {
      count: 0,
      lifecycleLogs: ["constructor: state initialized"]
    };
  }

  componentDidMount() {
    console.log("3 DidMount method");

    this.addLifecycleLog("componentDidMount: component added to UI");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DidUpdate method");

    if (prevState.count !== this.state.count) {
      this.addLifecycleLog(
        `componentDidUpdate: count changed ${prevState.count} -> ${this.state.count}`
      );
    }
  }

  componentWillUnmount() {
    console.log("WillUnmount method");
  }

  addLifecycleLog = (message) => {
    this.setState((currentState) => ({
      lifecycleLogs: [message, ...currentState.lifecycleLogs].slice(0, 5)
    }));
  };

  handleIncrease = () => {
    this.setState((currentState) => ({
      count: currentState.count + 1
    }));
  };

  render() {
    console.log("2 Render method");

    return (
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Class Component
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">
              User Counter
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Toggle this component to see mount and unmount. Increase the
              count to see update.
            </p>
          </div>

          <div className="rounded-lg bg-slate-50 px-5 py-4 text-center">
            <p className="text-sm font-semibold text-slate-600">Count</p>
            <p className="text-3xl font-bold text-slate-950">
              {this.state.count}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="mt-5 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          onClick={this.handleIncrease}
        >
          Increase
        </button>

        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="font-semibold text-slate-950">Lifecycle Logs</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
            {this.state.lifecycleLogs.map((log) => (
              <li key={log} className="rounded bg-white px-3 py-2">
                {log}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default User;
