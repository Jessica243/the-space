import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import DetailForm from './DetailForm';
import appStyles from '../../appStyles';

interface RegistrationProps {
  onRegistrationSuccess: () => void,
  onCancel: () => void,
}

interface RegistrationState {
  pageNumber: number;
}

class Registration extends Component<RegistrationProps, RegistrationState> {
  state: RegistrationState = {
    pageNumber: 1,
  };

  style = StyleSheet.create({
    name: {
      fontSize: 16,
      marginBottom: 10,
    },
  });

  getPage = () => {
    switch(this.state.pageNumber){
    case 1:
      return (
        <View>
          <Text style={this.style.name}>Feature 1: Save Driving</Text>
          <Text>Find parkings that match your preferences</Text>
          <View style={appStyles.buttonRow}>
            <Button
              onPress={() => this.props.onCancel()}
              title="Cancel"
            />
            <Button
              onPress={() => this.setState({ pageNumber: 2 })}
              title="Next"
            />
          </View>
        </View>
      );
    case 2:
      return (
        <View>
          <Text style={this.style.name}>Feature 2: Personalized Parking</Text>
          <Text>Find parkings that match your preferences</Text>
          <View style={appStyles.buttonRow}>
            <Button
              onPress={() => this.setState({ pageNumber: 1 })}
              title="Back"
            />
            <Button
              onPress={() => this.setState({ pageNumber: 3 })}
              title="Next"
            />
          </View>
        </View>
      );
    case 3:
      return (
        <View>
          <Text style={this.style.name}>Feature 3: Parking Comparison</Text>
          <Text>Easily compare parking spaces</Text>
          <View style={appStyles.buttonRow}>
            <Button
              onPress={() => this.setState({ pageNumber: 2 })}
              title="Back"
            />
            <Button
              onPress={() => this.setState({ pageNumber: 4 })}
              title="Next"
            />
          </View>
        </View>
      );
    case 4:
      return (
        <DetailForm
          onCancel={this.props.onCancel}
          onSuccess={() => this.setState({ pageNumber: 5 })}
        />
      );
    case 5:
      return (
        <View>
          <Text>You have successfully registered an account!</Text>
          <Button
            onPress={this.props.onRegistrationSuccess}
            title="Back to login"
          />
        </View>
      );
    default: return null;
    }
  };

  render() {
    return (
      <View>
        {this.getPage()}
      </View>
    );
  }
}

export default Registration;
