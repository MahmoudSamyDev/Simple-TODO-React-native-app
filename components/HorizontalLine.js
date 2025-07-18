/**
 * @fileoverview HorizontalLine component for visual separation in the Todo App.
 * This component provides a simple horizontal divider line that can be used
 * to separate different sections of the user interface.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

import { View } from "react-native";

/**
 * HorizontalLine component that renders a horizontal divider line.
 * 
 * This is a simple, reusable UI component that creates a thin horizontal line
 * for visual separation between different sections of the application.
 * The line spans the full width of its container and uses a light gray color
 * that provides subtle separation without being too prominent.
 * 
 * Key features:
 * - Full width (100%) horizontal line
 * - Light gray color for subtle separation
 * - 2px height for visibility without being overwhelming
 * - No props required - completely self-contained
 * - Minimal performance impact due to simple structure
 * 
 * @component
 * @returns {JSX.Element} A horizontal divider line
 * 
 * @example
 * // Basic usage as a section separator
 * <View>
 *   <Header />
 *   <HorizontalLine />
 *   <Content />
 * </View>
 * 
 * @example
 * // Multiple lines for complex layouts
 * <View>
 *   <Section1 />
 *   <HorizontalLine />
 *   <Section2 />
 *   <HorizontalLine />
 *   <Section3 />
 * </View>
 * 
 * @example
 * // Used in the main app between add button and goals list
 * <Button title="Add Goals" onPress={openModal} />
 * <HorizontalLine />
 * <GoalsList />
 */
export default function HorizontalLine() {
    return (
        <View
            style={{
                height: 2,                  // Thin line height for subtle separation
                width: "100%",              // Full width to span container
                backgroundColor: "lightgray", // Light gray color for visibility
            }}
        />
    );
};
