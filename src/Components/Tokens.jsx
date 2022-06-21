import React, { useState } from "react";
import "../css/Tokens.css"

export default function Tokens() {
    const [user, setUser] = useState({
        description: '',
        chaintype: '',
        address: '',
        minamount: '',
        maxamount: ''
    })
    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;

        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function resetform(e) {
        document.getElementById("newForm").reset();
        e.preventDefault();

     }




    const submit = async e => {
        debugger
        e.preventDefault();
        console.log("description:", user.description, "chaintype:", user.chaintype, "address:", user.address, "minamount:", user.minamount, "maxamount:", user.maxamount)
        let data = user


    }


    return (
        <>
            <h1>Token DETAILS</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-lg-6 col-md-6 col-sm-12">

                                <form className="token-main" id="newForm">

                                    <h3 className="font-weight-bold" style={{color:"#faa340"}}>Nft-Role</h3>

                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" className="form-control"
                                            placeholder="Description"
                                            name='description' onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="chaintype">Chain Type</label>

                                        <select className="form-control" onChange={handleChange} name="chaintype" id="chaintype">
                                            <option value="Select" selected disabled>All chains</option>
                                            <option value="Mainnet">Mainnet</option>
                                            <option value="Rinkeby">Rinkeby</option>
                                            <option value="Polygon">Polygon</option>
                                            <option value="BSC">BSC</option>
                                            <option value="xDAI">xDAI</option>
                                            <option value="Solana">Solana</option>
                                            <option value="Arbitrum">Arbitrum</option>
                                            <option value="Avalanche">Avalanche</option>
                                            <option value="Nifty">Nifty</option>
                                            <option value="Palm">Palm</option>
                                            <option value="Polkadot">Polkadot</option>
                                            <option value="Tezos">Tezos</option>
                                            

                                        </select>
                                        {/* <label>Chain Type</label>
                                        <input type="text" className="form-control"
                                            placeholder="Chain Type"
                                            name="chaintype"
                                            onChange={handleChange}
                                        /> */}

                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control"
                                            placeholder="Address"
                                            name="address"
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <p>Balance</p>

                                    <div className="balance-details">

                                        <div className="form-group">
                                            <label>Min Amount</label>
                                            <input type="number" min={0}  className="form-control"
                                                placeholder="Enter Min Amount of Tokens"
                                                name="minamount"
                                                onChange={handleChange}
                                                
                                            />

                                        </div>

                                        <div className="form-group">
                                            <label>Max Amount of Token (Optional)</label>
                                            <input type="number" min={0} className="form-control"
                                                placeholder="Enter Max Amount of Tokens"
                                                name="maxamount"
                                                onChange={handleChange}
                                            />

                                        </div>

                                    </div>
                                    <div className="token-button ">
                                        <div className="form-group col-3">
                                            <button className="btn btn-outline-warning btn-lg btn-block" onClick={resetform} >Reset</button>

                                        </div>
                                        <div className="form-group col-9">
                                            <button type="submit" style={{backgroundColor:"#faa340"}} className="btn btn-lg btn-block" onClick={submit}>Save</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}