const App = {
    data() {
        return {
            tools: {
                'Rock': 'Paper',
                'Paper': 'Scissors',
                'Scissors': 'Rock'
            },
            result: 'Please play!',
            userChoice: '',
            compChoice: ''
        }
    },
    methods: {
        setText(key) {
            this.userChoice = key

            let toolsKeysArr = Object.keys(this.tools)
            this.compChoice = toolsKeysArr[Math.floor(Math.random() * toolsKeysArr.length)]

            if (this.userChoice === this.tools[this.compChoice]) {
                this.result = 'You win'
            } else if (this.compChoice === this.tools[this.userChoice]) {
                this.result = 'Computer wins'
            } else {
                this.result = 'Tie game'
            }
        }
    }
}

Vue.createApp(App).mount('#app')