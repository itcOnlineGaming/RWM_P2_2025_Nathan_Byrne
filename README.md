Nathan's P2: Yoga Exercises

This component is able to help users for when they are overwhelmed or are stressed. The component will give exercises related to the areas the user are stressed in (head, arm, leg etc.). The component will ask how is the user feeling in X, Y and Z and save those results for the end results. The exercises will rotate to new exercises over a duration that the user entered in. Once the exercises are completed, the component will ask the use the same question before the exercises started and will check if there was any improvement made.

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