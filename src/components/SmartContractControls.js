import React from "react";
import { Flex, Box, Text, Button, Input } from "rimble-ui";
import Web3 from 'web3';

// Address of the deployed smart contract (from etherscan)
const contractAddress = '0xa4ACF3C5669b22C28269799Aae62f9f129a3C47c';

// Copied from remix ide
const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "depositAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "buyerddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "targetToken",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "exchangeStarted",
        "type": "bool"
      }
    ],
    "name": "LogExchangeEth",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "orderId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "return1",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amountToken",
        "type": "uint256"
      }
    ],
    "name": "exchangeEth",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      }
    ],
    "name": "exchangeStarted",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

class SmartContractControls extends React.Component {
  state = {
    value: 0,
    needsUpdate: false
  };

  constructor(props) {
    super(props);
    this.state.eth = this.props.accountBalance;
    this.state.jal = 0;
    this.state.price = 1893.92351
  }

  // gets the number stored in smart contract storage
  getNumber = ({ ...props }) => {
    try {
      this.props.contract.methods
        .exchangeEth()
        .call()
        .then(value => {
          value = Number(value.toString());
          this.setState({ value, needsUpdate: false });
          console.log("Updated number");
        })
        .catch(error => {
          console.log(error);
          this.setState({ error });
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  // Check for updates to the transactions collection
  processTransactionUpdates = prevProps => {
    Object.keys(this.props.transactions).map(key => {
      let tx = this.props.transactions[key];
      console.log("Needs updated number: ", tx.status, this.state.needsUpdate);
      // Will not work if there is a tx started before a prior tx has success -- first will flip needsUpdate to false
      if (tx.status === "success" && this.state.needsUpdate) {
        console.log("Getting updated number.");
        this.getNumber();
        return false;
      } else {
        console.log("Not updating number.");
        return false;
      }
    });
  };

  incrementCounter = () => {
    let needsUpdate = true;
    this.props.contractMethodSendWrapper(
      "incrementCounter",
      (txStatus, transaction) => {
        console.log("incrementCounter callback: ", txStatus, transaction);
        if (
          txStatus === "confirmation" &&
          transaction.status === "success" &&
          needsUpdate
        ) {
          this.getNumber();
          needsUpdate = false;
        }
      }
    );
  };

  decrementCounter = () => {
    this.props.contractMethodSendWrapper("decrementCounter");
  };

  componentDidMount() {
    // Init the contract after the web3 provider has been determined
    // this.props.initContract(contractAddress, contractAbi).then(() => {
    //   // Can finally interact with contract
    //   this.getNumber();
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    // this.processTransactionUpdates(prevProps);
  }

  handleEthInput = (value) => {
    this.state.eth = value;
    this.state.jal = this.state.price * value;
    console.log("this.state.jal", this.state.jal)
    console.log("this.state.eth", this.state.eth)
  }

  handleJalInput = (value) => {
    console.log(this.state)
    this.state.jal = value;
    this.state.eth = value / this.state.price ;
    console.log("this.state.jal", this.state.jal)
    console.log("this.state.eth", this.state.eth)
  }

  render() {
    return (
      <Box>

        <Flex flexDirection={'row'}>
          <Text fontWeight={3}>
            ETH:
          </Text>
          {this.props.accountBalance}
          <Input
            type="text"
            required={true}
            value={213}
            onChange={e => this.handleEthInput(e.target.value)}
          />
        </Flex>
        <Flex flexDirection={'row'}>
          <Text fontWeight={3}>
            Price: {this.state.price}
          </Text>
       
        </Flex>
        <Flex flexDirection={'row'}>
          <Text fontWeight={3}>
            JAL:
          </Text>
          <Input type="text"
            required={true}
            value={this.state.jal}
            onChange={e => this.handleJalInput(e.target.value)}
          />
       
        </Flex>
        &nbsp;
        <Flex flexDirection={'row'}>
          <Button size="large" icon="Send" variant="danger" onClick={this.handleConnectAccount} width={1}>
            Swap
          </Button>
        </Flex>
      </Box>
    );
  }
}

export default SmartContractControls;
