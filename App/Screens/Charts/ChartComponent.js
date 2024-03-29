import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart, BarChart, Grid } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';
import { GButtonComponent } from '../../CommonComponents';

const data1 = [14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8]
    .map((value) => ({ value }));
const data2 = [24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84]
    .map((value) => ({ value }));
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
const barSVG = { fill: 'green' };
const contentInset = { top: 30, bottom: 30 };
const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#06748C",
        borderRadius: 1,
        height: '15%',
        justifyContent: "center",
        marginBottom: '5%',
        marginTop: '2%',
        width: '50%'
    },
    buttonTextStyle: {
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight: scaledHeight(20),
    },
});

const Labels = ({ slices }) => {
    return slices.map((slice) => {
        const { pieCentroid, data } = slice;
        return (
            <Text
                // key={index}
                x={pieCentroid[0]}
                y={pieCentroid[1]}
                fill="white"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize={15}
                stroke="black"
                strokeWidth={0.2}
            >
                {data.amount}
            </Text>
        );
    });
};

export default class ChartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            barChart: true
        };
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }


    changeChartView = () => {
        const { barChart } = this.state;
        this.setState({ barChart: !barChart });
    }

    getPieChartValueAccessor = ({ item }) =>item.amount

    getBarChartYAccessor = ({ item }) =>item.value


    render() {
        const { barChart } = this.state;

        const amounts = [35, 40, 8, 17];


        const randomColor = () => (`#${(Math.random() * 0xFFFFFF < 0).toString(16)}000000`).slice(0, 7);

        const pieData = amounts
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: randomColor(),
                    onPress: () => { },
                },
                key: `pie-${index}`,
                amount: value
            }));
      

        return (
            !barChart ?
                (
                    <View>
                        <GButtonComponent
                            buttonStyle={styles.buttonStyle}
                            textStyle={styles.buttonTextStyle}
                            buttonText="Back"
                            onPress={this.goBack}
                        />
                        <GButtonComponent buttonText="View in Bar Chart" onPress={this.changeChartView} buttonStyle={styles.buttonStyle} />

                        <PieChart
                            // valueAccessor={({ item }) => item.amount}
                            valueAccessor={this.getPieChartValueAccessor}
                            data={pieData}
                            spacing={0}
                            innerRadius={10}
                            outerRadius={90}
                            labelRadius={30}
                        >
                            <Labels />
                        </PieChart>
                    </View>
                )
                :
                (
                    <View>
                        <GButtonComponent
                            buttonStyle={styles.buttonStyle}
                            textStyle={styles.buttonTextStyle}
                            buttonText="Back"
                            onPress={this.goBack}
                        />

                        <GButtonComponent buttonText="View in Pie Chart"
                            onPress={this.changeChartView}
                            buttonStyle={styles.buttonStyle}
                        />
                        <BarChart
                            data={barData}
                           //  yAccessor={({ item }) => item.value}
                           // svg={{ fill: 'green' }}
                           // contentInset={{ top: 30, bottom: 30 }}
                            // {...this.props}
                             yAccessor={this.getBarChartYAccessor}
                            svg={barSVG}
                            contentInset={contentInset}
                          
                        >
                            <Grid />
                        </BarChart>
                    </View>
                )
        );
    }

}



ChartComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ChartComponent.defaultProps = {
    navigation: {}

};