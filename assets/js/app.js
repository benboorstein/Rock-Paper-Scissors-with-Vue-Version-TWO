const App = {
    data() {
        return {
            tools: {
                'Rock': 'Paper',
                'Paper': 'Scissors',
                'Scissors': 'Rock'
            },
            result: '', // results: 'You win', 'Computer wins', 'Tie game'
            userChoice: '' // the tool the user clicks
        }
    },
    computed: {
        compChoice() {
            let toolsKeysArr = Object.keys(this.tools)
            return toolsKeysArr[Math.floor(Math.random() * toolsKeysArr.length)]
        }
    }
}

Vue.createApp(App).mount('#app')