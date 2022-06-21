import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
// import * as Caver from 'caver-js'



let METABTN;


export default function Home() {
    const [accountAddress, setAccountAddress] = useState("")
    const [walletBalance, setWalletBalance] = useState("")


    // var accounts = await web3.eth.getAccounts();

    async function getAccount() {
        let accounts
        try {
            accounts = await window.klaytn.enable()
            // accounts = await window.ethereum.request({
            //     method: "eth_requestAccounts",
            // });

            const account = accounts[0];
            console.log(account)
            return account;

        } catch (error) {
            // toast.warn("Please Install Metamask Wallet Extension !", {
            //   position: toast.POSITION.TOP_CENTER
            // });
            // alert("Please Install Metamask Wallet Extension")
            // console.log(error)
            console.error(error)

        }

    }

    const disconnectMeta = () => {
        setAccountAddress('')
    }

    const connectButtonOnClick = () => {
        if (typeof window.klaytn !== 'undefined') {
            // Kaikas user detected. You can now use the provider.
            const provider = window['klaytn']
            getAccount().then((response) => {
                setAccountAddress(response);
            });

        }
        // if (typeof window !== "undefined'") {
        //     getAccount().then((response) => {
        //         setAccountAddress(response);
        //     });
        // }
    };
    const getBalance = async (balance1) => {
        // debugger
        const provider = new ethers.providers.Web3Provider(window.klaytn, "any");
        const accounts = await provider.send("eth_requestAccounts", []);

        const balance = await this.caver.klay.getBalance(accounts[0])
        console.log(balance, "-------------bal----------")
        let a = setWalletBalance(ethers.utils.formatEther(balance))
        console.log(a, "--------")

    }
    // const getBalance1 = async (bal1) =>{
    //     const account = provider.selectedAddress

    //     console.log(account,"----------account---------------")
    //     const balance = await this.caver.klay.getBalance(account)
    //     console.log(balance,"----------balance---------------")
    //     // let b = setWalletBalance(balance)
    //     // console.log(b,"--------------b--------------")

    // }
   

    useEffect(() => {
        getAccount().then(data => {
            if (data) {
                connectButtonOnClick()

            }
        })
        getBalance();
    }, []);

    if (!accountAddress) {
        METABTN = <button variant="contained" type="button" className="btn btn-success deploy-button" onClick={connectButtonOnClick}>
            {!!accountAddress ? `Connected:${accountAddress.substring(0, 5)}...` : "Connect Wallet"}

        </button>

    } else {
        METABTN = <button className="btn " style={{ background: "#ef4f5e", color: "#fff" }} type="button" onClick={disconnectMeta}>{` ${accountAddress.substring(0, 10)}...Disconnect`}</button>

    }
    return (
        <>
            <div className="container" style={{ marginTop: "30px" }}>
                <h1 className='font-weight-bold' style={{ color: "#91cb29" }}>Discord Bot Development</h1>
                <div className='row'>
                    <div className='col-md-12 mb-3 d-flex flex-wrap justify-content-end'>
                        {METABTN}

                    </div>
                    <div className='col-md-12 mb-3 d-flex flex-wrap justify-content-end font-weight-bold'>
                        <p style={{ background: "gray" }}>Balance : {walletBalance.substring(0, 5)}...</p>
                    </div>
                </div>
            </div>
        </>

    )


}

