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
                    text: 'Java'
                }, {
                	id: 1,
                    text: 'C'
                }, {
                	id: 2,
                    text: 'C++'
                }, {
                	id: 3,
                    text: 'Android'
                }, {
                	id: 4,
                    text: 'Python'
                }, {
                	id: 5,
                    text: '.NET'
                }, {
                	id: 6,
                    text: 'HTML'
                }, {
                	id: 7,
                    text: 'CSS'
                }, {
                	id: 8,
                    text: 'PHP'
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

