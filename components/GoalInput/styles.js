/**
 * @fileoverview Styles configuration for the GoalInput component and related elements.
 * This module contains all styling definitions for the goal input modal interface,
 * including layout styles, color schemes, and button appearances.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { StyleSheet } from "react-native";

/**
 * StyleSheet object containing styles for the main GoalInput component.
 * 
 * This stylesheet defines the visual appearance and layout of the goal input modal,
 * including the container layout, text input styling, image display, and action
 * button arrangement. The styles implement a cohesive purple theme that matches
 * the main application design.
 * 
 * @constant
 * @type {StyleSheet.NamedStyles}
 */
export const goalInputStyles = StyleSheet.create({
    /**
     * Main container style for the goal input modal.
     * 
     * Creates a full-screen modal layout with:
     * - Vertical column arrangement
     * - Centered content alignment
     * - Purple background matching app theme
     * - Generous spacing between elements
     * - Horizontal padding for content margins
     */
    inputContainer: {
        flex: 1,                        // Full screen coverage
        flexDirection: "column",        // Vertical stacking of elements
        justifyContent: "center",       // Center content vertically
        gap: 40,                        // Large spacing between child elements
        paddingHorizontal: 20,          // Horizontal margins for content
        backgroundColor: "#311b6b",      // Dark purple background
    },
    
    /**
     * Style for the text input field where users enter their goals.
     * 
     * Features:
     * - White border for contrast against dark background
     * - Rounded corners for modern appearance
     * - White text color for visibility
     * - Left padding for comfortable text entry
     */
    textInput: {
        borderColor: 'white',           // White border for contrast
        borderWidth: 2,                 // Prominent border width
        color: '#ffffff',               // White text color
        borderRadius: 20,               // Rounded corners
        paddingLeft: 16,                // Left padding for text positioning
    },
    
    /**
     * Style for the goal icon image displayed at the top of the modal.
     * 
     * Sets a fixed size for the goal icon to ensure consistent
     * appearance across different screen sizes and orientations.
     */
    imageStyle: {
        width: 100,                     // Fixed width for consistency
        height: 100,                    // Fixed height for square aspect ratio
    },
    
    /**
     * Container style for the action buttons (Add Goal and Cancel).
     * 
     * Arranges the action buttons in a horizontal row with space
     * between them and ensures proper vertical alignment.
     */
    actionContainer: {
        flexDirection: "row",           // Horizontal button arrangement
        justifyContent: "space-between", // Space buttons evenly
        alignItems: "center",           // Vertical center alignment
    },
});

/**
 * Style configurations for the ActionButton components used in the GoalInput modal.
 * 
 * This object contains styling definitions for different types of action buttons,
 * each with distinct colors to indicate their purpose:
 * - Add Goal button: Purple theme color for positive action
 * - Cancel button: Red color for cancellation/destructive action
 * 
 * Both button styles share common properties like padding and border radius
 * while differing in background color to provide clear visual distinction.
 * 
 * @constant
 * @type {Object}
 */
export const actionbButtonsStyles = {
    /**
     * Style for the "Add Goal" button.
     * 
     * Uses a purple background color that aligns with the app's theme
     * and indicates a positive, primary action. The rounded corners
     * and padding provide a comfortable touch target.
     */
    addGoalButton: {
        backgroundColor: '#b121fe',     // Purple theme color for primary action
        paddingVertical: 5,             // Top and bottom padding for touch target
        paddingHorizontal: 20,          // Left and right padding for button width
        borderRadius: 10,               // Rounded corners for modern appearance
    },
    
    /**
     * Style for the "Cancel" button.
     * 
     * Uses a red background color to indicate a cancellation or
     * potentially destructive action. Shares the same dimensions
     * and border radius as the add button for visual consistency.
     */
    cancelButton: {
        backgroundColor: '#fa4326',     // Red color for cancel/destructive action
        paddingVertical: 5,             // Top and bottom padding for touch target
        paddingHorizontal: 20,          // Left and right padding for button width
        borderRadius: 10,               // Rounded corners matching add button
    },
}