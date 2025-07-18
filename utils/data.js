/**
 * @fileoverview Data utilities and constants for the React Native Todo App.
 * This module contains predefined data sets that can be used for testing,
 * development, or as initial data for the application.
 * 
 * @author Todo App Team
 * @version 1.0.0
 * @since 2025
 */

/**
 * A predefined list of programming and technology learning goals.
 * 
 * This array contains a comprehensive list of learning objectives focused on
 * various programming languages, frameworks, and computer science concepts.
 * It can be used for:
 * - Initial application data during development
 * - Testing the goal display and management functionality
 * - Providing users with example goals they can add
 * - Demonstrating the app's capabilities with realistic data
 * 
 * The list includes popular technologies like:
 * - Frontend frameworks (React, React Native)
 * - Programming languages (JavaScript, Python, C, C++)
 * - Development tools and platforms (Expo)
 * - Computer science fundamentals (Data Structures and Algorithms)
 * 
 * @constant
 * @type {string[]}
 * @readonly
 * 
 * @example
 * // Import and use the initial goal list
 * import { initialGoalList } from './utils/data';
 * 
 * // Use as default data
 * const [goals, setGoals] = useState(
 *   initialGoalList.map((text, index) => ({
 *     id: index.toString(),
 *     text: text
 *   }))
 * );
 * 
 * @example
 * // Use for populating a dropdown or suggestion list
 * <Picker>
 *   {initialGoalList.map((goal, index) => (
 *     <Picker.Item key={index} label={goal} value={goal} />
 *   ))}
 * </Picker>
 */
export const initialGoalList = [
    'Learn React',                      // React library for building user interfaces
    'Learn C programming',              // Low-level programming language
    'Learn Python',                     // High-level, versatile programming language
    'Learn javScript',                  // Core web programming language
    'Learn React Native',               // Mobile app development framework
    'Learn React Native Expo',          // React Native development platform
    'Learn C++ Programming',            // Object-oriented extension of C
    'Learn DSA',                        // Data Structures and Algorithms
    'Learn React',                      // React library (duplicate for testing)
    'Learn C programming',              // C programming (duplicate for testing)
    'Learn Python',                     // Python (duplicate for testing)
    'Learn javScript',                  // JavaScript (duplicate for testing)
    'Learn React Native',               // React Native (duplicate for testing)
    'Learn React Native Expo',          // Expo (duplicate for testing)
    'Learn C++ Programming',            // C++ (duplicate for testing)
    'Learn DSA',                        // DSA (duplicate for testing)
    'Learn React',                      // Additional duplicates for
    'Learn C programming',              // comprehensive testing of
    'Learn Python',                     // list handling, scrolling,
    'Learn javScript',                  // and performance with
    'Learn React Native',               // larger datasets
    'Learn React Native Expo',          
    'Learn C++ Programming',            
    'Learn DSA',                        
    'Learn C programming',              
    'Learn Python',                     
    'Learn javScript',                  
    'Learn React Native',               
    'Learn React Native Expo',          
    'Learn C++ Programming',            
    'Learn DSA',                        
    'Learn React',                      
    'Learn C programming',              
    'Learn Python',                     
    'Learn javScript',                  
    'Learn React Native',               
    'Learn React Native Expo',          
    'Learn C++ Programming',            
    'Learn DSA',                        
    'Learn React',                      
    'Learn C programming',              
    'Learn Python',                     
    'Learn javScript',                  
    'Learn React Native',               
    'Learn React Native Expo',          
    'Learn C++ Programming',            
    'Learn DSA',                        
]