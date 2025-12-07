# Nathan's P2: Yoga Exercises

## Description
This component is able to help users for when they are overwhelmed or are stressed. The component will ask how is the user feeling and save those results for the end results. The exercises will rotate to new exercises over a duration that the user entered in. Once the exercises are completed, the component will ask the use the same question before the exercises started and will check if there was any improvement made.

## User Tests
1. Create a Session that Includes a Maximum of 7 Exercises.
2. Create a Session with a Duration of 12 Minutes or Over.
3. Create a Session with a Cycle Speed of 30 Seconds.
4. Enter in a Mood Feeling of 4 on the Main Menu
5. Start Session from Main Menu
6. Either: End the Session Early / Wait out the Timer
7. Enter in a Mood Feeling of 9 and Check the Mood Message
8. Either: Replay the same Session / Exit to the Main Menu and Create a new Session with any Configurations

## Features Included
- Packaged Project (Able to be included in other Sveltekit Projects)
- Keyboard Support
- Customisable Settings (Exercises Choice, User Duration, User Cycle Speed, Optional Feedback Question)
- Supporting Images for Exercises
- Replayable Sessions (or Create New Sessions)

## Keybinds
- Main Page:
1. Toggle Exercises: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
2. Adjustable Duration: Q/q (Decrease), E/e (Increase)
3. Adjustable Cycle Speed: A/a (Decrease), D/d (Increase)
4. Start Session: Space

- Session Page:
1. End Session Early: Space

- Results Page:
1. Retry Session: Space
2. Exit to Main Menu: Escape

## Project Structure
```
root/
├── Demo/ (This includes the packages of the Yoga Exercise being used in a real application. This is an example of the packages working.)
│   └── ...
├── packages/ (This is all of the components from the Yoga Exercise P2. They are used in "Demo" as an example of them working.)
│   └── yoga-exercises/
│       ├── src/
│       │   ├── images/
│       │   ├── CycleExercises.svelte
│       │   ├── global.css
│       │   ├── global.d.ts
│       │   ├── NextPageButton.svelte
│       │   ├── Popup.svelte
│       │   ├── SelectExerciseArea.svelte
│       │   ├── SetValue.svelte
│       │   └── store.ts
│       ├── index.ts
│       ├── package.json
│       └── tsconfig.json
├── Yoga/ (This is the development file of P2. Work is completed and tested here before being adding into "packages".)
│   └── src/
│       └── lib/
│           └── components/ (Storybook files can be found here.)
│               ├── CycleExercises.stories.ts
│               ├── NextPageButton.stories.ts
│               ├── Popup.stories.ts
│               ├── SelectExercisesArea.stories.ts
│               ├── SetValue.stories.ts
│               └── ...
└── README.md
```