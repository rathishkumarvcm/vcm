import React from 'react';
import {shallow} from 'enzyme';
import axios from 'axios';
import CompareFunds from '../App/Screens/CompareFunds/CompareFundsComponent';
import mockAPI from "./mockAPI";
import Config from '../App/Shared/Network/Config';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Compare Funds',()=>{

    //  Render using shallow - shallow not includes child component
    test('Match Snapshot',()=>{
      //  const props = {};
        const getFundDetailsData = jest.fn();
        const component = shallow(<CompareFunds getFundDetailsData={getFundDetailsData} navigation={navigation} />);  
       // const component = shallow(<CompareFunds {...props} getFundDetailsData={getFundDetailsData} navigation={navigation} />);  

        component.render();
        expect(component).toMatchSnapshot();
    });

    //  mocked API call 
    test('mock API', async () => { 
        const mockedResponse = [
            {
                "nav": {
                    "asOfDate": "08/05/2019",
                    "value": "41.14"
                },
                "fundName": "USAA Intermediate-Term Bond Adviser",
                "morningstarRating": {
                    "asOfDate": "06/30/2019",
                    "value": "4"
                },
                "monthlyInvestment": "0",
                "symbol": "UITBX",
                "initialInvestment": "3000",
                "performanceDetails": {
                    "totalReturns": {
                        "monthly": {
                            "5year": "10.50%",
                            "1year": "-1.20%",
                            "sinceInception": "8.8%",
                            "10year": "-12.90%",
                            "inceptionDate": "01/01/2001",
                            "ytd": "15.00%",
                            "asOfDate": "11/30/2019"
                        },
                        "quarterly": {
                            "5year": "10.50%",
                            "1year": "-1.20%",
                            "sinceInception": "8.8%",
                            "10year": "-12.90%",
                            "inceptionDate": "01/01/2001",
                            "ytd": "15.00%",
                            "asOfDate": "11/30/2019"
                        }
                    }
                },
                "morningstarCategory": "Large Growth",
                "moreInfoPDFs": [
                    {
                        "s3Loc": "dummy",
                        "value": "Full Fund Detail and Important Disclosures (PDF)",
                        "key": "fundDetailDisclosures"
                    },
                    {
                        "s3Loc": "dummy",
                        "value": "Prospectus (PDF)",
                        "key": "prospectus"
                    }
                ],
                "fundType": "individual",
                "fundNumber": 330,
                "expenseRatio": {
                    "expenseRatio_AR": "1.00",
                    "expenseRatio_BR": "1.00",
                    "expenseRatio": "1.00"
                },
                "risk": "High",
                "SecYields": {
                    "SecYields_7": "1.00",
                    "SecYields_30": "1.00",
                    "SecYields_WoWaivers": "1.00"
                },
                "fundDescription": "USAA Intermediate-Term Bond Adviser",
                "categoryFunds": "1234"
            },
            {
                "nav": {
                    "asOfDate": "08/05/2019",
                    "value": "30.56"
                },
                "fundName": "USAA Science & Technology Adviser",
                "morningstarRating": {
                    "asOfDate": "06/30/2019",
                    "value": "5"
                },
                "monthlyInvestment": "0",
                "symbol": "USTCX",
                "initialInvestment": "3000",
                "performanceDetails": {
                    "totalReturns": {
                        "monthly": {
                            "5year": "11.50%",
                            "1year": "5.67%",
                            "sinceInception": "6.9%",
                            "10year": "9.35%",
                            "inceptionDate": "01/01/2001",
                            "ytd": "12.00%",
                            "asOfDate": "11/30/2019"
                        },
                        "quarterly": {
                            "5year": "11.50%",
                            "1year": "5.67%",
                            "sinceInception": "6.9%",
                            "10year": "9.35%",
                            "inceptionDate": "01/01/2001",
                            "ytd": "12.00%",
                            "asOfDate": "11/30/2019"
                        }
                    }
                },
                "morningstarCategory": "Large Growth",
                "moreInfoPDFs": [
                    {
                        "s3Loc": "dummy",
                        "value": "Full Fund Detail and Important Disclosures (PDF)",
                        "key": "fundDetailDisclosures"
                    },
                    {
                        "s3Loc": "dummy",
                        "value": "Prospectus (PDF)",
                        "key": "prospectus"
                    }
                ],
                "fundType": "individual",
                "fundNumber": 331,
                "expenseRatio": {
                    "expenseRatio_AR": "1.00",
                    "expenseRatio_Br": "1.00",
                    "expenseRatio": "1.00"
                },
                "risk": "High",
                "SecYields": {
                    "SecYields_7": "1.00",
                    "SecYields_30": "1.00",
                    "SecYields_WoWaivers": "1.00"
                },
                "fundDescription": "USAA Science & Technology Adviser",
                "categoryFunds": "567"
            }
        ];

        axios.post = jest.fn().mockResolvedValue(mockedResponse);
        const actualValue = await mockAPI.callApi('compareFunds');
        expect(actualValue).toEqual(mockedResponse);       
        expect(axios.post).toBeCalledWith(Config.MOCKTEST.getfunddetails+Config.getfunddetails);  
    });

});