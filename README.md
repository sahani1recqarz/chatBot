# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Chat Interface Application

This repository contains a dynamic and responsive chat interface built with React, Vite, Tailwind CSS, and React Icons. The project supports various features such as user and bot messaging, session persistence, accessibility, and efficient handling of large message datasets.

## Features

### Layout Design
- **Header**: A fixed header at the top of the interface.
- **Scrollable Chat Area**: Displays chat messages with smooth scrolling for long conversations.
- **Input Area**: A fixed input area at the bottom for composing messages.

### Message Design
- **User & Bot Messages**: Distinct styles for user and bot messages.
- **Visual Indicator**: An icon displayed alongside bot messages.
- **Timestamps**: Hover to display detailed timestamps for messages.

### Functionalities
- **Multi-line Input**: Compose multi-line messages with a text area.
- **Send Message**: Send messages using the "Enter" key or a button.
- **Dynamic Updates**: Messages are dynamically appended to the chat area.
- **Error Handling**: Retry options for message delivery failures.
- **Typing Indicator**: Shows when the bot is typing.
- **Session Persistence**: Save and load chat history using LocalStorage.
- **Auto-scroll**: Automatically scrolls to the latest message unless the user is scrolling back.

### Accessibility
- Keyboard navigation for all interactive elements.
- Screen reader compatibility with appropriate ARIA attributes.
- Focus management for a seamless user experience.

### Performance
- Responsive design for various devices and screen sizes.
- Optimized for large datasets to ensure smooth performance.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and optimized production builds.
- **Tailwind CSS**: For styling the interface.
- **React Icons**: For adding visual indicators.
- **LocalStorage**: For session persistence.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-interface.git
   cd chat-interface
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Usage

1. Type your message in the input area.
2. Press "Enter" or click the send button to send the message.
3. View user and bot messages with timestamps and indicators.
4. Chat history will be saved automatically and loaded on refresh.

## Folder Structure

```
├── public
├── src
│   ├── components
│   │   ├── ChatArea.tsx
│   │   ├── Header.tsx
│   │   ├── InputArea.tsx
│   │   └── Message.tsx
│   ├── context
│   │   └── ChatContext.tsx
│   ├── hooks
│   │   └── useChat.ts
│   ├── styles
│   │   └── tailwind.css
│   ├── utils
│   │   └── localStorageHelpers.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Implementation Details

- **Dynamic Message Updates**: Messages are stored in React state and updated dynamically using context for scalability.
- **Session Persistence**: Chat history is saved and retrieved using LocalStorage.
- **Error Handling**: Simulates message delivery failures with retry options.
- **Typing Indicator**: Simulates bot typing with a timeout mechanism.
- **Responsive Design**: Tailwind CSS ensures the layout adapts to different screen sizes seamlessly.

## Assumptions
- Bot responses are simulated for demonstration purposes.
- Error scenarios are artificially introduced for testing retry functionality.

## Accessibility Considerations
- ARIA roles and labels are implemented for screen readers.
- Keyboard focus moves logically between interactive elements.
- Multi-line input supports keyboard navigation.

## Screenshots
Include screenshots or a link to a live demo here.

![image](https://github.com/user-attachments/assets/a5e2a25e-55d4-4842-a254-290a7575a28e)

![image](https://github.com/user-attachments/assets/79ee44f8-fce3-48ee-9b5b-aaa370fb435e)



## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or feedback, please contact [your-email@example.com].
