/**
 * @fileoverview ActionButton component for interactive buttons in the Todo App.
 * This component provides a reusable button interface with customizable styling
 * and behavior, used primarily in the goal input modal for actions like
 * adding goals or canceling operations.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { Pressable, Text, View } from "react-native";

/**
 * ActionButton component that renders a customizable pressable button.
 * 
 * This is a reusable button component that provides:
 * - Customizable button text content
 * - Configurable press handler function
 * - Flexible styling through props
 * - Consistent text styling with white color and bold weight
 * - Touch interaction through React Native's Pressable component
 * 
 * The component is designed to be flexible and reusable across different
 * parts of the application where styled buttons are needed. It separates
 * the button logic from the styling, allowing for different visual
 * appearances while maintaining consistent behavior.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {string} props.content - The text content to display on the button
 * @param {Function} props.handler - The function to call when the button is pressed
 * @param {Object} props.styles - Custom styles to apply to the button container
 * 
 * @returns {JSX.Element} A pressable button with custom styling
 * 
 * @example
 * // Basic usage with custom handler
 * <ActionButton
 *   content="Save"
 *   handler={() => console.log('Button pressed')}
 *   styles={{ backgroundColor: 'blue', padding: 10 }}
 * />
 * 
 * @example
 * // Add Goal button (as used in GoalInput)
 * <ActionButton
 *   content="Add Goal"
 *   handler={handleAddNewGoal}
 *   styles={actionbButtonsStyles.addGoalButton}
 * />
 * 
 * @example
 * // Cancel button (as used in GoalInput)
 * <ActionButton
 *   content="Cancel"
 *   handler={closeModal}
 *   styles={actionbButtonsStyles.cancelButton}
 * />
 * 
 * @example
 * // Custom styled button
 * const customStyles = {
 *   backgroundColor: '#ff6b6b',
 *   paddingVertical: 12,
 *   paddingHorizontal: 24,
 *   borderRadius: 8,
 *   elevation: 2
 * };
 * 
 * <ActionButton
 *   content="Delete All"
 *   handler={deleteAllItems}
 *   styles={customStyles}
 * />
 */
function ActionButton({ content, handler, styles }) {
    return (
        <Pressable onPress={handler}>
            <View style={styles}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {content}
                </Text>
            </View>
        </Pressable>
    );
}

export default ActionButton;
