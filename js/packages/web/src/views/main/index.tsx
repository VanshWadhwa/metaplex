import { Layout } from 'antd';
import Sawo from "sawo"
import { useState , useEffect } from "react";
import React from 'react';
import  { Redirect } from 'react-router-dom'
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';
import { useHistory } from 'react-router-dom';
// import { AuctionListView } from './auctionList';
// import { SetupView } from './setup';

export const MainView = () => {

    let history = useHistory();

    const [isLogin , setIsLogin] = useState(false);

    useEffect(()=>{

        var config = {
            containerID : "sawo-container",  
            identifierType : "email",
            apiKey : "415f91c8-7810-41f1-956c-ccbb00c03a4c", 
            onSuccess : (payload)=>{

                console.log(payload)
                console.log('Logged in : ')

                // return <Redirect to='/metaplex'  />
                history.push("/metaplex");


            }
        };

            
        let sawo = new Sawo(config)
        sawo.showForm()

    } , [])
 
  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      {/* {showAuctions ? <AuctionListView /> : <SetupView />} */}
        <h2>    Welcome to SolWins's NFT Marketplace</h2>
        <h1>Sign in with SAWO Labs</h1>
        {/* <h3> User Loged in : {{isLogin}}</h3> */}

        <div id="sawo-container" style={{height:"300px", width:"400px"}}></div>

    </Layout>
  );
};
