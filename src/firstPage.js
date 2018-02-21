import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import GridView from 'react-native-easy-grid-view';
import CardView from 'react-native-cardview';

class Example extends Component {
    constructor(props) {
        super(props);
        var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        var dataVar= [
                {
                	id: 0,
                    text: 'Left Handed R1'
                }, {
                	id: 1,
                    text: 'Right Handed R1'
                }, {
                	id: 2,
                    text: 'Left Handed R2'
                }, {
                	id: 3,
                    text: 'Right Handed R2'
                }, {
                	id: 4,
                    text: 'Left Handed R3'
                }, {
                	id: 5,
                    text: 'Right Handed R3'
                }, {
                	id: 6,
                    text: 'Left Handed R4'
                }, {
                	id: 7,
                    text: 'Right Handed R4'
                }, {
                	id: 8,
                    text: 'Left Handed R5'
                }];
        this.state = {
                 data: dataVar,
                 fields: ds,
                 selectedPosition: -1
        };
    }
    componentDidMount() {
     this.setState({
       fields: this.state.fields.cloneWithCells(this.state.data, 2)
     });
   }
 onHandleItemPress(cell) {
 	var dataClone = this.state.data;
 	dataClone[cell.id] = cell;
    this.setState({ selectedPosition: cell.id, data: dataClone }); 
  }

    renderCel(cell, selectedPos) {
        return (
 <TouchableWithoutFeedback onPress={this.onHandleItemPress.bind(this, cell)}>
        <CardView
           cardElevation={3}
           cardMaxElevation={3}
           cornerRadius={3}
           style={{
            	height: 60,
            	justifyContent: 'center',
            	alignItems: 'center',
            	backgroundColor: '#ffffff' }}>
            	<View 
            	style={{
            		flex: 1,
            		justifyContent: 'center',
            		paddingBottom: 10
            	}}>
                <Text 
                style={{
                color: cell.id === selectedPos ? 'blue' : 'red',
                fontSize: 12,
                textAlign: 'center'
                 }}
                >
                {cell.text}</Text>
                </View>
            </CardView>
            </TouchableWithoutFeedback>
            
        );
    }
 
    render() {
        return (<View>
            <GridView 
            dataSource={this.state.fields}
            spacing={4}
            style={{ padding: 16 }}
            renderCell={(cell)=>{
            	return this.renderCel(cell, this.state.selectedPosition);
            }}	
            />
        </View>);
    }
}
 
module.exports = Example;

