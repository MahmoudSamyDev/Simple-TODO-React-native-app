/**
 * @fileoverview Entry point for the React Native Todo App using Expo.
 * This file registers the main App component as the root component for the application.
 * It serves as the bridge between the native platform and the React Native JavaScript code.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { registerRootComponent } from 'expo';
import App from './App';

/**
 * Registers the root component of the application.
 * 
 * The registerRootComponent function from Expo performs the following:
 * - Calls AppRegistry.registerComponent('main', () => App) under the hood
 * - Ensures proper environment setup whether running in Expo Go or native build
 * - Handles platform-specific initialization for both iOS and Android
 * - Sets up the React Native bridge for JavaScript-native communication
 * 
 * This is the standard entry point for Expo-managed React Native applications
 * and replaces the traditional AppRegistry.registerComponent call.
 */
registerRootComponent(App);
