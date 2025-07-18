/**
 * @fileoverview GoalCard component for displaying individual goals in the Todo App.
 * This component renders a single goal item with its text content and a delete button,
 * providing a clean and interactive interface for goal management.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { View, Text, StyleSheet, Pressable } from "react-native";

/**
 * GoalCard component that displays an individual goal with delete functionality.
 * 
 * This component renders a goal as a card with:
 * - Goal text content displayed on the left
 * - Delete button positioned on the right
 * - Blue color scheme with rounded corners
 * - Hover/press interactions for the delete button
 * 
 * The component extracts goal data from the FlatList item structure and
 * provides a callback mechanism for goal deletion through the parent component.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {Object} props.goal - The goal object from FlatList renderItem
 * @param {Object} props.goal.item - The actual goal data
 * @param {string} props.goal.item.text - The text content of the goal
 * @param {string} props.goal.item.id - The unique identifier of the goal
 * @param {Function} props.onDeleteGoal - Callback function to handle goal deletion
 * 
 * @returns {JSX.Element} A styled goal card with delete functionality
 * 
 * @example
 * // Used within a FlatList renderItem function
 * <FlatList
 *   data={goals}
 *   renderItem={(itemData) => (
 *     <GoalCard
 *       goal={itemData}
 *       onDeleteGoal={handleDeleteGoal}
 *     />
 *   )}
 * />
 * 
 * @example
 * // Manual usage with goal object
 * <GoalCard
 *   goal={{
 *     item: {
 *       id: "1",
 *       text: "Learn React Native"
 *     }
 *   }}
 *   onDeleteGoal={(id) => console.log('Delete goal:', id)}
 * />
 */
export default function GoalCard({ goal, onDeleteGoal }) {
    /**
     * Extracts the goal text from the nested goal object structure.
     * The goal prop comes from FlatList's renderItem, which wraps
     * the actual data in an 'item' property.
     * 
     * @type {string}
     */
    const goalName = goal.item.text;
    
    /**
     * Extracts the unique goal identifier from the nested goal object structure.
     * This ID is used for goal deletion and React key props.
     * 
     * @type {string}
     */
    const goalId = goal.item.id;

    /**
     * Handles the goal deletion process by calling the parent's delete function.
     * 
     * This function serves as a bridge between the UI interaction (button press)
     * and the parent component's state management (removing the goal from the list).
     * It passes the goal's ID to the parent's deletion handler.
     * 
     * @function
     * @returns {void}
     */
    function DeleteGoal() {
        onDeleteGoal(goalId);
    }
    
    return (
        <View style={styles.goalCardContainer}>
            {/* Goal text content displayed with white color for contrast */}
            <Text style={styles.goalText}>{goalName}</Text>
            
            {/* Delete button with press interaction */}
            <Pressable onPress={DeleteGoal}>
                <View style={styles.deleteButtom}>
                    <Text style={{ color: "white" }}>Delete</Text>
                </View>
            </Pressable>
        </View>
    );
}

/**
 * StyleSheet object containing all styles for the GoalCard component.
 * 
 * The styling implements a card-based design with:
 * - Blue color scheme (#0067ca background, #003e79 border)
 * - Rounded corners for modern appearance
 * - Horizontal layout with space between text and button
 * - Red delete button (#6a1304) for clear action indication
 * 
 * @constant
 * @type {Object}
 */
const styles = StyleSheet.create({
    /**
     * Main container style for the goal card.
     * 
     * Creates a horizontal card layout with:
     * - Blue background and darker blue border
     * - Rounded corners (20px radius)
     * - Padding for content spacing
     * - Flexbox layout for proper alignment
     * - Bottom margin for separation between cards
     */
    goalCardContainer: {
        borderColor: "#003e79",         // Dark blue border color
        borderWidth: 3,                 // Prominent border width
        marginBottom: 10,               // Space between goal cards
        borderRadius: 20,               // Rounded corners for modern look
        paddingVertical: 10,            // Top and bottom padding
        paddingLeft: 10,                // Left padding for text content
        backgroundColor: "#0067ca",      // Primary blue background
        flexDirection: "row",           // Horizontal layout
        justifyContent: "space-between", // Space between text and button
        alignItems: "center",           // Vertical center alignment
        paddingHorizontal: 10,          // Consistent horizontal padding
    },
    
    /**
     * Style for the goal text content.
     * 
     * Simple white text color for good contrast against
     * the blue background of the card.
     */
    goalText: {
        color: "white",                 // White text for contrast
    },
    
    /**
     * Style for the delete button container.
     * 
     * Creates a rounded, red button with:
     * - Red background for danger/delete action
     * - Rounded appearance (40px radius)
     * - Fixed width for consistency
     * - Centered text alignment
     * - Padding for touch target size
     */
    deleteButtom: {
        borderRadius: 40,               // Highly rounded for pill shape
        backgroundColor: "#6a1304",      // Dark red for delete action
        width: 70,                      // Fixed width for consistency
        flexDirection: "row",           // Enable text centering
        justifyContent: "center",       // Center the text horizontally
        paddingVertical: 5,             // Top and bottom padding for touch target
    },
});
