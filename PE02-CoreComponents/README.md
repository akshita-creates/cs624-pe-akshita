# Input

The application accepts the user’s favorite course through a TextInput component. The user can enter a course code or course name, such as CS 624. The program also loads icon.png from the assets folder and stores the core, depth, and capstone courses in separate arrays.

# Process

The CoreComponents arrow function uses the useState hook to store the text entered by the user. The map method processes each course array and creates a Text component for every course. ScrollView makes the screen vertically scrollable, while StyleSheet applies reusable formatting to the image, headings, input field, course lists, and favorite-course message.

# Output

The application displays the icon, the course input field, and the user’s entered favorite course. It also shows eight core courses, two depth-of-study courses, and one capstone course. Styled headings separate each section and improve readability, while the scrollable layout allows all course information to be viewed on smaller mobile screens.