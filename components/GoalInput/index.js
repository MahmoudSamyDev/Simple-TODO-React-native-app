/**
 * @fileoverview GoalInput component for adding new goals to the Todo App.
 * This component provides a modal-based interface for users to input new goals,
 * featuring a text input field, goal icon, and action buttons for adding or canceling.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { useState } from "react";
import {
    TextInput,
    View,
    Button,
    Modal,
    Image,
} from "react-native";
import ActionButton from './ActionButton';
import { goalInputStyles, actionbButtonsStyles } from './styles';

/**
 * GoalInput component that provides a modal interface for adding new goals.
 * 
 * This component renders a full-screen modal with:
 * - A goal icon image for visual appeal
 * - A text input field for entering goal text
 * - Action buttons for adding the goal or canceling
 * - Slide animation for smooth modal presentation
 * - Purple theme matching the main app design
 * 
 * The component manages its own internal state for the text input while
 * communicating with the parent component through callback functions
 * for goal addition and modal closure.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {Function} props.addGoalHanlder - Callback function to add a new goal
 * @param {boolean} props.visibilty - Controls modal visibility (note: typo in prop name)
 * @param {Function} props.closeModal - Callback function to close the modal
 * 
 * @returns {JSX.Element} A modal interface for goal input
 * 
 * @example
 * // Basic usage in parent component
 * <GoalInput
 *   visibilty={isModalVisible}
 *   addGoalHanlder={(goalText) => addGoal(goalText)}
 *   closeModal={() => setModalVisible(false)}
 * />
 * 
 * @example
 * // Complete integration with state management
 * function App() {
 *   const [modalVisible, setModalVisible] = useState(false);
 *   const [goals, setGoals] = useState([]);
 * 
 *   const addGoal = (text) => {
 *     setGoals(prev => [...prev, { id: Date.now(), text }]);
 *     setModalVisible(false);
 *   };
 * 
 *   return (
 *     <GoalInput
 *       visibilty={modalVisible}
 *       addGoalHanlder={addGoal}
 *       closeModal={() => setModalVisible(false)}
 *     />
 *   );
 * }
 */
function GoalInput({ addGoalHanlder, visibilty, closeModal }) {
    /**
     * Local state for managing the text input value.
     * 
     * This state holds the current value of the text input field and
     * is reset to an empty string after a goal is successfully added.
     * 
     * @type {string}
     */
    const [enteredGoal, setEnteredGoal] = useState("");

    /**
     * Handles text input changes and updates the local state.
     * 
     * This function is called whenever the user types in the text input field.
     * It updates the enteredGoal state with the new text value, enabling
     * controlled input behavior.
     * 
     * @function
     * @param {string} enteredText - The new text value from the input field
     * @returns {void}
     */
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    /**
     * Handles the addition of a new goal and resets the input field.
     * 
     * This function is called when the user presses the "Add Goal" button.
     * It passes the current input value to the parent component's handler
     * and then clears the input field for the next goal entry.
     * 
     * @function
     * @returns {void}
     */
    function handleAddNewGoal() {
        addGoalHanlder(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal
            visible={visibilty}
            animationType="slide"
        >
            <View style={goalInputStyles.inputContainer}>
                {/* Goal icon section - centered at the top */}
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image
                        style={goalInputStyles.imageStyle}
                        source={require("../../assets/goal.png")}
                    />
                </View>
                
                {/* Text input field for goal entry */}
                <TextInput
                    placeholder="Enter Your Goals"
                    placeholderTextColor="white"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    style={goalInputStyles.textInput}
                />
                
                {/* Action buttons container */}
                <View style={goalInputStyles.actionContainer}>
                    <ActionButton 
                        content='Add Goal' 
                        handler={handleAddNewGoal} 
                        styles={actionbButtonsStyles.addGoalButton}
                    />
                    <ActionButton 
                        content='Cancel' 
                        handler={closeModal} 
                        styles={actionbButtonsStyles.cancelButton}
                    />
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;
