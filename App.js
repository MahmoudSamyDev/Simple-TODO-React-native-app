/**
 * @fileoverview Main application component for the React Native Todo App.
 * This component manages the overall state and layout of the todo application,
 * including goal management, modal visibility, and the main user interface.
 * 
 * Features:
 * - Add new goals through a modal interface
 * - Display goals in a scrollable list
 * - Delete individual goals
 * - Purple-themed responsive design
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { useState } from "react";
import { StyleSheet, FlatList, View, Button, Modal } from "react-native";
import HorizontalLine from "./components/HorizontalLine";
import GoalCard from "./components/GoalCard";
import GoalInput from "./components/GoalInput/index";
import { StatusBar } from "expo-status-bar";

/**
 * Main App component that serves as the root container for the Todo application.
 * 
 * This component manages:
 * - The list of goals using React state
 * - Modal visibility for adding new goals
 * - Goal creation and deletion functionality
 * - Overall application layout and styling
 * 
 * @component
 * @returns {JSX.Element} The main application interface
 * 
 * @example
 * // This component is typically used as the root component
 * <App />
 */
export default function App() {
    /**
     * State hook for managing the list of goals.
     * Each goal is an object with 'text' and 'id' properties.
     * 
     * @type {Array<{text: string, id: string}>}
     */
    const [listOfGoals, setListOfGoals] = useState([]);
    
    /**
     * State hook for controlling the visibility of the goal input modal.
     * 
     * @type {boolean}
     */
    const [modalIsVisible, setModalIsVisible] = useState(false);

    /**
     * Opens the goal input modal by setting modalIsVisible to true.
     * This function is triggered when the "Add Goals" button is pressed.
     * 
     * @function
     * @returns {void}
     */
    function modalVisibility() {
        setModalIsVisible(true);
    }
    
    /**
     * Closes the goal input modal by setting modalIsVisible to false.
     * This function is called when the user cancels goal input or clicks outside the modal.
     * 
     * @function
     * @returns {void}
     */
    function handleCloseModal() {
        setModalIsVisible(false);
    }
    
    /**
     * Adds a new goal to the goals list and closes the modal.
     * 
     * Creates a new goal object with the entered text and a randomly generated ID,
     * then adds it to the existing goals list using the spread operator to maintain immutability.
     * After adding the goal, automatically closes the modal.
     * 
     * @function
     * @param {string} enteredGoal - The text content of the new goal
     * @returns {void}
     */
    function addNewGoals(enteredGoal) {
        setListOfGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoal, id: Math.random().toString() },
        ]);
        setModalIsVisible(false);
    }
    
    /**
     * Deletes a goal from the goals list by filtering out the goal with the specified ID.
     * 
     * Uses the filter method to create a new array containing all goals except
     * the one with the matching ID, maintaining state immutability.
     * 
     * @function
     * @param {string} goalId - The unique identifier of the goal to delete
     * @returns {void}
     */
    function deleteGoal(goalId) {
        setListOfGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    }
    
    return (
        <>
            {/* Status bar configuration for light content on dark background */}
            <StatusBar style='light'/>
            <View style={styles.appContainer}>
                {/* Primary action button to open the goal input modal */}
                <Button title="Add Goals" onPress={modalVisibility} />
                
                {/* Goal input modal component with necessary props */}
                <GoalInput
                    visibilty={modalIsVisible}
                    addGoalHanlder={addNewGoals}
                    closeModal={handleCloseModal}
                />

                {/* Visual separator between the add button and goals list */}
                <HorizontalLine />
                
                {/* Scrollable list of goals using FlatList for performance optimization */}
                <FlatList
                    data={listOfGoals}
                    keyExtractor={(item) => item.id}
                    renderItem={(itemData) => {
                        return (
                            <GoalCard
                                goal={itemData}
                                onDeleteGoal={deleteGoal}
                            />
                        );
                    }}
                />
            </View>
        </>
    );
}

/**
 * StyleSheet object containing all styles for the App component.
 * 
 * @constant
 * @type {Object}
 */
const styles = StyleSheet.create({
    /**
     * Main container style for the entire application.
     * 
     * Features:
     * - Purple gradient background (#9607e2)
     * - Full height coverage
     * - Consistent padding for content spacing
     * - Gap between child elements for visual separation
     */
    appContainer: {
        paddingVertical: 50,    // Top and bottom padding for status bar and navigation
        paddingHorizontal: 20,  // Left and right padding for content margins
        backgroundColor: "#9607e2",  // Primary purple theme color
        height: "100%",         // Full screen height coverage
        gap: 20,               // Space between child components
    },
    
    /**
     * Legacy text input style (currently unused but kept for reference).
     * This style was likely used before the modal-based input was implemented.
     * 
     * @deprecated This style is no longer used in the current implementation
     */
    textInput: {
        flex: 1,
        borderColor: "grey",
        borderWidth: 2,
        padding: 10,
    },
});
