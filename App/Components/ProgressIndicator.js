import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, ActivityIndicator } from 'react-native'
import I18n from 'react-native-i18n'
import HideableView from 'react-native-hideable-view'
import styles from './Styles/ProgressIndicatorStyle'

export default class ProgressIndicator extends Component {
  // Prop type warnings
  static propTypes = {
    show: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  // Defaults for props
  static defaultProps = {
    show: false,
    text: I18n.t('loading')
  }

  render () {
    const { show, text, style } = this.props
    return (
      <HideableView style={[styles.messageBox, style]} visible={show} removeWhenHidden>
        <ActivityIndicator size='large' color={'#000000'} />
        <Text style={styles.messageText}>{text}</Text>
      </HideableView>
    )
  }
}
