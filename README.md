[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2FYOUR_REPO_NAME)

# Drum Machine

A dynamic, interactive drum machine web application built with React. This project is part of the FreeCodeCamp Front End Development Libraries certification.

## Features

- 🥁 Nine drum pads with unique sounds
- 🔊 Adjustable volume control
- 💡 Power toggle switch
- 🎛️ Two different sound banks
- ⌨️ Keyboard support (Q, W, E, A, S, D, Z, X, C)
- 📱 Responsive design with Tailwind CSS
- ♿ Accessibility features included

## Demo

You can try the live demo at: [http://localhost:8080](http://localhost:8080)

## Technologies Used

- React 18
- Tailwind CSS
- Web Audio API
- HTML5 Audio

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/drum-machine.git
cd drum-machine
```

2. Start the development server:
```bash
npx http-server .
```

3. Open your browser and visit:
```
http://localhost:8080
```

## Usage

- Click on the drum pads or use your keyboard (Q, W, E, A, S, D, Z, X, C) to play sounds
- Use the power switch to turn the drum machine on/off
- Adjust the volume using the slider
- Switch between different sound banks using the bank switch

## Project Structure

```
drum-machine/
├── index.html          # Main application file
├── drums/              # Audio files
│   ├── kick.wav
│   ├── snare.wav
│   └── hihat.wav
└── README.md          # Project documentation
```

## Features Implementation

1. **Drum Pads**: Each pad triggers a unique sound and displays the sound name
2. **Volume Control**: Adjustable volume from 0 to 100%
3. **Power Toggle**: Enable/disable the drum machine
4. **Bank Switch**: Toggle between two different sound sets
5. **Display**: Shows currently playing sound or volume level

## Testing

This project includes test cases from FreeCodeCamp's test suite. To run the tests:

1. Load the page in your browser
2. Click the "Run Tests" button in the top-left corner
3. View test results in the test suite overlay

## User Stories

✅ User Story #1: I should be able to see an outer container with id="drum-machine"
✅ User Story #2: Within #drum-machine I can see an element with id="display"
✅ User Story #3: Within #drum-machine I can see 9 clickable drum pad elements
✅ User Story #4: Within each .drum-pad, there should be an HTML5 audio element
✅ User Story #5: When I click on a .drum-pad element, the audio clip should be triggered
✅ User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip should be triggered
✅ User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- FreeCodeCamp for the project requirements and test suite
- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework 