import React, { Component } from 'react';
import { View , StyleSheet} from 'react-native';
import { PieChart, BarChart, Grid } from 'react-native-svg-charts';
import { scaledHeight } from '../../Utils/Resolution';
import {GButtonComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';

const data1 = [ 14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8 ]
            .map((value) => ({ value }));
        const data2 = [ 24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84 ]
            .map((value) => ({ value }));
1;
        const barData = [
            {
                data: data1,
                svg: {
                    fill: 'rgb(134, 65, 244)',
                },
            },
            {
                data: data2,
            },
        ];
    const styles=StyleSheet.create({
        buttonStyle:{
            height:'15%',
            width:'50%',
            justifyContent: "center",
            alignItems:'center',
            borderRadius:1,
            backgroundColor:"#06748C",
            marginTop:'2%',
            alignSelf:'center',
            marginBottom:'5%'
        },
        buttonTextStyle:{
            fontSize: scaledHeight(14),
            fontWeight: "bold",
            lineHeight:scaledHeight(20),
        },
    });

export default class ChartComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            barChart : true
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
 
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
 
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);
 
        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }));
 
        return (
            !this.state.barChart ?
            <View>
                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Back"}
                    onPress={this.goBack}
                />
                <GButtonComponent buttonText={"View in Bar Chart"} onPress={() =>this.setState({ barChart : !this.state.barChart })} buttonStyle={styles.buttonStyle} />
                
                <PieChart
                style={{ height: 200 }}
                data={pieData}
                />
            </View>
            :
            <View>
            <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Back"}
                onPress={this.goBack}
            />

                <GButtonComponent buttonText={"View in Pie Chart"}
                 onPress={() => this.setState({ barChart : !this.state.barChart})} 
                 buttonStyle={styles.buttonStyle}
                />
                <BarChart
                style={{ height: 200 }}
                data={barData}
                yAccessor={({ item }) => item.value}
                svg={{
                    fill: 'green',
                }}
                contentInset={{ top: 30, bottom: 30 }}
                {...this.props}
                >
            <Grid />
                </BarChart>
            </View>
        );
    }
 
}



ChartComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  ChartComponent.defaultProps = {
 
  };