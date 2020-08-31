import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tabalcohol from './tabs/Tabalcohol';
import Tabbaby from './tabs/Tabbaby';
import Taboffer from './tabs/Taboffer';
import Tabhand from './tabs/Tabhand';
import Taboffers from './tabs/Taboffers'


class Tabcomponets extends Component {
    render() {
        return (
            <div>
                  <div className="mb-5" style={{height:'100px', width:'100%', marginTop:'-10px !important'}}>
                <h1 className="pt-5 mb-5" style={{ color:'darkblue', textAlign:'center'}}>Kung Fu Kung Poa</h1>

              </div>
                <Tabs className="" style={{}}>
                    <TabList className="pb-5" style={{listStyleType:'none',display:'inline-block', fontSize:'1rem',display:'grid', gridTemplateColumns:'repeat(5,1fr)'}}>
                       <Tab>
                           <h3>Special Offer</h3>
                       </Tab>
                       
                        <Tab>
                       <h3>Baby</h3>
                        </Tab>
                      
                        <Tab>
                        <h3>Bakery</h3>
    
                        </Tab>

                        <Tab>
                        <h3>Diary</h3>
                            
                        </Tab>
                        <Tab><h3>handwash</h3></Tab>
                    </TabList>
                    <TabPanel> <Taboffers  /></TabPanel>
                
                    <TabPanel> <Tabalcohol  /></TabPanel>
                    <TabPanel>  <Tabbaby /></TabPanel>
                    <TabPanel><Taboffer /></TabPanel>
                    <TabPanel><Tabhand/></TabPanel>





                </Tabs>
                
            </div>
        )
    }
}

export default Tabcomponets
